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
2. use Vsf prefix in component names.
3. Try to make components as customizable as possible but without complicating them. Think about the parts that are usually customized and allow simple way to change their look.

### Template

1. We use slots over props for content composition. If slots are overcomplicating the compoennt usage then it's ok to use props (for example to define background colors/images etc).
2. if some parts of the component can be optional - they should be. Ideally as slots:
````html
<section class="vsf-banner" v-bind:style="stylesObj">
  <h2 class="vsf-banner__subtitle" v-if="$slots.subtitle">
    <slot name="subtitle"></slot>
  </h2>
  <h1 class="vsf-banner__title" v-if="$slots.title">
    <slot name="title"></slot>
  </h1>
  <p class="vsf-banner__description" v-if="$slots.description">
    <slot name="description"></slot>
  </p>
  <slot name="call-to-action"></slot>
</section>
````


### Global CSS
1. TBD

### Component CSS 

1. Use BEM methodology as naming convention.
2. Don't use scoped styles.
3. Make use of global css vars for customizable parts
4. if you're providing props-based styles like `background-image` encapsulate all of them in one object `stylesObj`:
````html
<section class="vsf-banner" v-bind:style="stylesObj">
...
</section>
5. Don't use any global css rules on component level
6. Add component-specific css variables on top of the component SCSS file. Try to use global CSS rules inside them if possible.
7. Try to base components CSS configuration on SCSS variables instead of requirement for overriding styles.
````
````js
export default {
  name: 'VsfBanner',
  data () {
    return {
      stylesObj: {
        backgroundImage: this.bgImg,
        backgroundColor: this.bgCol === 'default' ? '#F1F2F3' : this.bgCol
      }
    }
  },
  props: {
    bgImg: {
      required: false,
      type: String,
      default: null
    },
    bgCol: {
      required: false,
      type: String,
      default: 'default'
    },
    align: {
      required: false,
      type: String,
      default: 'left'
    }
  }
}
````
5. Don't use any outer positioning for components (like outer margins). The way they're used should be determined in theme.

# How to contribute
1. Make an issue with task name (from Jira).
2. Write the proposed API for slots and props
3. Once it's accepted by @filrak or @patzick make separate branch on your fork with name of the issue.
4. Propose a PR with screenshots of the component.
5. Wait for CR
6. Correct PR after CR
7. Done!
