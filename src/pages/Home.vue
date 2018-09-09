<template>
  <div>
      <Layout>
        <template slot="body">
          <Card>此处放置 slogn 或者 banner 内容</Card>
          <div class="content">
            <blog-item></blog-item>
            <blog-item></blog-item>
            <blog-item></blog-item>
            <blog-item></blog-item>
          </div>
        </template>
      </Layout>
  </div>
</template>

<script>
  import Layout from '../components/Layout'
  import BlogItem from '../components/BlogItem'

  export default {
    data() {
      return {}
    },
    components: {
      Layout,
      'blog-item': BlogItem,
    }
  }
</script>

<style lang="scss" scoped>

</style>
