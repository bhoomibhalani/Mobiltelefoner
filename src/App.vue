<script>
export default {
  name: 'App',
};
</script>

<template>
  <div id="app" data-app>
    <v-scroll-x-transition mode="in-out" :hide-on-leave="true">
      <router-view />
    </v-scroll-x-transition>
  </div>
</template>

<style>
#app {
  font-family: 'Roboto';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
