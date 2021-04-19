<template>
  <div>
    <carousel-client />
    <div class="container">
      <vs-row>
        <vs-col sm="12" lg="3" md="3">
          <menu-navlist />
        </vs-col>
        <vs-col sm="12" lg="4" md="4">
          <vs-card>
            <template #title
              ><h3>ອັດຕາແລກປ່ຽນປະຈຳວັນ | {{ result.date }}</h3></template
            >
            <template #text>
              <rate-daily :items="result" />
            </template>
          </vs-card>
        </vs-col>
        <vs-col sm="12" lg="5" md="5">
          <vs-card>
            <template #title>
              <vs-button-group class="tabs-group">
                <vs-button flat>ອັດຕາດອກເບ້ຍເງິນຝາກ</vs-button>
                <vs-button flat>ອັດຕາດອກເບ້ຍເງິນກູ້</vs-button>
              </vs-button-group>
            </template>
            <template #text>
              <div>
                <rate-deposit :items="result" />
              </div>
              <div>
                <rate-loan :items="result" />
              </div>
            </template>
          </vs-card>
        </vs-col>
      </vs-row>
      <vs-row justify="center" align="center">
        <vs-col lg="6" md="6" sm="12" style="height: 500px">
          <vs-card type="2" class="card-embred-h100 m-1">
            <template #img>
              <img
                src="https://www.stbanklaos.la/upload/news//1618277146.jpg"
                alt=""
              />
            </template>
          </vs-card>
        </vs-col>
        <vs-col lg="6" md="6" sm="12">
          <vs-row>
            <vs-col
              lg="6"
              md="6"
              sm="12"
              v-for="(ips, i) in iposts.item"
              :key="i"
            >
              <vs-card sqaure type="2" class="m-1">
                <template #title>
                  <h3></h3>
                </template>
                <template #img>
                  <img
                    :src="`https://www.stbanklaos.la/upload${ips.background}`"
                    alt=""
                  />
                </template>
                <template #text>
                  <p>
                    {{ ips.title }}
                  </p>
                </template>
                <template #interactions>
                  <vs-button danger icon>
                    <i class="bx bx-heart"></i>
                  </vs-button>
                </template>
              </vs-card>
            </vs-col>
          </vs-row>
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>

<script>
export default {
  layout: "client",
  async asyncData({ $axios }) {
    const mountains = await $axios.get(
      "https://www.stbanklaos.la/api/la/exchangerate"
    );
    const posts = await $axios.get(
      "https://www.stbanklaos.la/api/la/latestpost"
    );
    let iposts = posts.data;
    let result = mountains.data;
    return { result, iposts };
  },
};
</script>

<style lang="scss">
.tabs-group {
  button {
    width: 100%;
  }
}
</style>