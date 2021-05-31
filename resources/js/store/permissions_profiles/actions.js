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
    getPermissionsProfiles({
        commit
    }, page = 1, id) {
        commit('SET_PRELOADER', true)
        
        return axios.get(`${URL}/${RESOURCE}/${id}/profiles?page=` + page, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then(response => {
                commit('SET_PERMISSIONS', response.data)
            })
            .finally(() => commit('SET_PRELOADER', false))
    },
    getPermissionProfile({
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

    async updatePermission(id, data) {
        const response = await axios.put(`${URL}/${RESOURCE}/${id}`, data, {
            headers: {
                Authorization: "Bearer " + token,
            }
        })
    },

    async createPermission({
        commit
    }, data) {
        const response = await axios.post(`${URL}/${RESOURCE}`, data, {
            headers: {
                Authorization: "Bearer " + token,
            }
        })
    }

}
