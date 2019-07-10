import { shallowMount } from "@vue/test-utils";
import SfHero from "./SfHero.vue";
import SfHeroItem from "./_internal/SfHeroItem.vue";
import SfArrow from "../../atoms/SfArrow/SfArrow.vue";
import SfBullets from "../../atoms/SfBullets/SfBullets.vue";

const items = [
  {
    title: "title_1",
    subtitle: "subtitle_1",
    buttonText: "button_1",
    background: "#eceff1",
    image: "https://i.ibb.co/6HS24vc/hero-bg-removebg-preview.png"
  },
  {
    title: "title_2",
    subtitle: "subtitle_2",
    buttonText: "button_2",
    background: "#eceff1",
    image: "https://i.ibb.co/6HS24vc/hero-bg-removebg-preview.png"
  },
  {
    title: "title_3",
    subtitle: "subtitle_3",
    buttonText: "button_3",
    background: "#eceff1",
    image: "https://i.ibb.co/6HS24vc/hero-bg-removebg-preview.png"
  }
];
const singleItem = [
  {
    title: "title_single",
    subtitle: "subtitle_single",
    buttonText: "button_single",
    background: "#eceff1",
    image: "https://i.ibb.co/6HS24vc/hero-bg-removebg-preview.png"
  }
];

describe("SfHero.vue", () => {
  describe("with items array passed as props", () => {
    it("renders a component", () => {
      const component = shallowMount(SfHero, {
        propsData: {
          items
        }
      });
      expect(component.contains(".sf-hero")).toBe(true);
    });

    it("renders three SfHeroItem components when passed three items", () => {
      const component = shallowMount(SfHero, {
        propsData: {
          items
        }
      });
      expect(component.findAll(SfHeroItem)).toHaveLength(items.length);
    });

    it("renders two SfArrow components", () => {
      const component = shallowMount(SfHero, {
        propsData: {
          items
        }
      });
      expect(component.findAll(SfArrow)).toHaveLength(2);
    });

    it("doesn't render any SfArrow components if only one item passed as prop", () => {
      const component = shallowMount(SfHero, {
        propsData: {
          items: singleItem
        }
      });
      expect(component.findAll(SfArrow)).toHaveLength(0);
    });

    it("renders SfBullets component", () => {
      const component = shallowMount(SfHero, {
        propsData: {
          items
        }
      });
      expect(component.findAll(SfBullets)).toHaveLength(1);
    });

    it("doesn't render SfBullets component if only one item passed as prop", () => {
      const component = shallowMount(SfHero, {
        propsData: {
          items: singleItem
        }
      });
      expect(component.findAll(SfBullets)).toHaveLength(0);
    });

    it("calls #go with 'prev' when clicked on left arrow", () => {
      const component = shallowMount(SfHero, {
        propsData: {
          items
        }
      });
      jest.spyOn(component.vm, "go");
      expect(component.vm.go).not.toHaveBeenCalled();
      component
        .findAll(SfArrow)
        .at(0)
        .trigger("click");
      expect(component.vm.go).toHaveBeenCalledWith("prev");
    });

    it("calls #go with 'next' when clicked on right arrow", () => {
      const component = shallowMount(SfHero, {
        propsData: {
          items
        }
      });
      jest.spyOn(component.vm, "go");
      expect(component.vm.go).not.toHaveBeenCalled();
      component
        .findAll(SfArrow)
        .at(1)
        .trigger("click");
      expect(component.vm.go).toHaveBeenCalledWith("next");
    });

    it("renders 'prev' and 'next' slots instead of SfArrow", () => {
      const component = shallowMount(SfHero, {
        propsData: {
          items
        },
        slots: {
          prev: "<div class='forPrevSlot'></div>",
          next: "<div class='forNextSlot'></div>"
        }
      });
      expect(component.findAll(".forPrevSlot")).toHaveLength(1);
      expect(component.findAll(".forNextSlot")).toHaveLength(1);
      expect(component.findAll(SfArrow)).toHaveLength(0);
    });

    it("calls #go with 'prev' when clicked on 'prev' slot", () => {
      const component = shallowMount(SfHero, {
        propsData: {
          items
        },
        slots: {
          prev: "<div class='forPrevSlot'></div>"
        }
      });
      jest.spyOn(component.vm, "go");
      expect(component.vm.go).not.toHaveBeenCalled();
      component.find(".forPrevSlot").trigger("click");
      expect(component.vm.go).toHaveBeenCalledWith("prev");
    });

    it("calls #go with 'next' when clicked on 'next' slot", () => {
      const component = shallowMount(SfHero, {
        propsData: {
          items
        },
        slots: {
          next: "<div class='forNextSlot'></div>"
        }
      });
      jest.spyOn(component.vm, "go");
      expect(component.vm.go).not.toHaveBeenCalled();
      component.find(".forNextSlot").trigger("click");
      expect(component.vm.go).toHaveBeenCalledWith("next");
    });
  });

  describe("with using default slot", () => {
    it("renders SfHeroItem component", () => {
      const component = shallowMount(SfHero, {
        slots: {
          default: "<SfHeroItem></SfHeroItem>"
        }
      });
      expect(component.findAll(SfHeroItem)).toHaveLength(1);
    });
  });
});
