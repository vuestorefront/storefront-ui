<template>
  <div>
    <slot>
      <ul class="sf-tabs-navigation__list">
        <li
          v-for="tab in sharedState.tabs"
          :key="tab.valueComputed"
          class="sf-tabs-navigation__item"
          @click="changeTab(tab.valueComputed)"
          :class="{
            'sf-tabs-navigation--active':
              sharedState.activeTab === tab.valueComputed
          }"
        >
          <slot
            name="item"
            :tab="tab"
            :changeTab="changeTab"
            :isActive="sharedState.activeTab === tab.valueComputed"
          >
            <p v-text="tab.title" />
          </slot>
        </li>
      </ul>
    </slot>
  </div>
</template>

<script>
export default {
  name: "SFTabsNavigation",
  inject: ["changeTab", "sharedState"]
};
</script>

<style lang="scss">
@import "../../../../css/variables";

$sf-tabs-navigation-color: $c-light-primary;
$sf-tabs-navigation-color-hover: $c-gray-secondary;

.sf-tabs-navigation {
  &__list {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    font-weight: 500;
    padding: 0;
  }

  &__item {
    list-style-type: none;
    flex: 1;
    padding: 20px;
    color: $sf-tabs-navigation-color;
    border-bottom: 2px solid $sf-tabs-navigation-color;
    cursor: pointer;

    &:hover:not(.sf-tabs-navigation--active) {
      color: $sf-tabs-navigation-color-hover;
      border-bottom: 2px solid $sf-tabs-navigation-color-hover;
      opacity: 0.7;
    }

    p {
      margin: 0;
    }
  }

  &--active {
    border-bottom: 2px solid black;
    color: black;
  }
}
</style>
