import axios from 'axios';
import {BASE_URL} from '@/utils/constants';

export default {
  async getMobileBrands() {
    const response = await axios.get(`${BASE_URL}/brands.json`);

    return response;
  },
  async getPhoneList(payload) {
    const response = await axios.get(`${BASE_URL}/phones.json?brand=${payload.brand}`);

    return response;
  },
};
