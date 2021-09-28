import { shallowMount } from "@vue/test-utils"
import SfOrderHistory from "./SfOrderHistory.vue"
describe("SfOrderHistory.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfOrderHistory)
    expect(component.classes("sf-order-history")).toBe(true)
  })
})
