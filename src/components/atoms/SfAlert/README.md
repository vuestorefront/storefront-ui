# SfAlert

Component for display alerts
<!-- Write about general purpose of the component. Include screenshot (to be replaced with a live example once we migrate to vuepress) -->

## HTML Template

<!-- Just paste HTML template. It's much better description than any other code -->

````html
<div class="sf-alert">
    <slot>
        <div class="sf-alert__icon" v-if="displayIcon">
            <slot name="icon" :icon="icon">
               <img :src="icon" alt="" v-if="icon">
               <icon v-else />  
            </slot>
        </div>    
        <slot name="message" :message="message">
            <p class="sf-alert__text"  v-if="message">
                {{ message }}
            </p>
        </slot>
    </slot>
</div>
````

## Props

- `message` - for setting default value of message
- `icon` - url for icon
- `displayIcon` (true) - hides icon

## Slots

- `message` - slot for message
- `icon` - slot for icon replacement
- `default` - slot for custom content

<!-- Describe slots and their purpose -->


## SCSS variables

- `$sf-alert-padding` (0.625rem)

- `$sf-alert__text-font-size` (0.875rem)
- `$sf-alert__text-margin` (0)

- `$sf-alert__icon-padding-right` (0.625rem)
- `$sf-alert__icon-size` (20px)

- `$sf-alert__background-color--info` ($c-yellow-secondary) - color for alert background
- `$sf-alert__color--info` ($c-yellow-primary) - color for text and icon

- `$sf-alert__background-color--warning` ($c-pink-secondary) - color for alert background
- `$sf-alert__color--warning` ($c-pink-primary) - color for text and icon

- `$sf-alert__background-color--alert` ($c-blue-secondary) - color for alert background
- `$sf-alert__color--alert` ($c-blue-primary) - color for text and icon

<!-- Write down SCSS variables available for configuration -->

## CSS Modifiers

- `.sf-alert--info` - sets yellow color for alert
- `.sf-alert--warning` - sets pink color for alert
- `.sf-alert--alert` - sets blue color for alert

<!-- Write down available CSS Modifiers -->

## Source files and Storybook demo

- [@/src/components/atoms/SfAlert](https://github.com/DivanteLtd/storefront-ui/tree/master/src/components/atoms/SfAlert)
