import { shallowMount } from "@vue/test-utils"
import SfShippingDetails from "./SfShippingDetails.vue"
describe("SfShippingDetails.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfShippingDetails)
    expect(component.classes("sf-shipping-details")).toBe(true)
  })
})
