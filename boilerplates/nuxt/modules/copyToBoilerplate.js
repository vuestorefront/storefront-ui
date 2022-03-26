const fse = require('fs-extra')
const chokidar = require('chokidar')

export default function (moduleOptions) {
  const baseDir = '../../shared'
  const targetDir = this.options.srcDir

  const copyFiles = () => {
    fse.copy(baseDir, targetDir, function (err) {
      if (err) {
        console.log('An error occured while copying the ui folder.')
        return console.error(err)
      }
      console.log('Copy completed!')
    })
  }

  chokidar.watch([baseDir]).on('all', async (event) => {
    if (event === 'add' || event === 'change' || event === 'unlink') {
      await copyFiles()
    }
  })
}
