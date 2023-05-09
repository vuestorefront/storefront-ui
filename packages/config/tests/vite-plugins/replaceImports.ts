import { AvailableFrameworks, changeFrameworkPathInImports, removeCode } from '../index';
import type { Plugin } from 'vite';

export default (replaceFramework: AvailableFrameworks) => ({
    // This plugin go through specific imports during bundling and replacing them
    name: 'replace-other-framework-imports',
    enforce: 'pre',
    async transform(code, id) {
      // Alter only packages/sfui/tests directory files
      if (!/\/sfui\/tests\//.test(id)) return { code };

      // if more frameworks we can loop over this regex and remove code from all frameworks
      const REMOVE_REGEX = removeCode(replaceFramework);
      const REGEX_FRAMEWORK = changeFrameworkPathInImports(replaceFramework);

      const changedCode = code
        // 1. Remove all `// react` and `// end react` from code
        .replace(REMOVE_REGEX, '')
        // 2. Find all imports with `/react/` files and replace it to `/vue/` so we would test correct package
        .replace(REGEX_FRAMEWORK, (_match, g1: string, g2: string, g3: string) => {
          return `${g1}/${replaceFramework}/${g3}`;
        });

      return {
        code: changedCode,
      };
    },
  } as Plugin
)
