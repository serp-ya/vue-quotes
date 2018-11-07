<template>
  <div class="col-xs-12">
    <p class="bg-info text-center">
      <slot name="message">
        Info: Click on a Quote to delete it
      </slot>
    </p>
  </div>
</template>

<script>
 export default {};
</script>

<style scoped>
  .bg-info {
    margin-top: 15px;
    margin-bottom: 10px;
    padding: 15px 10px;
  }
</style>
