# SfOptions

Options selector component can displaying in 3 types, text, color, and image.

- Text options - Desktop

![Text options - Desktop](https://user-images.githubusercontent.com/6861191/56865856-e7043b00-69fc-11e9-9c0a-f19e06336e46.png "Text options - Desktop")

- Text options - Mobile

![Text options - Mobile](https://user-images.githubusercontent.com/6861191/56865870-013e1900-69fd-11e9-9f94-ea3a35d3ddc5.png "Text options - Mobile")

- Color options - Desktop

![Color options - Desktop](https://user-images.githubusercontent.com/6861191/56865874-131fbc00-69fd-11e9-9dca-ed2782eaf1ba.png "Color options - Desktop")

- Color options - Mobile

![Color options - Mobile](https://user-images.githubusercontent.com/6861191/56865879-292d7c80-69fd-11e9-81b6-2adac3f69b1a.png "Color options - Mobile")

- Image options - Desktop

![Image options - Desktop](https://user-images.githubusercontent.com/6861191/56865881-32b6e480-69fd-11e9-8dc0-bc91682d55a3.png "Image options - Desktop")

- Image options - Mobile

![Image options - Mobile](https://user-images.githubusercontent.com/6861191/56865883-3c404c80-69fd-11e9-808d-4f6fd4fe4e9a.png "Image options - Mobile")

## Props
- `options` - set of options to display as `Object[]`
- `type` - type of displaying options as `String`. Available for: `text`, `color`, and `image`. (Default: `text`)
- `label` - label on the top of displaying options as `String`
- `value (v-model)` - the selected option value as `String`

## Slots
- `label` - slot for options label
- `text` - slot for text option
- `color` - slot for color option
- `image` - slot for image option

## CSS Modifiers

- `sf-options__option-text--selected` - sets selected for text option
- `sf-options__option-color--selected` - sets selected for color option
- `sf-options__option-image--selected` - sets selected for image option

## SCSS variables

- `$sf-options__label-font-size` ($font-size-big-mobile)
- `$sf-options__label-margin-bottom` (0.5rem) - margin between label and options

- `$sf-options__transition` (all 0.3s ease-in-out)
- `$sf-options__option-margin` (0.75rem) - margin between options

- `$sf-options__option-size` (2rem) - width and height of option
- `$sf-options-desktop__option-color-size` (1rem) - width and height of color 

- `$sf-options__option-font-size` ($font-size-regular-mobile) - font size of text option
- `$sf-options-mobile__option-text-color` ($c-gray-primary) - color of text option on mobile
- `$sf-options-desktop__option-text-color` ($c-black) - color of text option on desktop
