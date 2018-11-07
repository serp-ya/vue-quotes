<template>
  <div class="row">
    <Quote 
      v-for="quote in quotes"
      :quote="quote"
    />
  </div>
</template>

<script>
    import Quote from './Quote.vue';

    export default {
      components: {
        Quote,
      },

      props: {
        quotes: {
          type: Array,
          isRequires: true,
        },
      },
    };
</script>

<style>

</style>
