<template>
  <div id="app">
    <template v-if="this.$store.getters.isSignIn">
        <App-Header></App-Header>
        <b-container>
          <transition name="slide-fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </b-container>
</template>
<template v-else>
  <Sign-In></Sign-In>
</template>

  </div>
</template>

<script>
  import AppHeader from './components/content/Header.vue';
  import SignIn from './components/content/page/SignIn.vue';
  export default {
    components: {
      AppHeader,
      SignIn
    },
    name: "app",
    data() {
      return {
        msg: "Welcome to Your Vue.js Appa"
      };
    }
  };
</script>

<style>
  .slide-fade-enter-active {
    transition: all .1s ease;
  }
  .slide-fade-leave-active {
    transition: all .0.5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter,
  .slide-fade-leave-to
  /* .slide-fade-leave-active до версии 2.1.8 */
  {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
