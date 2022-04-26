<template>
  <h2>我的</h2>
  <router-link to="login">
    <h2>登录</h2>
  </router-link>
  <AppDocker :currentIndex="2" />
</template>

<script>
import AppDocker from "../../components/AppDocker";
export default {
  name: "PersonalPage",
  components: {
    AppDocker,
  },
};
</script>