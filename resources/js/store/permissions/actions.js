import Vue from 'vue'
import axios from 'axios'

import {
    URI_BASE_API,
    API_VERSION
} from '../../config/api'

const URL = URI_BASE_API
const RESOURCE = 'permissions'
const token = window.localStorage.getItem("token");
export default {
    getPermissions({
        commit
    }, page = 1) {
        commit('SET_PRELOADER', true)

        return axios.get(`${URL}/${RESOURCE}?page=` + page, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then(response => {
                commit('SET_PERMISSIONS', response.data)
            })
            .finally(() => commit('SET_PRELOADER', false))
    },
    getPermission({
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

    updatePermission(id, data) {
        return axios.put(`${URL}/${RESOURCE}/${id}`, data, {
            headers: {
                Authorization: "Bearer " + token,
            }
        })
    },

    async createPermission({
        commit
    }, data) {
        return axios.post(`${URL}/${RESOURCE}`, data, {
            headers: {
                Authorization: "Bearer " + token,
            }
        })
    }

}
