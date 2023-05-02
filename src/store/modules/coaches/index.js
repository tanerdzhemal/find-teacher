import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      coaches: [
        {
          id: 'c1',
          firstName: 'Taner',
          lastName: 'Dzhemal',
          areas: ['frontend', 'backend', 'career'],
          description:
            "I'm Taner Dzhemal and I've worked as a freelance web developer for six months. Let me help you become a developer as well!",
          hourlyRate: 30,
        },
        {
          id: 'c2',
          firstName: 'Denis',
          lastName: 'Gyuner',
          areas: ['frontend', 'career'],
          description:
            'I am Denis Gyuner and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          hourlyRate: 30,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
