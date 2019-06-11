# How to create Storefront UI component

At this point I assume you are already familiar with composition rules and know how to work with our Figma designs.


### Start with template

If you're creating a new componet start with `npm run create-component` which accepts two arguments, the first is atomic
type, the second is component name. When running the command, it will generate boilerplate and help you create a component in standarized way and save a lot of work.

For example:
```bash
npm run create-component atoms button
npm run create-component molecules input-number
```

If you're picking already existing just follow the tutorial and finish the missing parts.

Depending on what type of component you're creating place it in appropiate subfolder of `src/components` according to [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) rules and design. 

Then rename the folder, CSS classes and component name. At this point you should have properly created component.

If you want to test your compoennt just import it inside `Playground.vue`.

**IMPORTANT** Currently create-component script will create scss file inside `vue` package. Please move it to `packages/shared/styles/components`. There is an issue to fix this ;)

### Create proper markup

Start with creating a proper CSS/HTML markup without worrying about the slots and SCSS variables. Use BEM methodology. Once you have semantically correct and good looking component it's time to make it customizable.

### Make the content customizable with slots

Now it's time to figure out which content should be customizable. By design try not to pass any content into props - instead use slots. Every text field should be a slot. Take a look at [this](https://github.com/DivanteLtd/storefront-ui/blob/master/src/components/molecules/SfBanner/SfBanner.html) component for inspiration.

### Add unit tests 

Minimal set of tests conteins:

- External API: props, slots, events
- Internal API: methods

Some of the most common cases can be found in a template.

### Add documentation and stories

Document the components according to documentation template in `components/template` folder. In `src/utilities/js-helpers` you can find function `createStorybookTable.js`, as name suggests this function returns html for Storybook table. how to use function:

```javascript
createStorybookTable({
    tableHeadConfig: ['first th', 'second th', 'third th'],
    tableBodyConfig: [
        ['first tr, first td', 'first tr, second td', 'first tr,third td'],
        ['second tr, first td', 'second tr, second td', 'second tr,third td'],
    ]
})
```

### Export comonents

Add your components code in `packages/vue/js.js` (js part), `packages/vue/html.js` (template part) and `packages/vue/index.js` (sfc)