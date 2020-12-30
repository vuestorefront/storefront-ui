import {
  SfFooter,
  SfHeader,
  SfList,
  SfImage,
  SfButton,
  SfMenuItem,
  SfInput,
} from "@storefront-ui/vue";
import "./SfFooter.stories.scss";

export default {
  title: "Organisms/Footer",
  component: SfFooter,
  argTypes: {
    open: {
      control: "array",
      table: {
        category: "Props",
      },
    },
    column: {
      control: "number",
      defaultValue: 4,
      table: {
        category: "Props",
      },
      description: "Number of columns in footer",
    },
    multiple: {
      control: "boolean",
      table: {
        category: "Props",
      },
    },
    logo: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    title: {
      control: "text",
      table: {
        category: "Props",
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: {
    SfFooter,
    SfHeader,
    SfList,
    SfImage,
    SfButton,
    SfMenuItem,
    SfInput,
  },
  props: Object.keys(argTypes),
  data() {
    return {
      columns: [
        {
          title: "About us",
          items: ["Who we are", "Quality in the details", "Customer Reviews"],
        },
        {
          title: "Departments",
          items: ["Women fashion", "Men fashion", "Kidswear", "Home"],
        },
        {
          title: "Help",
          items: ["Customer service", "Size guide", "Contact us"],
        },
        {
          title: "Payment & delivery",
          items: ["Purchase terms", "Guarantee"],
        },
      ],
      social: {
        title: "Social",
        pictures: ["Facebook", "Pinterest", "Twitter", "Google", "Youtube"],
      },
    };
  },
  template: `
    <SfFooter
      :column="column"
      :multiple="multiple"
      :open="open"
      :logo="logo"
      :title="title"
      class="sb-footer"
    >
      <SfFooterColumn v-for="column in columns" :key="column.title" :title="column.title">        
        <SfList>
          <SfListItem v-for="item in column.items" :key="item">
            <SfMenuItem :label="item"/>
          </SfListItem>
        </SfList>      
      </SfFooterColumn>
      <SfFooterColumn title="social.title" class="desktop-only">
        <SfImage v-for="picture in social.pictures" :key="picture" :src="'/assets/storybook/SfFooter/'+picture+' Icon.svg'" :alt="picture" class="sb-social-icon"/>
      </SfFooterColumn> 
      <SfFooterColumn title="Language" class="desktop-only">
        <SfButton class="sb-footer__button sf-button--pure">
          <SfImage
            src="/assets/storybook/SfFooter/flag.png"
            alt="flag of the USA"
          />
          English
        </SfButton>
      </SfFooterColumn>
      <SfFooterColumn class="desktop-only">
        <template>
          <div class="sb-footer__input">
            <SfInput class="sf-input--outline" type="text" placeholder="Type your email address"/>
            <SfButton>Subscribe</SfButton>
          </div>
        </template>
      </SfFooterColumn>
      <template #bottom >
        <div class="sb-footer__bottom">
          <div class="sf-footer-column__title sb-footer__bottom-title">
            Social
          </div>
          <div class="sb-footer__bottom-social">
            <SfImage v-for="picture in social.pictures" :key="picture" :src="'/assets/storybook/SfFooter/'+picture+' Icon.svg'" :alt="picture" class="sb-social-icon"/>
          </div>
          <div class="sb-footer__input">
            <SfInput class="sf-input--outline" type="text" placeholder="Type your email address"/>
            <SfButton>Subscribe</SfButton>
          </div>
        </div>        
      </template>
    </SfFooter>`,
});

export const Common = Template.bind({});
Common.args = {
  open: ["About us", "Help", "Social"],
  title: "Storefront UI",
  logo: "/assets/logo.svg",
};
