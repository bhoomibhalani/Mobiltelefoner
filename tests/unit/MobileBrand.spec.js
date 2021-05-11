import MobileBrand from '@/components/MobileBrand.vue';
import {createLocalVue, shallowMount} from '@vue/test-utils';
import Vuex from 'vuex';
import Vuetify from 'vuetify';

const getWrapper = () => {
  const localVue = createLocalVue();

  localVue.use(Vuex);

  const store = new Vuex.Store({
    state: {},
    modules: {
      phone: {
        namespaced: true,
        actions: {
          setActivePhone: jest.fn(),
        },
      },
    },
  });
  return shallowMount(MobileBrand, {
    localVue,
    store,
    vuetify: new Vuetify(),
    propsData: {
      brand: {displayName: 'Apple', active: true, imgUrl: 'http://www.fakeimg.com'},
      isMobileSaveLocally: false,
    },
  });
};
describe('MobileBrand.vue', () => {
  test('renders snapshots', () => {
    const wrapper = getWrapper();
    expect(wrapper.html()).toMatchSnapshot();
  });
  test('renders snapshots when wishlist feature is on', () => {
    const wrapper = getWrapper();
    wrapper.setProps({isMobileSaveLocally: true});
    expect(wrapper.html()).toMatchSnapshot();
  });
  describe('Methods', () => {
    test('saveMobile function', () => {
      const wrapper = getWrapper();
      wrapper.vm.$emit = jest.fn();
      const saveMobile = jest.spyOn(wrapper.vm, 'saveMobile');
      wrapper.vm.saveMobile();
      expect(saveMobile).toHaveBeenCalledTimes(1);
       expect(wrapper.vm.$emit).toHaveBeenCalledTimes(1);
    });
    test('getBrandDetail function', () => {
      const wrapper = getWrapper();
      wrapper.vm.$emit = jest.fn();
      const getBrandDetail = jest.spyOn(wrapper.vm, 'getBrandDetail');
      wrapper.vm.getBrandDetail();
      expect(getBrandDetail).toHaveBeenCalledTimes(1);
      expect(wrapper.vm.$emit).toHaveBeenCalledTimes(1);
    });
  });
  describe('computed property', () => {
    test('`iconColor` when active is true', () => {
      const wrapper = getWrapper();
      expect(wrapper.vm.iconColor).toBe('#b71c1c');
    });
  });
});
