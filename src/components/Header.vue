<template>
  <div>
    <div class="ib-header-container">
      <header class="ib-header">
        <div class="header-logo">
          <a href="#">
            <img src="https://file.iviewui.com/dist/e1cf12c07bf6458992569e67927d767e.png" alt="">
          </a>
        </div>
        <Menu mode="horizontal" active-name="1">
            <div class="layout-nav">
                <menu-item name="1">
                    <Icon type="ios-navigate"></Icon>
                    菜单项 1
                </menu-item>
                <menu-item name="2">
                    <Icon type="ios-keypad"></Icon>
                    菜单项 2
                </menu-item>
                <menu-item name="3">
                    <Icon type="ios-analytics"></Icon>
                    菜单项 3
                </menu-item>
                <menu-item name="4">
                    <Icon type="ios-paper"></Icon>
                    菜单项 4
                </menu-item>
            </div>
        </Menu>
      </header>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        msg: 'header'
      }
    },
    components: {
     
    }
  }
</script>

<style lang="scss" scoped>
.ib-header-container {
  width: 1000px;
  margin: 0 auto;
}
.ib-header {
  display: flex;
  align-content: center;
  z-index: 9;
}
.header-logo {
  width: 100px;
  img {
    width: 100%;
  }
}
.ivu-menu-horizontal {
  height: 62px;
  line-height: 62px;
  &::after {
    height: 0;
  }
}
</style>
