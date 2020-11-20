import getInitUser from '@/lib/functions/getInitUser';
import { User } from '@/types';
import moment from 'moment';
import { createStore } from 'vuex';

export interface AuthState {
  user: User | null;
}

const initState = {
  user: getInitUser(),
};

export default createStore<AuthState>({
  state: initState,
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
