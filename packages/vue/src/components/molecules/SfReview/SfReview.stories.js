// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, number, text } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfReview from "./SfReview.vue";

const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    [
      "$review__div_tags-margin-bottom",
      "$spacer-medium",
      "margin bottom for some div tags of the review"
    ],
    [
      "$review__div_tags-display-inline-block",
      "inline-block",
      "display inline block for some div tags of the review"
    ],
    [
      "$review__margin-left",
      "$spacer-medium",
      "margin left for some elements of the review"
    ],
    [
      "$review__author-text-transform",
      "capitalize",
      "text transform for author's name of the review"
    ],
    [
      "$review__author-font-family",
      "$body-font-family-primary",
      "font-family of author's name of the review"
    ],
    [
      "$review__author-font-weight",
      "450",
      "font-weight of author's name of the review"
    ],
    [
      "$review__author-font-size",
      "$font-size-big-desktop",
      "font-size of author's name of the review"
    ],
    [
      "$review__author-color",
      "$c-text",
      "color of author's name of the review"
    ],
    [
      "$review__date-font-weight",
      "$body-font-weight-primary",
      "font-weight of review's date"
    ],
    [
      "$review__date-font-size",
      "$font-size-small-desktop",
      "font-size of review's date"
    ],
    [
      "$review__date-text-transform",
      "capitalize",
      "text transform for reviws's date"
    ],
    [
      "$review__date-margin-left",
      "$spacer-medium",
      "margin-left of review's date"
    ],
    ["$review__date-color", "$c-dark-variant", "font color of review's date"],
    [
      "$review__message-font-weight",
      "$body-font-weight-primary",
      "font-weight of review's message"
    ],
    [
      "$review__message-font-size",
      "$font-size-regular-desktop",
      "font-size of review's message"
    ],
    [
      "$review__message-color",
      "$c-dark-variant",
      "text color for review's message"
    ],
    [
      "$review__message_read_more-font-weight",
      "$body-font-weight-primary",
      "font-weight of reviews's read more button's text"
    ],
    [
      "$review__message_read_more-font-size",
      "$font-size-regular-desktop",
      "font-size of review's read more button's text"
    ],
    [
      "$review__message_read_more-color",
      "$c-primary",
      "text-color for read more button's text"
    ],
    [
      "$review__message_read_more-background-color",
      "Transparent",
      "background-color for read more button's text"
    ],
    [
      "$review__message_read_more-border",
      "none",
      "border for read more button's text"
    ],
    [
      "$review__message_read_more-cursor",
      "pointer",
      "cursor for read more button's text"
    ],
    [
      "$review__message_read_more-outline",
      "none",
      "outline for read more button's text"
    ],
    [
      "$review__message_read_more-font-family",
      "$body-font-family-primary",
      "font-family for read more button's text"
    ]
  ]
};

storiesOf("Molecules|Review", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      data: () => {
        return {
          items: []
        };
      },
      props: {
        author: {
          default: text("author (prop)", "Author name")
        },
        date: {
          default: text("date (prop)", "Sep 2019")
        },
        message: {
          default: text(
            "message (prop)",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          )
        },
        rating: {
          default: number("rating (prop)", 4)
        },
        maxRating: {
          default: number("maxRating (prop)", 5)
        },
        charLimit: {
          default: number("charLimit (prop)", 250)
        },
        readMoreText: {
          default: text("readMoreText (prop)", "Read more")
        },
        hideFullText: {
          default: text("hideFullText (prop)", "Read less")
        }
      },
      components: { SfReview },
      template: `
      <div>
        <SfReview
          :author="author"
          :date="date"
          :message="message"
          :rating="rating"
          :max-rating="maxRating"
          :char-imit="charLimit"
          :read-more-text="readMoreText"
          :hide-full-text="hideFullText"
        >
        </SfReview>
      </div>`
    }),
    {
      info: {
        summary: `<p><code>SfReview</code> can be used for reviews.</p>
       <h2>Usage</h2>
       <pre><code>import { SfReview } from "@storefront-ui/vue"</code></pre>
       ${generateStorybookTable(scssTableConfig, "SCSS variables")}
       `
      }
    }
  );
