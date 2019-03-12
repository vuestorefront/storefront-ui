import { shallowMount } from "@vue/test-utils";
import Button from "@/components/Button/Button.vue";

describe("HelloWorld.vue", () => {
  let component
  beforeEach(() => {
    component = shallowMount(Button, {
      slots: {
        default: "Hello World!"
      }
    });
  });

  it("renders prop text when passed", () => {
    expect(component.find('Hello World')).toBe(true);
  });
});
