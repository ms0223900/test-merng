import moment from 'moment';
import { createStore } from 'vuex';

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    createdTimeFromNow: () => (createdAt: string) => moment(createdAt).fromNow(),
  },
});
