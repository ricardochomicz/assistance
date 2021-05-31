<template>
    <div>
        <div class="card">
            <preloader></preloader>
            <div class="card-header">
                <h3 class="card-title mb-0">
                    <i class="fas fa-id-card-alt mr-2"></i> Cargos
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
                    to="/roles-create"
                    class="btn btn-dark btn-sm mb-1 mt-1"
                    >Novo Cargo
                </router-link>
                <div class="table-responsive">
                    <table class="table table-hover table-borderless">
                        <caption>
                            <small v-if="search !== ''"
                                ><b>{{ this.qty_filter.length }}</b> cargos
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
                                v-for="role in roles.data"
                                :key="role.id"
                                :row="role"
                            >
                                <td class="text-center align-middle">
                                    {{ role.id }}
                                </td>
                                <td class="align-middle">{{ role.name }}</td>
                                <td class="align-middle">
                                    {{ role.description }}
                                </td>
                                <td class="align-middle text-center">
                                    <b-button
                                        v-b-tooltip.hover="'Editar Perfil'"
                                        variant="primary"
                                        @click="showModal(role.id)"
                                    >
                                        <i class="fas fa-pen"></i>
                                    </b-button>
                                    <router-link
                                        v-bind:to="'/roles/' + role.id + '/permissions'"
                                        v-b-tooltip="'Permissões'"
                                        class="btn btn-secondary text-white"
                                        ><i class="fas fa-lock"></i
                                    ></router-link>
                                    <router-link
                                        v-bind:to="'/roles/' + role.id + '/users'"
                                        v-b-tooltip="'Usuários'"
                                        class="btn btn-secondary text-white"
                                        ><i class="fas fa-users"></i
                                    ></router-link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div
                        class="pagination pagination-sm justify-content-center"
                    >
                        <pagination
                            :data="roles"
                            @pagination-change-page="getRoles"
                        ></pagination>
                    </div>
                </div>
            </div>
        </div>
        <modal
            v-show="isModalVisible"
            @close="closeModal"
            :role="role"
        ></modal>
    </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import { URI_BASE_API } from "../../../config/api";
import _ from "lodash";
import modal from "./RoleEdit.vue";

const URL = URI_BASE_API;
const RESOURCE = "roles";
export default {
    props: ["data"],
    data() {
        return {
            role: {},
            search: "",
            qty_filter: "",
            isModalVisible: false
        };
    },
    mounted() {
        this.getRoles();
    },
    components: {
        modal
    },
    computed: {
        roles() {
            return this.$store.state.roles.items;
        }
    },
    methods: {
        ...mapActions(["getRoles", "getRole"]),
        showModal(id) {
            this.getRole(id).then(response => {
                this.role = response.data.data;
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
                        this.roles.data = response.data;
                        this.qty_filter = response.data;
                    });
            } else {
                this.getRoles();
            }
        })
    }
};
</script>