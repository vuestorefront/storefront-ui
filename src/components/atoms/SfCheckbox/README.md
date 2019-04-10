# SfCheckbox

<!-- Write about general purpose of the component. Include screenshot (to be replaced with a live example once we migrate to vuepress) -->

## HTML Template

#### Basic
````html
<sf-checkbox
    id="sf-checkbox-default"
    name="sf-checkbox-default"
    v-model="status"
/>
````

#### Advanced (slots)
````html
<sf-checkbox
    id="sf-checkbox-slots"
    name="sf-checkbox-slots"
    v-model="status"
>
    <template #label>
      <label for="sf-checkbox-slots" class="sf-checkbox__label">
        <span class="sf-checkbox__icon">
          <img
            class="sf-checkbox__icon-svg"
            src="/assets/check.svg"
            alt="Checkbox Icon"
          />
        </span>
        <img src="https://via.placeholder.com/350x60?text=Checkbox+Content+Image" alt="placeholder image" style="display: block;">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dicta ea fugiat maiores non, nulla praesentium similique voluptatum! Aperiam asperiores dolores eius eum impedit minima necessitatibus numquam saepe ullam veritatis!
      </label>
    </template>
</sf-checkbox>
````

## Props

- `finalValue` - Final value 
- `uncheckedValue` - Unchecked value - if the checkbox is unchecked, this is the emitted input value (uncheckedValue), instead of 'value'
- `value` - Input value 
- `id` - Input id 
- `name` - Input name 
- `iconClass` - Class for icon 
- `labelClass` - Class for label 
- `inputClass` - Class for input 

## Slots

- `default` - The default slot is used to fill the label text.
- `label` - To override the entire label section for more control, use this slot.

## Emitted events

- `input` - To emit the "value" or "uncheckedValue" of the checkbox

## SCSS variables

- `$sf-checkbox__margin` ($spacing-medium)
- `$sf-checkbox__line-height` (21px)
- `$sf-checkbox__icon-size` (19px) - Width of the checkbox icon.
- `$sf-checkbox__icon-border-radius` (0) - Border radius of the checkbox icon
- `$sf-checkbox__icon-border` (1px $c-gray-secondary solid) - State Default: Border
- `$sf-checkbox__icon-bg-color` ($c-white) - State Default: BG color
- `$sf-checkbox__icon-svg-width` (9px) - Width of SVG Icon inside the checkbox.
- `$sf-checkbox__icon-svg-height` (7px) - Width of SVG Icon inside the checkbox.
- `$sf-checkbox__icon-transition` ($transition-slide)
- `$sf-checkbox__icon-border--checked` (1px $c-accent-primary solid) - State Checked: Border
- `$sf-checkbox__icon-bg-color--checked` ($c-accent-primary) - State Checked: BG color
- `$sf-checkbox__icon-border--hover` (1px $c-accent-primary solid) - State Hover: Border
- `$sf-checkbox__icon-bg-color--hover` ($c-white) - State Hover: BG color
- `$sf-checkbox__icon-label-spacer` (11px) - User defined space between the checkbox and the label content.
- `$sf-checkbox__label-padding` (0 0 0 $sf-checkbox__icon-size + $sf-checkbox__icon-label-spacer) - Calculated space between the checkbox and the label content.

## Source files and Storybook demo

- [@/src/components/atoms/SfCheckbox](https://github.com/DivanteLtd/storefront-ui/tree/master/src/components/atoms/SfCheckbox)

- template import `@storefrontui/vue/SfCheckbox.html`
- instance import `@storefrontui/vue/SfCheckbox.js`
- scss import `@storefrontui/vue/SfCheckbox.scss`
