<template>
  <div class="layout">
    <Layout>
      <Header>
        <Iheader />
      </Header>
      <Layout>
        <Sider>
          <slot name="sider">
            <Card>ddd</Card>
          </slot>
          <Ifooter />
        </Sider>
        <Content>
          <slot name="body"></slot>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
  import { Layout, Header, Sider, Content, Card } from 'iview'
  import Iheader from './Header'
  import Ifooter from './Footer'


  export default {
    data() {
      return {

      }
    },
    components: {
      Layout,
      Header,
      Sider,
      Content,
      Iheader,
      Ifooter,
      Card,
    }
  }
</script>

<style>
.ivu-layout-sider {
  order: 1;
}
</style>
