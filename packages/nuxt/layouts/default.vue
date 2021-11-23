<template>
  <div>
    <SfTopBar>
      <template #left>
        <SfButton class="sf-button--text">Help & FAQs</SfButton>
      </template>
      <template #center>
        <p>Download</p>
        <SfButton class="topbar__button sf-button--text">'Find out more'</SfButton>
      </template>
      <template #right>
        <SfButton
          class="sf-button--pure"
        >
          <SfImage src="/assets/flag.png" :width="20" :height="20" alt="usa_flag"/>
        </SfButton>
      </template>
    </SfTopBar>
    <SfHeader class="sf-header--multiline" title="Storefront UI" logo="/assets/logo.svg" cartItemsQty="1">
      <template #navigation>
        <SfHeaderNavigationItem
            v-for="(item, i) in navigation"
            :key="i"
            :link="`/${item.name}`"
            :label="item.name"
          />
      </template>
    </SfHeader>    
    <nuxt />
    <SfFooter :column="4" multiple id="footer">
      <SfFooterColumn title="About us">
        <SfList>
          <SfListItem
            v-for="item in footer.aboutUs"
            :key="item"
            >
            <SfMenuItem
              :data-cy="`app-foter-url_about-us_${item.split(' ').join('-').toLowerCase()}`"
              :label="item"
            />
          </SfListItem>
        </SfList>
      </SfFooterColumn>
      <SfFooterColumn title="Departments">
        <SfList>
          <SfListItem
            v-for="item in footer.departments"
            :key="item"
          >
            <SfMenuItem
              :data-cy="`app-foter-url_departments_${item.split(' ').join('-').toLowerCase()}`"
              :label="item"
            />
          </SfListItem>
        </SfList>
      </SfFooterColumn>
      <SfFooterColumn title="Help">
        <SfList>
          <SfListItem
            v-for="item in footer.help"
            :key="item"
          >
            <SfMenuItem
              :data-cy="`app-foter-url_help_${item.split(' ').join('-').toLowerCase()}`"
              :label="item"
            />
          </SfListItem>
        </SfList>
      </SfFooterColumn>
      <SfFooterColumn title="Payment & Delivery">
        <SfList>
          <SfListItem
            v-for="item in footer.paymentsDelivery"
            :key="item"
          >
            <SfMenuItem
              :data-cy="`app-foter-url_payment_${item.split(' ').join('-').toLowerCase()}`"
              :label="item"
            />
          </SfListItem>
        </SfList>
      </SfFooterColumn>
      <SfFooterColumn title="Social">
        <div class="footer__socials">
          <SfImage 
            v-for="item in footer.social" 
            :key="item" :src="'/assets/'+item+'.svg'" 
            :width="32" 
            :height="32" 
            :alt="`${item}-logo`"
            class="footer__social-image" 
          />
        </div>
      </SfFooterColumn>
    </SfFooter>
    <SfBottomNavigation class="smartphone-only">
      <SfBottomNavigationItem
          v-for="(item, key) in items"
          :key="key"
          :icon="item.icon"
          :icon-active="item.iconActive"
          :label="item.label"
          icon-size="17px"
          :is-active="currentIcon === item.iconActive"
          @click="currentIcon = item.iconActive"
      />
      <SfBottomNavigationItem
          label="Basket"
          icon="add_to_cart"
          :isFloating="true"
      />
    </SfBottomNavigation>
  </div>
</template>
<script>
  import "@storefront-ui/vue/styles.scss";
  import { SfHeader, SfFooter, SfBottomNavigation, SfLink, SfTopBar, SfButton, SfList, SfMenuItem, SfImage } from "@storefront-ui/vue"
  export default {
    components: { SfHeader, SfFooter, SfBottomNavigation, SfLink, SfTopBar, SfButton, SfList, SfMenuItem, SfImage },
    data(){
      return {
        currentIcon: "profile_fill",
        items: [
          {
            icon: "home",
            iconActive: "",
            label: "Home"
          },
          {
            icon: "menu",
            iconActive: "",
            label: "Menu"
          },
          {
            icon: "heart",
            iconActive: "heart_fill",
            label: "Heart"
          },
          {
            icon: "profile",
            iconActive: "profile_fill",
            label: "Profile"
          }
        ],
        navigation: [
          {link: "/category", name: "Category"},
          {link: "/product", name: "Product"},
          {link: "/cart", name: "Cart"},
          {link: "/detailed-cart", name: "Detailed Cart"},
          {link: "/login", name: "Login"},
          // {link: "/my-account", name: "My Account"},
          {link: "/static", name: "Static"},
          // {link: "/thank-you", name: "Thank You"}
        ],
        footer: {
          aboutUs: ['Who we are', 'Quality in the details', 'Customer Reviews'],
          departments: ['Women fashion', 'Men fashion', 'Kidswear', 'Home'],
          help: ['Customer service', 'Size guide', 'Contact us'],
          paymentsDelivery: ['Purchase terms', 'Guarantee'],
          social: ['facebook', 'pinterest', 'twitter', 'youtube'],
          isMobile: false,
          desktopMin: 1024
        }
      }
    }
  }
</script>
<style lang="scss">
  html, body {
    margin: 0;
  }
</style>
