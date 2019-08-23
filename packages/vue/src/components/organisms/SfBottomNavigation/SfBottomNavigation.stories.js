// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import SfCircleIcon from "../../atoms/SfCircleIcon/SfCircleIcon.vue";
import SfBottomNavigation from "./SfBottomNavigation.vue";

// use this to document scss vars
const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [["$component-size", "1.438rem", "size of checkmark"]]
};

// use this to document events
const eventsTableConfig = {
  tableHeadConfig: ["NAME", "DESCRIPTION"],
  tableBodyConfig: [["input", "event emited when option is selected"]]
};

storiesOf("Molecules|BottomNavigation", module)
  .addDecorator(withKnobs)
  .add(
    "[slot] default",
    () => ({
      components: { SfBottomNavigation, SfIcon, SfCircleIcon },
      template: `<SfBottomNavigation
      >
        <SfBottomNavigationItem>
          <SfIcon path="home" size="20px"/>
        </SfBottomNavigationItem>
        <SfBottomNavigationItem>
          <SfIcon path="menu" size="20px" style="width: 25px" />
        </SfBottomNavigationItem>
        <SfBottomNavigationItem>
          <SfIcon path="heart" size="20px"/>
        </SfBottomNavigationItem>
        <SfBottomNavigationItem>
          <SfIcon path="profile" size="20px"/>
        </SfBottomNavigationItem>
        <SfBottomNavigationItem>
          <SfCircleIcon class="sf-bottom-navigation__floating-icon sf-circle-icon--big">
            <SfIcon path="add_to_cart" size="20px" color="white" style="margin-right: 4px;"/>
          </SfCircleIcon>
        </SfBottomNavigationItem>
      </SfBottomNavigation>`
    }),
    {
      info: {
        summary: `<p>Component description.</p>
       <h2>Usage</h2>
       <pre><code>import { SfBottomNavigation } from "@storefront-ui/vue"</code></pre>
       ${generateStorybookTable(scssTableConfig, "SCSS variables")}
       ${generateStorybookTable(eventsTableConfig, "Events")}`
      }
    }
  );
