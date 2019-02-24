import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      id: 'qwe123',
      name: 'Fede Fellini'
    },
    categories: ['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food', 'community'],
    // todos: [
    //   { id: 1, text: 'Kill All Humans', done: false },
    //   { id: 2, text: 'Visit Julio', done: true },
    //   { id: 3, text: 'Join Anarchist Revolt', done: false },
    //   { id: 4, text: 'Make a Watch', done: true },
    // ],
    // events: [
    //   { id: 1, text: 'Julios Bday', organiser: 'Fellini' },
    //   { id: 2, text: 'Family Dinner', organiser: 'Benigni' },
    //   { id: 3, text: 'Anarchist Revolt', organiser: 'Pasolini' },
    //   { id: 4, text: 'Watchmakers Society', organiser: 'Germi' },
    // ],
    events: [],
  },

  mutations: {
  },

  actions: {
  },

  getters: {
    // catLength: state => {
    //   return state.categories.length
    // },
    // doneTodos: state => {
    //   return state.todos.filter( todo => {
    //     todo.done
    //   })
    // },
    // activeTodosCount: state => {
    //   return state.todos.filter( todo => {
    //     !todo.done.length
    //   })
    // },
    // getTodoById: state => id => {
    //   return state.events.find( event => {
    //     return event.id === id
    //   })
    // },
  }
});
