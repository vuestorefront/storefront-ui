import { mount, createLocalVue } from "@vue/test-utils";
import SfContentPages from "@/components/organisms/SfContentPages/SfContentPages.vue";
import SfContentPage from "./_internal/SfContentPage.vue";
const localVue = createLocalVue();
localVue.component("SfContentPage", SfContentPage, {
  inject: ["provided"],
});
describe("SfContentPages.vue", () => {
  it("renders a component", () => {
    const component = mount(SfContentPages, {
      localVue,
      provide: {
        provided() {
          return { active: "true" };
        },
      },
    });
    expect(component.classes("sf-content-pages")).toBe(true);
  });
});
