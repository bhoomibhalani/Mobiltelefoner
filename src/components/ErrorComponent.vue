<script>
export default {
  name: 'ErrorComponent',
  methods: {
    getRoute(url) {
      if (url === 'phone') {
        this.$router.push({name: 'BrandList'});
      } else {
        this.$router.push({name: 'BrandDetail', params: {brand: 'apple'}});
      }
    },
  },
};
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="12" xs="12" sm="12" class="col-middle">
        <h1 class="text-jumbo mb-10">Oops!</h1>
        <h2 class="mb-10">We can't seem to find the page you're looking for</h2>
        <h3 class="mb-10">Here are some helpful link instead:</h3>
        <p class="mb-10"><a href @click="getRoute('phone')">Phones </a></p>
        <p class="mb-10"><a href @click="getRoute('brand')">Brand </a></p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.text-jumbo {
  font-size: 145px;
}
.col-middle {
  vertical-align: middle;
}
.mb-10 {
  margin-bottom: 10px;
}
</style>
