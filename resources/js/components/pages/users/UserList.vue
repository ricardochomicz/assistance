<template>
    <div>
        <div class="card">
            <preloader></preloader>
            <div class="card-header">
                <h3 class="card-title mb-0">
                    <i class="fas fa-users mr-2"></i> Usuários
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
                        <!-- <vue-bootstrap-typeahead
                            :minMatchingChars=0
                            v-model="filter"
                            :data="data_user"
                            :serializer="item => item.name"
                            @hit="selectedUser = $event"
                        />
                        {{ selectedUser.id }} -->
                    </div>
                </div>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
                <router-link
                    to="/users-create"
                    class="btn btn-dark btn-sm mb-1 mt-1"
                    >Novo Usuário
                </router-link>
                <div class="table-responsive">
                    <table class="table table-hover table-borderless">
                        <caption>
                            <small v-if="search !== ''"
                                ><b>{{ this.qty_filter.length }}</b> usuário(s)
                                encontrado(s)</small
                            >
                        </caption>
                        <thead>
                            <tr>
                                <th class="text-center">ID</th>
                                <th>Nome</th>
                                <th>E-mail</th>
                                <th class="text-center">Telefone</th>
                                <th class="text-center">Status</th>
                                <th class="text-center">
                                    <i class="fas fa-cogs"></i>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="user in users.data"
                                :key="user.id"
                                :row="user"
                                v-bind:class="{
                                    'text-danger': !user.active
                                }"
                            >
                                <td class="align-middle text-center">
                                    {{ user.id }}
                                </td>
                                <td class="align-middle">
                                    {{ user.name }}
                                </td>
                                <td class="align-middle">
                                    {{ user.email }}
                                </td>
                                <td class="align-middle text-center">
                                    <a
                                        target="_blank"
                                        v-bind:href="
                                            'https://wa.me/55' + user.phone
                                        "
                                        >{{ user.phone }}
                                    </a>
                                </td>
                                <td class="align-middle text-center">
                                    {{ user.active == 1 ? "Ativo" : "Inativo" }}
                                </td>
                                <td class="align-middle text-center">
                                    <b-button
                                        v-b-tooltip.hover="'Editar Usuário'"
                                        variant="primary"
                                        @click="showModal(user.id)"
                                    >
                                        <i class="fas fa-pen"></i>
                                    </b-button>
                                    <router-link
                                        v-bind:to="
                                            '/users/' +
                                                user.id +
                                                '/roles'
                                        "
                                        v-b-tooltip="'Cargos'"
                                        class="btn btn-secondary"
                                        ><i class="fas fa-id-card-alt"></i
                                    ></router-link>
                                    <router-link
                                        :to="{
                                            name: 'users-details',
                                            params: { id: user.id }
                                        }"
                                    >
                                        <b-button
                                            v-b-tooltip.hover="
                                                'Detalhes Usuário'
                                            "
                                            variant="dark"
                                        >
                                            <i class="fas fa-user-circle"></i>
                                        </b-button>
                                    </router-link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div
                        class="pagination pagination-sm justify-content-center"
                    >
                        <pagination
                            :data="users"
                            @pagination-change-page="getUsers"
                        ></pagination>
                    </div>
                </div>
                <!-- /.card-body -->
            </div>
            <!-- /.card -->
        </div>
        <modal v-show="isModalVisible" @close="closeModal" :user="user"></modal>
    </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import { URI_BASE_API } from "../../../config/api";
import _ from "lodash";
import modal from "./UserEdit.vue";

const URL = URI_BASE_API;
const RESOURCE = "users";

export default {
    props: ["data"],
    data() {
        return {
            user: {},
            data_user: [],
            search: "",
            qty_filter: "",
            selectedUser: "",
            isModalVisible: false,
            currentPageIndex: 0
        };
    },
    mounted() {
        this.getUsers();
        //this.getData();
    },
    components: {
        modal
    },
    computed: {
        users() {
            return this.$store.state.users.items;
        }
    },

    methods: {
        ...mapActions(["getUsers", "getUser"]),
        showModal(id) {
            this.getUser(id).then(response => {
                this.user = response.data.data;
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
                        this.users.data = response.data;
                        this.qty_filter = response.data;
                    });
            } else {
                this.getUsers();
            }
        })
        // TypeAhead
        // getData() {
        //     const token = window.localStorage.getItem("token");
        //     axios
        //         .get(`${URL}/${RESOURCE}/search`, {
        //             headers: {
        //                 Authorization: "Bearer " + token
        //             }
        //         })
        //         .then(response => {
        //             this.data_user = response.data;
        //         });
        // }
    }
};
</script>
