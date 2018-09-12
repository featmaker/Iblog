<template>
  <div class="layout">
    <Layout>
      <Header>
        <Iheader />
      </Header>
      <Layout class="layout-container">
        <Sider class="layout-sider">
          <slot name="sider">
            <user-profile></user-profile>

            <Card>右边栏 card</Card>
            <Ifooter></Ifooter>
          </slot>
        </Sider>
        <Content class="main-content">
          <slot name="body"></slot>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
  import Iheader from './Header'
  import Ifooter from './Footer'
  import UserProfile from './UserProfile'

  export default {
    data() {
      return {

      }
    },
    components: {
      Iheader,
      Ifooter,
      'user-profile': UserProfile,
    }
  }
</script>

<style lang="scss">
.ivu-layout-header {
  background: #fff;
  position: fixed;
  width: 100%;
  box-shadow: 0 1px 3px rgba(26,26,26,.1);
  z-index: 1;
}
.ivu-layout-sider {
  order: 1;
}
.layout-container {
  width: 1000px;
  margin: 79px auto auto;
}
.main-content {
  margin-right: 15px;
}
.layout-sider {
  background: transparent;
}
</style>
