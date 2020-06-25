<template>
  <div id="app" class="circle-category">
    <SfHeader 
      :logo="logo"
    >
      <template #navigation>
        <SfHeaderNavigationItem
            v-for="item in navigation"
            :key="item">
          <SfLink href="#">{{item}}</SfLink>
        </SfHeaderNavigationItem>
      </template>
    </SfHeader>
    <SfBreadcrumbs 
      :breadcrumbs="breadcrumbs"
    />
    <div class="circle-category__upper-bar">
      <SfHeading class="circle-category__heading" title="Beverages" :level="3"/>
      <div class="circle-category__filter">
        <SfSelect label="Sort by:" class="circle-category__filter-select" selected="Price from high to low">
          <SfSelectOption v-for="(option, key) in selectOptions" :key="key" :value="option">
            {{option}}
          </SfSelectOption>
        </SfSelect>
      </div>
    </div>
    <SfProductCard
      v-for="(product, key) in products" :key="key"
      :image="product.image"
      width="278px"
      height="278px"
      :regularPrice="product.price"
      wishlistIcon="heart"

    />
    <div>
      <SfAccordion :multiple="true" :showChevron="false">
        <SfAccordionItem
            v-for="(accordion, i) in sidebarAccordion"
            :key="i"
            :header="accordion.header"
          >
          <template>
            <SfScrollable showText="more" hideText="less" maxContentHeight="4rem">
              <SfList>
                <SfListItem
                  v-for="item in accordion.items"
                  :key="item"
                  class="list__item"
                >
                  <SfMenuItem :label="item"/>
                </SfListItem>
              </SfList>
            </SfScrollable>
            </template>
        </SfAccordionItem>
      </SfAccordion>
    </div>
    <SfFooter :column="4">
      <SfFooterColumn v-for="(column, key) in footerColumns" :key="key" :title="column.header">
        <SfList v-if="column.items">
          <SfListItem v-for="item in column.items" :key="item">
            {{item}}
          </SfListItem>
        </SfList>
        <div v-else-if="column.pictures">
          <SfImage v-for="picture in column.pictures" :key="picture" :src='"/assets/"+picture+"_Icon.png"' width="32px" height="32px"/>          
        </div>
        <SfInput v-else type="email"/>
      </SfFooterColumn>
    </SfFooter>
  </div>
</template>

<script>
import {SfHeader,
    SfBreadcrumbs,
    SfHeading,
    SfSelect,
    SfProductCard,
    // SfSidebar,
    SfAccordion,
    SfList,
    SfFooter,
    SfLink,
    SfInput,
    SfImage,
    SfMenuItem,
    SfScrollable
    } from '@storefront-ui/vue'

export default {
  name: 'App',
  components: {
    SfHeader,
    SfBreadcrumbs,
    SfHeading,
    SfSelect,
    SfProductCard,
    // SfSidebar,
    SfAccordion,
    SfList,
    SfFooter,
    SfLink,
    SfInput,
    SfImage,
    SfMenuItem,
    SfScrollable
  },
  data() {
    return {
      logo: "./assets/logo.png",
      navigation: ["home", "products", "our stores"],
      breadcrumbs: [
                    {
                      "text": "Shop",
                      "link": "#"
                    },
                    {
                      "text": "Products",
                      "link": "#"
                    },
                    {
                      "text": "Beverages",
                      "link": "#"
                    }
                  ],
      selectOptions: [
        "Price from high to low", "Price from high to low", "Price from high to low"
      ],
      products: [
        {title: "5 Hour Energy Peach Mango",
        price: "$ 50",
        image: "./assets/image_93.png"},
        {title: "5 Hour Energy Peach Mango",
        price: "$ 50",
        image: "./assets/image_93.png"},
        {title: "5 Hour Energy Peach Mango",
        price: "$ 50",
        image: "./assets/image_93.png"},
        {title: "5 Hour Energy Peach Mango",
        price: "$ 50",
        image: "./assets/image_93.png"},
        {title: "5 Hour Energy Peach Mango",
        price: "$ 50",
        image: "./assets/image_93.png"},
        {title: "5 Hour Energy Peach Mango",
        price: "$ 50",
        image: "./assets/image_93.png"},
        {title: "5 Hour Energy Peach Mango",
        price: "$ 50",
        image: "./assets/image_93.png"},
        {title: "5 Hour Energy Peach Mango",
        price: "$ 50",
        image: "./assets/image_93.png"},
        {title: "5 Hour Energy Peach Mango",
        price: "$ 50",
        image: "./assets/image_93.png"},
        {title: "5 Hour Energy Peach Mango",
        price: "$ 50",
        image: "./assets/image_93.png"}        
      ],
      sidebarAccordion: [
        {
          header: "Categories",
          items: ["Energy Drinks", "Soft Drinks", "Cans", "Water", "Sugar-free Drinks"]
        }, 
        {
          header: "Brands",
          items: ["Extra Strenght", "Coca-cola", "Pepsi", "Red Bull", "Waterlove"]
        },
        {
          header: "Price",
          items: []
        },
        {
          header: "Popular",
          items: ["Candy","E-Cigarettes", "Grocery", "Health & Beauty", "Household", "Ready to Eat / Food"]
        },
      ],
      footerColumns: [
        {
          header: "ABOUT US",
          items: ["Who we are", "Quality in the details", "Customer Reviews"]
        },
        {
          header: "DEPARTMENTS",
          items: ["Department1", "Department2", "Department3", "Department4" ]
        },
        {
          header: "HELP",
          items: ["Energy Drinks", "Soft Drinks", "Cans", "Water", "Sugar-free Drinks"]
        },
        {
          header: "PAYMENTS & DELIVERY",
          items: ["Energy Drinks", "Soft Drinks", "Cans", "Water", "Sugar-free Drinks"]
        },
        {
          header: "SOCIAL",
          pictures: ["Facebook", "Pinterest", "Google", "Twitter", "Youtube"]
        },
      ]
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
.circle-category {
  font-family: Montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .sf-header {
    height:90px;
    margin: 0 0 1.5rem 0;
    background: #FFFFFF;
    box-shadow: 0px 0px 30px rgba(29, 31, 34, 0.08), 1px 10px 10px rgba(102, 62, 51, 0.02);
    border-radius: 60px;
    &-navigation-item {
      --header-navigation-item-border: none;
      --header-navigation-item-font-weight: bold;
      --header-navigation-item-font-line-height: 1.0625rem;
      .sf-link {
        --header-navigation-item-color: #1D1F22;
        &:hover,
        &:active {
          --header-navigation-item-color:#EE2E24;
        }
      }      
    }
    .sf-search-bar {
      --search-bar-icon-right: 0.875rem;
      --search-bar-input-text-align: left;
      --search-bar-font: normal 14px Montserrat;
      --search-bar-border: none;
      --search-bar-padding: 0 2.1875rem 0 2.125rem;
      
      width: 21.75rem;
      height: 3rem;
      border: 2px solid #EE2E24;
      box-sizing: border-box;
      border-radius: 34px;
      &__icons {
        bottom: var(--spacer-base);
        transform: translate3d(0, 50%, 0);
      }
    }
  }
  &__upper-bar {
    display: flex;
    justify-content: space-between;       
  }
  &__filter {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      span {
        font-weight: bold;
      }
      &-select {   
        --select-label-top: 50%; 
        --select-label-left: calc(var(--spacer-2xl) * -1);  
        --select-label-font: var(--font-lg) Montserrat;  
        width: 15rem;
        .sf-select-option {
          --select-option-background: #fff;          
        }
        &:hover,
        &:focus {
          --chevron-color: #000;
        }
      }
    } 
  &__heading {
    --heading-title-color: #EE2E24; 
    display: flex;
    align-self: flex-end;     
    font-weight: bold;
    font-size: var(--font-lg);
  }    
}
</style>
