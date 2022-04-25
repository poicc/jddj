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

    <!-- icons九宫格区 -->
    <div class="icons">
      <div class="icons__item">
        <img
          class="icons__item__img"
          src="https://cdn.jsdelivr.net/gh/poicc/image@main/超市.381xxdf9k0s0.webp"
          alt=""
        />
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img
          class="icons__item__img"
          src="https://cdn.jsdelivr.net/gh/poicc/image@main/菜市场.xmmq0ne672o.webp"
          alt=""
        />
        <p class="icons__item__desc">菜市场</p>
      </div>
      <div class="icons__item">
        <img
          class="icons__item__img"
          src="https://cdn.jsdelivr.net/gh/poicc/image@main/水果店.5rpv53yr71w0.webp"
          alt=""
        />
        <p class="icons__item__desc">水果店</p>
      </div>
      <div class="icons__item">
        <img
          class="icons__item__img"
          src="https://cdn.jsdelivr.net/gh/poicc/image@main/鲜花.1l9r58g3j5eo.webp"
          alt=""
        />
        <p class="icons__item__desc">鲜花绿植</p>
      </div>
      <div class="icons__item">
        <img
          class="icons__item__img"
          src="https://cdn.jsdelivr.net/gh/poicc/image@main/医药健康.15z8pd10yedc.webp"
          alt=""
        />
        <p class="icons__item__desc">医药健康</p>
      </div>
      <div class="icons__item">
        <img
          class="icons__item__img"
          src="https://cdn.jsdelivr.net/gh/poicc/image@main/家居.7jp1bei9yo00.webp"
          alt=""
        />
        <p class="icons__item__desc">家居时尚</p>
      </div>
      <div class="icons__item">
        <img
          class="icons__item__img"
          src="https://cdn.jsdelivr.net/gh/poicc/image@main/蛋糕.233n2l0flls0.webp"
          alt=""
        />
        <p class="icons__item__desc">烘培蛋糕</p>
      </div>
      <div class="icons__item">
        <img
          class="icons__item__img"
          src="https://cdn.jsdelivr.net/gh/poicc/image@main/签到.2en5q1dnw7wg.webp"
          alt=""
        />
        <p class="icons__item__desc">签到</p>
      </div>
      <div class="icons__item">
        <img
          class="icons__item__img"
          src="https://cdn.jsdelivr.net/gh/poicc/image@main/大牌免运.77xfzzc9fv40.webp"
          alt=""
        />
        <p class="icons__item__desc">大牌免运</p>
      </div>
      <div class="icons__item">
        <img
          class="icons__item__img"
          src="https://cdn.jsdelivr.net/gh/poicc/image@main/红包.66unzn28xa80.webp"
          alt=""
        />
        <p class="icons__item__desc">红包套餐</p>
      </div>
    </div>

    <div class="gap"></div>
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

.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.16rem;
  &__item {
    width: 20%;
    &__img {
      display: block;
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 auto;
    }
    &__desc {
      margin: 0.06rem 0 0.16rem 0;
      text-align: center;
      color: $content-fontcolor;
    }
  }
}

.gap {
  margin: 0 -0.18rem;
  height: 0.1rem;
  background: #f1f1f1;
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
