<template>
  <div>
    <ul class="hor-list">
      <li v-for="(tab, index) in nvlist" :key="tab.title">
        <vs-button square icon transparent @click="selectTab(index)">
          <i class="bx bxs-phone-call"></i>
          <p class="mt-1">{{ tab.title }}</p>
          <template #animate>
            <i class="bx bxs-like"></i>
          </template>
        </vs-button>
      </li>
    </ul>
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
      nvlist: [], // all of the tabs
    };
  },
  created() {
    this.nvlist = this.$children;
    console.log(this.nvlist);
  },
  mounted() {
    this.selectTab(0);
  },
  methods: {
    selectTab(i) {
      this.selectedIndex = i;
      // loop over all the tabs
      this.nvlist.forEach((btab, index) => {
        btab.isActive = index === i;
      });
    },
  },
};
</script>

<style lang="scss">
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