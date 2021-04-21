<template>
  <vs-card class="card-w100">
    <template #title>
      <h3 class="text-center">ຄຸນລັກສະນະ ແລະ ເງື່ອນໄຂເພີ່ມຕື່ມ</h3>
    </template>
    <template #text>
      <vs-button
        class="btn-link"
        transparent
        square
        flat
        v-for="i in 6"
        :key="i"
      >
        <div class="body">
          <div class="title text-dark">ວັດຖຸປະສົງຂອງການສະໜອງເງິນກູ້</div>
          <div class="keyword text-muted">
            ຊື້ທີ່ດິນພ້ອມອາຄານ / ປຸກສ້າງ ຫຼື ຕໍ່ເຕີ່ມສ້ອມແປງເຮືອນໃນທີ່ດິນ
            ເຊິ່ງເປັນຂອງຜູ້ກູ້ ຫຼື ຄູ່ສົມລົດ /
            ໄຖ່ຖອນການຈຳນອງທີ່ດິນພ້ອມເຮືອນຂອງຜູ້ກູ້
          </div>
        </div>
      </vs-button>
    </template>
    <template #interactions>
      <vs-button danger icon>
        <i class="bx bx-heart"></i>
      </vs-button>
      <vs-button class="btn-chat" shadow primary>
        <i class="bx bx-chat"></i>
        <span class="span"> 54 </span>
      </vs-button>
    </template>
  </vs-card>
</template>
<style lang="scss">
.card-w100 {
  .vs-card {
    max-width: 100%;
  }
}
.btn-link {
  //   background-color: red;
  .title {
    font-size: 11pt;
  }
  .title,
  .body {
    text-align: left;
  }
}
</style>