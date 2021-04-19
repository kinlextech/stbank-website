<template>
  <div>
    <vs-row justify="center" align="center">
      <vs-col w="7" justify="center">
        <h1 class="text-center">ຮັບສະໝັກງານ</h1>
        <h2 class="text-center">
          ມາເປັນຄອບຄົວດຽວກັບພວກເຮົາ <br />
          ເພື່ອແບ່ງປັນປະສົບການທີ່ດີກວ່າ
        </h2>
        <vs-button class="mx-auto">ເບິ່ງລາຍລະອຽດໜ້າວຽກ</vs-button>
      </vs-col>
      <vs-col w="5"><img src="images/4565.jpg" style="width: 100%" /></vs-col>
    </vs-row>

    <section style="margin-top: 80px">
      <!-- <img src="https://www.stbanklaos.la/images/cm1.svg" /> -->
      <div class="container">
        <vs-row justify="center" align="center">
          <vs-card class="m-2">
            <template #text>
              <div class="p-4 text-center">
                ດາວໂຫຼດເອກສານ <br />ໃບສະໝັກວຽກຈາກທະນາຄານ ເອັສທີ ຈຳກັດ
              </div>
            </template>
          </vs-card>
          <vs-card class="m-2">
            <template #text>
              <div class="p-4 text-center">
                ແຈ້ງການ <br />ໃບແຈ້ງການກ່ຽວກັບການສະໝັກວຽກອື່ນໆ
              </div>
            </template>
          </vs-card>
          <vs-card class="m-2">
            <template #text>
              <div class="p-4 text-center">
                ສະໝັກວຽກ Online <br />ສະໝັກວຽກ Online ຜ່ານທາງເວັບໃຊ້
              </div>
            </template>
          </vs-card>
        </vs-row>
        <vs-table striped>
          <template #tbody>
            <vs-tr :key="i" v-for="(tr, i) in users">
              <vs-td>
                <h3>{{ tr.name }}</h3>
                <div>ເລີ່ມຮັບສະໝັກ {{ tr.start }} ຫາ {{ tr.end }}</div>
              </vs-td>
              <template #expand>
                <h3>ຄຸນສົມບັດຕ້ອງການ</h3>

                <div class="con-content" v-html="tr.require"></div>
              </template>
            </vs-tr>
          </template>
        </vs-table>
      </div>
      <div class="container">
        <h1>ເອກະສານປະກອບສະມັກງານ</h1>
        <vs-table width="100%">
          <template #tbody>
            <vs-tr :key="i" v-for="(tr, i) in docreqire">
              <vs-td>
                {{ tr.name }}
              </vs-td>
            </vs-tr>
          </template>
        </vs-table>
      </div>
      <div class="container">
        <h1>ດາວໂຫຼດເອກສານ</h1>
        <vs-table width="100%">
          <template #tbody>
            <vs-tr :key="i" v-for="(tr, i) in docdown">
              <vs-td>
                {{ tr.name }}
              </vs-td>
            </vs-tr>
          </template>
        </vs-table>
      </div>
      <nuxt-content :document="page" />
    </section>
  </div>
</template>

<script>
import { TimelineLite } from "gsap";
export default {
  async asyncData({ $content }) {
    const page = await $content("la/careers").fetch();

    return {
      page,
    };
  },
  layout: "client",
  data() {
    return {
      users: [
        {
          id: 1,
          name: "ຫົວໜ້າໜ່ວຍບໍລິການສາລະວັນ 1 ຕຳແໜ່ງ",
          start: "12/12/2021",
          end: "25/12/2021",
          require:
            "<ul><li>ເພດຊາຍ/ຍິງ ອາຍຸ 25 ປີຂື້ນໄປ</li><li>ມີປະສົບການຢ່າງໜ້ອຍ 3 ປີຂື້ນໄປ</li><li>ລະດັບການສຶກສາ ປະລິນຍາຕີຂື້ນໄປ ຈົບດ້ານການທະນາຄານ, ເສດຖະສາດ ຫຼື ບໍລິຫານທຸລະກິດ ທັງພາຍໃນ ແລະ ຕ່າງປະເທດ</li></ul>",
        },
        {
          id: 1,
          name: "ຫົວໜ້າໜ່ວຍບໍລິການສາລະວັນ 1 ຕຳແໜ່ງ",
          start: "12/12/2021",
          end: "25/12/2021",
          require:
            "<ul><li>ເພດຊາຍ/ຍິງ ອາຍຸ 25 ປີຂື້ນໄປ</li><li>ມີປະສົບການຢ່າງໜ້ອຍ 3 ປີຂື້ນໄປ</li><li>ລະດັບການສຶກສາ ປະລິນຍາຕີຂື້ນໄປ ຈົບດ້ານການທະນາຄານ, ເສດຖະສາດ ຫຼື ບໍລິຫານທຸລະກິດ ທັງພາຍໃນ ແລະ ຕ່າງປະເທດ</li></ul>",
        },
      ],
      docdown: [
        {
          id: 1,
          name: "ໃບສະໝັກວຽກຈາກທະນາຄານ ເອັສທີ ຈຳກັດ",
        },
      ],
      docreqire: [
        {
          id: 1,
          name: "ໃບສະໝັກວຽກຈາກທະນາຄານ ເອັສທີ ຈຳກັດ",
        },
        {
          id: 1,
          name: "ໃບຄຳຮ້ອງຂຽນດ້ວຍຕົນເອງ",
        },
        {
          id: 1,
          name: "ໃບຢັ້ງຢືນທີ່ຢູ່ຕິດຮູບ (ພາຍໃນ 3 ເດືອນ) ສະບັບແທ້",
        },
        {
          id: 1,
          name: "ໃບແຈ້ງໂທດ (ພາຍໃນ 3 ເດືອນ) ສະບັບແທ້",
        },
        {
          id: 1,
          name: "ໃບຢັ້ງຢືນກວດສຸຂະພາບ (ພາຍໃນ 3 ເດືອນ) ສະບັບແທ້",
        },
        {
          id: 1,
          name: "ໃບຊີວະປະຫວັດຫຍໍ້, CV ເປັນພາສາອັງກິດ",
        },
        {
          id: 1,
          name: "ໃບຢັ້ງຢືນການຄ້ຳປະກັນ (ສະບັບແທ້)",
        },
        {
          id: 1,
          name: "ສຳເນົາໃບຢັ້ງຢືນການສຶກສາຕ່າງໆ ແລະ ໃບຄະແນນ",
        },
        {
          id: 1,
          name: "ຮູບພາບ 3X4 ຈຳນວນ 1 ໃບ",
        },
        {
          id: 1,
          name: "ໃບຜ່ານງານ (ຖ້າມີ)",
        },
      ],
    };
  },
  mounted() {
    const { box } = this.$refs;
    const timeline = new TimelineLite();

    timeline.to(box, 1, { x: 200, rotation: 90 });
  },
};
</script>

<style>
</style>