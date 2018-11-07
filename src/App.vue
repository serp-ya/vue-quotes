<template>
  <div class="container">
    <ProgressBar 
      :maxItemsCount="maxQuotesCount"
      :currentItemsCount="quotes.length"
    />
    <AddQuoteForm />
    <QuotesList 
      :quotes="quotes"
    />
    <InformBlock />
  </div>
</template>

<script>
import ProgressBar from "./components/ProgressBar.vue";
import AddQuoteForm from "./components/AddQuoteForm.vue";
import QuotesList from "./components/QuotesList.vue";
import InformBlock from "./components/InformBlock.vue";

import { quotesBus } from './main';

export default {
  components: {
    ProgressBar,
    AddQuoteForm,
    QuotesList,
    InformBlock
  },

  data() {
    return {
      maxQuotesCount: 10,
      quotes: [],
    };
  },

  created() {
    quotesBus.$on('addNewQuote', (newQuote) => {
      if (this.quotes.length >= this.maxQuotesCount) {
        return alert(`Limit is exceeded: max quotes limit is ${this.maxQuotesCount}`);
      }

      this.quotes.push(newQuote);
    });

    quotesBus.$on('deleteQuote', (quoteId) => (
      this.quotes = this.quotes.filter(quote => (quote.id !== quoteId))
    ));
  }
};
</script>

<style>
</style>
