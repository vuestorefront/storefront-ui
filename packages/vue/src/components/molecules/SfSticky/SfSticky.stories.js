import { SfSticky } from "@storefront-ui/vue";
export default {
  title: "Components/Molecules/Sticky",
  component: SfSticky,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "sticky-position": { value: "", control: "text" },
      "sticky-top": { value: "", control: "text" },
      "sticky-bottom": { value: "", control: "text" },
    },
    // end of code generated automatically
    docs: {
      description: {
        component: "Applies sticky property to the component.",
      },
    },
  },
  decorators: [
    () => ({
      template: `
    <div style="display: flex;">
      <div style="flex: 1; margin-right: 1.25rem">
        <div style="height: 25rem; border: 1px solid #f2f2f2;"></div>
        <div style="height: 25rem; margin-top: 1.25rem; border: 1px solid #f2f2f2;"></div>
      </div>
      <div style="flex: 1">
        <story/>
      </div>
    </div>`,
    }),
  ],
};

const Template = (args, { argTypes }) => ({
  components: { SfSticky },
  props: Object.keys(argTypes),
  template: `
    <SfSticky>
      <div style="display: flex; flex: 1; align-items:center; justify-content:center; height: 18.75rem; background-color: #f2f2f2;">
        [#default slot content]
      </div>
    </SfSticky>`,
});

export const Common = Template.bind({});
Common.args = {};
