"use strict";

const { spawnSync } = require("child_process");

const TEMPLATE_LOG_ENTRY = `* ([\`[[commit-hash]]\`](https://github.com/DivanteLtd/storefront-ui/commit/[[commit-hash]])) [[commit-msg]]`;
const TEMPLATE_HEADINGS = new Map([
  ["feat", "✨ NEW FEATURES"],
  ["BREAKING CHANGE", "💥 BREAKING CHANGES"],
  ["fix", "🐛 FIXES"],
  ["refactor", "♻️ REFACTOR"],
  ["docs", "📝 DOCS"],
  ["_other", "🔔 Other Noteworthy Goodies"],
]);
const TEMPLATE = `# 💚 Storefront UI Newsletter [[date]] - [[version]] 💚

<!-- Preamble -->

## ✨ NEW FEATURES

[[features]]

## 💥 BREAKING CHANGES

[[log-entries]]

## 🐛 FIXES
[[fixes]]

## ♻️ REFACTOR
[[chores]]

## 📓 DOCS
[[]]

🔔 Other Noteworthy Goodies
[[]]

<!-- Epilogue -->
`;
const FILTER_ENTRIES = [
  "chore(release)",
  "merge branch",
  "merge remote",
  "revert",
  "linted",
];

const escapedFilters = FILTER_ENTRIES.map((filter) =>
  filter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
);

function createNewsletter() {
  const shortDate = new Date().toDateString().substring(4);
  let output = TEMPLATE.replace("[[date]]", shortDate);

  const entries = runGitLog();
  const groupedEntries = groupEntries(entries);

  const usedHeadings = [...TEMPLATE_HEADINGS.values()].filter((heading) =>
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
  return output;
}

function createLogsWithTemplate(template) {
  const entries = runGitLog();
  const shortDate = new Date().toDateString().substring(4);
  const currentVersion = require("../package.json").version;

  let output = template
    .replace("[[date]]", shortDate)
    .replace("[[version]]", currentVersion);

  const features = [];
  const chores = [];
  const fixes = [];
  const others = [];

  entries.forEach((commit) => {
    const mappings = {
      features: {
        key: "feat",
        regex: /(^feat.*):\s?/,
      },
      chores: {
        key: "chore",
        regex: /(^chore.*):\s?/,
      },
      fixes: {
        key: "fix:",
        regex: /(^fix.*):\s?/,
      },
    };

    const commitType =
      mappings[
        Object.keys(mappings).find((category) =>
          commit.message.startsWith(mappings[category].key)
        )
      ];

    const commitMsg = commitType
      ? commit.message.replace(commitType.regex, "")
      : commit.message;

    const entry = TEMPLATE_LOG_ENTRY.replace(/\[\[commit-hash]]/g, commit.sha)
      .replace("[[commit-msg]]", commitMsg)
      .replace(/\s{2,}/g, " ");

    if (!commitType) {
      others.push(entry);
    } else {
      if (commitType.key === mappings.features.key) {
        features.push(entry);
      } else if (commitType.key === mappings.chores.key) {
        chores.push(entry);
      } else if (commitType.key === mappings.fixes.key) {
        fixes.push(entry);
      }
    }
  });

  output = output
    .replace(
      "[[features]]",
      features.length ? features.filter(Boolean).join("\n") : "N/A"
    )
    .replace(
      "[[chores]]",
      chores.length ? chores.filter(Boolean).join("\n") : "N/A"
    )
    .replace(
      "[[fixes]]",
      fixes.length ? fixes.filter(Boolean).join("\n") : "N/A"
    )
    .replace(
      "[[others]]",
      others.length ? others.filter(Boolean).join("\n") : "N/A"
    );
  return output;
}

function runGitLog() {
  const gitOptions = process.argv.slice(2);
  const processOutput = spawnSync("git", [
    "log",
    "--oneline",
    "--no-decorate",
    "--no-merges",
    ...gitOptions,
  ]);
  if (processOutput.stderr.length) {
    throw new Error(
      `'git log' failed. stderr: ${processOutput.stderr.toString()}`
    );
  }
  const logs = processOutput.output
    .toString("utf8")
    .split(/\r?\n/)
    .map((commit) => {
      const [, sha, message] = commit.split(/([a-f0-9]+) (.+)/i);

      return { sha, message };
    })
    .filter(
      (commit) =>
        Boolean(commit.sha) &&
        !new RegExp("(" + escapedFilters.join(")|(") + ")", "i").test(
          commit.message
        )
    );

  return logs;
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
  return entries.map((entry) => {
    const [, commitHash, commitMsg] = entry.split(/([a-f0-9]+) (.+)/i);
    return TEMPLATE_LOG_ENTRY.replace(/\[\[commit-hash]]/g, commitHash)
      .replace("[[commit-msg]]", commitMsg)
      .replace(/\s{2,}/g, " ");
  });
}

module.exports = {
  createNewsletter,
  createLogsWithTemplate,
};

if (require.main === module) {
  createLogsWithTemplate(TEMPLATE);
}
