<template lang="html">
  <div v-show='isActive'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "stbhub-btab",
    },
  },
  data() {
    return {
      isActive: true,
    };
  },
};
</script>

<style lang="css">
</style>