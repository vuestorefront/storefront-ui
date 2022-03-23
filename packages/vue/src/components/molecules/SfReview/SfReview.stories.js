import { SfReview } from "@storefront-ui/vue";
export default {
  title: "Components/Molecules/Review",
  component: SfReview,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "review-display": { value: "block", control: "text" },
      "review-max-width": { value: "343px", control: "text" },
      "review-padding": { value: "0 0 8px", control: "text" },
      "review-border": {
        value:
          "var(--review-border-style, solid) var(--review-border-color, var(--c-light))",
        control: "text",
      },
      "review-border-width": { value: "0 0 1px 0", control: "text" },
      "review-icon-margin": {
        value: "0 var(--spacer-2xs) 0 0",
        control: "text",
      },
      "review-author-color": { value: "var(--c-text)", control: "text" },
      "review-author-font": { value: "", control: "text" },
      "review-author-font-weight": {
        value: "var(--font-weight--normal)",
        control: "text",
      },
      "review-author-font-size": {
        value: "var(--font-size--base)",
        control: "text",
      },
      "review-author-font-line-height": { value: "1.6", control: "text" },
      "review-author-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "review-author-text-transform": { value: "capitalize", control: "text" },
      "review-rating-display": { value: "inline-block", control: "text" },
      "review-info-margin": {
        value: "var(--spacer-xs) 0 0 0",
        control: "text",
      },
      "review-date-display": { value: "block", control: "text" },
      "review-date-margin": {
        value: "var(--spacer-xs) 0 var(--spacer-sm) 0",
        control: "text",
      },
      "review-date-text-transform": { value: "capitalize", control: "text" },
      "review-date-color": { value: "var(--c-text-muted)", control: "text" },
      "review-date-font": { value: "", control: "text" },
      "review-date-font-weight": {
        value: "var(--font-weight--normal)",
        control: "text",
      },
      "review-date-font-size": {
        value: "var(--font-size--base)",
        control: "text",
      },
      "review-date-font-line-height": { value: "1.6", control: "text" },
      "review-date-font-family": {
        value: "var(--font-family--primary)",
        control: "text",
      },
      "review-message-display": { value: "", control: "text" },
      "review-message-margin": { value: "var(--spacer-sm) 0", control: "text" },
      "review-message-color": { value: "var(--c-text)", control: "text" },
      "review-message-font": { value: "", control: "text" },
      "review-message-font-weight": {
        value: "var(--font-weight--normal)",
        control: "text",
      },
      "review-message-font-size": {
        value: "var(--font-size--base)",
        control: "text",
      },
      "review-message-font-line-height": { value: "1.6", control: "text" },
      "review-message-font-family": {
        value: "var(--font-family--primary)",
        control: "text",
      },
      "review-read-more-margin": {
        value: "0 0 0 var(--spacer-xs)",
        control: "text",
      },
      "icon-size": {
        value: "1.5rem",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "icon-color": {
        value: "var(--c-primary)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-padding": {
        value: "0",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-font": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "font-weight--medium": {
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "font-size--sm": {
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },
    // end of code generated automatically
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "review-display": { value: "block", control: "text" },
      "review-max-width": { value: "343px", control: "text" },
      "review-padding": { value: "0 0 8px", control: "text" },
      "review-border": {
        value:
          "var(--review-border-style, solid) var(--review-border-color, var(--c-light))",
        control: "text",
      },
      "review-border-width": { value: "0 0 1px 0", control: "text" },
      "review-icon-margin": {
        value: "0 var(--spacer-2xs) 0 0",
        control: "text",
      },
      "review-author-color": { value: "var(--c-text)", control: "text" },
      "review-author-font": { value: "", control: "text" },
      "review-author-font-weight": {
        value: "var(--font-weight--normal)",
        control: "text",
      },
      "review-author-font-size": {
        value: "var(--font-size--base)",
        control: "text",
      },
      "review-author-font-line-height": { value: "1.6", control: "text" },
      "review-author-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "review-author-text-transform": { value: "capitalize", control: "text" },
      "review-rating-display": { value: "inline-block", control: "text" },
      "review-info-margin": {
        value: "var(--spacer-xs) 0 0 0",
        control: "text",
      },
      "review-date-display": { value: "block", control: "text" },
      "review-date-margin": {
        value: "var(--spacer-xs) 0 var(--spacer-sm) 0",
        control: "text",
      },
      "review-date-text-transform": { value: "capitalize", control: "text" },
      "review-date-color": { value: "var(--c-text-muted)", control: "text" },
      "review-date-font": { value: "", control: "text" },
      "review-date-font-weight": {
        value: "var(--font-weight--normal)",
        control: "text",
      },
      "review-date-font-size": {
        value: "var(--font-size--base)",
        control: "text",
      },
      "review-date-font-line-height": { value: "1.6", control: "text" },
      "review-date-font-family": {
        value: "var(--font-family--primary)",
        control: "text",
      },
      "review-message-display": { value: "", control: "text" },
      "review-message-margin": { value: "var(--spacer-sm) 0", control: "text" },
      "review-message-color": { value: "var(--c-text)", control: "text" },
      "review-message-font": { value: "", control: "text" },
      "review-message-font-weight": {
        value: "var(--font-weight--normal)",
        control: "text",
      },
      "review-message-font-size": {
        value: "var(--font-size--base)",
        control: "text",
      },
      "review-message-font-line-height": { value: "1.6", control: "text" },
      "review-message-font-family": {
        value: "var(--font-family--primary)",
        control: "text",
      },
      "review-read-more-margin": {
        value: "0 0 0 var(--spacer-xs)",
        control: "text",
      },
      "icon-size": {
        value: "1.5rem",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "icon-color": {
        value: "var(--c-primary)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-padding": {
        value: "0",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-font": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },

    docs: {
      description: {
        component:
          "Customer review component with author, rating, date and review text.",
      },
    },
  },
  argTypes: {
    author: {
      control: "text",
      table: {
        category: "Props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
      description: "Author of the review",
    },
    date: {
      control: "text",
      table: {
        category: "Props",
        defaultValue: {
          summary: "",
        },
      },
      description: "Date of the review",
    },
    message: {
      control: "text",
      table: {
        category: "Props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
      description: "Message from the reviewer",
    },
    rating: {
      control: "number",
      table: {
        category: "Props",
        defaultValue: {
          summary: false,
        },
      },
      description: "Rating from the reviewer",
    },
    maxRating: {
      control: "number",
      table: {
        category: "Props",
        defaultValue: {
          summary: 5,
        },
      },
      defaultValue: 5,
      description: "Max rating for the review",
    },
    charLimit: {
      control: "number",
      table: {
        category: "Props",
        defaultValue: {
          summary: 250,
        },
      },
      defaultValue: 250,
      description: "Char limit for the review",
    },
    readMoreText: {
      control: "text",
      table: {
        category: "Props",
        defaultValue: {
          summary: "Read more",
        },
      },
      defaultValue: "",
      description: "Read more text for the review",
    },
    hideFullText: {
      control: "text",
      table: {
        category: "Props",
        defaultValue: {
          summary: "Read less",
        },
      },
      defaultValue: "",
      description: "Hide full text message for the review",
    },
    info: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Review information. Slot content will replace default `<div>` tag and its inner `<div>` tags",
    },
    icon: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Review icon. Slot content can be replaced by custom icon",
    },
    "author ": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Review author. Slot content will replace default `<div>` tag",
    },
    "message ": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Slot content will replace default `<div>` tag and its inner `<span>` and `<a>` tags.",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfReview },
  props: Object.keys(argTypes),
  template: `<SfReview
    :author="author"
    :date="date"
    :message="message"
    :max-rating="maxRating"
    :rating="rating"
    :char-limit="charLimit"
    :read-more-text="readMoreText"
    :hide-full-text="hideFullText" />`,
});

export const Common = Template.bind({});
Common.args = {
  author: "Jane D.Smith",
  date: "4 April 2019",
  message:
    "I was looking for a bright light for the kitchen but wanted some item more modern than a strip light. this one is perfect, very bright and looks great. I can comment on interlation as I had an electrition instal it. Would recommend.",
  rating: 4,
};

export const UseIconSlot = (args, { argTypes }) => ({
  components: { SfReview },
  props: Object.keys(argTypes),
  template: `<SfReview
    :author="author"
    :date="date"
    :message="message"
    :max-rating="maxRating"
    :rating="rating"
    :char-limit="charLimit"
    :read-more-text="readMoreText"
    :hide-full-text="hideFullText">
    <template #icon>
      🥑
    </template>  
  </SfReview>`,
});
UseIconSlot.args = { ...Common.args };

export const UseAuthorSlot = (args, { argTypes }) => ({
  components: { SfReview },
  props: Object.keys(argTypes),
  template: `<SfReview
    :author="author"
    :date="date"
    :message="message"
    :max-rating="maxRating"
    :rating="rating"
    :char-limit="charLimit"
    :read-more-text="readMoreText"
    :hide-full-text="hideFullText">
    <template #author>
      CUSTOM AUTHOR
    </template>  
  </SfReview>`,
});
UseAuthorSlot.args = { ...Common.args };

export const UseInfoSlot = (args, { argTypes }) => ({
  components: { SfReview },
  props: Object.keys(argTypes),
  template: `<SfReview
    :author="author"
    :date="date"
    :message="message"
    :max-rating="maxRating"
    :rating="rating"
    :char-limit="charLimit"
    :read-more-text="readMoreText"
    :hide-full-text="hideFullText">
    <template #info>
      CUSTOM INFO
    </template>  
  </SfReview>`,
});
UseInfoSlot.args = { ...Common.args };

export const UseMessageSlot = (args, { argTypes }) => ({
  components: { SfReview },
  props: Object.keys(argTypes),
  template: `<SfReview
    :author="author"
    :date="date"
    :message="message"
    :max-rating="maxRating"
    :rating="rating"
    :char-limit="charLimit"
    :read-more-text="readMoreText"
    :hide-full-text="hideFullText">
    <template #message>
      CUSTOM MESSAGE
    </template>  
  </SfReview>`,
});
UseMessageSlot.args = { ...Common.args };
