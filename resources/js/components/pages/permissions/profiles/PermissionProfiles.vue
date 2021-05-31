<template>
    <div>
        <div class="card">
            <preloader></preloader>
            <div class="card-header">
                <h3 class="card-title mb-0">
                    <i class="fas fa-user-lock mr-2"></i> Permissão -
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
                <router-link to="/permissions" class="float-right">
                        <b-button pill variant="outline-secondary" size="sm"
                            ><i class="fas fa-undo-alt"></i> Voltar</b-button
                        >
                    </router-link>
                <div class="table-responsive">
                    <table class="table table-hover table-borderless">
                        <thead>
                            <tr>
                                <th class="text-center">ID</th>
                                <th>Perfil</th>
                                <th>Descrição</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="permission in permissions.data"
                                :key="permission.id"
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
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="pagination pagination-sm justify-content-center">
                    <pagination
                        :data="permissions"
                        @pagination-change-page="getPermissions"
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
            permission: {},
            permissions: {},
            search: "",
            qty_filter: "",
            name: {}
        };
    },
    mounted() {
        this.getPermissionId();
        this.getPermissions();
    },

    methods: {
        getPermissionId() {
            axios
                .get(`${URL}/${RESOURCES.PERMISSIONS}/${this.$route.params.id}`, {
                    headers: { Authorization: "Bearer " + TOKEN }
                })
                .then(response => {
                    this.name = response.data.data.name;
                });
        },
        getPermissions(page = 1) {
            axios
                .get(
                    `${URL}/${RESOURCES.PERMISSIONS}/${this.$route.params.id}/${RESOURCES.PROFILES}?page=` +
                        page,
                    {
                        headers: { Authorization: "Bearer " + TOKEN }
                    }
                )
                .then(response => {
                    this.permissions = response.data;
                });
        }
    }
};
</script>