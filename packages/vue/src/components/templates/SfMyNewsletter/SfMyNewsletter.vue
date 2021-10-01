<template>
  <SfTabs :open-tab="1" class="sf-my-newsletter tab-orphan">
    <SfTab :title="tabTitle" data-testid="newsletter-tab">
      <slot name="tab-description" v-bind="{ tabDescription }">
        <p class="message">
          {{ tabDescription }}
        </p>
      </slot>
      <div class="form">
        <p class="form__title">{{ formTitle }}</p>
        <slot name="form" v-bind="{ newsletterSections }">
          <div class="form__checkbox-group">
            <SfCheckbox
              v-for="(name, i) in newsletterSections"
              :key="`${name}-${i}`"
              v-model="newsletter"
              :label="name"
              :name="name"
              :value="name"
              class="form__element"
              @change="$emit('checkbox-clicked', name)"
            />
          </div>
        </slot>
        <slot name="form-button" v-bind="{ buttonText }">
          <SfButton
            class="form__button"
            data-testid="save-changes-button"
            @click="$emit('save-changes', newsletter)"
            >{{ buttonText }}</SfButton
          >
        </slot>
      </div>
      <slot name="notice">
        <p class="notice">
          I have read and understand the <a href="#">Privacy</a> and
          <a href="#">Cookies Policy</a> and agree to receive personalized
          commercial information from Brand name by email.
        </p>
      </slot>
    </SfTab>
  </SfTabs>
</template>
<script>
import { SfTabs, SfCheckbox, SfButton } from "@storefront-ui/vue";
export default {
  name: "SfMyNewsletter",
  components: { SfTabs, SfCheckbox, SfButton },
  props: {
    tabTitle: {
      type: String,
      default: "My newsletter",
    },
    tabDescription: {
      type: String,
      default:
        "Set up your newsletter and we will send you information about new products and trends from the sections you selected every week.",
    },
    formTitle: {
      type: String,
      default: "Sections that interest you",
    },
    buttonText: {
      type: String,
      default: "Save changes",
    },
    newsletterSections: {
      type: Array,
      default: () => ["Woman", "Man", "Children"],
    },
  },
  data() {
    return {
      newsletter: [],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/shared/styles/components/templates/SfMyNewsletter.scss";
</style>
