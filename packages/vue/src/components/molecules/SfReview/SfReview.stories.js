import { storiesOf } from "@storybook/vue";
import { withKnobs, text, number } from "@storybook/addon-knobs";
import SfReview from "./SfReview.vue";
storiesOf("Molecules|Review", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfReview },
    props: {
      author: {
        default: text("author", "Jane D.Smith", "Props")
      },
      date: {
        default: text("date", "April 2019", "Props")
      },
      message: {
        default: text(
          "message",
          "I was looking for a bright light for the kitchen but wanted some item more modern than a strip light. this one is perfect, very bright and looks great. I can comment on interlation as I had an electrition instal it. Would recommend.",
          "Props"
        )
      },
      maxRating: {
        default: number("maxRating", 5, {}, "Props")
      },
      rating: {
        default: number("rating", 4, {}, "Props")
      },
      charLimit: {
        default: number("charLimit", 250, {}, "Props")
      },
      readMoreText: {
        default: text("readMoreText", "Read more", "Props")
      },
      hideFullText: {
        default: text("hideFullText", "Read less", "Props")
      }
    },
    template: `<SfReview
      :author="author"
      :date="date"
      :message="message"
      :max-rating="maxRating"
      :rating="rating"
      :char-limit="charLimit"
      read-more-text="readMoreText"
      hide-full-text="hideFullText" />`
  }))
  .add("[slot] author", () => ({
    components: { SfReview },
    props: {
      author: {
        default: text("author", "Jane D.Smith", "Props")
      },
      date: {
        default: text("date", "April 2019", "Props")
      },
      message: {
        default: text(
          "message",
          "I was looking for a bright light for the kitchen but wanted some item more modern than a strip light. this one is perfect, very bright and looks great. I can comment on interlation as I had an electrition instal it. Would recommend.",
          "Props"
        )
      },
      maxRating: {
        default: number("maxRating", 5, {}, "Props")
      },
      rating: {
        default: number("rating", 4, {}, "Props")
      },
      charLimit: {
        default: number("charLimit", 250, {}, "Props")
      },
      readMoreText: {
        default: text("readMoreText", "Read more", "Props")
      },
      hideFullText: {
        default: text("hideFullText", "Read less", "Props")
      }
    },
    template: `<SfReview
      :author="author"
      :date="date"
      :message="message"
      :max-rating="maxRating"
      :rating="rating"
      :char-limit="charLimit"
      read-more-text="readMoreText"
      hide-full-text="hideFullText">
      <template #author="{author}">
        CUSTOM AUTHOR
      </template>  
    </SfReview>`
  }))
  .add("[slot] info", () => ({
    components: { SfReview },
    props: {
      author: {
        default: text("author", "Jane D.Smith", "Props")
      },
      date: {
        default: text("date", "April 2019", "Props")
      },
      message: {
        default: text(
          "message",
          "I was looking for a bright light for the kitchen but wanted some item more modern than a strip light. this one is perfect, very bright and looks great. I can comment on interlation as I had an electrition instal it. Would recommend.",
          "Props"
        )
      },
      maxRating: {
        default: number("maxRating", 5, {}, "Props")
      },
      rating: {
        default: number("rating", 4, {}, "Props")
      },
      charLimit: {
        default: number("charLimit", 250, {}, "Props")
      },
      readMoreText: {
        default: text("readMoreText", "Read more", "Props")
      },
      hideFullText: {
        default: text("hideFullText", "Read less", "Props")
      }
    },
    template: `<SfReview
      :author="author"
      :date="date"
      :message="message"
      :max-rating="maxRating"
      :rating="rating"
      :char-limit="charLimit"
      read-more-text="readMoreText"
      hide-full-text="hideFullText">
      <template #info="{rating, maxRating, date}">
        CUSTOM INFO
      </template>  
    </SfReview>`
  }))
  .add("[slot] message", () => ({
    components: { SfReview },
    props: {
      author: {
        default: text("author", "Jane D.Smith", "Props")
      },
      date: {
        default: text("date", "April 2019", "Props")
      },
      message: {
        default: text(
          "message",
          "I was looking for a bright light for the kitchen but wanted some item more modern than a strip light. this one is perfect, very bright and looks great. I can comment on interlation as I had an electrition instal it. Would recommend.",
          "Props"
        )
      },
      maxRating: {
        default: number("maxRating", 5, {}, "Props")
      },
      rating: {
        default: number("rating", 4, {}, "Props")
      },
      charLimit: {
        default: number("charLimit", 250, {}, "Props")
      },
      readMoreText: {
        default: text("readMoreText", "Read more", "Props")
      },
      hideFullText: {
        default: text("hideFullText", "Read less", "Props")
      }
    },
    template: `<SfReview
      :author="author"
      :date="date"
      :message="message"
      :max-rating="maxRating"
      :rating="rating"
      :char-limit="charLimit"
      read-more-text="readMoreText"
      hide-full-text="hideFullText">
      <template #message="{finalMessage, buttonText}">
        CUSTOM MESSAGE
      </template>  
    </SfReview>`
  }));
