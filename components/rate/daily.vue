<template>
  <div>
    <vs-table striped>
      <template #header>
        <slot></slot>
      </template>
      <template #thead>
        <vs-tr>
          <vs-th> ສະກຸນເງິນ </vs-th>
          <vs-th> ຊື້ </vs-th>
          <vs-th> ຂາຍ </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr :key="i" v-for="i in 7" :data="i">
          <vs-td>
            <vs-avatar size="24">
              <img
                :src="`https://www.stbanklaos.la/images/flag/${items.item[i].flag}.png`"
                alt=""
              />
            </vs-avatar>
            {{ items.item[i].code }}
          </vs-td>
          <vs-td>{{ items.item[i].buy_tc }} </vs-td>
          <vs-td>
            {{ items.item[i].sell_tt }}
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
    <!-- {{ items }} -->
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
  },
};
</script>

<style>
.vs-table table {
  min-width: 100%;
}
</style>