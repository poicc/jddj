<template>
  <!-- 附件店铺 -->
  <div class="nearby">
    <h3 class="nearby__title">附件店铺</h3>
    <router-link
      v-for="item in nearByList"
      :key="item._id"
      :to="`/shop/${item._id}`"
    >
      <ShopInfo :item="item" />
    </router-link>
  </div>
</template>

<script setup>
import { toRefs, reactive } from 'vue'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo'
const data = reactive({ nearByList: [] })
get('/shop/list').then((result) => {
  if (result?.code === 200 && result?.data) {
    console.log(result.data)
    data.nearByList = result.data
  }
})

const { nearByList } = toRefs(data)
</script>

<style lang="scss" scoped>
@import '../../style/index.scss';
.nearby {
  &__title {
    margin: 0.16rem 0 0.02rem 0;
    font-size: 0.18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }
  a {
    text-decoration: none;
  }
}
</style>
