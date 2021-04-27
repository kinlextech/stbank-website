<template>
  <div class="container pt-4 pb-4">
    <vs-dialog prevent-close blur scroll overflow-hidden v-model="active">
      <template #header>
        <h4 class="not-margin">ກາລຸນາເລືອກສະກຸນເງິນ</h4>
      </template>
      <div class="con-form">
        <vs-table striped v-model="selected">
          <template #header>
            <slot></slot>
          </template>
          <template #tbody>
            <vs-tr
              :key="index"
              v-for="(it, index) in items.item"
              :data="it"
              :is-selected="rateinput == it"
            >
              <vs-td>
                <div class="d-flex">
                  <img
                    :src="`https://www.stbanklaos.la/images/flag/${it.flag}.png`"
                    class="icon-png"
                    alt=""
                  />
                  <p>{{ it.code }}</p>
                </div>
              </vs-td>
              <vs-td> {{ it.buy_tc }} </vs-td>
            </vs-tr>
          </template>
        </vs-table>
      </div>
    </vs-dialog>
    ຄຳນວນອັດຕາແລກປ່ຽນ
    <vs-input
      shadow
      warn
      type="number"
      icon-after
      v-model="rateinput"
      @click-icon="fcychange(1)"
      :label-placeholder="`ຈຳນວນເງິນ ${selected.code}`"
    >
      <template #icon>
        <img
          :src="`https://www.stbanklaos.la/images/flag/${selected.flag}.png`"
          style="width: 24px; height: 24px; border-radius: 30px"
        />
      </template>
    </vs-input>
    <vs-input
      shadow
      warn
      type="number"
      icon-after
      v-model="rateresult"
      @click-icon="fcychange(1)"
      label-placeholder="ຜົນລັບ"
      class="mt-4"
    >
      <template #icon>
        <img
          :src="`https://www.stbanklaos.la/images/flag/${selected2.flag}.png`"
          style="width: 24px; height: 24px; border-radius: 30px"
        />
      </template>
    </vs-input>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
  },
  data() {
    return {
      active: false,
      selected: {
        flag: "la",
        buy_tc: "1",
      },
      selected2: {
        flag: "la",
        buy_tc: "1",
      },
      rateresult: 0,
      rateinput: "",
    };
  },
  watch: {
    selected() {
      this.active = false;
    },
    rateinput(val) {
      this.convert(val);
    },
  },
  methods: {
    async fcychange(val) {
      this.active = true;
    },
    async convert(val) {
      this.rateresult = this.selected.buy_tc * this.buy_tc.buy_tc;
    },
  },
};
</script>

<style>
.icon-png {
  height: 24px;
  max-width: 24px;
  border-radius: 30px;
}
</style>