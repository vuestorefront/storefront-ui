// import Vue from "vue";
// import { mount } from "@vue/test-utils";
// import SfTabs from "./SfTabs.vue";

// describe("SfTabs.vue", () => {
//   it("checks if navigation is rendered when passed tab", () => {
//     const component = mount(SfTabs, {
//       slots: {
//         default: `<SfTab title="test-title"><div class="test-class">test-content</div></SfTab>`
//       }
//     });

//     expect(component.find(".sf-tabs-navigation").exists()).toBe(true);
//   });

//   it("checks if Tab slot is passed correctly", () => {
//     const component = mount(SfTabs, {
//       slots: {
//         default: `<SfTab title="test-title"><p class="test-class">test-content</p></SfTab>`
//       }
//     });

//     return Vue.nextTick().then(() => {
//       expect(component.find(".test-class").text()).toMatch("test-content");
//     });
//   });

//   it("check if navigation contains title passed in tab", () => {
//     const component = mount(SfTabs, {
//       slots: {
//         default: `<SfTab title="test-title"><p class="test-class">test-content</p></SfTab>`
//       }
//     });

//     expect(component.find(".sf-tabs-navigation__item").text()).toMatch(
//       "test-title"
//     );
//   });

//   it("checks if quantity of passed tabs is equal to navigation items", () => {
//     const component = mount(SfTabs, {
//       slots: {
//         default: [
//           `<SfTab title="one">one</SfTab>`,
//           `<SfTab title="two">two</SfTab>`,
//           `<SfTab title="three">three</SfTab>`,
//           `<SfTab title="four">four</SfTab>`
//         ]
//       }
//     });

//     return Vue.nextTick().then(() => {
//       expect(component.findAll(".sf-tabs-navigation__item").length).toBe(4);
//     });
//   });

//   it("renders component with custom navigation", () => {
//     const component = mount(SfTabs, {
//       slots: {
//         default: [
//           `<SfTab title="one">one</SfTab>`,
//           `<SfTab title="two">two</SfTab>`,
//           `<SfTab title="three">three</SfTab>`,
//           `<SfTab title="four">four</SfTab>`
//         ]
//       },
//       scopedSlots: {
//         navigation: `
//           <SfTabsNavigation>
//             <div slot-scope="{ tabs, activeTabValue }">
//               <p v-for="tab in tabs" class="custom-nav-item">{{ tab.title }}</p>
//             </div>
//           </SfTabsNavigation>
//         `
//       }
//     });

//     return Vue.nextTick().then(() => {
//       expect(component.findAll(".custom-nav-item").length).toBe(4);
//     });
//   });

//   it("checks if one item is active by default", () => {
//     const component = mount(SfTabs, {
//       slots: {
//         default: [
//           `<SfTab title="one">one</SfTab>`,
//           `<SfTab title="two">two</SfTab>`,
//           `<SfTab title="three">three</SfTab>`,
//           `<SfTab title="four">four</SfTab>`
//         ]
//       }
//     });

//     return Vue.nextTick().then(() => {
//       expect(component.findAll(".sf-tabs-navigation--active").length).toBe(1);
//     });
//   });
// });
