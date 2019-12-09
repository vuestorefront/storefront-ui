/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, optionsKnob as options } from "@storybook/addon-knobs";
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

const eventsModifiers = {
  tableHeadConfig: ["NAME", "DESCRIPTION"],
  tableBodyConfig: [
    [
      ".sf-bottom-navigation__item--active",
      "set sf-bottom-navigation__item to active"
    ]
  ]
};

storiesOf("Organisms|BottomNavigation", module)
  .addDecorator(withKnobs)
  .add(
    "[slot] default",
    () => ({
      components: { SfBottomNavigation, SfIcon, SfCircleIcon },
      props: {
        customClass: {
          default: options(
            "CSS Modifiers",
            {
              "sf-bottom-navigation__item--active":
                "sf-bottom-navigation__item--active"
            },
            "sf-bottom-navigation__item--active",
            { display: "multi-select" }
          )
        }
      },
      template: `<SfBottomNavigation>
        <SfBottomNavigationItem>
          <SfIcon icon="home" size="20px"/>
        </SfBottomNavigationItem>
        <SfBottomNavigationItem>
          <SfIcon icon="menu" size="20px" style="width: 25px" />
        </SfBottomNavigationItem>
        <SfBottomNavigationItem :class="customClass">
          <SfIcon icon="heart" size="20px"/>
        </SfBottomNavigationItem>
        <SfBottomNavigationItem>
          <SfIcon icon="profile" size="20px"/>
        </SfBottomNavigationItem>
        <SfBottomNavigationItem>
          <SfCircleIcon class="sf-bottom-navigation__floating-icon">
            <SfIcon icon="add_to_cart" size="20px" color="white" style="margin-left: -2px; margin-right: 2px;"/>
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
       ${generateStorybookTable(eventsTableConfig, "Events")}
       ${generateStorybookTable(eventsModifiers, "CSS Modifiers")}`
      }
    }
  );
