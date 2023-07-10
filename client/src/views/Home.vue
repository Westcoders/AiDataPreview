<template>
  <div class="home home-bg">
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
  &-bg{
    background: #EECDA3;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #EF629F, #EECDA3);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #EF629F, #EECDA3); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
}

</style>