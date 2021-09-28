import { shallowMount } from "@vue/test-utils"
import SfShipping from "./SfShipping.vue"
describe("SfShipping.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfShipping)
    expect(component.classes("sf-shipping")).toBe(true)
  })
})
