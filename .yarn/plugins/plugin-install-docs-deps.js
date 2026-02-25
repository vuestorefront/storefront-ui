const { execSync } = require('node:child_process');
const { resolve, join } = require('node:path');

const pluginName = 'plugin-install-docs-deps';
const projectRoot = resolve(__dirname, '..', '..');

module.exports = {
  name: pluginName,
  factory: () => ({
    hooks: {
      afterAllInstalled(_, context) {
        if (context?.report?.configuration?.projectCwd === projectRoot) {
          try {
            execSync('yarn install', { cwd: join(projectRoot, 'apps', 'docs', 'components'), stdio: 'inherit' });
          } catch (error) {
            console.error('Failed to run yarn install in apps/docs/components:', error);
            process.exit(1);
          }
        }
      },
    },
  }),
};