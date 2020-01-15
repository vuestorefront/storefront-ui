import { shallowMount, createLocalVue } from "@vue/test-utils";
import SfContentPages from "@/components/organisms/SfContentPages/SfContentPages.vue";
import SfContentPage from "./_internal/SfContentPage.vue";

const v = createLocalVue();
v.component("SfContentPage", SfContentPage, {
  inject: ["provided"]
});

describe("SfContentPages.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfContentPages, {
      provide: {
        provided() {
          return { active: "true" };
        }
      }
    });
    expect(component.contains(".sf-content-pages")).toBe(true);
  });
});
