import { withKnobs, select } from "@storybook/addon-knobs";
import { SfBannerGrid, SfBanner } from "@storefront-ui/vue";
export default {
  title: "Organisms|BannerGrid",
  decorators: [withKnobs],
};
export const Common = () => ({
  components: { SfBannerGrid, SfBanner },
  props: {
    bannerGrid: {
      default: select("bannerGrid", [1, 2], 1, "Props"),
    },
  },
  data() {
    return {
      bannersExample: [
        {
          slot: "banner-A",
          subtitle: ["Dresses"],
          title: ["Cocktail & Party"],
          description: [
            "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.",
          ],
          buttonText: ["Shop now"],
          image: ["/assets/storybook/Home/bannerF.jpg"],
          class: ["sf-banner--slim"],
        },
        {
          slot: "banner-B",
          subtitle: ["Dresses"],
          title: ["Linen Dresses"],
          description: [
            "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.",
            "",
          ],
          buttonText: ["Shop now"],
          image: ["/assets/storybook/Home/bannerE.jpg"],
          class: ["sf-banner--slim"],
          style: ["padding-right: 20%", undefined],
        },
        {
          slot: "banner-C",
          subtitle: ["T-Shirts"],
          title: ["The Office Life", "Your Office"],
          buttonText: [undefined, "Shop now"],
          image: ["/assets/storybook/Home/bannerC.jpg"],
          class: ["sf-banner--slim"],
        },
        {
          slot: "banner-D",
          subtitle: ["Summer Sandals"],
          title: ["Eco Sandals"],
          buttonText: [undefined, "Shop now"],
          image: [
            "/assets/storybook/Home/bannerG.jpg",
            "/assets/storybook/Home/bannerK.jpg",
          ],
          class: ["sf-banner--slim"],
        },
      ],
    };
  },
  computed: {
    banners() {
      return this.bannersExample.map((banner) => {
        const grid = this.bannerGrid - 1;
        const obj = {};
        Object.keys(banner).forEach((key) => {
          obj[key] =
            key != "slot"
              ? typeof banner[key][grid] != "undefined"
                ? banner[key][grid]
                : banner[key][grid - 1]
              : banner[key];
        });
        return obj;
      });
    },
  },
  template: `<SfBannerGrid
        :banner-grid="bannerGrid"
        :style="{maxWidth: '1240px', margin: 'auto'}"
      >
        <template 
          v-for="item in banners"
          v-slot:[item.slot]
        >
          <SfBanner
            :key="item.slot"
            :title="item.title"
            :subtitle="item.subtitle"
            :description="item.description" 
            :button-text="item.buttonText"
            :image="item.image"
            :class="item.class" 
          />
        </template>
      </SfBannerGrid>`,
});
