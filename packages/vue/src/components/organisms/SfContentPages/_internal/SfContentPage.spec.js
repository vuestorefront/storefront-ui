import { shallowMount } from "@vue/test-utils";
import SfContentPage from "./SfContentPage.vue";
import SfContentPages from "../SfContentPages.vue";

describe("SfContentPage.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfContentPage, {
      parentComponent: SfContentPages,
      inject: ["provided"],
      provide: {
        provided() {
          return { active: "" };
        }
      },
      propsData: {
        title: ""
      }
    });
    expect(component.contains(".sf-content-page")).toBe(true);
  });
});
