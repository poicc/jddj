<template>
  <!-- 顶部搜索区 -->
  <div class="warpper">
    <!-- 定位 -->
    <div class="warpper__position">
      <span class="iconfont">&#xe64c;</span>
      南京工业职业技术大学计算机与软件学院软件工程技术本科专业2021级
      <span class="iconfont warpper__position__notice">&#xe60a;</span>
    </div>

    <!-- 搜索 -->
    <div class="warpper__search">
      <span class="iconfont">&#xe741;</span>
      <span class="warpper__search__text">山姆会员商店优惠商品</span>
    </div>
  </div>

  <div class="docker">
    <div class="docker__item docker__item--active">
      <div class="iconfont">&#xe6b8;</div>
      <div class="docker__title">首页</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe6af;</div>
      <div class="docker__title">购物车</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe713;</div>
      <div class="docker__title">订单</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe78b;</div>
      <div class="docker__title">我的</div>
    </div>
  </div>
  <router-view />
</template>

<style lang="scss">
@import "./style/index.scss";
.warpper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0.5rem;
  padding: 0 0.18rem;

  &__position {
    position: relative;
    padding: 0.16rem 0.16rem 0.16rem 0;
    font-size: 0.16rem;
    @include ellipse;
    color: $content-fontcolor;
    &__notice {
      position: absolute;
      right: 0;
      top: 0.15rem;
      font-size: 0.2rem;
    }
  }
  &__search {
    margin-bottom: 0.12rem;
    line-height: 0.32rem;
    background-color: $background-color;
    color: $placeholder-color;
    border-radius: 0.16rem;
    .iconfont {
      display: inline-block;
      padding: 0 0.12rem 0 0.16rem;
      font-style: 0.2rem;
    }
    &__text {
      display: inline-block;
      font-size: 0.14rem;
    }
  }
  &__banner {
    height: 0;
    //hack技巧：通过高宽比预留出高度防抖（高/宽）
    padding-bottom: 25.4%;
    &__img {
      width: 100%;
    }
  }
}

.docker {
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 0.01rem solid #f1f1f1;
  color: $content-fontcolor;
  &__item {
    flex: 1;
    text-align: center;

    &--active {
      color: $highlight-color;
    }
    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
      font-size: 0.18rem;
    }
  }
  &__title {
    font-size: 0.2rem;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}
</style>
