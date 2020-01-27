import { shallowMount } from "@vue/test-utils";
import SfCharacteristic from "./SfCharacteristic.vue";
describe.only("SfCharacteristic.vue", () => {
  it("renders a characteristic", () => {
    const component = shallowMount(SfCharacteristic);
    expect(component.contains(".sf-characteristic")).toBe(true);
  });
  it("renders slot with icon when passed", () => {
    const icon = "<svg class='sf-characteristic'></svg>";
    const component = shallowMount(SfCharacteristic, {
      slots: {
        icon
      }
    });
    expect(component.contains(".sf-characteristic")).toBe(true);
  });
  it("renders slot with icon when passed", () => {
    const title = "<p class='sf-characteristic__title'></p>";
    const component = shallowMount(SfCharacteristic, {
      slots: {
        title
      }
    });
    expect(component.contains(".sf-characteristic__title")).toBe(true);
  });
  it("renders slot with icon when passed", () => {
    const description = "<p class='sf-characteristic__description'></p>";
    const component = shallowMount(SfCharacteristic, {
      slots: {
        description
      }
    });
    expect(component.contains(".sf-characteristic__description")).toBe(true);
  });
});
