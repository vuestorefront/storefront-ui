import RatingButton from "../../components/RatingButton/RatingButton.vue";

export default {
  title: "SFUI Components/RatingButton",
  component: RatingButton,
  parameters: {
    docs: {
      description: {        
        component:
          "The rating button component. [link to component docs on the page]",
      },
    },
  },
};

const Template = () => ({
  components: { RatingButton },
  template: `
      <RatingButton />
    `
});

export const Common = Template.bind({});