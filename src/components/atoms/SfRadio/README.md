# SfRadio

Component for simple group of radio buttons, pass an array get selected value via v-model

## Props

- `value` - selected option
- `options` - array of objects, keys (label) and (value) are required, more keys are optional

## Events

- `input` - event emmited when option is selected

## Slots 

- `content` - slot for your custom html option structure
- `button` - slot for replacing default checkmark

## CSS Modifiers

- `.sf-radio--align-top` - aligns items of the option to the top
- `.sf-radio--align-bottom` - aligns items of the option to the bottom

<!-- Write down available CSS Modifiers -->

## SCSS variables

- `$sf-radio__checkmark-size` (23px) - size of the checkmark
- `$sf-radio__checkmark-margin` - (10px) margin around checkmark

- `$sf-radio__checkmark-border-width--checked` (9px) - checked radio, ring width
- `$sf-radio__checkmark-border-color--checked` ($c-green-primary) - border color of the checked radio

- `$sf-radio__checkmark-border-width` (1px) - unchecked radio, ring width
- `$sf-radio__checkmark-border-color` ($c-gray-secondary) - border color of the unchecked radio


- `$sf-radio__container-align-items` (center) - container displays as flex, you can customize here how items should be aligned
<!-- Write down SCSS variables available for configuration -->
