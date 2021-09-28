import { shallowMount } from "@vue/test-utils"
import SfMyProfile from "./SfMyProfile.vue"
describe("SfMyProfile.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfMyProfile)
    expect(component.classes("sf-my-profile")).toBe(true)
  })
})
