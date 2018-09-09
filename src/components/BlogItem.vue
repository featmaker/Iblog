<template>
  <div class="ib-blog-item blog-item-container text-left">
    <div class="blog-item-wrapper">
      <div class="blog-item-header">
        <h2 class="item-title">
          <a href="#">
            这个一篇博客的标题
          </a>
        </h2>
        <div class="item-meta">
          <span class="item-author">
            <em>By</em>
            <a href="#">Lifue</a>
          </span>
          <span class="item-publish-time relative">
            发布于 2018-09-09
          </span>
          <span class="item-viewers relative">
            99 阅读
          </span>
        </div>
      </div>
      <div class="blog-item-body">
        <div class="item-img-wrapper text-center">
          <a href="#">
            <img src="https://dn-simplecloud.shiyanlou.com/course/1524550135378_%E3%80%90%E6%A5%BC+%E3%80%91-%E3%80%90PHP7%E5%AE%9E%E6%88%98%E3%80%91(1).png?imageView2/0/h/300" alt="">
          </a>
        </div>
        <div class="item-summary">
          <p class="item-summary-snippet">
            此处时博客的正文内容此处时博客的正文内容此处时博客的正文内容此处时博客的正文内容此处时博客的正文内容
            此处时博客的正文内容此处时博客的正文内容此处时博客的正文内容此处时博客的正文内容
            此处时博客的正文内容此处时博客的正文内容此处时博客的正文内容此处时博客的正文内容此处时博客的正文内容
          </p>
        </div>
      </div>
      <div class="blog-item-footer">
        <div class="item-tags float-left">
          所属标签:
          <span>tag</span>
        </div>
        <a href="#" class="read-more float-right">Read more</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>

.ib-blog-item {
  margin-bottom: 15px;
  background: #fff;
}

.blog-item-wrapper {
  padding: 25px
}

.blog-item-header {
  margin-bottom: 25px;
  .item-title {
    margin-bottom: 15px;
    font-size: 16px;
    font-weight: bold;
    > a {
      color: #666;
      transition: color .17s ease;
      &:hover {
        color: #175199;
      }
    }
  }
  .item-meta {
    font-style: italic;
    font-size: 14px;
    .item-author {
      > a {
        margin: 0 5px;
        color: red;
      }
    }
    .item-publish-time, .item-viewers {
      margin-left: 10px;
      &::before {
        content: '-';
        position: absolute;
        left: -5px;
        color: gray;
      }
    }
  }
}

.blog-item-body {
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
  .item-img-wrapper {
    a {
      width: 100%;
      img {
        max-width: 100%;
      }
    }
    
  }
  .item-summary {
    margin-top: 15px;
    .item-summary-content {
      font-size: 14px;
      color: #888;
      overflow: hidden;
    }
  }
}

.blog-item-footer {
  overflow: auto;
  padding-top: 25px;
  font-size: 14px;
  .item-tags {
    margin-top: 10px;
  }
  .read-more {
    background-color: #f2132d;
    color: #fff;
    padding: 10px 25px;
    border-radius: 2px;
    transition: background .17s ease;
  }
}
</style>

