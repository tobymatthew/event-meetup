<template>
  <div class="container">
    <errorView :title="'Ooooops, page you are trying to access doesn\'t exist'"
               :status="404"
               :navigateToPage="'PageHome'"
               :navigateToText="'Navigate back Home'" />
  </div>
</template>

<script>
  import errorView from '@/components/errorView'
  export default {
    components: {
      errorView
    }
  }
</script>

<style scoped>
</style>