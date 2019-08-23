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
            "iconPath (prop)",
            "M19.2184 6.2442L15.0167 0.902344H4.20169L0 6.2442V20.9683H19.22L19.2184 6.2442ZM17.5565 5.88534H10.162V2.00942H14.4949L17.5565 5.88534ZM4.72206 2.00942H9.05503V5.88534H1.66054L4.72206 2.00942ZM1.07384 19.8602V6.95938H18.1432V19.8602H1.07384Z M10.5835 13.3125L11.0246 12.864H8.48131C8.1422 12.864 7.83755 12.8991 7.59909 13.0714C7.12488 13.4161 7.02287 13.9682 7.15797 14.3466C7.25997 14.76 7.56463 15.2084 8.1753 15.2434C8.68396 15.2784 9.19263 15.2784 9.73574 15.2784H10.516H10.8895C11.2286 15.2784 11.4657 15.5545 11.4657 15.8642C11.4644 16.1739 11.1942 16.415 10.8882 16.415H10.5146H9.76887H9.70132H8.98865C8.68398 16.415 8.41243 16.415 8.10642 16.38C7.12355 16.3113 6.30887 15.6218 6.07177 14.6213C5.80022 13.6222 6.17377 12.6217 7.02155 12.0359C7.53021 11.6912 8.07332 11.6225 8.54753 11.6225H11.0908L10.5477 11.1741C10.4457 11.0704 10.3782 10.898 10.3782 10.7607C10.3782 10.6234 10.4457 10.451 10.5477 10.3473C10.6511 10.245 10.8206 10.21 10.9557 10.21C11.0908 10.21 11.2604 10.2786 11.3624 10.3823L12.8208 11.8649C12.9228 11.9686 12.9904 12.141 12.9559 12.2783C12.9559 12.4156 12.8884 12.588 12.7864 12.6917L11.3955 14.1743C11.2935 14.278 11.1239 14.3466 10.9888 14.3466C10.8193 14.3466 10.6842 14.278 10.5822 14.1743C10.4802 14.0706 10.4126 13.8982 10.4126 13.7609C10.3795 13.5885 10.4471 13.4161 10.5835 13.3125Z"
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
        '<SfCharacteristic :color="color" :size="size" :iconPath="iconPath" :title="title" :description="description"/>'
    }),
    {
      info: {
        summary: `
            <h2> Description </h2>
            <p>Characteristic component. Place desired content into its named slots.</p>
            <h2> Usage </h2>
            <pre><code>import { SfCharacteristic } from "@storefront-ui/vue"</code></pre>
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
      <SfCharacteristic>
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
      <SfCharacteristic><template v-slot:text><h1>All Text</h1></template>
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
      <SfCharacteristic><template v-slot:title><small>Alternative text</small></template></SfCharacteristic/>
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
      <SfCharacteristic><template v-slot:description><strong>Alternative description</strong></template></SfCharacteristic/>
    `
    }),
    {
      info: true
    }
  );
