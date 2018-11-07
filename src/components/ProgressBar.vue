<template>
  <div class="row">
    <div class="col-xs-12">
      <h1 class="title">Quotes Added</h1>

      <div class="progress">
        <div class="progress-bar" role="progressbar" :style="progressStyles">
          {{ currentItemsCount }} / {{ maxItemsCount }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    maxItemsCount: {
      type: Number,
      default: 1,
    },
    currentItemsCount: {
      type: Number,
      default: 0,
    }
  },

  computed: {
    progressPercents() {
      return `${parseInt((this.currentItemsCount / this.maxItemsCount) * 100)}%`;
    },
    
    progressStyles() {
      return { width: this.progressPercents };
    }
  }
};
</script>

<style scoped>
  h1.title {
    font-weight: bold;
  }
</style>
