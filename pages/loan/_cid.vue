<template>
  <section>
    <nuxt-content :document="page" />
  </section>
</template>
<script>
export default {
  layout: "client",
  async asyncData({ $content, params }) {
    const page = await $content("la/loan/" + params.cid).fetch();

    return {
      page,
    };
  },
  head() {
    title: "sadfasdf";
  },
};
</script>