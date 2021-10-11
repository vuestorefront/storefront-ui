import { addons } from "@storybook/addons";
import theme from "./theme.js";
import "./util/source-addon";

addons.setConfig({
  theme: theme,
});
