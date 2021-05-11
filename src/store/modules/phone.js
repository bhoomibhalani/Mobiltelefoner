import phoneService from '@/services/phone';
import Phone from '@/models/store/phone';

const gettersObj = {
  list: (state) => {
    const mob = localStorage.getItem('phone');
    const activeMobile = mob ? JSON.parse(mob) : {};

    return state.phoneList.map((phone) => {
      return {
        ...phone,
        active: phone.displayName === activeMobile.displayName,
      };
    });
  },
  brands: (state) => {
    const mob = localStorage.getItem('brand');
    const activeMobile = mob ? JSON.parse(mob) : {};

    return state.brandList.map((phone) => {
      return {
        ...phone,
        active: phone.displayName === activeMobile.displayName,
        imgUrl: phone.displayImageUrl,
      };
    });
  },
};
const initialState = () => new Phone();

const actions = {
  // eslint-disable-next-line no-unused-vars
  async getPhoneList({state, commit}, payload) {
    try {
      const response = await phoneService.getPhoneList(payload);
      const formattedResponse = response.data.filter((phone) => phone.brand.toLowerCase() === payload.brand);

      commit('SET_PHONE_LIST', formattedResponse);
    } catch (error) {
      console.error('error occured during fetching Phone list', error);
    }
  },
  // eslint-disable-next-line no-unused-vars
  async getPhoneBrandList({state, commit}) {
    try {
      const response = await phoneService.getMobileBrands();

      commit('SET_MOBILE_BRANDS', response);
    } catch (error) {
      console.error('error occured during fetching Phone list', error);
    }
  },
  // Sorting by (ascending order) - page: route (Detail | List)
  getSortedPhoneByAscOrder({state, commit}, {page}) {
    const mobileList = page === 'Detail' ? [...state.phoneList] : [...state.brandList];

    mobileList.sort((a, b) => {
      if (a.displayName < b.displayName) {
        return -1;
      }

      if (a.displayName > b.displayName) {
        return 1;
      }

      return 0;
    });
    const mutation = page === 'Detail' ? 'SET_SORTED_PHONE' : 'SET_SORTED_BRAND';

    commit(mutation, mobileList);
  },
  // Sorting by (Descending order) - page: route (Detail | List)
  getSortedPhoneByDescOrder({state, commit}, {page}) {
    const mobileList = page === 'Detail' ? [...state.phoneList] : [...state.brandList];

    mobileList.sort((a, b) => {
      if (a.displayName > b.displayName) {
        return -1;
      }

      if (a.displayName < b.displayName) {
        return 1;
      }

      return 0;
    });
    const mutation = page === 'Detail' ? 'SET_SORTED_PHONE' : 'SET_SORTED_BRAND';

    commit(mutation, mobileList);
  },
  // eslint-disable-next-line no-unused-vars
  async setActiveBrand({state, commit}, payload) {
    localStorage.setItem('brand', JSON.stringify(payload));
    try {
      const response = await phoneService.getMobileBrands();

      commit('SET_MOBILE_BRANDS', response);
    } catch (error) {
      console.error('error occured during fetching Phone list', error);
    }
  },
  // eslint-disable-next-line no-unused-vars
  async setActivePhone({state, commit}, payload) {
    localStorage.setItem('phone', JSON.stringify(payload));
    try {
      const response = await phoneService.getPhoneList({brand: payload.brand.toLowerCase()});

      commit('SET_PHONE_LIST', response?.data);
    } catch (error) {
      console.error('error occured during fetching Phone list', error);
    }
  },
};

const mutations = {
  SET_PHONE_LIST(state, payload) {
    state.phoneList = payload;
  },
  SET_MOBILE_BRANDS(state, payload) {
    state.brandList = payload.data.options;
  },
  SET_SORTED_PHONE(state, payload) {
    state.phoneList = payload;
  },
  SET_SORTED_BRAND(state, payload) {
    state.brandList = payload;
  },
  SET_ACTIVE_PHONE(state, payload) {
    state.phoneList = [...state.phoneList, payload];
  },
};

export default {
  namespaced: true,
  state: initialState,
  getters: gettersObj,
  actions,
  mutations,
};
