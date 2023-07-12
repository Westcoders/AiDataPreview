<template>
  <div class="home bg-sky-50 ">
    <Login />
  </div>

</template>

<script>
import Login from "./Login/Login.vue";

export default {
  components: {
    Login,
  },
  methods: {
  }
};
</script>
<style lang="less">
.home{
    height: 100vh;
    width:100vw;
    position: relative;
}

</style>