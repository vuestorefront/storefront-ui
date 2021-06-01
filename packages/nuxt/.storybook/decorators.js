import SfCheckbox from "../../src/components/atoms/SfCheckbox/SfCheckbox.vue";

/**
 * Add CSS styles to the component.
 * @param {string} style - CSS style to add to the component
 * @returns {function(): {template: string}} DecoratorFunction for a Vue component with the added
 *          style definitions.
 */
export function withCustomStyle(style = "") {
  return () => ({
    template: `<story style="${style}" />`
  });
}

/**
 * Add a margin to the component.
 * Usage info: If you add the function (without calling it), the default value will be used. You can
 * call the function with the "margin" param to set a custom value.
 * @param {string} [margin=1rem] - The CSS margin value
 * @returns {(function(): {template: string})|{template: string}} DecoratorFunction for a Vue
 *          component with an added wrapper having the specified margin.
 */
export function withMargin(margin = "1rem") {
  // if the decorator is added without a function call, execute it here
  if (typeof margin !== "string") {
    return withCustomStyle("margin: 1rem")();
  }
  return withCustomStyle("margin: " + margin);
}

/**
 * Add a maxWidth style to the component.
 * @param {string} maxWidth - value for CSS "max-width" property
 * @returns {function(): {template: string}} DecoratorFunction for a Vue component with the added
 *          maxWidth property.
 */
export function withMaxWidth(maxWidth = "") {
  return withCustomStyle("max-width: " + maxWidth);
}

/**
 * Add horizontal auto-margin as CSS styles to the component.
 * This is for centering block components.
 * Usage info: This decorator is executed directly, so add only the function, do not call it and add
 * its return type.
 * @returns {{template: string}} DecoratorFunction for a Vue component with the added auto-margin
 *          style.
 */
export function withCenteredStyle() {
  return withCustomStyle("margin-left: auto; margin-right: auto")();
}

/**
 * Add a container the story is wrapped in.
 * @param {string} htmlElement - The HTML element type (e.g. "div")
 * @param {Object.<string, string>} attributes - Object with key-value pairs of attribute names and
 *        values (e.g. {style: "border: 1px solid", disabled: ""})
 * @returns {function(): {template: string}} DecoratorFunction for a Vue component with a Storybook
 *          story wrapped in the defined container.
 */
export function withContainer(htmlElement = "div", attributes = {}) {
  let attributesString = "";
  for (const [attrName, attrValue] of Object.entries(attributes)) {
    if (attrValue) {
      attributesString += `${attrName}="${attrValue}" `;
    } else {
      attributesString += `${attrName}`;
    }
  }
  return () => ({
    template: `<${htmlElement} ${attributesString}><story /></${htmlElement}>`
  });
}

/**
 * Add a container the story is wrapped in and add "text-align: center" to it.
 * This is for centering inline components.
 * Usage info: This decorator is executed directly, so add only the function, do not call it and
 * add its return type.
 * @returns {{template: string}} DecoratorFunction for a Vue component with an added wrapper being
 *          centered.
 */
export function withCenteredContainer() {
  return withContainer("div", { style: "text-align: center" })();
}

/**
 * Add a SfCheckbox next to the component which toggles a boolean data value of the component.
 * Initial state: checked/true. Has to be first decorator.
 * @param {string} dataKey - The data key of the boolean attribute to toggle
 * @param {string} [eventName="close"] - The event name which will be listened to
 * @returns {function(): {template: string, components: Object, computed: Object, data: function()}}
 *          DecoratorFunction for a Vue component with a checkbox toggle for a data attribute.
 */
export function withDataToggle(dataKey, eventName = "close") {
  return () => ({
    template: `
      <div>
        <SfCheckbox v-model="checked" value="${dataKey}" name="${dataKey}" label="data: ${dataKey}" style="width: 12rem; position: absolute; left: 0; right: 0; top: 50%; margin: auto" />
        <story :${dataKey}="${dataKey}" @${eventName}="${dataKey} = false" />
      </div>`,
    components: { SfCheckbox },
    computed: {
      [dataKey]: {
        get() {
          return this.checked.includes(dataKey);
        },
        set(value) {
          this.checked = value ? [dataKey] : [];
        }
      }
    },
    data() {
      return {
        checked: [dataKey]
      };
    }
  });
}

/**
 * Add a SfCheckbox next to the component which toggles the value of the "visible" data attribute of
 * the component.
 * Usage info: This decorator is executed directly, so add only the function, do not call it and add
 * its return type.
 * @returns {{template: string, components: Object, computed: Object, data: (function())}}
 *          DecoratorFunction for a Vue component with a checkbox toggle for the "visible" data
 *          attribute.
 */
export function withVisibilityToggle() {
  return withDataToggle("visible")();
}

/**
 * Create a mixin which provides a "computed" getter and setter for the "dataKey". The getter
 * returns the value from the $attrs of the component. The setter $emits the event "eventName".
 * This mixin can be used in a story which uses a data toggle as the one provided by
 * "withDataToggle".
 * @param {string} dataKey - The data key for which this mixin provides getters and setters
 * @param {string} [eventName="close"] - The event name which will be emitted setter invocation
 * @returns {{computed: {}}} A Vue mixin for stories which need a computed value for data toggles.
 */
export function dataToggleMixin(dataKey, eventName = "close") {
  return {
    computed: {
      [dataKey]: {
        get() {
          return this.$attrs[dataKey];
        },
        set() {
          this.$emit(eventName);
        }
      }
    }
  };
}

/**
 * Same as "dataToggleMixin('visible')".
 * @type {{computed: {}}}
 */
export const visibilityToggleMixin = dataToggleMixin("visible");
