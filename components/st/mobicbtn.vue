<template>
  <div>
    <header class="ictabs">
      <ul class="hor-list">
        <li ref="btnnav" v-for="(it, index) in mobicbtn" :key="index">
          <template>
            <vs-button>ddd</vs-button>
            <!-- <button
              class="vs-button vs-button--square"
              @click="selectTab(index)"
            >
              <div class="vs-button__content">
                <i class="bx bxs-phone-call"></i>
                <p class="mt-1">{{ it.title }}</p>
              </div>
            </button> -->
          </template>
        </li>
      </ul>
    </header>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      default: "light",
    },
  },
  data() {
    return {
      selectedIndex: 0, // the index of the selected tab,
      mobicbtn: [], // all of the tabs
    };
  },
  created() {
    // var parent = this.$refs;
    this.mobicbtn = this.$parent;
    console.log();
  },
  mounted() {
    this.selectTab(0);
  },
  methods: {
    selectTab(i) {
      this.mobicbtn.forEach((ctab, index) => {
        // ctab.isActive = ctab.title === selectedTab.title;
        ctab.isActive = index === i;
      });
    },
  },
};
</script>

<style lang="scss">
.st-btn {
  width: 100%;
  height: calc(100%);
  cursor: pointer;
}
.hor-list {
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    float: left;
    width: 25%;
    cursor: pointer;
    .vs-button {
      width: 100%;
      color: #fff;
      .vs-button__content {
        display: block;
        i {
          border: 2px solid #fff;
          border-radius: 50%;
          padding: 5px;
        }
      }
    }
    // div {
    //   display: block;
    //   text-align: center;
    //   color: #fff;
    //   .icon {
    //     border: 2px solid #fff;
    //     padding: 4px;
    //     border-radius: 50%;
    //     height: 80px;
    //     width: 80px;
    //   }
    // }
  }
}
</style>