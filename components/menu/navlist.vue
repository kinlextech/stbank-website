
<template>
  <vs-card>
    
    <template #text>
      <div class="pt-4 mb-3">
        <vs-select
          label="ຊອກ​ຫາ​ສາ​ຂາ / ATM ທີ່​ໃກ້​ທ່ານ​ທີ່​ສຸດ"
          placeholder="Placeholder"
          v-model="value3"
        >
          <vs-option label="Vuesax" value="1"> Vuesax </vs-option>
          <vs-option label="Vue" value="2"> Vue </vs-option>
          <vs-option label="Javascript" value="3"> Javascript </vs-option>
          <vs-option label="Sass" value="4"> Sass </vs-option>
          <vs-option label="Typescript" value="5"> Typescript </vs-option>
          <vs-option label="Webpack" value="6"> Webpack </vs-option>
          <vs-option label="Nodejs" value="7"> Nodejs </vs-option>
        </vs-select>
      </div>
      <vs-sidebar square notShadow relative v-model="active" open>
        <vs-sidebar-item :id="it.id" v-for="(it,index) in asidenav" :key="index">
          <template #icon>
            <i class="bx bx-home"></i>
          </template>
          {{it.title}}
        </vs-sidebar-item>
      </vs-sidebar>
    </template>
  </vs-card>
</template>
<script>
export default {
  data: () => ({
    active: "",
    value3: "",
  }),
  computed:{
    asidenav(){
      return this.$i18n.t('navigator').filter(it=> it.aside === true)
    }
  }
};
</script>
<style>
.vs-sidebar-content {
  max-width: 100%;
  width: 100%;
}
.vs-select-content {
  max-width: 100%;
}
</style>

        