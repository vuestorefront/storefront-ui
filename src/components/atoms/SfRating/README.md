# SfRating

<!-- Write about general purpose of the component. Include screenshot (to be replaced with a live example once we migrate to vuepress) -->
Rating component to display star (or other icons) ratings.

## Props

- `max` - maximum rating
- `score` - actual rating score

## Slots

- `iconPositive` - slot for positive icon, repeated (score) times
- `iconNegative` - slot for  negative icon, repeated (max-score) times


## SCSS variables

- `$rating__icon-positive-fill` ($c-green-primary) - positive star icon color
- `$rating__icon-negative-fill` ($c-dark-primary) - negative star icon color
