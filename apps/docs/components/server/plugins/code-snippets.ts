import { createResolver } from '@nuxt/kit';
import * as fs from 'node:fs';
import * as path from 'node:path';

export default defineNitroPlugin((nitro: any) => {
  // will be configurable in the future
  const defaultPrefix = '<<<';
  const resolver = createResolver(import.meta.url);
  nitro.hooks.hook('content:file:beforeParse', (file: any) => {
    if (file._id.endsWith('.md')) {
      const snippetMatch = file.body.match(new RegExp(`^${defaultPrefix}(?:\\s*)([^{\\s]+)`, 'gm'));
      if (!snippetMatch) return;

      let modifiedBody = file.body;

      for (const snippet of snippetMatch) {
        const [, src, suffix] = snippet.match(new RegExp(`${defaultPrefix}(?:\\s*)([^{\\s]+)`));

        const [filename, lines] = src.split('#');

        const normalizedSrc = filename.replace(/@/g, '.');
        const nameExt = normalizedSrc.split('.').pop().toLowerCase();

        let filePath = resolver.resolve(normalizedSrc);
        if (import.meta.env.NODE_ENV === 'prerender') {
          filePath = path.join(path.dirname(import.meta.url), '..', '..', '..', '..', filePath).replace('file:/', '/');
          if (!fs.existsSync(filePath)) {
            filePath = path
              .join(path.dirname(import.meta.url), '..', '..', '..', '..', '..', resolver.resolve(normalizedSrc))
              .replace('file:/', '/');
          }
        }

        const isAFile = fs.existsSync(filePath);
        const escapedSnippet = snippet.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

        const [_, startLineNumber, endLineNumber] = lines ? lines.match(/L(\d+)-L(\d+)/) || [] : [];

        let content = isAFile ? fs.readFileSync(filePath, { encoding: 'utf-8' }) : 'Coming soon...';

        if (startLineNumber && endLineNumber) {
          const lines = content.split('\n');
          content = lines.slice(startLineNumber - 1, endLineNumber).join('\n');
        }

        // only include code inside vscode regions if it exists (// #region name) (// #endregion name)
        const regionMatch = content.match(/\/\/ #region\s(.*)\n([\s\S]*?)\n\/\/\s#endregion\s(.*)/gm);

        // if the region exists, use the content inside the region
        if (regionMatch) {
          content = regionMatch[0]
            .replace(/\/\/ #region\s(.*)\n/, '')
            .replace(/\n\/\/\s#endregion\s(.*)/, '')
            .trim();
        }

        const renderedContent = `\n\`\`\`${nameExt}\n${content}\n\`\`\`\n`;

        modifiedBody = modifiedBody.replace(new RegExp(escapedSnippet, 'g'), renderedContent);
      }

      file.body = modifiedBody;
    }
  });
});
