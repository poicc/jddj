<template>
  <div class="warpper">
    <img
      src="https://cdn.jsdelivr.net/gh/poicc/image@main/1872c290-c537-11ec-b721-37898cb18678.3uuceh24uky0.webp"
      class="wrapper__img"
    />
    <div class="wrapper__input">
      <input
        type="text"
        class="wrapper__input__content"
        placeholder="用户名"
        v-model="username"
      />
    </div>
    <div class="wrapper__input">
      <input
        type="password"
        class="wrapper__input__content"
        placeholder="密码"
        v-model="password"
        autocomplete="new-password"
      />
    </div>
    <div class="wrapper__input">
      <input
        type="password"
        class="wrapper__input__content"
        placeholder="确认密码"
        v-model="ensurement"
      />
    </div>
    <div class="wrapper__login-button" @click="handleRegister">注册</div>
    <div class="wrapper__login-link" @click="handleLoginClick">
      已有账号去登录
    </div>
  </div>
</template>

<script setup>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { post } from "../../utils/request";

const data = reactive({
  username: "crq",
  password: "",
  ensurement: "",
});

const router = useRouter();

const handleRegister = async () => {
  if (data.password !== data.ensurement) {
    console.log("两次密码不一致");
    data.password = "";
    data.ensurement = "";
    return;
  }
  try {
    const result = await post("/user/register", {
      username: data.username,
      password: data.password,
    });
    if (result?.code === 200 && result.message === "注册成功") {
      router.push({ name: "LoginPage" });
    } else {
      console.log(res.message);
      data.username = "";
      data.password = "";
      data.ensurement = "";
    }
  } catch (e) {
    console.log("请求失败");
  }
};
const { username, password, ensurement } = toRefs(data);

const handleLoginClick = () => {
  router.push({
    name: "LoginPage",
  });
};
</script>

<style lang="scss" scoped>
@import "../../style/index.scss";
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__img {
    display: block;
    margin: 0 auto 0.4rem auto;
    width: 0.66rem;
    height: 0.66rem;
  }
  &__input {
    height: 0.48rem;
    margin: 0 0.4rem 0.16rem 0.4rem;
    padding: 0 0.16rem;
    background: #f9f9f9;
    border: 0.01rem solid rgba(0, 0, 0, 0.1);
    border-radius: 0.06rem;

    &__content {
      margin-top: 0.12rem;
      line-height: 0.22rem;
      border: none;
      outline: none;
      width: 100%;
      background: none;
      font-size: 0.16rem;
      color: $content-notice-fontcolor;

      &::placeholder {
        color: $content-notice-fontcolor;
      }
    }
  }

  &__login-button {
    margin: 0.32rem 0.4rem 0.16rem 0.4rem;
    line-height: 0.48rem;
    background: #0091ff;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    color: $bgColor;
    font-size: 0.16rem;
    text-align: center;
  }
  &__login-link {
    text-align: center;
    font-size: 0.14rem;
    color: $content-notice-fontcolor;
  }
}
</style>