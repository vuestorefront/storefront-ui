import { shallowMount } from "@vue/test-utils";
import Button from "@/components/Button/Button.vue";

describe("HelloWorld.vue", () => {
  it("renders a button", () => {
    const component = shallowMount(Button);
    expect(component.contains("button")).toBe(true);
  });

  it("renders default prop text when passed", () => {
    const msg = "HelloWorld";
    const component = shallowMount(Button, {
      slots: {
        default: msg
      }
    });
    expect(component.find(".sf-button").text()).toMatch(msg);
  });
});
