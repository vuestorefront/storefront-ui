import { storiesOf } from "@storybook/vue";

import SfFilterItem from "./_internal/SfFilterItem.vue";
import SfList from "@/components/organisms/SfList/SfList.vue";

import { withKnobs, text, select } from "@storybook/addon-knobs";

export default storiesOf("Molecules|[WIP] Filter", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      components: { SfFilterItem },
      props: {
        title: {
          default: text("label (prop)", "Label prop")
        },
        count: {
          default: text("count (prop)", "30")
        },
        color: {
          default: select("color (prop)", ["red", "null"], "red")
        }
      },
      template: `
      <div style="width: 300px">
        <SfFilterItem
          :color="color"
          :label="title"
          :count="count"
        />
      </div>
    `
    }),
    {
      info: {
        summary:
          "This component should be used for filtering products on listings."
      }
    }
  )
  .add(
    "As grouped lists",
    () => ({
      components: { SfFilterItem, SfList },
      props: {
        title: {
          default: text("label (prop)", "Label prop")
        },
        count: {
          default: text("count (prop)", "30")
        }
      },
      data() {
        return {
          filters: {
            colors: null,
            collection: null
          }
        };
      },
      template: `
      <div style="width: 300px">
        <h3>Collection</h3>
        <span v-if="filters.collection"> Active filter: {{ filters.collection }} </span> 
        <span v-else>No filter active </span>
        <SfList>
          <SfListItem>
            <SfFilterItem :group.sync="filters.collection" label="Summer fly" value="summer-fly" count="10" />
          </SfListItem>
          <SfListItem>
            <SfFilterItem :group.sync="filters.collection" label="Best 2018" value="best-2018" count="23" />
          </SfListItem>
          <SfListItem>
            <SfFilterItem :group.sync="filters.collection" label="Your choice" value="your-choice" count="54" />
          </SfListItem>
        </SfList>

        <h3>Color</h3>
        <span v-if="filters.color"> Active filter: {{ filters.color }} </span> 
        <span v-else>No filter active </span>
        <SfList>
          <SfListItem>
            <SfFilterItem :group.sync="filters.color" label="Red" value="red" color="#990611" />
          </SfListItem>
          <SfListItem>
            <SfFilterItem :group.sync="filters.color" label="Yellow" value="yellow" color="#DCA742" />
          </SfListItem>
          <SfListItem>
            <SfFilterItem :group.sync="filters.color" label="Black" value="black" color="black" />
          </SfListItem>
          <SfListItem>
            <SfFilterItem :group.sync="filters.color" label="Blue" value="blue" color="#004F97" />
          </SfListItem>
          <SfListItem>
            <SfFilterItem :group.sync="filters.color" label="White" value="white" color="white" />
          </SfListItem>
        </SfList>
      </div>
    `
    }),
    {
      info: true
    }
  );
