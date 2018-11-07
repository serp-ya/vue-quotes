<template>
  <div 
  class="col-xs-3 quote"
  @click="deleteQuote"
  >
    {{ quote.message }}
  </div>
</template>

<script>
  import { quotesBus } from '../main';

  export default {
    props: {
      quote: {
        type: Object,
        isRequired: true,
      },
    },

    methods: {
      deleteQuote() {
        quotesBus.deleteQuote(this.quote.id);
      },
    }
  };
</script>

<style scoped>
  .quote {
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 15px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;

    font-size: 30px;
    font-family: Arizonia;
  }
</style>
