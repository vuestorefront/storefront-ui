import { SfReview } from "@storefront-ui/vue";
export default {
  title: "Components/Molecules/Review",
  component: SfReview,
  parameters: {
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
      control: "date",
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
