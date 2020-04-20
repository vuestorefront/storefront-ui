import { withKnobs, text, number } from "@storybook/addon-knobs";
import SfReview from "./SfReview.vue";
export default {
  title: "Molecules|Review",
  decorators: [withKnobs],
};
export const Common = () => ({
  components: { SfReview },
  props: {
    author: {
      default: text("author", "Jane D.Smith", "Props"),
    },
    date: {
      default: text("date", "April 2019", "Props"),
    },
    message: {
      default: text(
        "message",
        "I was looking for a bright light for the kitchen but wanted some item more modern than a strip light. this one is perfect, very bright and looks great. I can comment on interlation as I had an electrition instal it. Would recommend.",
        "Props"
      ),
    },
    maxRating: {
      default: number("maxRating", 5, {}, "Props"),
    },
    rating: {
      default: number("rating", 4, {}, "Props"),
    },
    charLimit: {
      default: number("charLimit", 250, {}, "Props"),
    },
    readMoreText: {
      default: text("readMoreText", "Read more", "Props"),
    },
    hideFullText: {
      default: text("hideFullText", "Read less", "Props"),
    },
  },
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
export const SlotIcon = () => ({
  components: { SfReview },
  props: {
    author: {
      default: text("author", "Jane D.Smith", "Props"),
    },
    date: {
      default: text("date", "April 2019", "Props"),
    },
    message: {
      default: text(
        "message",
        "I was looking for a bright light for the kitchen but wanted some item more modern than a strip light. this one is perfect, very bright and looks great. I can comment on interlation as I had an electrition instal it. Would recommend.",
        "Props"
      ),
    },
    maxRating: {
      default: number("maxRating", 5, {}, "Props"),
    },
    rating: {
      default: number("rating", 4, {}, "Props"),
    },
    charLimit: {
      default: number("charLimit", 250, {}, "Props"),
    },
    readMoreText: {
      default: text("readMoreText", "Read more", "Props"),
    },
    hideFullText: {
      default: text("hideFullText", "Read less", "Props"),
    },
  },
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
SlotIcon.story = {
  name: "[slot] icon",
};
export const SlotAuthor = () => ({
  components: { SfReview },
  props: {
    author: {
      default: text("author", "Jane D.Smith", "Props"),
    },
    date: {
      default: text("date", "April 2019", "Props"),
    },
    message: {
      default: text(
        "message",
        "I was looking for a bright light for the kitchen but wanted some item more modern than a strip light. this one is perfect, very bright and looks great. I can comment on interlation as I had an electrition instal it. Would recommend.",
        "Props"
      ),
    },
    maxRating: {
      default: number("maxRating", 5, {}, "Props"),
    },
    rating: {
      default: number("rating", 4, {}, "Props"),
    },
    charLimit: {
      default: number("charLimit", 250, {}, "Props"),
    },
    readMoreText: {
      default: text("readMoreText", "Read more", "Props"),
    },
    hideFullText: {
      default: text("hideFullText", "Read less", "Props"),
    },
  },
  template: `<SfReview
      :author="author"
      :date="date"
      :message="message"
      :max-rating="maxRating"
      :rating="rating"
      :char-limit="charLimit"
      :read-more-text="readMoreText"
      :hide-full-text="hideFullText">
      <template #author="{author}">
        CUSTOM AUTHOR
      </template>  
    </SfReview>`,
});
SlotAuthor.story = {
  name: "[slot] author",
};
export const SlotInfo = () => ({
  components: { SfReview },
  props: {
    author: {
      default: text("author", "Jane D.Smith", "Props"),
    },
    date: {
      default: text("date", "April 2019", "Props"),
    },
    message: {
      default: text(
        "message",
        "I was looking for a bright light for the kitchen but wanted some item more modern than a strip light. this one is perfect, very bright and looks great. I can comment on interlation as I had an electrition instal it. Would recommend.",
        "Props"
      ),
    },
    maxRating: {
      default: number("maxRating", 5, {}, "Props"),
    },
    rating: {
      default: number("rating", 4, {}, "Props"),
    },
    charLimit: {
      default: number("charLimit", 250, {}, "Props"),
    },
    readMoreText: {
      default: text("readMoreText", "Read more", "Props"),
    },
    hideFullText: {
      default: text("hideFullText", "Read less", "Props"),
    },
  },
  template: `<SfReview
      :author="author"
      :date="date"
      :message="message"
      :max-rating="maxRating"
      :rating="rating"
      :char-limit="charLimit"
      :read-more-text="readMoreText"
      :hide-full-text="hideFullText">
      <template #info="{rating, maxRating, date}">
        CUSTOM INFO
      </template>  
    </SfReview>`,
});
SlotInfo.story = {
  name: "[slot] info",
};
export const SlotMessage = () => ({
  components: { SfReview },
  props: {
    author: {
      default: text("author", "Jane D.Smith", "Props"),
    },
    date: {
      default: text("date", "April 2019", "Props"),
    },
    message: {
      default: text(
        "message",
        "I was looking for a bright light for the kitchen but wanted some item more modern than a strip light. this one is perfect, very bright and looks great. I can comment on interlation as I had an electrition instal it. Would recommend.",
        "Props"
      ),
    },
    maxRating: {
      default: number("maxRating", 5, {}, "Props"),
    },
    rating: {
      default: number("rating", 4, {}, "Props"),
    },
    charLimit: {
      default: number("charLimit", 250, {}, "Props"),
    },
    readMoreText: {
      default: text("readMoreText", "Read more", "Props"),
    },
    hideFullText: {
      default: text("hideFullText", "Read less", "Props"),
    },
  },
  template: `<SfReview
      :author="author"
      :date="date"
      :message="message"
      :max-rating="maxRating"
      :rating="rating"
      :char-limit="charLimit"
      :read-more-text="readMoreText"
      :hide-full-text="hideFullText">
      <template #message="{finalMessage, buttonText}">
        CUSTOM MESSAGE
      </template>  
    </SfReview>`,
});
SlotMessage.story = {
  name: "[slot] message",
};
