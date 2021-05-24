<template>
  <div class="home px-5">
    <TheHeader />
    <router-view></router-view>
    <TheFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "Home",
  components: {
    TheHeader,
    TheFooter
  }
};
</script>
