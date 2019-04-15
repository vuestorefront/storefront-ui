# SfCallToAction

<!-- Write about general purpose of the component. Include screenshot (to be replaced with a live example once we migrate to vuepress) -->

Banner with text and a call to action (as the component name self-explain) element.

## Props

<!--Write down props and their purpose -->

- `title` - Phrase in prominence, should be good for SEO,
placed on H1 tag.

- `description` - Description, placed on p tag.

- `buttonText` - Text placed on the CTA button.

## Slots

<!-- Describe slots and their purpose -->

- `default` - Banner text, should be a short description
or completion for title message.

- `title` - Places the banner title, should contain a
heading tag (H1 by default).

- `description` - Places the description element.

- `action` - Places the action element, contains
a button by default.

## Source files and Storybook demo

- [@/src/components/molecules/SfCallToAction](https://github.com/DivanteLtd/storefront-ui/tree/master/src/components/molecules/SfCallToAction)
- [HTML template](https://github.com/DivanteLtd/storefront-ui/tree/master/src/components/molecules/SfCallToAction/SfCallToAction.html)
