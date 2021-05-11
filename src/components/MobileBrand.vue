<script>
import {mdiHeart} from '@mdi/js';

export default {
  name: 'Brand',
  props: {
    brand: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      wishList: mdiHeart,
    };
  },
  computed: {
    iconColor() {
      return this.brand.active ? '#b71c1c' : 'black';
    },
  },
  methods: {
    saveMobile() {
      this.$emit('save-mobile', {...this.brand, active: !this.brand.active});
    },
    getBrandDetail() {
      this.$emit('redirect-to-brand-detail', this.brand.id);
    },
  },
};
</script>

<template>
  <v-card>
    <v-btn class="wish-list" color="white" icon @click="saveMobile">
      <v-icon :color="iconColor">{{ wishList }}</v-icon>
    </v-btn>
    <v-img
      :contain="true"
      :src="brand.imgUrl"
      height="300"
      :alt="brand.displayName"
      :title="brand.displayName"
      @click="getBrandDetail"
    />

    <v-card-text>
      <div class="font-weight-bold ml-8 mb-2" @click="getBrandDetail">
        <h3>{{ brand.displayName }}</h3>
      </div>
    </v-card-text>
  </v-card>
</template>

<style lang="scss" scoped>
@import '../sass/color.scss';
.wish-list {
  float: right;
  top: 15px;
  right: 15px;
}
.wish-list svg {
  fill: $wish-list-color;
}
.v-responsive {
  width: 100%;
}
.ma-0 {
  margin: 0;
}
</style>
