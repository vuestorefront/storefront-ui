import { mount } from "@vue/test-utils";
import SfHeroItem from "./SfHeroItem.vue";
import SfButton from "../../../atoms/SfButton/SfButton";
const title = "title_single";
const subtitle = "subtitle_single";
const buttonText = "button_single";
const background = "rgb(236, 239, 241)";
const image = "https://i.ibb.co/6HS24vc/hero-bg-removebg-preview.png";
describe("SfHeroItem.vue", () => {
  describe("with items passed as props", () => {
    let component;
    beforeEach(() => {
      component = mount(SfHeroItem, {
        propsData: {
          title,
          subtitle,
          buttonText,
          background,
          image,
        },
      });
    });
    afterEach(() => {
      component.destroy();
    });
    it("renders a component", () => {
      expect(component.classes("sf-hero-item")).toBe(true);
    });
    it("renders title correctly", () => {
      expect(component.text()).toContain(title);
    });
    it("renders subtitle correctly", () => {
      expect(component.text()).toContain(subtitle);
    });
    it("renders SfButton correctly", () => {
      expect(component.findComponent(SfButton).text()).toContain(buttonText);
    });
  });
  describe("with items passed through slots", () => {
    let component;
    beforeEach(() => {
      component = mount(SfHeroItem, {
        slots: {
          title: `<div>${title}</div>`,
          subtitle: `<div>${subtitle}</div>`,
          "call-to-action": `<div>halabala</div>`,
        },
      });
    });
    afterEach(() => {
      component.destroy();
    });
    it("renders 'title' slot correctly", () => {
      expect(component.text()).toContain(title);
    });
    it("renders 'subtitle' slot correctly", () => {
      expect(component.text()).toContain(subtitle);
    });
    it("renders 'call-to-action' slot correctly", () => {
      expect(component.text()).toContain("halabala");
    });
  });
});
