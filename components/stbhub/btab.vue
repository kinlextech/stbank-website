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
      required: true,
      default: "btab",
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<style lang="css">
</style>