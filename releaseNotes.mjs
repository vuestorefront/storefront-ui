import { Octokit } from '@octokit/core';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import { toString } from 'mdast-util-to-string';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const OWNER = 'vuestorefront';
const REPO = 'storefront-ui';
const octokit = new Octokit({ auth: process.env['GITHUB_TOKEN'] });

const BumpLevels = {
  dep: 0,
  patch: 1,
  minor: 2,
  major: 3,
};

// Implementation copied from changeset and its generation release notes https://github.com/changesets/action/blob/main/src/utils.ts#L37
function getChangelogEntry(changelog, version) {
  let ast = unified().use(remarkParse).parse(changelog);

  let highestLevel = BumpLevels.dep;

  let nodes = ast.children;
  let headingStartInfo;
  let endIndex;

  for (let i = 0; i < nodes.length; i++) {
    let node = nodes[i];
    if (node.type === 'heading') {
      let stringified = toString(node);
      let match = stringified.toLowerCase().match(/(major|minor|patch)/);
      if (match !== null) {
        let level = BumpLevels[match[0]];
        highestLevel = Math.max(level, highestLevel);
      }
      if (headingStartInfo === undefined && stringified === version) {
        headingStartInfo = {
          index: i,
          depth: node.depth,
        };
        continue;
      }
      if (endIndex === undefined && headingStartInfo !== undefined && headingStartInfo.depth === node.depth) {
        endIndex = i;
        break;
      }
    }
  }
  if (headingStartInfo) {
    ast.children = ast.children.slice(headingStartInfo.index + 1, endIndex);
  }
  return {
    content: unified().use(remarkStringify).stringify(ast),
    highestLevel: highestLevel,
  };
}

const data = await octokit.request(`GET /repos/${OWNER}/${REPO}/commits`, {
  owner: OWNER,
  repo: REPO,
  sha: 'v2',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28',
  },
});

const commitSha = data.data[0].sha;
const commitBody = await octokit.request(`GET /repos/${OWNER}/${REPO}/commits/${commitSha}`, {
  owner: OWNER,
  repo: REPO,
  ref: commitSha,
  headers: {
    'X-GitHub-Api-Version': '2022-11-28',
  },
});

const allChangelogFiles = commitBody.data.files.filter((file) => file.filename.endsWith('CHANGELOG.md'));

if (!allChangelogFiles.length) {
  console.log('No CHANGELOG file has been found');
} else {
  await Promise.all(
    allChangelogFiles.map(async (changelogFile) => {
      const changelogFilePath = changelogFile.filename;
      const updatedPackageDir = changelogFilePath.replace('/CHANGELOG.md', '');
      const packageJsonPath = join(updatedPackageDir, 'package.json');

      const changelogContent = readFileSync(changelogFilePath, 'utf-8');
      const packageJsonContent = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));

      const pkgName = packageJsonContent.name;
      const pkgVersion = packageJsonContent.version;
      const tagName = `${pkgName}@${pkgVersion}`;

      let changelogEntry = getChangelogEntry(changelogContent, pkgVersion);

      try {
        await octokit.request(`POST /repos/${OWNER}/${REPO}/releases`, {
          owner: OWNER,
          repo: REPO,
          tag_name: tagName,
          target_commitish: commitSha,
          name: tagName,
          body: changelogEntry.content,
          draft: false,
          prerelease: pkgVersion.includes('-'),
          generate_release_notes: false,
          headers: {
            'X-GitHub-Api-Version': '2022-11-28',
          },
        });
      } catch (e) {
        console.log(e);
      }

      console.log(`Release notes for ${tagName} has been created 🎉`);
    }),
  );
}
