import { createApp } from "vue";
import App from "./App.vue";

import SfSelectOption from './components/molecules/SfSelect/_internal/SfSelectOption.vue'
import SfStep from './components/molecules/SfSteps/_internal/SfStep.vue'
import SfAccordionItem from './components/organisms/SfAccordion/_internal/SfAccordionItem.vue'
import SfBottomNavigationItem from './components/organisms/SfBottomNavigation/_internal/SfBottomNavigationItem.vue'
import SfCarouselItem from './components/organisms/SfCarousel/_internal/SfCarouselItem.vue'
import SfContentPage from './components/organisms/SfContentPages/_internal/SfContentPage.vue'
import SfContentCategory from './components/organisms/SfContentPages/_internal/SfContentCategory.vue'
import SfFooterColumn from './components/organisms/SfFooter/_internal/SfFooterColumn.vue'
import SfGroupedProductItem from './components/organisms/SfGroupedProduct/_internal/SfGroupedProductItem.vue'
import SfHeaderNavigationItem from './components/organisms/SfHeader/_internal/SfHeaderNavigationItem.vue'
import SfHeroItem from './components/organisms/SfHero/_internal/SfHeroItem.vue'
import SfListItem from './components/organisms/SfList/_internal/SfListItem.vue'
import SfMegaMenuColumn from './components/organisms/SfMegaMenu/_internal/SfMegaMenuColumn.vue'
import SfTableRow from './components/organisms/SfTable/_internal/SfTableRow.vue'
import SfTableData from './components/organisms/SfTable/_internal/SfTableData.vue'
import SfTableHeader from './components/organisms/SfTable/_internal/SfTableHeader.vue'
import SfTableHeading from './components/organisms/SfTable/_internal/SfTableHeading.vue'
import SfTabs from './components/organisms/SfTabs/_internal/SfTab.vue'

const app = createApp(App)

app.component("SfAccordionItem", SfAccordionItem)
app.component("SfListItem", SfListItem)


app.mount("#app");
