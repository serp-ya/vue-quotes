import Vue from 'vue';
import App from './App.vue';

export const quotesBus = new Vue({
  methods: {
    addNewQuote(newQuoteData) {
      this.$emit('addNewQuote', newQuoteData);
    },
    deleteQuote(quoteId) {
      this.$emit('deleteQuote', quoteId);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
});