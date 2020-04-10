<!-- eslint-disable prettier/prettier -->
<template>
  <client-only>
    <markdown>
      # This is a heading ## This is a sub-heading ### Here are some bullets: *
      Bullet 1 * Bullet 2 * Bullet 3 ### Here is a component:

      <logo></logo>

      Text can be bolded with HTML ```
      <b></b>
      ``` tags:
      <b>BOLD</b>
      text Or we can use markdown with double asterisks: **BOLD** text This is a
      table:
      <div style="width: 50%;">
        | Tables | Are | Cool | | ------------- |:-------------:| -----:| | col
        3 is | right-aligned | $1600 | | col 2 is | centered | $12 | | zebra
        stripes | are neat | $1 |
      </div>
    </markdown>
  </client-only>
</template>

<script>
// import Logo from '@/components/Logo'
// export default {
//   components: { Logo }
// }
</script>
