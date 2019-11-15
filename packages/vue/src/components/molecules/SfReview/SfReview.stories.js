import { storiesOf } from "@storybook/vue";
import { withKnobs, text, number } from "@storybook/addon-knobs";

import SfReview from "./SfReview.vue";

storiesOf("Molecules|Review", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    components: { SfReview },
    props: {
      author: {
        default: text("author (prop)", "Jane D.Smith")
      },
      date: {
        default: text("date (prop)", "April 2019")
      },
      message: {
        default: text(
          "message (prop)",
          "I was looking for a bright light for the kitchen but wanted some item more modern than a strip light. this one is perfect, very bright and looks great. I can comment on interlation as I had an electrition instal it. Would recommend."
        )
      },
      maxRating: {
        default: number("max-rating (prop)", 5)
      },
      rating: {
        default: number("rating (prop)", 4)
      },
      charLimit: {
        default: number("char-limit (prop)", 250)
      },
      readMoreText: {
        default: text("read-more-text (prop)", "Read more")
      },
      hideFullText: {
        default: text("hide-full-text (prop)", "Read less")
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
        default: text("author (prop)", "Jane D.Smith")
      },
      date: {
        default: text("date (prop)", "April 2019")
      },
      message: {
        default: text(
          "message (prop)",
          "I was looking for a bright light for the kitchen but wanted some item more modern than a strip light. this one is perfect, very bright and looks great. I can comment on interlation as I had an electrition instal it. Would recommend."
        )
      },
      maxRating: {
        default: number("max-rating (prop)", 5)
      },
      rating: {
        default: number("rating (prop)", 4)
      },
      charLimit: {
        default: number("char-limit (prop)", 250)
      },
      readMoreText: {
        default: text("read-more-text (prop)", "Read more")
      },
      hideFullText: {
        default: text("hide-full-text (prop)", "Read less")
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
        default: text("author (prop)", "Jane D.Smith")
      },
      date: {
        default: text("date (prop)", "April 2019")
      },
      message: {
        default: text(
          "message (prop)",
          "I was looking for a bright light for the kitchen but wanted some item more modern than a strip light. this one is perfect, very bright and looks great. I can comment on interlation as I had an electrition instal it. Would recommend."
        )
      },
      maxRating: {
        default: number("max-rating (prop)", 5)
      },
      rating: {
        default: number("rating (prop)", 4)
      },
      charLimit: {
        default: number("char-limit (prop)", 250)
      },
      readMoreText: {
        default: text("read-more-text (prop)", "Read more")
      },
      hideFullText: {
        default: text("hide-full-text (prop)", "Read less")
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
        default: text("author (prop)", "Jane D.Smith")
      },
      date: {
        default: text("date (prop)", "April 2019")
      },
      message: {
        default: text(
          "message (prop)",
          "I was looking for a bright light for the kitchen but wanted some item more modern than a strip light. this one is perfect, very bright and looks great. I can comment on interlation as I had an electrition instal it. Would recommend."
        )
      },
      maxRating: {
        default: number("max-rating (prop)", 5)
      },
      rating: {
        default: number("rating (prop)", 4)
      },
      charLimit: {
        default: number("char-limit (prop)", 250)
      },
      readMoreText: {
        default: text("read-more-text (prop)", "Read more")
      },
      hideFullText: {
        default: text("hide-full-text (prop)", "Read less")
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
