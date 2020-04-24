"use strict";

const { spawnSync } = require("child_process");

const TEMPLATE_LOG_ENTRY = `* ([\`[[commit-hash]]\`](https://github.com/DivanteLtd/storefront-ui/commit/[[commit-hash]])) [[commit-msg]]`;
const TEMPLATE_HEADINGS = new Map([
  ["feat", "✨ NEW FEATURES"],
  ["BREAKING CHANGE", "💥 BREAKING CHANGES"],
  ["fix", "🐛 FIXES"],
  ["refactor", "♻️ REFACTOR"],
  ["docs", "📝 DOCS"],
  ["_other", "🔔 Other Noteworthy Goodies"]
]);
const TEMPLATE = `# 💚 Storefront UI Newsletter [[date]] 💚

<!-- Preamble -->

[[log-entries]]

<!-- Epilogue -->
`;
const FILTER_ENTRIES = [
  "chore(release)",
  "merge branch",
  "merge remote",
  "revert"
];

const escapedFilters = FILTER_ENTRIES.map(filter =>
  filter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
);

function createNewsletter() {
  const shortDate = new Date().toDateString().substring(4);
  let output = TEMPLATE.replace("[[date]]", shortDate);

  const gitOptions = process.argv.slice(2);
  const gitLog = runGitLog(gitOptions);
  const entries = gitLog.split(/\r?\n/);
  const filteredEntries = filterEntries(entries);
  const groupedEntries = groupEntries(filteredEntries);

  const usedHeadings = [...TEMPLATE_HEADINGS.values()].filter(heading =>
    groupedEntries.has(heading)
  );

  let entriesWithHeadings = "";
  for (let headingTitle of usedHeadings) {
    const entriesInGroup = groupedEntries.get(headingTitle);
    const formattedEntries = formatEntries(entriesInGroup).join("\n");
    entriesWithHeadings += `## ${headingTitle}\n${formattedEntries}\n\n`;
  }
  entriesWithHeadings = entriesWithHeadings.trim();

  output = output.replace("[[log-entries]]", entriesWithHeadings);
  console.log(output);
}

function runGitLog(gitOptions) {
  const processOutput = spawnSync("git", [
    "log",
    "--oneline",
    "--no-decorate",
    "--no-merges",
    ...gitOptions
  ]);
  if (processOutput.stderr.length) {
    throw new Error(
      `'git log' failed. stderr: ${processOutput.stderr.toString()}`
    );
  }
  return processOutput.stdout.toString().trim();
}

function filterEntries(entries) {
  const filterRegExp = new RegExp("(" + escapedFilters.join(")|(") + ")", "i");
  return entries.filter(entry => !filterRegExp.test(entry));
}

function groupEntries(filteredEntries) {
  const fallbackGroup = TEMPLATE_HEADINGS.get("_other");
  const groups = new Map();
  for (const entry of filteredEntries) {
    const [, subject] = entry.split(/[a-f0-9]+ (.*?)[:(]/i);
    const group = TEMPLATE_HEADINGS.get(subject) || fallbackGroup;
    const groupEntries = groups.get(group) || [];
    groupEntries.push(entry);
    groups.set(group, groupEntries);
  }
  return groups;
}

function formatEntries(entries) {
  return entries.map(entry => {
    const [, commitHash, commitMsg] = entry.split(/([a-f0-9]+) (.+)/i);
    return TEMPLATE_LOG_ENTRY.replace(/\[\[commit-hash]]/g, commitHash)
      .replace("[[commit-msg]]", commitMsg)
      .replace(/\s{2,}/g, " ");
  });
}

module.exports = {
  createNewsletter
};

if (require.main === module) {
  createNewsletter();
}
