import { storiesOf } from "@storybook/vue";
import { withKnobs, text } from "@storybook/addon-knobs";
import SfCharacteristic from "@/components/molecules/SfCharacteristic/SfCharacteristic.vue";

storiesOf("Molecules|Characteristic", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      props: {
        color: {
          default: text("color (prop)", "primary")
        },
        size: {
          default: text("size (prop)", "xs")
        },
        iconPath: {
          default: text(
            "path (prop)",
            "M9.00025 1.24309e-05C7.34547 0.00849865 5.76207 0.672852 4.59826 1.84877C3.43445 3.02472 2.78464 4.61405 2.79315 6.26878V9.77605H0.620706C0.277615 9.77605 8.26965e-06 10.0537 8.26965e-06 10.3967V22.8108C-0.00120395 23.0472 0.130938 23.2629 0.341889 23.3696L6.85921 26.5036C8.22062 27.1655 9.81116 27.1655 11.1724 26.5036L17.6581 23.3696C17.8691 23.263 18.0012 23.0472 18 22.8108V10.3967C18 10.2319 17.9345 10.0743 17.8181 9.95788C17.7018 9.8415 17.5442 9.77604 17.3793 9.77604H15.2068V6.26877C15.2153 4.61398 14.5655 3.02467 13.4017 1.84876C12.2379 0.672809 10.6546 0.00847257 8.99974 0L9.00025 1.24309e-05ZM4.03467 6.26878C4.03467 4.49519 4.98148 2.85617 6.51746 1.96888C8.05344 1.08158 9.94712 1.08146 11.483 1.96888C13.019 2.85629 13.9658 4.49531 13.9658 6.26878V9.77605H4.03467V6.26878ZM16.759 22.407L10.6138 25.3869C9.59544 25.8815 8.40494 25.8815 7.38674 25.3869L1.24153 22.4385V11.0173H16.759V22.407Z M9.01975 21.1298C9.22163 21.1298 9.41461 21.0497 9.55711 20.9072C9.69961 20.7647 9.77976 20.5717 9.77976 20.3698V17.3298C9.77976 16.9097 9.43984 16.5698 9.01976 16.5698C8.59969 16.5698 8.25977 16.9097 8.25977 17.3298V20.3698C8.25977 20.5717 8.33992 20.7647 8.48242 20.9072C8.62492 21.0497 8.81789 21.1298 9.01978 21.1298H9.01975Z"
          )
        },
        title: {
          default: text("title (prop)", "Title")
        },
        description: {
          default: text("description (prop)", "Description")
        }
      },
      components: {
        SfCharacteristic
      },
      template:
        '<SfCharacteristic :color="color" :size="size" :path="path" :title="title" :description="description"/>'
    }),
    {
      info: {
        summary: `
            <h2> Description </h2>
            <p>Characteristic component. Place desired content into its named slots.</p>
            <h2> Usage </h2>
            <pre><code>import { SfCharacteristic } from "@storefrontui/vue"</code></pre>
            `
      }
    }
  )
  .add(
    "[slot] icon",
    () => ({
      components: {
        SfCharacteristic
      },
      template: `
      <SfCharacteristic :color="color" :size="size" :path="path" :title="title" :description="description">
      <template v-slot:icon>
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" class="sf-characteristic__icon">
      <path d="M18.9984 5.32429L14.8448 0H4.15359L0 5.32429V20H19L18.9984 5.32429ZM17.3555 4.96661H10.0457V1.10343H14.329L17.3555 4.96661ZM4.66801 1.10343H8.95138V4.96661H1.64154L4.66801 1.10343ZM1.06155 18.8955V6.03711H17.9355V18.8955H1.06155ZM9.49852 8.40898L12.3 11.2335L11.5276 12.0123L10.0143 10.4865V16.2663H8.95132V10.4865L7.43802 12.0123L6.66565 11.2335L9.49852 8.40898Z" fill="#5ECE7B"/>
      </svg>
      </template>
      
      </SfCharacteristic>
    `
    }),
    {
      info: true
    }
  )
  .add(
    "[slot] text",
    () => ({
      components: {
        SfCharacteristic
      },
      template: `
      <SfCharacteristic :color="color" :size="size" :path="path" :title="title" :description="description"><template v-slot:text><h1>All Text</h1></template>
      </SfCharacteristic/>
    `
    }),
    {
      info: true
    }
  )
  .add(
    "[slot] title",
    () => ({
      components: {
        SfCharacteristic
      },
      template: `
      <SfCharacteristic :color="color" :size="size" :path="path" :title="title" :description="description"><template v-slot:title><small>Alternative text</small></template></SfCharacteristic/>
    `
    }),
    {
      info: true
    }
  )
  .add(
    "[slot] description",
    () => ({
      components: {
        SfCharacteristic
      },
      template: `
      <SfCharacteristic :color="color" :size="size" :path="path" :title="title" :description="description"><template v-slot:description><strong>Alternative description</strong></template></SfCharacteristic/>
    `
    }),
    {
      info: true
    }
  );
