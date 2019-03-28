# SfAlert

Component for display alerts
<!-- Write about general purpose of the component. Include screenshot (to be replaced with a live example once we migrate to vuepress) -->

## HTML Template

<!-- Just paste HTML template. It's much better description than any other code -->

````html
<div class="sf-alert">
    <div class="sf-alert__icon">
        <slot name="icon">
            <!-- icon  -->
        </slot>
    </div>
    <p class="sf-alert__text">
        <slot></slot>
    </p>
</div>
````

## Slots

- `icon` - slot for icon replacement
- `default` - default slot for alert message

<!-- Describe slots and their purpose -->


## SCSS variables


- `$sf-alert__text-font-size` (0.875rem)

- `$sf-alert__icon-padding` (1rem  0.625rem)

- `$sf-alert__background-color--info` ($c-yellow-secondary) - color for alert background
- `$sf-alert__color--info` ($c-yellow-primary) - color for text and icon

- `$sf-alert__background-color--warning` ($c-pink-secondary) - color for alert background
- `$sf-alert__color--warning` ($c-pink-primary) - color for text and icon

- `$sf-alert__background-color--alert` ($c-blue-secondary) - color for alert background
- `$sf-alert__color--alert` ($c-blue-primary) - color for text and icon

<!-- Write down SCSS variables available for configuration -->

## CSS Modifiers

- `sf-alert--info` - sets yellow color for alert
- `sf-alert--warning` - sets pink color for alert
- `sf-alert--alert` - sets blue color for alert

<!-- Write down available CSS Modifiers -->

## Source files and Storybook demo

- absolute link to component folder
- link to storybook