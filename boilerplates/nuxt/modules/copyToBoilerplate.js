const chokidar = require('chokidar')
const fse = require('fs-extra')

export default function (moduleOptions) {
  const baseDir = '../../shared'
  const targetDir = this.options.srcDir

  fse.copy(baseDir, targetDir, function (err) {
    if (err) {
      console.log('An error occured while copying the ui folder.')
      return console.error(err)
    }
    console.log('Copy completed!')
  })
}
