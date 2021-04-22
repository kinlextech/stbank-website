<template>
  <div>
    <carousel-client />
    <div class="container">
      <vs-row aligin="center" justify="center">
        <vs-col w="4" v-for="(itr,index) in page" :key="index">
          <vs-card>
            <template #title>
              <h3>{{itr.title}}</h3>
            </template>
            <template #img>
              <img src="/foto5.png" alt="" />
            </template>
            <template #text>
              <p>{{itr.description}}</p>
              <a href="#">View More</a>
            </template>
          </vs-card>
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>

<script>
export default {
  layout: "client",
  async asyncData({ $content }) {
    const page = await $content("la/fundtransfer").fetch();

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