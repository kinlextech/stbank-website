<template>
  <section style="margin-top: 80px">
    <!-- <img src="https://www.stbanklaos.la/images/cm1.svg" /> -->
    <div class="container">
      <vs-row>
        <vs-col w="4">
          <vs-card>
            <template #img>
              <img
                src="https://www.stbanklaos.la/images/navicon/hairman.svg"
                style="max-width: 96px"
                class="mt-3"
              />
            </template>
            <template #title>
              <h3>ວິໄສທັດຂອງທ່ານ​ປະ​ທານ</h3>
            </template>
            <template #text>
              <p>
                ການ​ເປັນ​ໜຶ່ງ​ໃນ​ຫ້າ​ທະ​ນາ​ຄານ​ຊັ້ນ​ນຳ
                ທີ່​ເປັນ​ທະ​ນາ​ຄານ​ຕົວ​ແບບ​ໃນການ​ປະ​ຕິ​ບັດຫຼັກ​ການ​ບາ​ເຊີ​ລ II
                (BASEL II)
              </p>
            </template>
          </vs-card>
        </vs-col>
        <vs-col w="4">
          <vs-card>
            <template #img>
              <img
                src="https://www.stbanklaos.la/images/navicon/vision.svg"
                style="max-width: 96px"
                class="mt-3"
              />
            </template>
            <template #title>
              <h3>ວິໄສທັດຂອງທະນາຄານ</h3>
            </template>
            <template #text>
              <p>
                ວິ​ໄສ​ທັດ​ຂອງ ​ທະ​ນາ​ຄານ ​ເອັ​ສ​ທີ ຈຳ​ກັດ
                ແມ່ນ​ເປັນທະນາຄານທີ່ໄດ້ຮັບການຍົກຍ້ອງໃນດ້ານການສ້າງປະສິດທິພາບທາງການເງິນ
              </p>
            </template>
          </vs-card>
        </vs-col>
        <vs-col w="4">
          <vs-card>
            <template #img>
              <img
                src="https://www.stbanklaos.la/images/navicon/mission.svg"
                style="max-width: 96px"
                class="mt-3"
              />
            </template>
            <template #title>
              <h3>ເປົ້າໝາຍ</h3>
            </template>
            <template #text>
              <p>
                ສ້າງມູນຄ່າພິເສດໃຫ້ແກ່ລູກຄ້າ,
                ພະນັກງານຂອງພວກເຮົາໂດຍຜ່ານຄວາມເປັນຜູ້ນຳທາງການຕະຫຼາດໃນການສະໜອງຜະລິດຕະພັນທາງການເງິນ
              </p>
            </template>
          </vs-card>
        </vs-col>
        <vs-col w="4">
          <vs-card>
            <template #img>
              <img
                src="https://www.stbanklaos.la/images/navicon/value.svg"
                style="max-width: 96px"
                class="mt-3"
              />
            </template>
            <template #title>
              <h3>ຄ່ານິຍົມ</h3>
            </template>
            <template #text>
              <p>
                ຕອບສະໜອງຄວາມຕ້ອງການ, ມີແນວຄິດສ້າງສັນ, ມີຄວາມກ້າຫານ,
                ມີຄວາມໄວ້ວາງໃຈ, ການເຮັດວຽກເປັນທີມງານ
              </p>
            </template>
          </vs-card>
        </vs-col>
        <vs-col w="4">
          <vs-card>
            <template #img>
              <img
                src="https://www.stbanklaos.la/images/navicon/organic.svg"
                style="max-width: 96px"
                class="mt-3"
              />
            </template>
            <template #title>
              <h3>ແຜນ​ວາດ</h3>
            </template>
            <template #text>
              <p>ແຜນ​ວາດ ວິໄສທັດຂອງທະນາຄານ</p>
            </template>
          </vs-card>
        </vs-col>
      </vs-row>
    </div>
    <nuxt-content :document="page" />
  </section>
</template>

<script>
import { TimelineLite } from "gsap";
export default {
  async asyncData({ $content }) {
    const page = await $content("la/about").fetch();

    return {
      page,
    };
  },
  layout: "client",
  mounted() {
    const { box } = this.$refs;
    const timeline = new TimelineLite();

    timeline.to(box, 1, { x: 200, rotation: 90 });
  },
};
</script>

<style>
</style>