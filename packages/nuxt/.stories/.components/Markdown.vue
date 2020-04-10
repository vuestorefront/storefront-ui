<template>
  <div>
    <div style="display:none;" v-markdown="compiled">
      <slot></slot> 
    </div>
    <div v-html="compiled">
    </div>
  </div>
</template>

<script>
import DOMPurify from 'dompurify'
import marked from 'marked'

const renderer = new marked.Renderer();

renderer.table = function(header, body) {
  const hdr = header
    .replace(/align\=\"center\"/g, 'style="text-align: center;"')
    .replace(/align\=\"right\"/g, 'style="text-align: right;"')
  return `<table class="table table-striped">${hdr}${body}</table>`
}

const mdOptions = { renderer }

function compileMD(el, binding, { context }) {
  const input = el.innerHTML.replace(/ {2}/g, '')
  const compiled = marked(input, mdOptions)
  context.compiled = DOMPurify.sanitize(compiled)
}

export default {
  directives: {
    markdown: {
      componentUpdated: compileMD,
      inserted: compileMD
    }
  },
  data() {
    return {
      compiled: ''
    }
  }
}
</script>
