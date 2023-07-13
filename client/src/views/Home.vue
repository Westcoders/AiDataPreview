<template>
  <div class="home bg-gray-300 ">
    <img style="height:100px" src="http://www.akuziti.com/cache/168925186592796.png" alt="">
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