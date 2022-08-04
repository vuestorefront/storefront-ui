const fse = require('fs-extra');
// eslint-disable-next-line import/no-extraneous-dependencies
const chokidar = require('chokidar');

export default function copyToBoilerplate() {
  const baseDir = '../../shared/src';
  const targetDir = this.options.srcDir;

  const copyFiles = async () => {
    try {
      await fse.copy(baseDir, targetDir);
      // eslint-disable-next-line no-console
      console.log('Copy completed!');
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log('An error occured while copying the ui folder.');
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };

  copyFiles();

  chokidar.watch([baseDir], { ignoreInitial: true }).on('all', (event) => {
    if (event === 'add' || event === 'change' || event === 'unlink') {
      copyFiles();
    }
  });
}
