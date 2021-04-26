<template>
  <div>
    <nuxt-content :document="page" />
  </div>
</template>

<script>
export default {
  layout: "client",
  async asyncData({ $content,params}) {
    const page = await $content("la/fundtransfer/internal/"+params.pid).fetch();

    return {
      page,
    };
  },
  head() {
    title: "sadfasdf";
  },
};
</script>

<style>
</style>