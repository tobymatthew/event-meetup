<template>
  <div class="container">
    <errorView
      :title="
        'Ooooops, you are not authenticated to visit this page, please login'
      "
      :status="'401'"
      :navigateToPage="'PageLogin'"
      :navigateToText="'Navigate to Login Page'"
    />
  </div>
</template>

<script>
import errorView from "@/components/errorView";
export default {
  components: {
    errorView,
  },
};
</script>

<style scoped></style>
