<template>
  <div class="content">
    <div class="category">
      <div
        :class="{
          category__item: true,
          'category__item--active': currentTab === item.tab
        }"
        v-for="item in categories"
        :key="item.name"
        @click="() => handleTabClick(item.tab)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="product">
      <div class="product__item" v-for="item in list" :key="item._id">
        <img class="product__item__img" :src="item.imgUrl" />
        <div class="product__item__detail">
          <h4 class="product__item__title">{{ item.name }}</h4>
          <p class="product__item__sales">月售 {{ item.sales }} 件</p>
          <p class="product__item__price">
            <span class="product__item__yen">￥</span>{{ item.price }}
            <span class="product__item__origin">￥{{ item.originPrice }}</span>
          </p>
        </div>
        <div class="product__number">
          <span
            class="product__number_minus iconfont"
            @click="
              () => {
                changeCartItem(shopId, item._id, item, -1)
              }
            "
            >&#xe8b1;</span
          >
          {{ getProductCartCount(shopId, item._id) }}
          <span
            class="product__number__plus iconfont"
            @click="
              () => {
                changeCartItem(shopId, item._id, item, 1)
              }
            "
            >&#xe726;</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref, toRefs } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { get } from '@/utils/request'

const categories = [
  { name: '全部商品', tab: 'all' },
  { name: '秒杀', tab: 'secKill' },
  { name: '新鲜水果', tab: 'fruit' }
]

const route = useRoute()

const shopId = ref(route.params.id)

const store = useStore()
const cartList = store.state.cartList

const changeCartItemInfo = (shopId, productId, productInfo, num) => {
  store.commit('changeCartItemInfo', { shopId, productId, productInfo, num })
  // 计算该店铺商品的数量和总价
  const productList = cartList[shopId]?.productList
  const result = {
    total: 0,
    price: 0,
    allChecked: true
  }
  if (productList) {
    for (const i in productList) {
      const product = productList[i]
      result.total += product.count
      if (product.check) {
        result.price += product.count * product.price
      }
      if (product.count > 0 && !product.check) {
        result.allChecked = false
      }
    }
  }
  result.price = result.price.toFixed(2)
  console.log(result)
  store.commit('setTotal', { shopId, total: result })
}

const getProductCartCount = (shopId, productId) => {
  return cartList?.[shopId]?.productList?.[productId]?.count || 0
}

const changeShop = (shopId) => {
  store.commit('changeShop', shopId)
}

const changeCartItem = (shopId, productId, item, num) => {
  changeCartItemInfo(shopId, productId, item, num)
  changeShop(shopId)
}

onMounted(async () => {
  console.log('*******onMounted*******')
  getContentData()
})

/**
 * 切换tab逻辑
 */
const currentTab = ref(categories[0].tab)

const handleTabClick = (tab) => {
  currentTab.value = tab
  console.log(currentTab.value)
  getContentData()
}

/**
 * 列表内容相关逻辑
 */
const content = reactive({ list: [] })

const getContentData = async () => {
  const result = await get(`/shop/${route.params.id}/products`, {
    tab: currentTab.value
  })
  if (result?.code === 200 && result?.data?.length) {
    console.log(result.data)
    content.list = result.data
  }
}

const { list } = toRefs(content)
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';

.content {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: 0.5rem;
}

.category {
  overflow-y: scroll;
  height: 100%;
  width: 0.76rem;
  background-color: $search-bgColor;

  &__item {
    line-height: 0.4rem;
    text-align: center;
    font-size: 0.14rem;
    color: #333;

    &--active {
      background: $bgColor;
    }
  }
}

.product {
  overflow-y: scroll;
  flex: 1;

  &__item {
    position: relative;
    display: flex;
    padding: 0.12rem 0;
    margin: 0 0.16rem;
    border-bottom: 0.01rem solid $content-bgColor;

    &__detail {
      overflow: hidden;
    }

    &__img {
      width: 0.68rem;
      height: 0.68rem;
      margin-right: 0.16rem;
    }

    &__title {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $content-fontcolor;
      @include ellipse;
    }

    &__sales {
      margin: 0.06rem 0;
      font-size: 0.12rem;
      color: $content-fontcolor;
    }

    &__prise {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $hightlight-fontColor;
    }

    &__yen {
      font-size: 0.12rem;
    }

    &__origin {
      margin-left: 0.06rem;
      line-height: 0.2rem;
      font-size: 0.12rem;
      color: $light-fontColor;
      text-decoration: line-through;
    }

    .product__number {
      position: absolute;
      right: 0;
      bottom: 0.12rem;
      line-height: 0.18rem;

      &__minus {
        //position: relative;
        top: 0.02rem;
        color: $medium-fontColor;
        margin-right: 0.05rem;
      }

      &__plus {
        //position: relative;
        top: 0.02rem;
        color: $btn-bgColor;
        margin-right: 0.05rem;
      }
    }
  }
}
</style>
