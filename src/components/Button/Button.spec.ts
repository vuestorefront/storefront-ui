import { shallowMount } from "@vue/test-utils";
import Button from "@/components/Button/Button.vue";

describe("HelloWorld.vue", () => {

  it("renders a button", () => {
    const component = shallowMount(Button);
    expect(component.contains('button')).toBe(true);
  });

  it("renders default prop text when passed", () => {
    const msg = 'HelloWorld'
    const component = shallowMount(Button, {
      slots: {
        default: msg
      }
    });
    expect(component.find('.sf-button').text()).toMatch(msg);
  });

  it('adds sf-button--full-width class when full-width prop is present', () => {
    const component = shallowMount(Button, {
      propsData: {
        fullWidth: true
      }
    });
    expect(component.classes()).toContain('sf-button--full-width');
  })

  it('adds sf-button--secondary class when "color" prop is set to "secondary"', () => {
    const component = shallowMount(Button, {
      propsData: {
        color: "secondary"
      }
    });
    expect(component.classes()).toContain('sf-button--secondary');
  })
});
