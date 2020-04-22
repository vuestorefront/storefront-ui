# Import stories to your Storybook

## Required
- @storybook/addon-knobs
- use [StoriesOf API](https://storybook.js.org/docs/formats/storiesof-api/)

## How to use
- Open storybook config file, it can be `config.js` or `preview.js`
- Use [manual loading](https://storybook.js.org/docs/basics/writing-stories/#loading-stories) to add Storefront UI stories to your Storybook. Below, you can find a basic config example:
``` js
//import styles for storefront-ui components
import ‚@storefront-ui/vue/styles.scss’
function loadStories () {
    const stories = []
    // require all stories from @storefront-ui
    const sfui = require(‚@storefront-ui/vue/storiesOf.js’)
    // or selected stories
    const { SfButton, SfAccordion, … } = require(‚@storefront-ui/vue/storiesOf.js’)
    // add it to Array
    Object.keys(sfui).forEach(fname => stories.push(sfui[fname]))
    // add yours stories
    const req = require.context(‚../src’, true, /.stories.js$/)
req.keys().forEach(filename => stories.push(req(filename)))
    return stories
}
configure(loadStories, module)
``` 
- Get images from Storefront UI repository and host it on `/assets/storybook`
## Others
- What's happens when I have the same stories name? Ok, for example, you have stories "Atoms|Buttons" and Storefront UI has is too. If you add to Array Storefront UI stories after yours than at Storybook you see Storefront UI Button.
