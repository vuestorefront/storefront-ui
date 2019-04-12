import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import SfGallery from "./SfGallery.vue";

const vm = {
  components: { SfGallery },
  data: () => {
    return {
      page: 2,
      visiblePageNumbers: 5,
      numberOfPages: 12
    };
  },
  methods: {
    setCurrentPage(page) {
      this.page = page;
    }
  }
};

export default storiesOf("Gallery", module)
  .add(
    "Props",
    () => ({
      ...vm,
      template: `
    <sf-gallery />`
    }),
    {
      info: true
    }
  );
