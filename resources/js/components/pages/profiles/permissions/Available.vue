<template>
    <div>
        <div class="card">
            <preloader></preloader>
            <div class="card-header">
                <h3 class="card-title mb-0">
                    <i class="fas fa-id-badge mr-2"></i> Permissões do Perfil -
                    {{ name }}
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
                <div class="table-responsive">
                    <form method="POST" @submit.prevent="addPermission">
                        <table class="table table-hover table-borderless">
                            <thead>
                                <tr>
                                    <th class="text-center">#</th>
                                    <th>Nome</th>
                                    <th>Descrição</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="permission in permissions"
                                    :key="permission.id"
                                >
                                    <td class="align-middle text-center">
                                        <input
                                            type="checkbox"
                                            name="permissions[]"
                                            :value="permission.id"
                                            v-model="id_permission"
                                        />
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
                        <button class="btn btn-primary btn-sm">
                            <i class="fas fa-link mr-1"></i> Vincular
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { URI_BASE_API } from "../../../../config/api";
const URL = URI_BASE_API;
const RESOURCE = "permissions";
export default {
    data() {
        return {
            id_permission: [],
            permissions: [],
            name: {}
        };
    },
    mounted() {
        this.getProfileById();
        this.getPermissions();
    },

    methods: {
        getProfileById() {
            const token = window.localStorage.getItem("token");
            axios
                .get(`${URL}/profiles/${this.$route.params.id}`, {
                    headers: { Authorization: "Bearer " + token }
                })
                .then(response => {
                    this.name = response.data.data.name;
                });
        },
        getPermissions() {
            const token = window.localStorage.getItem("token");
            axios
                .get(
                    `${URL}/profiles/${this.$route.params.id}/permissions/available`,
                    {
                        headers: { Authorization: "Bearer " + token }
                    }
                )
                .then(response => {
                    console.log(response.data.data);
                    this.permissions = response.data.data;
                });
        },
        addPermission() {
            const token = window.localStorage.getItem("token");
            axios
                .post(
                    `${URL}/profiles/${this.$route.params.id}/permissions`,
                    this.id_permission,
                    {
                        headers: { Authorization: "Bearer " + token }
                    }
                )
                .then(() => {
                    this.$router.push("/profiles");
                    this.$toast.open({
                        message: "Permissão vinculada com sucesso!",
                        type: "success",
                        position: "bottom"
                    })
                })
                .catch(e => {
                    this.$toast.open({
                        message:
                            "Ops! Algo deu errado...<br>Tente novamente!",
                        type: "error",
                        position: "bottom"
                    });
                })
                
        }
    }
};
</script>