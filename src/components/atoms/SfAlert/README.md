# SfAlert

Component for displaying in-app messages.

![Alert](https://user-images.githubusercontent.com/33127342/55155868-ba88a500-5158-11e9-94f4-3cd787e5c1b4.png "Alert")

## Props

- `message` - for setting default value of message
- `type` - defines alert type, default "alert"
- `icon` - if string passed it is used as src to icon if boolean, shows default icon or not

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
- [HTML template](https://github.com/DivanteLtd/storefront-ui/tree/master/src/components/atoms/SfAlert/SfAlert.html)
