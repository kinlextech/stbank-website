<template>
  <div>
    <div class="bg-primary">
      <div class="container">
        <vs-row>
          <vs-col w="6">
            <h2 class="text-center">ປະເພດເງິນຝາກຕ່າງໆ</h2>
            <vs-row aligin="center" justify="center">
              <vs-col w="12" v-for="(itr, index) in page" :key="index">
                <vs-card type="3">
                  <template #title>
                    <h3>{{ itr.title }}</h3>
                  </template>
                  <template #img>
                    <img src="/foto5.png" alt="" />
                  </template>
                  <template #text>
                    <p>{{ itr.description }}</p>
                    <a href="#">View More</a>
                  </template>
                </vs-card>
              </vs-col>
            </vs-row>
          </vs-col>
          <vs-col w="6">
            <img
              src="https://www.federalbank.co.in/image/journal/article?img_id=29432160&t=1607455453426&fileName=18237092"
            />
          </vs-col>
        </vs-row>
      </div>
    </div>
    <div class="container pt-5 pb-5"></div>
  </div>
</template>

<script>
export default {
  layout: "client",
  async asyncData({ $content }) {
    const page = await $content("la/deposit").fetch();

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