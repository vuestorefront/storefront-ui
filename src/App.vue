<template>
  <div id="app">
    z propsem message i slot-scope
    <SfAlert
      class="sf-alert--warning"
      message="wiadomość przez propsa i slote-scope"
    >
      <template slot="message" slot-scope="{ message }">
        {{ message }}
      </template>
    </SfAlert>

    z propsem message
    <SfAlert class="sf-alert--warning" message="wiadomość przez propsa">
    </SfAlert>

    z propsem bez ikonki
    <SfAlert
      :displayIcon="false"
      class="sf-alert--warning"
      message="wiadomość przez propsa bez ikonki"
    >
    </SfAlert>

    ściana tekstu defaltowym slotem
    <SfAlert class="sf-alert--warning">
      <p slot="message">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
        officiis, quidem veniam, totam harum ea ut aspernatur repellendus natus
        iste voluptatem error minima a temporibus illo dolorum! In, aspernatur
        beatae!
      </p>
    </SfAlert>

    message propsem i icon slotem, 0 padding
    <SfAlert
      class="sf-alert--warning"
      message="Lorem ipsum dolor, sit amet consectetur adipisicing"
      style="padding: 0"
    >
      <img slot="icon" src="./assets/clock.svg" alt="" />
    </SfAlert>

    icon i message propsem
    <SfAlert
      class="sf-alert--warning"
      message="Lorem ipsum dolor, sit amet consectetur adipisicing"
      icon="http://qnimate.com/wp-content/uploads/2014/03/images2.jpg"
    >
    </SfAlert>

    message propsem, icon propsem i slot-scope
    <SfAlert
      class="sf-alert--warning"
      message="Lorem ipsum dolor, sit amet consectetur adipisicing"
      icon="http://qnimate.com/wp-content/uploads/2014/03/images2.jpg"
    >
      <img slot-scope="{ icon }" :src="icon" alt="" slot="icon" />
    </SfAlert>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SfAlert from "./components/atoms/SfAlert/SfAlert.vue";

export default Vue.extend({
  name: "app",
  components: {
    SfAlert
  }
});
</script>

<style lang="scss">
@import "./css/variables.scss";
@import "./css/globals.scss";
</style>
