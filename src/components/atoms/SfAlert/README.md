# SfAlert

Component for displaying in-app messages.

## HTML Template

````html
<div class="sf-alert" :class="`sf-alert--${type}`">
    <slot name="icon" :icon="icon">
        <img :src="iconSrc" class="sf-alert__icon" v-if="icon">
    </slot>
    <slot name="message" :message="message">
        <p class="sf-alert__text"  v-if="message">{{ message }}</p>
    </slot>
    <slot />
</div>
````

## Props

- `message` - for setting default value of message
- `type` - defines alert type, default "alert"
- `icon` - if string passed it's used as src to icon if boolean, shows default icon or not

## Slots

- `message` - slot for message
- `icon` - slot for icon replacement
- `default` - slot for custom content

## SCSS variables

- `$sf-alert-padding` (0.625rem)
- `$sf-alert-text-font-size` (0.875rem)
- `$sf-alert-text-margin` (0) 

- `$sf-alert__text-font-size` (0.875rem)
- `$sf-alert__text-margin` (0)

- `$sf-alert__icon-padding-right` (0.625rem)

- `$sf-alert--info-background-color` ($c-yellow-secondary) - color for alert background
- `$sf-alert--info-color` ($c-yellow-primary) - color for text and icon

- `$sf-alert--warning-background-color` ($c-pink-secondary) - color for alert background
- `$sf-alert--warning-color` ($c-pink-primary) - color for text and icon

- `$sf-alert--alert-background-color` ($c-blue-secondary) - color for alert background
- `$sf-alert--alert-color` ($c-blue-primary) - color for text and icon

## CSS Modifiers

- `.sf-alert--info` - sets yellow color for alert
- `.sf-alert--warning` - sets pink color for alert
- `.sf-alert--alert` - sets blue color for alert

## Source files and Storybook demo

- [@/src/components/atoms/SfAlert](https://github.com/DivanteLtd/storefront-ui/tree/master/src/components/atoms/SfAlert)
