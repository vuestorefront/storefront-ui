<template>
  <section>
    <member v-for="(member, index) in members" :key="index" :member="member" />
  </section>
</template>
<script>
import members from "../../assets/members.json";
export default {
  name: "Team",
  data() {
    return {
      members
    };
  }
};
</script>
