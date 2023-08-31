import * as fs from 'node:fs'
import { createResolver } from '@nuxt/kit'



export default defineNitroPlugin((nitro: any) => {
// will be configurable in the future
  const defaultPrefix = '<<<'
  const resolver = createResolver(import.meta.url)
  nitro.hooks.hook('content:file:beforeParse', (file: any) => {
    if (file._id.endsWith('.md')) {
      const snippetMatch = file.body.match(new RegExp(`^${defaultPrefix}\\s([^{\\s]+)(?:\\s(.+))?`, 'gm'))

      if (!snippetMatch)
        return

      let modifiedBody = file.body

      for (const snippet of snippetMatch) {
        const [, src, suffix] = snippet.match(new RegExp(`${defaultPrefix}\\s([^{\\s]+)(?:\\s(.+))?`))

        const normalizedSrc = src.replace(/@/g, '.')
        const nameExt = normalizedSrc.split('.').pop().toLowerCase()
 
        const path =           resolver.resolve(normalizedSrc)
     
        console.log(nameExt)
        const isAFile = fs.existsSync(path)
        const escapedSnippet = snippet.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

        if (!isAFile) {
          modifiedBody = modifiedBody.replace(new RegExp(escapedSnippet, 'g'), `🔴 ${normalizedSrc} | Snippet does not exist 🔴`)
        }
        else {
          const content = fs.readFileSync(path, { encoding: 'utf-8' })

          const renderedContent = `\`\`\`${nameExt}\n${content}\n\`\`\``
          

          modifiedBody = modifiedBody.replace(new RegExp(escapedSnippet, 'g'), renderedContent)
        }
      }

      file.body = modifiedBody
    }
  })
})