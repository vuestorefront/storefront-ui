import { shallowMount } from "@vue/test-utils";
import SfLoyaltyCard from "./SfLoyaltyCard.vue";
describe("SfLoyaltyCard.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfLoyaltyCard);
    expect(component.classes("sf-loyalty-card")).toBe(true);
  });
});
