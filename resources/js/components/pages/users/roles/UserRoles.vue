<template>
    <div>
        <div class="card">
            <preloader></preloader>
            <div class="card-header">
                <h3 class="card-title mb-0">
                    <i class="fas fa-id-card-alt mr-2"></i> Cargo do Usuário -
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
                <router-link
                    v-bind:to="
                        '/users/' +
                            this.$route.params.id +
                            '/roles/available'
                    "
                    class="btn btn-dark btn-sm mb-1 mt-1"
                    >Vincular Cargo
                </router-link>
               
                    <router-link to="/users" class="float-right">
                        <b-button pill variant="outline-secondary" size="sm"
                            ><i class="fas fa-undo-alt"></i> Voltar</b-button
                        >
                    </router-link>
                
                <div class="table-responsive">
                    <table class="table table-hover table-borderless">
                        <thead>
                            <tr>
                                <th class="text-center">ID</th>
                                <th>Cargo</th>
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
                                <td class="align-middle">
                                    {{ role.name }}
                                </td>
                                <td class="align-middle">
                                    {{ role.description }}
                                </td>
                                <td class="align-middle text-center">
                                    <button
                                        class="btn btn-danger btn-sm"
                                        @click="
                                            detachRoles(role.id)
                                        "
                                    >
                                        <i class="fas fa-unlink mr-1"></i>
                                        Desvincular
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="pagination pagination-sm justify-content-center">
                    <pagination
                        :data="roles"
                        @pagination-change-page="getRoles"
                    ></pagination>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from "vuex";
import { URI_BASE_API, RESOURCES, TOKEN } from "../../../../config/api";
import _ from "lodash";

const URL = URI_BASE_API;

export default {
    props: ["data"],
    data() {
        return {
            name: {},
            roles: {}
        };
    },
    mounted() {
        this.getUserById();
        this.getRoles();
    },
    methods: {
        getUserById() {
            axios
                .get(`${URL}/${RESOURCES.USERS}/${this.$route.params.id}`, {
                    headers: { Authorization: "Bearer " + TOKEN }
                })
                .then(response => {
                    this.name = response.data.data.name;
                });
        },
        getRoles(page = 1) {
            axios
                .get(
                    `${URL}/${RESOURCES.USERS}/${this.$route.params.id}/${RESOURCES.ROLES}?page=` +
                        page,
                    {
                        headers: { Authorization: "Bearer " + TOKEN }
                    }
                )
                .then(response => {
                    this.roles = response.data;
                });
        },
        detachRoles(id) {
            console.log(this.$route.params.id)
            axios
                .get(`${URL}/${RESOURCES.USERS}/${this.$route.params.id}/${RESOURCES.ROLES}/${id}/detach`,
                    {
                        headers: { Authorization: "Bearer " + TOKEN }
                    }
                )
                .then(() => {
                    this.getRoles();
                    this.$toast.open({
                        message: "Cargo desvinculado com sucesso!",
                        type: "success",
                        position: "bottom"
                    });
                })
                .catch(e => {
                    this.$toast.open({
                        message: "Ops! Algo deu errado...<br>Tente novamente!",
                        type: "error",
                        position: "bottom"
                    });
                })
        }
    }
};
</script>