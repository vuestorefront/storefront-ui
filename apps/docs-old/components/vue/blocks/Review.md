---
blockCount: 2
repoPath: /blocks/Review.md
layout: DefaultLayout
hideBreadcrumbs: true
description: Block for displaying user opinion.
hideToc: true
---
# Review

{{ $frontmatter.description }}

## With Avatar

Basic Review usage with avatar and [Rating](/vue/components/rating.html) base component.

<Showcase showcase-name="Review/WithAvatar" style="min-height:220px">

<<<../../preview/nuxt/pages/showcases/Review/WithAvatar.vue

</Showcase>

## Truncate/show more

When description is too long we can truncate it for certain count characters.

<Showcase showcase-name="Review/ShowMore" style="min-height:360px">

<<<../../preview/nuxt/pages/showcases/Review/ShowMore.vue

</Showcase>
