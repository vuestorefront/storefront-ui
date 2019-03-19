# How to create new Storefront UI component

At this point I assume you are already familiar with composition rules and know how to work with our Figma designs.


### Start with template

If you're creating a new component start with copying a template folder ([`src/components/template`](https://github.com/DivanteLtd/storefront-ui/tree/master/src/components/template)) and renaming it. It contains a starting boilerplate that'll help you create a componentnt in standarized way and save a lot of work.

Depending on what type of component you're creating place it in appropiate subfolder of `src/components` according to [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) rules and design. 

Then rename the folder, CSS classes and component name. At this point you should have properly created component
