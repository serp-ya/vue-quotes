<template>
  <div class="row">
    <div class="col-xs-8 col-xs-offset-2">
      <h5 class="title">Quote</h5>
      <textarea 
        class="form-control" 
        rows="3"
        v-model="quoteText"
      ></textarea>
    </div>

    <div class="col-xs-12 text-center button-container">
      <button 
        type="button" 
        class="btn btn-primary btn-lg"
        @click="addQuote"
      >Add Quote</button>
    </div>
  </div>
</template>

<script>
  import { quotesBus } from '../main';
  import Quote from '../classes/Quote.class';

  export default {
    data() {
      return {
        quoteText: '',
      };
    },

    methods: {
      addQuote() {
        const message = this.quoteText;
        if (message === undefined || message.length === 0) {
          return alert('Insert a quote message');
        }

        const newQuote = new Quote({ message });
        quotesBus.addNewQuote(newQuote);
        this.quoteText = '';
      }
    }
  };
</script>

<style scoped>
  h5.title {
    font-size: 18px;
    font-weight: bold;
  }

  .button-container {
    padding-top: 20px;
    padding-bottom: 20px;
  }
</style>
