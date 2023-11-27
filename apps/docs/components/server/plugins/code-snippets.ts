import * as fs from 'node:fs';
import { createResolver } from '@nuxt/kit';

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

        const path = resolver.resolve(normalizedSrc);

        const isAFile = fs.existsSync(path);
        const escapedSnippet = snippet.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

        const [_, startLineNumber, endLineNumber] = lines ? lines.match(/L(\d+)-L(\d+)/) || [] : [];

        if (!isAFile) {
          modifiedBody = modifiedBody.replace(
            new RegExp(escapedSnippet, 'g'),
            `🔴 ${normalizedSrc} | Snippet does not exist 🔴`,
          );
        } else {
          let content = fs.readFileSync(path, { encoding: 'utf-8' });

          if (startLineNumber && endLineNumber) {
            const lines = content.split('\n');
            content = lines.slice(startLineNumber - 1, endLineNumber).join('\n');
          }

          const renderedContent = `\n\`\`\`${nameExt}\n${content}\n\`\`\`\n`;

          modifiedBody = modifiedBody.replace(new RegExp(escapedSnippet, 'g'), renderedContent);
        }
      }

      file.body = modifiedBody;
    }
  });
});
