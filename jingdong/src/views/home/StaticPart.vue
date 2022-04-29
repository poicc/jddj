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
</template>
<script>
export default {
  name: 'StaticPart',
  setup() {
    const iconsList = [
      {
        imgNmae: '超市',
        desc: '超市便利',
        icon: 'https://cdn.jsdelivr.net/gh/poicc/image@main/超市.381xxdf9k0s0.webp'
      },
      {
        imgNmae: '菜市场',
        desc: '菜市场',
        icon: 'https://cdn.jsdelivr.net/gh/poicc/image@main/菜市场.xmmq0ne672o.webp'
      },
      {
        imgNmae: '水果店',
        desc: '水果店',
        icon: 'https://cdn.jsdelivr.net/gh/poicc/image@main/水果店.5rpv53yr71w0.webp'
      },
      {
        imgNmae: '鲜花',
        desc: '鲜花',
        icon: 'https://cdn.jsdelivr.net/gh/poicc/image@main/鲜花.1l9r58g3j5eo.webp'
      },
      {
        imgNmae: '医药健康',
        desc: '医药健康',
        icon: 'https://cdn.jsdelivr.net/gh/poicc/image@main/医药健康.15z8pd10yedc.webp'
      },
      {
        imgNmae: '家居',
        desc: '家居时尚',
        icon: 'https://cdn.jsdelivr.net/gh/poicc/image@main/家居.7jp1bei9yo00.webp'
      },
      {
        imgNmae: '蛋糕',
        desc: '烘焙蛋糕',
        icon: 'https://cdn.jsdelivr.net/gh/poicc/image@main/蛋糕.233n2l0flls0.webp'
      },
      {
        imgNmae: '签到',
        desc: '签到',
        icon: 'https://cdn.jsdelivr.net/gh/poicc/image@main/签到.2en5q1dnw7wg.webp'
      },
      {
        imgNmae: '大牌免运',
        desc: '大牌免运',
        icon: 'https://cdn.jsdelivr.net/gh/poicc/image@main/大牌免运.77xfzzc9fv40.webp'
      },
      {
        imgNmae: '红包',
        desc: '红包套餐',
        icon: 'https://cdn.jsdelivr.net/gh/poicc/image@main/红包.66unzn28xa80.webp'
      }
    ]
    return {
      iconsList
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/index.scss';
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
  .position__notice {
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
</style>
