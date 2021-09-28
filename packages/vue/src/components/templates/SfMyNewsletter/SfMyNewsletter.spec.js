import { shallowMount } from "@vue/test-utils"
import SfMyNewsletter from "./SfMyNewsletter.vue"
describe("SfMyNewsletter.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfMyNewsletter)
    expect(component.classes("sf-my-account-content")).toBe(true)
  })
})
