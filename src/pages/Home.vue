<template>
  <div>
      <Layout>
        <template slot="body">
          content body
        </template>
      </Layout>
  </div>
</template>

<script>
  import Layout from '../components/Layout'

  export default {
    data() {
      return {}
    },
    components: {
      Layout
    }
  }
</script>

<style lang="scss" scoped>

</style>
