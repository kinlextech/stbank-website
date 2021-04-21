<template>
  <div class="bg-primary">
    <div>
      <div class="container">
        <vs-row>
          <div class="btn-wrapp-concept">
            <vs-button
              square
              :animate-inactive="successFace"
              @click="handleClickFace"
              :loading="loadingFace"
              color="#ec008c"
              style="width: 100px; display: flex; border-radius: 30px"
            >
              <vs-avatar circle>
                <img src="/images/png/stmi.png" alt="" />
              </vs-avatar>
              <div class="p-2">
                <h3>ເອັສທີ-ເມືອງໄທ ປະກັນໄພ</h3>
                <h5>ຊຳລະ ແລະ ປະກັນໄພ</h5>
              </div>
              <template #animate>
                <i class="bx bxl-facebook-square" style="font-size: 40pt"></i>
                ເອັສທີ - ເມືອງໄທ ປະກັນໄພ
              </template>
            </vs-button>
          </div>
          <div class="btn-wrapp-concept">
            <vs-button
              square
              :animate-inactive="successFace"
              @click="handleClickFace"
              :loading="loadingFace"
              color="#000"
              style="width: 100px; display: flex; border-radius: 30px"
            >
              <img src="/images/png/western.png" style="width: 100%" />
              <div class="p-2">
                <h3>WesternUnion</h3>
                <h5>ບໍລິການໂອນເງີນໄປຕ່າງປະເທດ</h5>
              </div>
              <template #animate>
                <i class="bx bxl-facebook-square"></i> ເອັສທີ - ເມືອງໄທ ປະກັນໄພ
              </template>
            </vs-button>
          </div>
          <div class="btn-wrapp-concept">
            <vs-button
              square
              :animate-inactive="successFace"
              @click="handleClickFace"
              :loading="loadingFace"
              color="#7a6e67"
              style="width: 100px; display: flex; border-radius: 30px"
            >
              <img src="/images/png/swift-logo.svg" style="width: 100%" />
              <div class="p-2">
                <h3>SWIFT</h3>
                <h5>ບໍລິການໂອນເງີນໄປຕ່າງປະເທດ</h5>
              </div>
              <template #animate> ເອັສທີ - ເມືອງໄທ ປະກັນໄພ </template>
            </vs-button>
          </div>
        </vs-row>
      </div>
    </div>
    <div class="container mt-3 mb-2">
      <vs-row>
        <vs-col lg="4" md="12" sm="12">
          <Logo style="width: 200px" /> <br />
          <h3>ທະນາຄານ ເອັສທີ ຈຳກັດ</h3>
          <h5>
            02 ເມືອງວາທ່າ ຖະໜົນ ສຸພານຸວົງ<br />
            ເມືອງ ສີໂຄດຕະບອງ ນະຄອນຫຼວງວຽງຈັນ, ສ​ປປ ລາວ
          </h5>
          <h4>
            ໂທລະສັບ(856-21) 241 560-62<br />
            ແຟັກ (856-21) 241 564
          </h4>
          <h1>
            HOT LINE: 1881 <br />
            24' Service
          </h1>
        </vs-col>
        <vs-col lg="8" md="12" sm="12">
          <vs-row>
            <template v-for="(nif, i) in navtype">
              <vs-col lg="4" md="6" sm="6" :key="i">
                <div class="lif">
                  <div class="list-title">{{ nif[0].type_title }}</div>
                  <ul>
                    <li v-for="(sit, x) in nif" :key="x">
                      <nuxt-link to="/">{{ sit.title }}</nuxt-link>
                    </li>
                  </ul>
                </div>
              </vs-col>
            </template>
            <vs-col lg="4" md="12" sm="12">
              <div class="lif">
                <div class="list-title">ກ່ຽວກັບທະນາຄານ</div>
                <ul>
                  <li>ກ່ຽວກັບພວກເຮົາ</li>
                  <li>ສາຂາ / ໜ່ວຍບໍລິການ</li>
                  <li>ສະໝັກວຽກທະນາຄານ</li>
                  <li>ພົວພັນທະນາຄານ</li>
                </ul>
              </div>
            </vs-col>
          </vs-row>
        </vs-col>

        <div class="list-line float-right">
          <vs-select state="red" v-model="setfont">
            <vs-option label="Default" value="Phetsarath OT">
              Noto Sans Lao
            </vs-option>
            <vs-option label="Noto" value="Noto Sans Lao">
              Noto Sans Lao
            </vs-option>
          </vs-select>
          <nuxt-link to="">ນະໂຍບາຍ</nuxt-link>
          <nuxt-link to="">ຂໍ້ກຳນົດການໃຊ້ງານ</nuxt-link>
          <nuxt-link to="">ຂໍ້ມູນທາງກົດໝາຍ</nuxt-link>
          <nuxt-link to="">ແຜນຜັງເວັບໃຊ້</nuxt-link>
        </div>
      </vs-row>
    </div>
    <div class="text-center copy-right p-2">
      © 2019 Copyright: ST Bank All Rights Reseived Designed and Developed
      Vientiane Lao P.D.R
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      setfont: "Noto Sans Lao",
      styleObj: {
        fontFamily: "Time New Roman",
      },
    };
  },
  watch: {
    setfont(val) {
      console.log(val)
      document.body.style.fontFamily= val
    },
  },
  computed: {
    navtype() {
      var group_to_values = this.$i18n
        .t("navigator")
        .reduce(function (obj, item) {
          obj[item.type] = obj[item.type] || [];
          obj[item.type].push(item);
          return obj;
        }, {});
      return group_to_values;
      // return [...new Set()];
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/app.scss";
.lif {
  color: #fff;
  .list-title {
    font-size: 13pt;
    &::before {
      content: "";
      background-color: $primary;
      position: absolute;
      height: 4px;
      margin-top: 25px;
      border-radius: 15px;
      width: 30%;
      clear: both;
    }
  }
  ul {
    list-style: none;
    margin-top: 10px;
    padding-left: 0;
    li {
      margin: 0;
      font-size: 11pt;
      line-height: 2;
      a {
        color: azure;
        font-size: 10pt;
        &:hover {
          color: rgb(245, 245, 160);
        }
      }
    }
  }
}
.b-primary {
  background-color: $primary;
  color: $white;
}
.copy-right {
  background-color: rgb(6 82 221);
}
.btn-wrapp-concept {
  max-width: 250px;
  margin-right: 10px;
  button {
    width: 100% !important;
    .vs-button__content {
      padding: 0px !important;
    }
    img {
      max-width: 60px;
    }
  }
}
.list-line {
  position: absolute;
  right: 0;
  bottom: 9px;
  a {
    color: beige;
    font-size: 10pt;
    border-right: 1px solid #ffff;
    padding-right: 9px;
    &:last-child {
      border-right: none;
    }
  }
}
</style>