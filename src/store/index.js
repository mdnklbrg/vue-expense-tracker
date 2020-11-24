import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    transactions: [
      // { id: 1, text: 'Flowers', amount: -20 },
      // { id: 2, text: 'Salary', amount: 300 },
      // { id: 3, text: 'Book', amount: -10 },
      // { id: 4, text: 'Camera', amount: 150 }
    ]
  },
  mutations: {
    'ADD_TRANSACTION'(state, { transactionText, transactionAmount }) {
      state.transactions.push({
        id: Math.floor(Math.random() * 10000000), // bad practice
        text: transactionText,
        amount: transactionAmount
      })
    },
    'DELETE_TRANSACTION'(state, { transactionId }) {
      // state.transactions.filter(elem => elem.id !== transactionId);
      const record = state.transactions.find(elem => elem.id == transactionId);
      state.transactions.splice(state.transactions.indexOf(record), 1);
    }
  },
  actions: {
    addTransaction({ commit }, transaction) {
      commit('ADD_TRANSACTION', transaction);
    },
    deleteTransaction({ commit }, id) {
      commit('DELETE_TRANSACTION', id);
    }
  },
  modules: {
  },
  getters:{
    getTransactions (state) {
      return state.transactions
    }
  }
})
