import MyAccount from "./MyAccount";

export default {
  title: "Pages|My account",
};

export const Common = () => ({
  components: { MyAccount },
  template: `<MyAccount />`,
});
