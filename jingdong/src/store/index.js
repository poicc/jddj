import Vuex from 'vuex'

const setLocalCartList = (state) => {
  const { cartList } = state
  const cartListString = JSON.stringify(cartList)
  localStorage.cartList = cartListString
}

const getLocalCartList = () => {
  try {
    return JSON.parse(localStorage.cartList)
  } catch (e) {
    return {}
  }
}

export default Vuex.createStore({
  state: {
    // 第一层级是店铺id
    // 1: {
    //   101: {
    //     _id: 101,
    //     name: '番茄250/份',
    //     imgUrl: 'http://47.96.31.161:9000/vue3/番茄.webp',
    //     sales: 10,
    //     price: 33.6,
    //     originPrice: 39.6,
    //     count: 2
    //   },
    //   102: {
    //     _id: 102,
    //     name: '草莓250/份',
    //     imgUrl: 'http://47.96.31.161:9000/vue3/草莓.webp',
    //     sales: 10,
    //     price: 33.6,
    //     originPrice: 39.6,
    //     count: 3
    //   }
    // }

    cartList: getLocalCartList()
  },
  getters: {},
  mutations: {
    changeCartItemInfo(state, payload) {
      const { shopId, productId, productInfo } = payload
      const shopCartList = state.cartList[shopId] || {
        productList: {}
      }

      let product = shopCartList.productList[productId]
      if (!product) {
        productInfo.count = 0
        product = productInfo
      }
      product.count = product.count + payload.num
      if (payload.num > 0) {
        product.check = true
      }
      if (payload.count < 0) {
        product.count = 0
      }
      shopCartList.productList[productId] = product
      state.cartList[shopId] = shopCartList
      setLocalCartList(state)
    },
    changeShop(state, shopId) {
      const shopCartList = state.cartList[shopId] || {
        productList: {}
      }
      state.cartList[shopId] = shopCartList
      setLocalCartList(state)
    },
    setTotal(state, payload) {
      const { shopId, total } = payload
      state.cartList[shopId].total = total
    }
  },
  actions: {},
  modules: {}
})
