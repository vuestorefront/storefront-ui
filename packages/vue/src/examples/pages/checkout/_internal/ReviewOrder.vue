<template>
  <div>
    <SfHeading
      title="4. Order details"
      class="sf-heading--left sf-heading--no-underline title"
    />
    <SfTable>
      <SfTableRow class="sf-table__row--header">
        <SfTableHeader v-for="tableHeader in tableHeaders" :key="tableHeader">{{
          tableHeader
        }}</SfTableHeader>
        <SfTableHeader></SfTableHeader>
      </SfTableRow>
      <SfTableRow>
        <SfTableData>
          SfImage
        </SfTableData>
        <SfTableData>
          <div>Summer Bag</div>
          <div>MSD23-345-324</div>
        </SfTableData>
        <SfTableData>Cream</SfTableData>
        <SfTableData>One size</SfTableData>
        <SfTableData>1</SfTableData>
        <SfTableData>$50</SfTableData>
        <SfTableData>SfIcon</SfTableData>
      </SfTableRow>
      <SfTableRow>
        <SfTableData>
          SfImage
        </SfTableData>
        <SfTableData>
          <div>Summer Bag</div>
          <div>MSD23-345-324</div>
        </SfTableData>
        <SfTableData>Cream</SfTableData>
        <SfTableData>One size</SfTableData>
        <SfTableData>1</SfTableData>
        <SfTableData>$50</SfTableData>
        <SfTableData>SfIcon</SfTableData>
      </SfTableRow>
    </SfTable>
    <div>
      <SfCheckbox>
        <template #label>
          <div class="sf-checkbox__label">
            I agree to <a href="#">Terms and conditions</a>
          </div>
        </template>
      </SfCheckbox>
      <div class="summary"></div>
    </div>
    <div class="form">
      <SfButton class="sf-button--text form__action form__action--left"
        >Go back to Payment</SfButton
      >
      <SfButton>Place my order</SfButton>
    </div>
  </div>
</template>
<script>
import {
  SfHeading,
  SfTable,
  SfCheckbox,
  SfButton
} from "../../../../../index.js";
export default {
  name: "ReviewOrder",
  components: { SfHeading, SfTable, SfCheckbox, SfButton },
  data() {
    return {
      tableHeaders: [
        "Item",
        "Description",
        "Colour",
        "Size",
        "Quantity",
        "Amount"
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
@mixin for-desktop {
  @media screen and (min-width: $desktop-min) {
    @content;
  }
}
.form {
  @include for-desktop {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  &__action {
    flex: none;
    margin-left: auto;
    &--left {
      margin-left: unset;
      margin-right: auto;
    }
  }
}
</style>
