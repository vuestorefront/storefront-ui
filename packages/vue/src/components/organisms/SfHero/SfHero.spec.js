import { shallowMount } from "@vue/test-utils";
import SfHero from "./SfHero.vue";
import SfHeroItem from "./_internal/SfHeroItem.vue";
import SfArrow from "../../atoms/SfArrow/SfArrow.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";
import SfBullets from "../../atoms/SfBullets/SfBullets.vue";
const items = [
  {
    title: "title_1",
    subtitle: "subtitle_1",
    buttonText: "button_1",
    background: "#eceff1",
    image: "https://i.ibb.co/6HS24vc/hero-bg-removebg-preview.png",
  },
  {
    title: "title_2",
    subtitle: "subtitle_2",
    buttonText: "button_2",
    background: "#eceff1",
    image: "https://i.ibb.co/6HS24vc/hero-bg-removebg-preview.png",
  },
  {
    title: "title_3",
    subtitle: "subtitle_3",
    buttonText: "button_3",
    background: "#eceff1",
    image: "https://i.ibb.co/6HS24vc/hero-bg-removebg-preview.png",
  },
];
const defaultSlot = `
<template>
  <div v-for="(item, index) in items">
    <SfHeroItem
      :title="item.title"
      :subtitle="item.subtitle"
      :buttonText="item.buttonText"
      :background="item.background"
      :image="item.image"
    />
  </div>
</template>`;
describe("SfHero.vue", () => {
  describe("with items array passed as props", () => {
    let component;
    beforeEach(() => {
      component = shallowMount(SfHero, {
        mocks: {
          items,
        },
        slots: {
          default: defaultSlot,
        },
      });
    });
    afterEach(() => {
      component.destroy();
    });
    it("renders a component", () => {
      expect(component.classes("sf-hero")).toBe(true);
    });
    it("renders three SfHeroItem components when passed three items", () => {
      expect(component.findAllComponents(SfHeroItem)).toHaveLength(
        items.length
      );
    });
    it("renders two SfArrow components", () => {
      expect(component.findAllComponents(SfArrow)).toHaveLength(2);
    });
    it("renders SfBullets component", () => {
      expect(component.findAllComponents(SfBullets)).toHaveLength(1);
    });
  });
  describe("with 'prev' and 'next' slots populated", () => {
    let component;
    beforeEach(() => {
      component = shallowMount(SfHero, {
        mocks: {
          items,
        },
        slots: {
          default: defaultSlot,
        },
        scopedSlots: {
          prev: `<button class="forPrevSlot" @click="props.go()"></button>`,
          next: `<button class='forNextSlot' @click="props.go()"></button>`,
        },
      });
    });
    afterEach(() => {
      component.destroy();
    });
    it("renders 'prev' and 'next' slots instead of SfArrow", () => {
      jest.spyOn(component.vm, "go");
      expect(component.vm.go).not.toHaveBeenCalled();
      expect(component.find(".forPrevSlot").exists()).toBe(true);
      expect(component.find(".forNextSlot").exists()).toBe(true);
      expect(component.findAllComponents(SfArrow)).toHaveLength(0);
    });
    it("calls #go with 'prev' when clicked on 'prev' slot", () => {
      jest.spyOn(component.vm, "go");
      expect(component.vm.go).not.toHaveBeenCalled();
      component.find(".forPrevSlot").trigger("click");
      expect(component.vm.go).toHaveBeenCalledWith("prev");
    });
    it("calls #go with 'next' when clicked on 'next' slot", () => {
      jest.spyOn(component.vm, "go");
      expect(component.vm.go).not.toHaveBeenCalled();
      component.find(".forNextSlot").trigger("click");
      expect(component.vm.go).toHaveBeenCalledWith("next");
    });
  });
  describe("with items array of length 1 passed as props", () => {
    let component;
    beforeEach(() => {
      component = shallowMount(SfHero, {
        mocks: {
          items: [items[0]],
        },
        slots: {
          default: defaultSlot,
        },
      });
    });
    afterEach(() => {
      component.destroy();
    });
    it("doesn't render any SfArrow components if only one item passed as prop", () => {
      expect(component.findAllComponents(SfArrow)).toHaveLength(0);
    });
    it("doesn't render SfBullets component if only one item passed as prop", () => {
      expect(component.findAllComponents(SfBullets)).toHaveLength(0);
    });
  });
  describe("with using default slot", () => {
    it("renders SfHeroItem component", () => {
      const component = shallowMount(SfHero, {
        slots: {
          default: "<SfHeroItem></SfHeroItem>",
        },
      });
      expect(component.findAllComponents(SfHeroItem)).toHaveLength(1);
    });
  });
});
