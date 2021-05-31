import Vue from 'vue'
import Vuex from 'vuex'
import {
    state,
    mutations
} from './default'

import users from './users'
import profiles from './profiles'
import permissions from './permissions'
import permissions_profiles from './permissions_profiles'
import roles from './roles'
import categories from './categories'
import products from './products'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        users,
        profiles,
        permissions,
        permissions_profiles,
        roles,
        categories,
        products
    },
    state,
    mutations
})


export default store
