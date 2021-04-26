<template>
  <section>
    <div class="view jarallax" style="max-height: 200px">
      <img
        src="https://www.stbanklaos.la/upload/loan/1.png"
        alt=""
        class="jarallax-img"
        style="width: 100%; max-height: 200px"
      />
      <div class="mask" style="max-height: 200px">
        <div class="container">
          <div>
            <h1>ອັດຕາແລກປ່ຽນປະຈຳວັນ</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <!-- {{page}} -->
      <vs-row>
        <vs-col w="4" v-for="(it,index) in page" :key="index">
          <div class="list-icon">
            <vs-button square transparent :to="`/services/fundtransfer/internal/${it.slug}`" :active="active == 2" @click="active = 2">
              <div class="d-inline">
                <i class="bx bxs-heart"></i>
                <h2>{{it.title}}</h2>
                <div>
                  {{it.description}}
                </div>
              </div>
            </vs-button>
          </div>
        </vs-col>
      </vs-row>
    </div>
  </section>
</template>

<script>
export default {
  layout: "client",
  async asyncData({ $content,params}) {
    const page = await $content("la/fundtransfer/internal").fetch();

    return {
      page,
    };
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.list-icon {
  width: 100%;
  height: 300px;
  .vs-button {
    height: 100%;
    width: 100%;
  }
}
</style>