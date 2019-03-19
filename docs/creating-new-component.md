# How to create new Storefront UI component

At this point I assume you are already familiar with composition rules and know how to work with our Figma designs.


### Start with template

If you're creating a new component start with copying a template folder ([`src/components/template`](https://github.com/DivanteLtd/storefront-ui/tree/master/src/components/template)) and renaming it. It contains a starting boilerplate that'll help you create a componentnt in standarized way and save a lot of work.

Depending on what type of component you're creating place it in appropiate subfolder of `src/components` according to [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) rules and design. 

Then rename the folder, CSS classes and component name. At this point you should have properly created component.

If you want to test your compoennt just import it inside `App.vue`.

### Create proper markup

Start with creating a proper CSS/HTML markup without worrying about the slots and SCSS variables. Use BEM methodology. Once you have semantically correct and good looking component it's time to make it customizable ;)

### Make the content customizable with slots

Now it's time to figure out which content should be customizable. By design try not to pass any content into props - instead use slots. Every text field should be a slot. Take a look at [this](https://github.com/DivanteLtd/storefront-ui/blob/master/src/components/molecules/SfBanner/SfBanner.html) component for inspiration.
