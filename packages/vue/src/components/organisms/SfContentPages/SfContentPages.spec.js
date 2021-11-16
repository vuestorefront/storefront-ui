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

  it("marks menu-item slot as active when active and page.title casing differs", () => {
    const component = mount(SfContentPages, {
      propsData: {
        active: "My Title",
      },
      data() {
        return {
          items: [{ title: "my title" }],
        };
      },
    });

    const menuItem = component.find(".sf-content-pages__menu");
    expect(menuItem.classes()).toContain("is-active");
  });
});
