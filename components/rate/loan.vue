<template>
  <div>
    <vs-table striped>
      <template #header>
        <slot></slot>
      </template>
      <template #thead>
        <vs-tr>
          <vs-th> </vs-th>
          <vs-th> ກີບ </vs-th>
          <vs-th> ໂດລາ </vs-th>
          <vs-th> ບາດ </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr :key="i" v-for="(tr, i) in items.item" :data="tr">
          <vs-td style="max-width: 50px"> </vs-td>
          <vs-td style="width: 100px">{{ tr.buy_tc }} </vs-td>
          <vs-td style="width: 100px">
            {{ tr.sell_tt }}
          </vs-td>
          <vs-td style="width: 100px">
            {{ tr.sell_tt }}
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
</style>