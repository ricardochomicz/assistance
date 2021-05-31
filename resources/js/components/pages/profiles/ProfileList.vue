<template>
    <div>
        <div class="card">
            <preloader></preloader>
            <div class="card-header">
                <h3 class="card-title mb-0">
                    <i class="fas fa-id-badge mr-2"></i> Perfis
                </h3>
                <div class="card-tools">
                    <div class="input-group input-group-sm">
                        <input
                            type="text"
                            name="q"
                            class="form-control float-right"
                            placeholder="Pesquisa"
                            v-model="search"
                            v-on:keyup="searchUnit"
                        />

                        <div class="input-group-append">
                            <button type="submit" class="btn btn-default">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <router-link
                    to="/profiles-create"
                    class="btn btn-dark btn-sm mb-1 mt-1"
                    >Novo Perfil
                </router-link>
                <div class="table-responsive">
                    <table class="table table-hover table-borderless">
                        <caption>
                            <small v-if="search !== ''"
                                ><b>{{ this.qty_filter.length }}</b> perfis
                                encontrado(s)</small
                            >
                        </caption>
                        <thead>
                            <tr>
                                <th class="text-center">ID</th>
                                <th>Nome</th>
                                <th>Descrição</th>
                                <th class="text-center">
                                    <i class="fas fa-cogs"></i>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="profile in profiles.data"
                                :key="profile.id"
                                :row="profile"
                            >
                                <td class="text-center align-middle">
                                    {{ profile.id }}
                                </td>
                                <td class="align-middle">{{ profile.name }}</td>
                                <td class="align-middle">
                                    {{ profile.description }}
                                </td>
                                <td class="align-middle text-center">
                                    <b-button
                                        v-b-tooltip.hover="'Editar Perfil'"
                                        variant="primary"
                                        @click="showModal(profile.id)"
                                    >
                                        <i class="fas fa-pen"></i>
                                    </b-button>
                                    <router-link
                                        v-bind:to="'/profiles/' + profile.id + '/permissions'"
                                        v-b-tooltip="'Permissões'"
                                        class="btn btn-secondary text-white"
                                        ><i class="fas fa-lock"></i
                                    ></router-link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div
                        class="pagination pagination-sm justify-content-center"
                    >
                        <pagination
                            :data="profiles"
                            @pagination-change-page="getProfiles"
                        ></pagination>
                    </div>
                </div>
            </div>
        </div>
        <modal
            v-show="isModalVisible"
            @close="closeModal"
            :profile="profile"
        ></modal>
    </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import { URI_BASE_API } from "../../../config/api";
import _ from "lodash";
import modal from "./ProfileEdit.vue";

const URL = URI_BASE_API;
const RESOURCE = "profiles";
export default {
    props: ["data"],
    data() {
        return {
            profile: {},
            search: "",
            qty_filter: "",
            isModalVisible: false
        };
    },
    mounted() {
        this.getProfiles();
    },
    components: {
        modal
    },
    computed: {
        profiles() {
            return this.$store.state.profiles.items;
        }
    },
    methods: {
        ...mapActions(["getProfiles", "getProfile"]),
        showModal(id) {
            this.getProfile(id).then(response => {
                this.profile = response.data.data;
                this.isModalVisible = true;
            });
        },
        closeModal() {
            this.isModalVisible = false;
        },
        searchUnit: _.debounce(function() {
            const token = window.localStorage.getItem("token");
            if (this.search != "") {
                axios
                    .get(`${URL}/${RESOURCE}/search?q=` + this.search, {
                        headers: {
                            Authorization: "Bearer " + token
                        }
                    })
                    .then(response => {
                        this.profiles.data = response.data;
                        this.qty_filter = response.data;
                    });
            } else {
                this.getProfiles();
            }
        })
    }
};
</script>