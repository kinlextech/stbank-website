<template>
  <div class="row justify-content-md-center">
    <vs-navbar color="#039" text-white square center-collapsed v-model="active">
      <template #left>
        <vs-navbar-item
          v-for="(itm, index) in listmenu.filter((i) => i.position == 'left')"
          :key="index"
          :active="active == itm.id"
          :id="itm.id"
        >
          {{ itm.title }}
        </vs-navbar-item>
      </template>

      <template #right>
        <vs-navbar-item
          v-for="(itm, index) in listmenu.filter((i) => i.position == 'right')"
          :key="index"
          :active="active == itm.id"
          :id="itm.id"
        >
          {{ itm.title }}
        </vs-navbar-item>
      </template>
    </vs-navbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: "PAGEPERSON",
      listmenu: [
        {
          id: "PAGEPERSON",
          title: "Personal Banking",
          position: "left",
        },
        {
          id: "PAGECORE",
          title: "Corporate Banking",
          position: "left",
        },
        {
          id: "PAGEBRNUI",
          title: "Branches / Service Units",
          position: "right",
        },
        {
          id: "PAGECAREER",
          title: "Careers",
          position: "right",
        },
        {
          id: "PAGEABOUT",
          title: "About Us",
          position: "right",
        },
      ],
    };
  },
};
</script>
