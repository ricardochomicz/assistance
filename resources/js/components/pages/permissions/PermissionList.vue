<template>
    <div>
        <div class="card">
            <preloader></preloader>
            <div class="card-header">
                <h3 class="card-title mb-0">
                    <i class="fas fa-user-lock mr-2"></i> Permissões
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
                    to="/permissions-create"
                    class="btn btn-dark btn-sm mb-1 mt-1"
                    >Nova Permissão
                </router-link>
                <div class="table-responsive">
                    <table class="table table-hover table-borderless">
                        <caption>
                            <small v-if="search !== ''"
                                ><b>{{ this.qty_filter.length }}</b> permissões
                                encontrada(s)</small
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
                                v-for="permission in permissions.data"
                                :key="permission.id"
                                :row="permission"
                            >
                                <td class="text-center align-middle">
                                    {{ permission.id }}
                                </td>
                                <td class="align-middle">
                                    {{ permission.name }}
                                </td>
                                <td class="align-middle">
                                    {{ permission.description }}
                                </td>
                                <td class="align-middle text-center">
                                    <b-button
                                        v-b-tooltip="'Editar Permissão'"
                                        variant="primary"
                                        @click="showModal(permission.id)"
                                    >
                                        <i class="fas fa-pen"></i>
                                    </b-button>
                                    <router-link
                                        v-bind:to="
                                            '/permissions/' +
                                                permission.id +
                                                '/profiles'
                                        "
                                        v-b-tooltip="'Perfis'"
                                        class="btn btn-secondary"
                                        ><i class="fas fa-id-badge"></i
                                    ></router-link>
                                    <router-link
                                        v-bind:to="
                                            '/permissions/' +
                                                permission.id +
                                                '/roles'
                                        "
                                        v-b-tooltip="'Cargos'"
                                        class="btn btn-secondary"
                                        ><i class="fas fa-id-card-alt"></i
                                    ></router-link>
                                    
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div
                        class="pagination pagination-sm justify-content-center"
                    >
                        <pagination
                            :data="permissions"
                            @pagination-change-page="getPermissions"
                        ></pagination>
                    </div>
                </div>
            </div>
        </div>
        <modal
            v-show="isModalVisible"
            @close="closeModal"
            :permission="permission"
        ></modal>
    </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import { URI_BASE_API, RESOURCES, TOKEN } from "../../../config/api";
import _ from "lodash";
import modal from "./PermissionEdit.vue";

const URL = URI_BASE_API;

export default {
    props: ["data"],
    data() {
        return {
            permission: {},
            search: "",
            qty_filter: "",
            isModalVisible: false
        };
    },
    mounted() {
        this.getPermissions();
    },
    components: {
        modal
    },
    computed: {
        permissions() {
            return this.$store.state.permissions.items;
        }
    },
    methods: {
        ...mapActions(["getPermissions", "getPermission"]),
        showModal(id) {
            this.getPermission(id).then(response => {
                this.permission = response.data.data;
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
                    .get(`${URL}/${RESOURCES.PERMISSIONS}/search?q=` + this.search, {
                        headers: {
                            Authorization: "Bearer " + TOKEN
                        }
                    })
                    .then(response => {
                        this.permissions.data = response.data;
                        this.qty_filter = response.data;
                    });
            } else {
                this.getPermissions();
            }
        }),
        
    }
};
</script>