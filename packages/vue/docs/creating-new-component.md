# How to create Storefront UI component

At this point I assume you're already familiar with
[composition rules](https://docs.storefrontui.io/component-rules.html)
and know how to
[work with our Figma designs](https://docs.storefrontui.io/creating-new-component.html).

### Start with template

To create a new component you may start with
`npm run create-component` which accepts two arguments,
the first is the
[Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) type,
the second is component name.
When running the command, it will generate boilerplate and help you
create a component in standardized way and save a lot of work.

For example:

```bash
npm run create-component atoms button
npm run create-component molecules input-number
```

The component source files must be placed
inside respective atomic type folder
at `packages/vue/src/{type}/{SfComponent}`.
SCSS file must be placed at `packages/shared/styles/components/{SfComponent}.scss`.
`create-component` script will do that automatically for you.

If you're picking an already existent
component, just follow the tutorial and finish the missing parts.

### Running tests

You should test your component importing it inside `packages/vue/src/Playground.vue`,
then running `npm run serve`.

### Create proper markup

Start with creating a proper CSS/HTML markup
without worrying about the slots and SCSS variables.

Once you have semantically correct and good looking
component it's time to make it customizable.

### Edit styles

Use [BEM methodology](http://getbem.com/)
but try to keep up to 2 BEM levels (elements) at most.

For color modifiers (if it's applied to your component)
you should use common classes, by convention:
`color-primary`, `color-secondary`, `color-info`, `color-success`,
`color-warning`, `color-danger`.

We already have these color helpers declared globally, and it may
work by default for your component, in this case you should just add
these classes as `CSS Modifier` on your component documentation,
without adding new styles for that
([SfButton](https://github.com/DivanteLtd/storefront-ui/blob/master/packages/vue/src/components/atoms/SfButton/SfButton.stories.js)
is an example).

### Make the content customizable with slots

Now it's time to figure out which content should be customizable.
By design try not to pass any content into props - instead use slots.
Every text field should be a slot.
Take a look at
[SfBanner](https://github.com/DivanteLtd/storefront-ui/blob/master/packages/vue/src/components/molecules/SfBanner/SfBanner.html)
component for inspiration.

### Add unit tests

Minimal set of tests contains:

- External API: props, slots, events;
- Internal API: methods;

Some of the most common cases can be found in a
[template](https://github.com/DivanteLtd/storefront-ui/blob/master/packages/vue/scripts/component-template/component.spec.ts).

### Add documentation and stories

Document the components according to
[documentation template](https://github.com/DivanteLtd/storefront-ui/blob/master/packages/vue/scripts/component-template/component.stories.js)
in `packages/vue/scripts/component-template` folder.

### Export components

Add your components code in:

- `packages/vue/js.js` (JS part);
- `packages/vue/html.js` (Template part);
- `packages/vue/index.js` (SfComponent);
