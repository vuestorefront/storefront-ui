# Generic

## Inject framework specyfic code to component

!!! Currently this can not be implemented in mitosis html/template code. !!!

Use `/* IF-* */` `/* ENDIF-* */` magic comments to specify framework specyfic code, for example

```js
function handler() {
  /* IF-vue */
  state.$emit('input', state.value); // only in Vue component, remove from other frameworks
  /* ENDIF-vue */

  /* IF-react */
  state.handleEvent(); // React only code
  /* ENDIF-react */

  console.log('Log handler!'); // always include
}
```

Check out `mitosis.config.js` file to edit/discover valid framework tags.

# Vue

## v-model binding

Bind v-model inside mitosis component

example

1. Create getter method that returns an getter/setter object - name variable with `$vueProxy` prefix

```js
const state = useState({
  get $vueProxyValue() {
    return {
      get: function () {
        return props.modelValue;
      },
      set: function (value) {
        state.$emit('update:modelValue', value); // $emit does not exists in component's state object, this code will be stripped out from React /other frameworks files
      },
    };
  },
});

```

2. bind `v-model` to proxy getter in `tsx` template

```jsx
return (
  /* ... */
  <input
    v-model="$vueProxyValue"
    
  />
)
```

# React

TBD