<template>
  <div>
    <vsm-menu :menu="menu">
      <template #default="data">
        <component :is="data.item.content" class="content" />
        <component
          :is="data.item.secondaryContent"
          class="content--secondary"
        />
      </template>
      <li slot="before-nav" class="logo vsm-section vsm-mob-full">
        <a href="#">
          <!-- <figma-logo /> -->
        </a>
      </li>
      <template slot="after-nav">
        <li class="vsm-section vsm-mob-hide">
          <!--router-link, etc-->
          <a href="#" class="vsm-link signup"> Sign In </a>
        </li>
        <!--Display mobile menu-->
        <vsm-mob>
          <div class="mobile-content">Mobile Content</div>
        </vsm-mob>
      </template>
    </vsm-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menu: [
        {
          title: "ບັນຊີເງິນຝາກ",
          dropdown: "features",
          content: "menu-deposit",
        },
        {
          title: "ສິນເຊື່ອ",
          dropdown: "enterprise",
          content: "enterpriseDropdownTop",
          secondaryContent: "enterpriseDropdownBottom",
        },
        {
          title: "ປະກັນໄພ",
          dropdown: "enterprise",
          content: "enterpriseDropdownTop",
          secondaryContent: "enterpriseDropdownBottom",
        },
        {
          title: "ການບໍລິການ",
          dropdown: "enterprise",
          content: "enterpriseDropdownTop",
          secondaryContent: "enterpriseDropdownBottom",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.vsm-menu {
  margin: 10px;
  ul {
    max-width: 1024px;
    margin: 0 auto;
  }
}

.vsm-root {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  flex: 1 1 auto;
}

.vsm-section_menu {
  * {
    padding: 0 25px;
    font-weight: 500;
    font-family: inherit;
  }
}

.vsm-link {
  position: relative;
  color: var(--link);
  text-decoration: none;
  &:hover {
    color: var(--link);
  }
}

.signup {
  color: #fff;
  background: #333;
  font-weight: bold;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 10px;
  transition: transform 0.1s;
  &:hover {
    color: #fff;
    transform: translateY(-3px);
  }
}

.content,
.content--secondary,
.mobile-content {
  padding: 30px;
}

.content--secondary {
  padding-top: 10px;
  padding-bottom: 10px;
}

.dropdown--section_title {
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 20px;
  &:not(:first-child) {
    margin-top: 20px;
  }
}

.dropdown-wrap__content {
  display: flex;
  align-items: center;
  color: var(--primary);
  text-decoration: none;
  padding: 10px 5px 10px 0;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
  &.type1 {
    span {
      margin-left: 10px;
    }
  }
  &.type2 {
    align-items: flex-start;
    div {
      margin-left: 10px;
    }
    .content--bottom {
      color: var(--secondary);
    }
  }
}

.feature-dropdown {
  min-width: 250px;
}

.enterprise-dropdown {
  width: 400px;
}
</style>