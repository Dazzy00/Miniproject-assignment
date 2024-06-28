import Vuex from 'vuex'
import dishes from './modules/dishes'
import cart from './modules/cart'

export default new Vuex.Store({
    state:{},
    getters:{},
    actions:{},
    mutations:{},
    modules:{
        dishes,
        cart
    }
})