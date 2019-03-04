# Contribution rules

**Important note** these are temporary contribution rules just for the time of moving designs into Vue components.

# Common rules for components

### General rules

1. Each component should be divided into 3 parts. Each of the parts should be named the same as component and it's folder:
  - Component.html -> markup (don't use `@`, `:` shorthands since they are not parsed by `html-loader`)
  - Component.scss ->  styles for the component
  - Component.ts -> component instance
  - Component.vue -> whole component using above partials. It should look like this:
````html
<script>
import template from './Component.html'
import instance from './Component.ts'

export default {
  template,
  ...instance
}
</script>

<style lang="scss">
@import '~./Component.scss';
</style>
````

### Template

1. We use slots over props for content composition. If slots are overcomplicating the compoennt usage then it's ok to use props (for example to define background colors/images etc)
.

### Component CSS 

1. Use BEM methodology as naming convention.
2. Don't use scoped styles.
3. Make use of global css vars for customizable parts
