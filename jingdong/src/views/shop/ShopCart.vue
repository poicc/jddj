<template>
  <div class="cart">
    <div class="check">
      <div class="check__icon">
        <img
          class="check__icon__img"
          src="https://cdn.jsdelivr.net/gh/RuErJieFei/PicX@master/20210917/81665c50-c6a7-11ec-90b7-b96acbcc0334.3k2vzoopxmm0.webp"
          alt=""
        />
        <div class="check__icon__tag">{{ total(shopId) }}</div>
      </div>
      <div class="check__info">
        总计：
        <span class="check__info__price">&yen;{{ price(shopId) }}</span>
      </div>
      <div class="check__btn">去结算</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

const route = useRoute()
const shopId = ref(route.params.id)
console.log(shopId)

const store = useStore()
const cartList = store.state.cartList

const total = (shopId) => {
  return cartList?.[shopId]?.total?.total || 0
}
const price = (shopId) => {
  return cartList?.[shopId]?.total?.price || 0
}
</script>

<style lang="scss" scoped>
@import '../../style/index.scss';
.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0.5rem;
  background-color: $bgColor;
}

.check {
  display: flex;
  height: 0.49rem;
  border-top: 0.01rem solid $content-bgColor;
  line-height: 0.49rem;

  &__icon {
    position: relative;
    width: 0.84rem;

    &__img {
      display: block;
      margin: 0.12rem auto;
      width: 0.28rem;
      height: 0.26rem;
    }

    &__tag {
      position: absolute;
      right: 0.2rem;
      top: 0.04rem;
      width: 0.2rem;
      height: 0.2rem;
      line-height: 0.2rem;
      background-color: $hightlight-fontColor;
      border-radius: 50%;
      font-size: 0.12rem;
      text-align: center;
      color: #fff;
      transform: scale(0.5);
      transform-origin: left center;
    }
  }

  &__info {
    flex: 1;
    color: $content-fontcolor;
    font-size: 0.12rem;

    &__price {
      line-height: 0.49rem;
      color: $hightlight-fontColor;
      font-size: 0.18rem;
    }
  }

  &__btn {
    width: 0.98rem;
    background-color: $btn-bgColor;
    text-align: center;
    font-size: 0.14rem;
    color: $bgColor;
  }
}
</style>
