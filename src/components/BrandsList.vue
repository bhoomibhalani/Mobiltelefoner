<script>
import {mapActions, mapGetters} from 'vuex';
import {SORT_PHONE_ITEMS, SORT_NAME_ASC, SORT_NAME_DESC} from '@/utils/constants';

export default {
  name: 'BrandsList',
  components: {
    MobileBrand: () => import('@/components/MobileBrand'),
  },
  data() {
    return {
      items: SORT_PHONE_ITEMS,
    };
  },
  computed: {
    ...mapGetters({
      brands: 'phone/brands',
      list: 'phone/list',
    }),
    isRouteForDetailPage() {
      return this.$route.name === 'BrandDetail';
    },
    renderList() {
      const list = this.isRouteForDetailPage ? this.list : this.brands;

      return list;
    },
    title() {
      return this.$route.params.brand || '';
    },
  },
  methods: {
    ...mapActions('phone', [
      'setActivePhone',
      'setActiveBrand',
      'getPhoneBrandList',
      'getSortedPhoneByAscOrder',
      'getSortedPhoneByDescOrder',
    ]),

    getSortedList(option) {
      const page = this.isRouteForDetailPage ? 'Detail' : 'List';

      if (option === SORT_NAME_ASC) this.getSortedPhoneByAscOrder({page});
      else if (option === SORT_NAME_DESC) this.getSortedPhoneByDescOrder({page});
    },
    goTOBrandDetail(id) {
      if (this.isRouteForDetailPage) {
        return;
      }

      this.$router.push({name: 'BrandDetail', params: {brand: id.toLowerCase()}});
    },
    saveLocally(obj) {
      if (this.isRouteForDetailPage) this.setActivePhone(obj);
      else this.setActiveBrand(obj);
    },
  },
};
</script>

<template>
  <v-container>
    <h2 class="text-center">{{ title.toUpperCase() }} MOBILTELEFONER</h2>
    <v-select :items="items" label="Sort" class="select-box" @change="getSortedList" />
    <sequential-entrance from-bottom delay="1000">
      <v-row class="mobile-list" align="center">
        <v-col v-for="(phone, index) in renderList" :key="index" md="4" sm="12" xs="12">
          <MobileBrand :brand="phone" @redirect-to-brand-detail="goTOBrandDetail" @save-mobile="saveLocally" />
        </v-col>
      </v-row>
    </sequential-entrance>
  </v-container>
</template>

<style lang="scss">
.v-input .v-select {
  width: 250px;
}
.v-input--selection-controls {
  margin-top: 0px;
  padding-top: 0px;
}
.select-box {
  max-width: 250px;
  float: right;
}
.mobile-list {
  clear: both;
}
</style>
