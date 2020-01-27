import { shallowMount } from "@vue/test-utils";
import SfContentPage from "./SfContentPage.vue";
describe("SfContentPage.vue", () => {
  it("renders a component", () => {
    const component = shallowMount({
      template: '<SfContentPage class="sf-content-page" title="jest"/>',
      components: {
        SfContentPage
      },
      data() {
        return {
          items: []
        };
      },
      provide: {
        provided: {
          active: "jest"
        }
      }
    });
    expect(component.contains(".sf-content-page")).toBe(true);
  });
});
