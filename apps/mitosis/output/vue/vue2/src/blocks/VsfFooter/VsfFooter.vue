<template>
  <footer class="pt-10 bg-gray-100">
    <div
      class="grid grid-cols-[1fr_1fr] medium:grid-cols-[1fr_1fr_1fr_1fr] px-4 medium:px-6 pb-10"
    >
      <div
        class="min-w-[120px] extra-small:min-w-[172px]"
        v-for="(category, index) in useVsfCategoriesProp"
        :key="`${category.label}-${index}`"
      >
        <span
          class="pb-2 text-lg font-medium leading-7 text-gray-900 font-body"
        >
          {{ category.label }}
        </span>
        <a
          class="block py-2 text-sm font-normal leading-5 text-gray-500 font-body"
          v-for="(subcategory, index) in category.subcategories"
          :href="subcategory.link"
          :key="`${subcategory.label}_${index}`"
        >
          {{ subcategory.label }}
        </a>
      </div>
    </div>
    <div class="py-10 large:flex border-t border-gray-200">
      <div
        class="mx-auto my-4 text-center"
        v-for="(element, index) in useVsfContactOptionsProp"
        :key="`${element.label}-${index}`"
      >
        <vsf-icon-help size="lg" v-if="index === 0"></vsf-icon-help>

        <vsf-icon-chat size="lg" v-if="index === 1"></vsf-icon-chat>

        <vsf-icon-phone size="lg" v-if="index === 2"></vsf-icon-phone>

        <a
          class="block py-1 my-2 text-lg font-medium leading-7 text-gray-900 underline font-body"
          :href="element.link"
        >
          {{ element.label }}
        </a>
        <span
          class="block text-sm font-normal leading-5 text-gray-500 font-body"
          v-for="(option, index) in element.details"
          :key="`${option}-${index}`"
          >{{ option }}</span
        >
      </div>
    </div>
    <div class="justify-end px-4 py-10 bg-gray-900 large:flex large:py-6">
      <div class="flex justify-center py-2 large:self-start">
        <a
          class="mr-4 text-white"
          v-for="(element, index) in useVsfSocialMediaProp"
          :aria-label="`Go to ${element.label} page`"
          :href="element.link"
          :key="`${element.label}-${index}`"
        >
          <vsf-icon-facebook
            v-if="element.label.toLowerCase() === 'facebook'"
          ></vsf-icon-facebook>

          <vsf-icon-twitter
            v-if="element.label.toLowerCase() === 'twitter'"
          ></vsf-icon-twitter>

          <vsf-icon-pinterest
            v-if="element.label.toLowerCase() === 'pinterest'"
          ></vsf-icon-pinterest>

          <vsf-icon-you-tube
            v-if="element.label.toLowerCase() === 'youtube'"
          ></vsf-icon-you-tube>

          <vsf-icon-instagram
            v-if="element.label.toLowerCase() === 'instagram'"
          ></vsf-icon-instagram>
        </a>
      </div>
      <div class="flex justify-center gap-6 py-2 my-4 large:ml-auto large:my-0">
        <a
          class="text-sm font-normal leading-5 text-center text-white font-body"
          v-for="(element, index) in useVsfBottomLinksProp"
          :href="element.link"
          :key="`${element.label}-${index}`"
        >
          {{ element.label }}
        </a>
      </div>
      <span
        class="block py-2 text-sm font-normal leading-5 text-center text-white/50 font-body large:ml-6"
        >{{ useVsfCompanyNameProp }}</span
      >
    </div>
  </footer>
</template>

<script>
import VsfIconHelp from "../VsfIcons/VsfIconHelp.vue";
import VsfIconChat from "../VsfIcons/VsfIconChat.vue";
import VsfIconPhone from "../VsfIcons/VsfIconPhone.vue";
import VsfIconFacebook from "../VsfIcons/VsfIconFacebook.vue";
import VsfIconTwitter from "../VsfIcons/VsfIconTwitter.vue";
import VsfIconInstagram from "../VsfIcons/VsfIconInstagram.vue";
import VsfIconPinterest from "../VsfIcons/VsfIconPinterest.vue";
import VsfIconYouTube from "../VsfIcons/VsfIconYoutube.vue";
const DEFAULT_VALUES: Required<VsfFooterProps> = {
  categories: [],
  socialMedia: [],
  companyName: "",
  contactOptions: [],
  bottomLinks: [],
};

export default {
  name: "vsf-footer",
  components: {
    "vsf-icon-help": VsfIconHelp,
    "vsf-icon-chat": VsfIconChat,
    "vsf-icon-phone": VsfIconPhone,
    "vsf-icon-facebook": VsfIconFacebook,
    "vsf-icon-twitter": VsfIconTwitter,
    "vsf-icon-pinterest": VsfIconPinterest,
    "vsf-icon-you-tube": VsfIconYouTube,
    "vsf-icon-instagram": VsfIconInstagram,
  },
  props: [
    "categories",
    "socialMedia",
    "companyName",
    "contactOptions",
    "bottomLinks",
  ],

  computed: {
    useVsfCategoriesProp() {
      return this.categories || DEFAULT_VALUES.categories;
    },
    useVsfSocialMediaProp() {
      return this.socialMedia || DEFAULT_VALUES.socialMedia;
    },
    useVsfCompanyNameProp() {
      return this.companyName || DEFAULT_VALUES.companyName;
    },
    useVsfContactOptionsProp() {
      return this.contactOptions || DEFAULT_VALUES.contactOptions;
    },
    useVsfBottomLinksProp() {
      return this.bottomLinks || DEFAULT_VALUES.bottomLinks;
    },
  },
};
</script>
