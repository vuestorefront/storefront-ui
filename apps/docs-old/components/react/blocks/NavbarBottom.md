---
blockCount: 2
repoPath: /blocks/blocks/NavbarBottom.md
layout: DefaultLayout
hideBreadcrumbs: true
description: NavbarBottom block is the navigation element used in mobile view.
hideToc: true
---
# NavbarBottom

{{ $frontmatter.description }}

::: tip You can make the navbar items links
Each item in the navbar is an [`SfButton`](../components/button) component. This means that you can make each item a link by using the `as` prop to make it an `a`, `NextLink`, or any other element/component. [Learn more about this usage in the component documentation.](../components/button#link-as-a-button)

```html
<SfButton as="a" href="#">
  Will render as an anchor tag
</SfButton>
```

:::


## NavbarBottom with white background

<Showcase showcase-name="NavbarBottom/NavbarBottom" no-paddings style="min-height:200px">

<<<../../preview/next/pages/showcases/NavbarBottom/NavbarBottom.tsx#source

</Showcase>

## NavbarBottom with filled background

<Showcase showcase-name="NavbarBottom/NavbarBottomFilled" no-paddings style="min-height:200px">

<<<../../preview/next/pages/showcases/NavbarBottom/NavbarBottomFilled.tsx#source

</Showcase>
