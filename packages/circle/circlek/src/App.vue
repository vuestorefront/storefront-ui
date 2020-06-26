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
    <section class="circle-category__upper-bar">
      <div>
        <SfBreadcrumbs 
          :breadcrumbs="breadcrumbs"
        />
        <SfHeading class="circle-category__heading" title="Beverages" :level="3"/>
      </div>
      <div class="circle-category__sort">
        <SfSelect label="Sort by:" class="circle-category__sort-select" selected="Price from high to low">
          <SfSelectOption v-for="(option, key) in selectOptions" :key="key" :value="option">
            {{option}}
          </SfSelectOption>
        </SfSelect>
      </div>
    </section>
    <section class="circle-category__main">
      <div class="circle-category__sidebar">
        <SfAccordion :multiple="true" :showChevron="false" :open="getAccordionItemsHeader()">
          <SfAccordionItem 
              class="circle-category__filter"
              v-for="(accordion, i) in sidebarAccordion"
              :key="i"
              :header="accordion.header"
            >
            <template>
              <SfScrollable class="circle-category__scrollable" showText="More" hideText="Less" maxContentHeight="4rem">
                <SfList
                  class="circle-category__filter-items"
                >
                  <SfListItem
                    v-for="item in accordion.items"
                    :key="item"
                  >
                    <SfMenuItem :label="item"/>
                  </SfListItem>
                </SfList>
              </SfScrollable>
            </template>
          </SfAccordionItem>
        </SfAccordion>
      </div>
      <div class="circle-category__products">
        <SfProductCard
          class="circle-category__product"
          v-for="(product, key) in products" :key="key"
          :image="product.image"
          imageWidth="278px"
          imageHeight="278px"
          :regularPrice="product.price"
          :title="product.title"
          wishlistIcon="heart"
        />
      </div>
    </section>
    <SfFooter class="circle-category__footer" :column="4">
      <div class="circle-category__footer-bar">
      </div>
      <SfFooterColumn class="circle-category__footer-column" v-for="(column, key) in footerColumns" :key="key" :title="column.header">
        <SfList v-if="column.items">
          <SfListItem v-for="item in column.items" :key="item">
            {{item}}
          </SfListItem>
        </SfList>
        <div v-else-if="column.pictures">
          <SfImage v-for="picture in column.pictures" :key="picture" :src='"./assets/"+picture+"_Icon.png"' :width="32" :height="32"/>          
        </div>
        <div class="circle-category__footer-input" v-else>
          <SfInput  type="email" placeholder="Type your email address" />
          <SfButton>subscribe</SfButton>
        </div>
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
    SfScrollable,
    SfButton
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
    SfScrollable,
    SfButton
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
        {
          header: "",
          input: ""
        }
      ]
    }
  },
  methods: {
    getAccordionItemsHeader() {
      return this.sidebarAccordion.map(
        item => item.header 
      )
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
  &__sort {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      &-select {   
        --select-label-top: 65%; 
        --select-label-left: calc(var(--spacer-2xl) * -1);  
        --select-label-font: var(--font-bold) var(--font-lg) Montserrat;  
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
    margin: 2.875rem 0 var(--spacer-xl) 0;   
    font-weight: bold;
    font-size: var(--font-lg);
  } 
  &__main {
    display: flex;
    width: 100%;    
  }
  &__sidebar {
    display: flex;
    flex-direction: column;
    width: 14.3125rem;
  }
  &__filter {    
    --accordion-item-header-color: #1D1F22;
    --accordion-item-header-font: bold var(--spacer-base) Montserrat;
    width: 100%;    
    &-items {
      padding: var(--spacer-sm) var(--spacer-sm) 4px var(--spacer-sm);
      text-align: left;
      background: #FFFFFF;
      box-shadow: 4px 12px 24px rgba(119, 121, 122, 0.15);
      border-radius: 10px;
    }   
    
    .sf-accordion-item__header--open {
      --accordion-item-header-color: #1D1F22;
    }     
  }
  &__scrollable {
      position: relative;
      text-align: left;
      
      .sf-button{
        --button-color:#EE2E24;
        font-size: var(--spacer-sm);
        text-decoration: none;
      }          
      button:after {
        position: absolute;
        bottom: var(--spacer-2xs);
        right: 0;        
        content: url(./assets/Vector.svg);
      }
    }
  &__products {
    display: flex;
    flex-wrap: wrap;
  }   
  &__product {
    text-align: left;  
    .sf-price__regular {
      color: #EE2E24;
    }
  }
  &__footer {
    --list-item-color:  #FFF;
    position: relative;
    background-color: #1D1F22;
    &-column {
      text-align: left;
    }
    button {
      color:  #FFF;
    }
  }
  &__footer-bar {
    position: absolute;
    height: 1.25rem;
    width: 100%;
    top: 0;    
    left: 0;
    background: #F99B2A;
  }
  &__footer-input {
    --input-background:  #F1F2F3;
    --button-font-size: 10px;
    --button-font-weight: var(--font-extra-bold);
    --button-background: #EE2E24;
    --button-border-radius: 24px;
    display: flex;    
    align-items: center;
    
    input {
      color: #43464E;
      font-size: 12px;
      border-radius: 34px;
    }
    button {
      width: 7.25rem;
      height: var(--spacer-lg);
    }
  }
}
</style>
