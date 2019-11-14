import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select, object } from "@storybook/addon-knobs";

import SfOptions from "./SfOptions.vue";

storiesOf("Molecules|Options", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    components: { SfOptions },
    props: {
      label: {
        default: text("label (prop)", "Size")
      },
      type: {
        default: select("type (prop)", ["text", "color", "image"], "text")
      },
      options: {
        default: object("options (prop)", {
          text: [
            { value: "xs", text: "XS" },
            { value: "s", text: "S" },
            { value: "m", text: "M" },
            { value: "l", text: "L" }
          ],
          color: [
            { value: "orange", color: "orange" },
            { value: "pink", color: "pink" },
            { value: "yellow", color: "yellow" },
            { value: "blue", color: "blue" },
            { value: "green", color: "green" }
          ],
          image: [
            { value: "logo", image: "/assets/logo.svg" },
            { value: "heart", image: "/assets/heart.svg" },
            { value: "home", image: "/assets/home.svg" },
            { value: "profile", image: "/assets/profile.svg" }
          ]
        })
      }
    },
    data() {
      return {
        value: ""
      };
    },
    template: `<SfOptions
      v-model="value"
      :options="options[type]"
      :type="type"
      :label="label" />`
  }))
  .add("[slot] label", () => ({
    components: { SfOptions },
    props: {
      label: {
        default: text("label (prop)", "Size")
      },
      type: {
        default: select("type (prop)", ["text", "color", "image"], "text")
      },
      options: {
        default: object("options (prop)", {
          text: [
            { value: "xs", text: "XS" },
            { value: "s", text: "S" },
            { value: "m", text: "M" },
            { value: "l", text: "L" }
          ],
          color: [
            { value: "orange", color: "orange" },
            { value: "pink", color: "pink" },
            { value: "yellow", color: "yellow" },
            { value: "blue", color: "blue" },
            { value: "green", color: "green" }
          ],
          image: [
            { value: "logo", image: "/assets/logo.svg" },
            { value: "heart", image: "/assets/heart.svg" },
            { value: "home", image: "/assets/home.svg" },
            { value: "profile", image: "/assets/profile.svg" }
          ]
        })
      }
    },
    data() {
      return {
        value: ""
      };
    },
    template: `<SfOptions
      v-model="value"
      :options="options[type]"
      :type="type"
      :label="label">
      <template #label>
        <!-- slot content -->
      </template>
    </SfOptions>`
  }))
  .add("[slot] text", () => ({
    components: { SfOptions },
    props: {
      label: {
        default: text("label (prop)", "Size")
      },
      type: {
        default: select("type (prop)", ["text", "color", "image"], "text")
      },
      options: {
        default: object("options (prop)", {
          text: [
            { value: "xs", text: "XS" },
            { value: "s", text: "S" },
            { value: "m", text: "M" },
            { value: "l", text: "L" }
          ],
          color: [
            { value: "orange", color: "orange" },
            { value: "pink", color: "pink" },
            { value: "yellow", color: "yellow" },
            { value: "blue", color: "blue" },
            { value: "green", color: "green" }
          ],
          image: [
            { value: "logo", image: "/assets/logo.svg" },
            { value: "heart", image: "/assets/heart.svg" },
            { value: "home", image: "/assets/home.svg" },
            { value: "profile", image: "/assets/profile.svg" }
          ]
        })
      }
    },
    data() {
      return {
        value: ""
      };
    },
    template: `<SfOptions
      v-model="value"
      :options="options[type]"
      :type="type"
      :label="label">
      <template #text>
        <!-- slot content -->
      </template>
    </SfOptions>`
  }))
  .add("[slot] color", () => ({
    components: { SfOptions },
    props: {
      label: {
        default: text("label (prop)", "Size")
      },
      type: {
        default: select("type (prop)", ["text", "color", "image"], "color")
      },
      options: {
        default: object("options (prop)", {
          text: [
            { value: "xs", text: "XS" },
            { value: "s", text: "S" },
            { value: "m", text: "M" },
            { value: "l", text: "L" }
          ],
          color: [
            { value: "orange", color: "orange" },
            { value: "pink", color: "pink" },
            { value: "yellow", color: "yellow" },
            { value: "blue", color: "blue" },
            { value: "green", color: "green" }
          ],
          image: [
            { value: "logo", image: "/assets/logo.svg" },
            { value: "heart", image: "/assets/heart.svg" },
            { value: "home", image: "/assets/home.svg" },
            { value: "profile", image: "/assets/profile.svg" }
          ]
        })
      }
    },
    data() {
      return {
        value: ""
      };
    },
    template: `<SfOptions
      v-model="value"
      :options="options[type]"
      :type="type"
      :label="label">
      <template #color>
        <!-- slot content -->
      </template>
    </SfOptions>`
  }))
  .add("[slot] image", () => ({
    components: { SfOptions },
    props: {
      label: {
        default: text("label (prop)", "Size")
      },
      type: {
        default: select("type (prop)", ["text", "color", "image"], "image")
      },
      options: {
        default: object("options (prop)", {
          text: [
            { value: "xs", text: "XS" },
            { value: "s", text: "S" },
            { value: "m", text: "M" },
            { value: "l", text: "L" }
          ],
          color: [
            { value: "orange", color: "orange" },
            { value: "pink", color: "pink" },
            { value: "yellow", color: "yellow" },
            { value: "blue", color: "blue" },
            { value: "green", color: "green" }
          ],
          image: [
            { value: "logo", image: "/assets/logo.svg" },
            { value: "heart", image: "/assets/heart.svg" },
            { value: "home", image: "/assets/home.svg" },
            { value: "profile", image: "/assets/profile.svg" }
          ]
        })
      }
    },
    data() {
      return {
        value: ""
      };
    },
    template: `<SfOptions
      v-model="value"
      :options="options[type]"
      :type="type"
      :label="label">
      <template #image>
        <!-- slot content -->
      </template>
    </SfOptions>`
  }));
