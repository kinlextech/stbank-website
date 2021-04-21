
<template>
  <div class="center">
    <vs-button danger @click="active = !active"> Open Dialog </vs-button>
    <vs-dialog prevent-close v-model="active">
      <template #header>
        <h4 class="not-margin">ສົນໃຈສະໝັກບໍລິການ</h4>
      </template>

      <div class="con-form">
        <div class="mt-2">
          <vs-input
            white
            state="white"
            v-model="value5"
            label-placeholder="ຊື່ ແລະ ນາມສະກຸນ"
          />
        </div>
        <div class="mt-4">
          <vs-input
            white
            state="white"
            v-model="value5"
            label-placeholder="ເບີໂທ"
          />
        </div>
        <div class="mt-4">
          <vs-input
            white
            state="white"
            v-model="value5"
            label-placeholder="ອີເມວ໌"
          />
        </div>
        <div class="mt-4">
          <vs-select
            placeholder="Select"
            label-placeholder="ຜະລິດຕະພັນ"
            v-model="value"
          >
            <vs-option label="Vuesax" value="1"> Vuesax </vs-option>
            <vs-option label="Vue" value="2"> Vue </vs-option>
            <vs-option label="Javascript" value="3"> Javascript </vs-option>
            <vs-option disabled label="Sass" value="4"> Sass </vs-option>
            <vs-option label="Typescript" value="5"> Typescript </vs-option>
            <vs-option label="Webpack" value="6"> Webpack </vs-option>
            <vs-option label="Nodejs" value="7"> Nodejs </vs-option>
          </vs-select>
        </div>
        <div class="mt-4">
          <vs-input
            dark
            state="dark"
            v-model="value5"
            type="textarea"
            label-placeholder="ຄຳອະທິບາຍ"
          />
        </div>

        <div class="flex mt-3">
          <vs-checkbox v-model="checkbox1">Remember me</vs-checkbox>
        </div>
      </div>

      <template #footer>
        <div class="footer-dialog">
          <vs-button block> Sign In </vs-button>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>
<script>
export default {
  data: () => ({
    active: false,
    input1: "",
    value: "",
    checkbox1: false,
  }),
};
</script>
<style lang="scss">
.vs-dialog {
  background-color: #039 !important;
  color: #ffff;
}
.con-form {
  .vs-input {
    width: 100%;
  }
  .vs-select-content {
    max-width: 100%;
  }
}
</style>

        