import Vue from 'vue'
import axios from 'axios'

import {
    URI_BASE_API,
    API_VERSION
} from '../../config/api'

const URL = URI_BASE_API
const RESOURCE = 'users'
const token = window.localStorage.getItem("token");
export default {
    getUsers({
        commit
    }, page = 1) {
        commit('SET_PRELOADER', true)
        
        return axios.get(`${URL}/${RESOURCE}?page=` + page, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then(response => {
                commit('SET_USERS', response.data)
            })
            .finally(() => commit('SET_PRELOADER', false))
    },
    getUser({
        commit
    }, id) {
        commit('SET_PRELOADERCARD', true)
        if (id) {
            return axios.get(`${URL}/${RESOURCE}/${id}`, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
                .finally(() => commit('SET_PRELOADERCARD', false))
        }
    },

    async updateUser(id, data) {
        const response = await axios.put(`${URL}/${RESOURCE}/${id}`, data, {
            headers: {
                Authorization: "Bearer " + token,
            }
        })
    },

    async createUser({
        commit
    }, data) {
        const response = await axios.post(`${URL}/${RESOURCE}`, data, {
            headers: {
                Authorization: "Bearer " + token,
            }
        })
    }

}
