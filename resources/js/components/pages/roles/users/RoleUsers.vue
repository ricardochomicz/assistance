<template>
    <div>
        <div class="card">
            <preloader></preloader>
            <div class="card-header">
                <h3 class="card-title mb-0">
                    <i class="fas fa-user-lock mr-2"></i> Usuários do Cargo -
                    <strong>{{ name }}</strong>
                </h3>
                <div class="card-tools">
                    <div class="input-group input-group-sm">
                        <input
                            type="text"
                            name="q"
                            class="form-control float-right"
                            placeholder="Pesquisa"
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
                <router-link to="/roles" class="float-right">
                        <b-button pill variant="outline-secondary" size="sm"
                            ><i class="fas fa-undo-alt"></i> Voltar</b-button
                        >
                    </router-link>
                <div class="table-responsive">
                    <table class="table table-hover table-borderless">
                        <thead>
                            <tr>
                                <th class="text-center">ID</th>
                                <th>Usuário</th>
                                <th>E-mail</th>
                                <th>Telefone</th>
                                <th>Criado Em</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="user in users.data"
                                :key="user.id"
                            >
                                <td class="text-center align-middle">
                                    {{ user.id }}
                                </td>
                                <td class="align-middle">
                                    {{ user.name }}
                                </td>
                                <td class="align-middle">
                                    {{ user.email }}
                                </td>
                                <td class="align-middle">
                                    {{ user.phone }}
                                </td>
                                <td class="align-middle">
                                    {{ user.created_at | formatDate }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="pagination pagination-sm justify-content-center">
                    <pagination
                        :data="users"
                        @pagination-change-page="getUsers"
                    ></pagination>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from "vuex";
import { URI_BASE_API } from "../../../../config/api";
import _ from "lodash";

const URL = URI_BASE_API;
const RESOURCE = "roles";
export default {
    props: ["data"],
    data() {
        return {
            user: {},
            users: {},
            search: "",
            qty_filter: "",
            name: {}
        };
    },
    mounted() {
        this.getRoleId();
        this.getUsers();
    },

    methods: {
        getRoleId() {
            const token = window.localStorage.getItem("token");
            axios
                .get(`${URL}/${RESOURCE}/${this.$route.params.id}`, {
                    headers: { Authorization: "Bearer " + token }
                })
                .then(response => {
                    this.name = response.data.data.name;
                });
        },
        getUsers(page = 1) {
            const token = window.localStorage.getItem("token");
            axios
                .get(
                    `${URL}/roles/${this.$route.params.id}/users?page=` +
                        page,
                    {
                        headers: { Authorization: "Bearer " + token }
                    }
                )
                .then(response => {
                    this.users = response.data;
                });
        }
    }
};
</script>