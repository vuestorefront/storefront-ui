---
layout: DefaultLayout
hideBreadcrumbs: true
---
# React

## Installation

Install StorefrontUI by running one of the following commands:


```bash
npm install @storefront-ui/react
# yarn add @storefront-ui/react
# pnpm add @storefront-ui/react
```

## Usage

Import any component, enum or any other dependency directly from tree-shakeable `@storefront-ui/react` bundle. In this example we're importing [Alert component](../react/components/alert.html) together with an enum holding it's variants:

```ts
import { VsfAlert, VsfAlertVariants } from '@storefront-ui/react';
```

The line above will import styleless version of the component.

To apply default CSS styling, import the CSS file anywhere in your application:

```ts
import '@storefront-ui/css/storefront-ui.css'
```

Congratulation, you're now able to use StrorefrontUI React components! :tada:

Now [head to the components page](../vue/components.html) to see more how can they be useful for you!

## Our dependencies

```
@storefront-ui/css @storefront-ui/shared classnames jw-paginate tabbable react-use react-transition-group
```
