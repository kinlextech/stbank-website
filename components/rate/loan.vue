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
        <vs-tr v-for="i in 5" :key="i">
          <vs-td style="max-width: 50px">ເງິນຝາກປະຢັດ</vs-td>
          <vs-td style="width: 100px"> 1,89%</vs-td>
          <vs-td style="width: 100px">
            <!-- {{ tr.sell_tt }} -->
            1,50%
          </vs-td>
          <vs-td style="width: 100px">
            <!-- {{ tr.sell_tt }} -->
            1,50%
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