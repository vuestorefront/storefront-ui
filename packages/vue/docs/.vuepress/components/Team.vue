<template>
  <section>
    <member v-for="(member, index) in activeMembers" :key="index" :member="member" />
    <h3>Our core emeretis</h3>
    <member v-for="(member, index) in emeratiMembers" :key="index" :member="member" />
  </section>
</template>
<script>
import members from "../../assets/members.json";
export default {
  name: "Team",
  data() {
    return {
      activeMembers: members.filter(member => member.active),
      emeratiMembers: members.filter(member => !member.active)
    };
  }
};
</script>
