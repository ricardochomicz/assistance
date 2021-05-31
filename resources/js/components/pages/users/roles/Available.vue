<template>
    <div>
        <div class="card">
            <preloader></preloader>
            <div class="card-header">
                <h3 class="card-title mb-0">
                    <i class="fas fa-id-card-alt mr-2"></i> Cargo do Usuário -
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
                    <form method="POST" @submit.prevent="addRole">
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
                                    v-for="role in roles"
                                    :key="role.id"
                                >
                                    <td class="align-middle text-center">
                                        <input
                                            type="checkbox"
                                            name="roles[]"
                                            :value="role.id"
                                            v-model="id_role"
                                        />
                                    </td>
                                    <td class="align-middle">
                                        {{ role.name }}
                                    </td>
                                    <td class="align-middle">
                                        {{ role.description }}
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
import { URI_BASE_API, RESOURCES, TOKEN } from "../../../../config/api";
const URL = URI_BASE_API;

export default {
    data() {
        return {
            id_role: [],
            roles: [],
            name: {}
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
        getRoles() {
            axios
                .get(
                    `${URL}/${RESOURCES.USERS}/${this.$route.params.id}/roles/available`,
                    {
                        headers: { Authorization: "Bearer " + TOKEN }
                    }
                )
                .then(response => {
                    this.roles = response.data.data;
                });
        },
        addRole() {
            axios
                .post(
                    `${URL}/${RESOURCES.USERS}/${this.$route.params.id}/roles`,
                    this.id_role,
                    {
                        headers: { Authorization: "Bearer " + TOKEN }
                    }
                )
                .then((response) => {
                    console.log(response)
                    this.$router.push("/users");
                    this.$toast.open({
                        message: "Cargo vinculado com sucesso!",
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