<template>
  <div class="container">
    <vs-row>
      <vs-col w="6"> asdfsadfasfds </vs-col>
      <vs-col w="6">
        <div>
          <vs-button
            :animate-inactive="successFace"
            @click="handleClickFace"
            :loading="loadingFace"
            color="yellow"
          >
            <i class="bx bxl-facebook-square"></i>
            {{ successFace ? "Logout" : "Facebook" }}
            <template #animate> <i class="bx bx-user"></i> Login </template>
          </vs-button>
        </div>
      </vs-col>
    </vs-row>
    {{ page[0].title }}
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