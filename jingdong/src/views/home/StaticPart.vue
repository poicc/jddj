<template>
  <div class="position">
    <span class="iconfont position__icon">&#xe64c;</span>
    南京工业职业技术大学计算机与软件学院软件敬业楼214
    <span class="iconfont position__notice">&#xe60a;</span>
  </div>

  <!-- 搜索 -->
  <div class="search">
    <span class="iconfont">&#xe741;</span>
    <span class="search__text">山姆会员商店优惠商品</span>
  </div>

  <!-- banner区 -->
  <div class="banner">
    <img
      src="https://cdn.jsdelivr.net/gh/poicc/image@main/banner.loxmtewzza8.webp"
      alt=""
      class="banner__img"
    />
  </div>

  <!-- icons九宫格区 -->
  <div class="icons">
    <div class="icons__item" v-for="item in iconsList" :key="item.desc">
      <img class="icons__item__img" :src="item.icon" alt="" />
      <p class="icons__item__desc">{{ item.desc }}</p>
    </div>
  </div>
  <div class="gap"></div>

  <!-- 附件店铺 -->
  <div class="nearby">
    <h3 class="nearby__title">附件店铺</h3>
    <div class="nearby__item">
      <img
        src="https://cdn.jsdelivr.net/gh/poicc/image@main/shop1.6u02d6a1t0g0.webp"
        alt=""
        class="nearby__item__img"
      />
      <div class="nearby__content">
        <div class="nearby__content__title">沃尔玛</div>
        <div class="nearby__content__tags">
          <span class="nearby__content__tag">月售1万+</span>
          <span class="nearby__content__tag">起送￥0</span>
          <span class="nearby__content__tag">基础运费￥5</span>
        </div>
        <div class="nearby__content__highlight">
          VIP尊享满99减4元运费券（每月3张）
        </div>
      </div>
    </div>
    <div class="nearby__item">
      <img
        class="nearby__item__img"
        src="https://cdn.jsdelivr.net/gh/poicc/image@main/shop2.3qdct6pcbyc0.webp"
        alt=""
      />
      <div class="nearby__content">
        <div class="nearby__content__title">山姆会员店</div>
        <div class="nearby__content__tags">
          <span class="nearby__content__tag">月售1万+</span>
          <span class="nearby__content__tag">起送￥0</span>
          <span class="nearby__content__tag">基础运费￥5</span>
        </div>
        <div class="nearby__content__highlight">联合利华洗护满10减5</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "StaticPart",
  setup() {
    const iconsList = [
      {
        imgNmae: "超市",
        desc: "超市便利",
        icon: "https://cdn.jsdelivr.net/gh/poicc/image@main/超市.381xxdf9k0s0.webp",
      },
      {
        imgNmae: "菜市场",
        desc: "菜市场",
        icon: "https://cdn.jsdelivr.net/gh/poicc/image@main/菜市场.xmmq0ne672o.webp",
      },
      {
        imgNmae: "水果店",
        desc: "水果店",
        icon: "https://cdn.jsdelivr.net/gh/poicc/image@main/水果店.5rpv53yr71w0.webp",
      },
      {
        imgNmae: "鲜花",
        desc: "鲜花",
        icon: "https://cdn.jsdelivr.net/gh/poicc/image@main/鲜花.1l9r58g3j5eo.webp",
      },
      {
        imgNmae: "医药健康",
        desc: "医药健康",
        icon: "https://cdn.jsdelivr.net/gh/poicc/image@main/医药健康.15z8pd10yedc.webp",
      },
      {
        imgNmae: "家居",
        desc: "家居时尚",
        icon: "https://cdn.jsdelivr.net/gh/poicc/image@main/家居.7jp1bei9yo00.webp",
      },
      {
        imgNmae: "蛋糕",
        desc: "烘焙蛋糕",
        icon: "https://cdn.jsdelivr.net/gh/poicc/image@main/蛋糕.233n2l0flls0.webp",
      },
      {
        imgNmae: "签到",
        desc: "签到",
        icon: "https://cdn.jsdelivr.net/gh/poicc/image@main/签到.2en5q1dnw7wg.webp",
      },
      {
        imgNmae: "大牌免运",
        desc: "大牌免运",
        icon: "https://cdn.jsdelivr.net/gh/poicc/image@main/大牌免运.77xfzzc9fv40.webp",
      },
      {
        imgNmae: "红包",
        desc: "红包套餐",
        icon: "https://cdn.jsdelivr.net/gh/poicc/image@main/红包.66unzn28xa80.webp",
      },
    ];
    return {
      iconsList,
    };
  },
};
</script>

<style lang="scss">
@import "../../style/index.scss";
.position {
  position: relative;
  padding: 0.16rem 0.16rem 0.16rem 0;
  line-height: 0.22rem;
  font-size: 0.16rem;
  @include ellipse;
  .position__icon {
    position: relative;
    top: 0.01rem;
    font-size: 0.2rem;
  }
  .positio__notice {
    position: absolute;
    right: 0;
    top: 0.17rem;
    font-size: 0.2rem;
  }
  color: $content-fontcolor;
}
.search {
  margin-bottom: 0.12rem;
  line-height: 0.32rem;
  background-color: $search-bgColor;
  color: $search-fontColor;
  border-radius: 0.16rem;
  .iconfont {
    display: inline-block;
    padding: 0 0.12rem 0 0.16rem;
    font-style: 0.16rem;
  }
  &__text {
    display: inline-block;
    font-size: 0.14rem;
  }
}
.banner {
  height: 0;
  overflow: hidden;
  //hack技巧：通过高宽比预留出高度防抖（高/宽）
  padding-bottom: 25.4%;
  &__img {
    width: 100%;
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
  background: $content-bgColor;
}

.nearby {
  &__title {
    margin: 0.16rem 0 0.02rem 0;
    font-size: 0.18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }
  &__item {
    display: flex;
    padding-top: 0.12rem;
    &__img {
      margin-right: 0.16rem;
      width: 0.56rem;
      height: 0.56rem;
    }
  }
  &__content {
    flex: 1;
    padding-bottom: 0.12rem;
    border-bottom: 1px solid #fff;
    &__title {
      line-height: 0.22rem;
      font-size: 0.16rem;
      color: $content-fontcolor;
    }
    &__tags {
      margin-top: 0.08rem;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: $content-fontcolor;
    }
    &__tag {
      margin-right: 00.16rem;
    }
    &__highlight {
      margin: 0.08rem 0 0 0;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: $hightlight-fontColor;
    }
  }
}
</style>
