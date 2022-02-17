import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import SfLink from "./SfLink.vue";
const localVue = createLocalVue();
localVue.use(VueRouter);
const routes = [
  {
    path: "/",
    component: SfLink,
  },
];
const router = new VueRouter({
  routes,
});

describe("SfLink.vue", () => {
  it("renders component with defaults", () => {
    const wrapper = shallowMount(SfLink, {
      propsData: {
        link: "/",
      },
    });
    expect(wrapper.classes("sf-link")).toBe(true);
  });

  it("renders component with internal link", () => {
    const wrapper = mount(SfLink, {
      localVue,
      router,
      propsData: {
        link: "/home",
      },
    });
    expect(wrapper.classes("sf-link")).toBe(true);
  });
  it("renders component with external link", () => {
    const wrapper = mount(SfLink, {
      localVue,
      router,
      propsData: {
        link: "www.example.com",
      },
    });
    expect(wrapper.classes("sf-link")).toBe(true);
  });
});
