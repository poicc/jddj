<template>
  <div class="wrapper">
    <div class="header">
      <div class="header__info">
        <div class="header__info__username">{{ userInfo.username }}</div>
        <div class="header__info__nickname">昵称: {{ userInfo.nickname }}</div>
      </div>
      <img :src="userInfo.avatar" class="header__avatar" />
    </div>
    <div class="list">
      <div class="list__item">
        <div class="list__item__icon iconfont">&#xe7f1;</div>
        <div class="list__item__test">我的地址</div>
        <div class="list__item__arrow iconfont">&#xe604;</div>
      </div>
    </div>
    <div class="logout" @click="handleLogout">退出登录</div>
  </div>
  <AppDocker :currentIndex="3" />
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { get } from '../../utils/request'
import AppDocker from '../../components/AppDocker.vue'

const userInfo = reactive({ _id: '', username: '', nickname: '', avatar: '' })

const getUserInfo = async () => {
  const result = await get('/user/info')
  if (result?.code === 200 && result?.data) {
    const { _id, username, avatar, nickname } = result.data
    console.log(result.data)
    userInfo._id = _id || ''
    userInfo.username = username || ''
    userInfo.avatar = avatar || ''
    userInfo.nickname = nickname || ''
  }
}

onMounted(async () => {
  getUserInfo()
})

const router = useRouter()

const handleLogout = () => {
  localStorage.removeItem('isLogin')
  router.replace({ name: 'LoginPage' })
}
</script>

<style lang="scss" scoped>
@import '@/style/viriables.scss';

.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  background: $dark-bgColor;
}
.header {
  position: relative;
  height: 1.5rem;
  background-image: linear-gradient(239deg, #3a6ff3 0%, #50c7fb 100%);
  padding-top: 0.4rem;
  &__info {
    margin: 0.3rem 0.18rem 0 0.18rem;
    padding-top: 0.46rem;
    height: 0.66rem;
    background: #fff;
    border-radius: 0.08rem;
    &__username {
      font-size: 0.24rem;
      color: #262628;
      text-align: center;
      line-height: 0.36rem;
    }
    &__nickname {
      margin-top: 0.04rem;
      font-size: 0.14rem;
      color: #c1c0c9;
      text-align: center;
    }
  }
  &__avatar {
    position: absolute;
    left: 50%;
    top: 0.2rem;
    transform: translateX(-50%);
    width: 0.94rem;
    height: 0.94rem;
    border-radius: 50%;
  }
}
.list {
  margin: 0.16rem 0.18rem 0 0.18rem;
  background: $bgColor;
  box-shadow: 0 0.08rem 0.16rem 0 rgba(0, 0, 0, 0.08);
  border-radius: 0.08rem;
  &__item {
    display: flex;
    padding: 0.2rem;
    line-height: 0.22rem;
    font-size: 0.14rem;
    color: #262626;
    &__icon {
      margin-right: 0.12rem;
      width: 0.22rem;
      height: 0.22rem;
      background: #32c5ff;
      border-radius: 0.08rem;
      text-align: center;
      font-weight: bold;
      color: $bgColor;
    }
    &__test {
      flex: 1;
    }
    &__arrow {
      width: 0.2rem;
      font-weight: bold;
      color: #c2c4ca;
    }
  }
}
.logout {
  margin: 0.18rem;
  padding: 0.06rem 0;
  font-size: 0.14rem;
  line-height: 0.32rem;
  background: $btn-bgColor;
  color: $bgColor;
  text-align: center;
  border-radius: 0.04rem;
}
</style>
