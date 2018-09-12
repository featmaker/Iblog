<template>
  <div>
      <footer class="i-blog-footer footer text-left f-s-13">
            <p class="footer-item m-t-10">
              <a href="#">关于 Iblog</a>
              <a href="#">加入我们</a>
              <a href="#">友情链接</a>
            </p>
            <p class="footer-item m-t-10">
              <a href="#">联系我们</a>
              <a href="#">博客介绍</a>
            </p>
            <p class="footer-item m-t-10">
              <a href="#">蜀备案 2018-09-10</a>
              <a href="#">帮助</a>
            </p>
            <p class="footer-item">©2018 Iblog, inc.</p>
      </footer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'footer'
      }
    }
  }
</script>

<style lang="scss" scoped>
a {
  color: #666;
}

.footer-item {
  > a {
    &:not(:last-child)::after {
      content: "\B7";
      margin: 0 5px;
    }
  }
}

.m-t-10 {
  margin-bottom: 10px;
}
</style>
