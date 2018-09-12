<template>
  <div>
    <Card>
      <div class="card-user-profile text-center bg-fff">
          <div class="user-avatar-wrapper text-center inline-block">
            <img class="user-avatar width-p-100" src="https://wenjinliu.com/avatar.jpg" alt="">
          </div>
          <div class="user-profile-detail">
            <p class="user-name m-t-15 f-s-16">WenJin Liu</p>
              <p class="user-introduction m-10-0">
               Full Stackoverflow Developer
              </p>
              <div class="social-account-list">
                  <p class="follow-me m-10-0">
                    Follow me
                  </p>
                  <a class="social-account-item inline-block" href="#"><img src="../assets/social-icons/zhihu.svg" class="width-p-100" alt=""></a>
                  <a class="social-account-item inline-block" href="#"><img src="../assets/social-icons/github.svg" class="width-p-100" alt=""></a>
                  <a class="social-account-item inline-block" href="#"><img src="../assets/social-icons/google+.svg" class="width-p-100" alt=""></a>
                  <a class="social-account-item inline-block" href="#"><img src="../assets/social-icons/zhihu.svg" class="width-p-100" alt=""></a>
                  <a class="social-account-item inline-block" href="#"><img src="../assets/social-icons/zhihu.svg" class="width-p-100" alt=""></a>
              </div>
          </div>
        </div>
      </Card>
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
  .user-avatar-wrapper {
    width: 50%;
  }
  .user-avatar {
    border-radius: 50%;
  }
  .user-name {
    font-weight: bold;
  }
  .social-account-list {
    border-top: 1px solid #eee;
  }
  .social-account-item {
    width: 25px;
    height: 25px;
    margin: 0 10px 10px
  }
  .m-10-0 {
    margin: 10px 0;
  }
</style>

