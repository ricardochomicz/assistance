<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h3 class="card-title mb-0">
                    <i class="fas fa-user-lock mr-2"></i> Nova Permissão
                </h3>
                <div class="card-tools">
                    <router-link to="/profiles" class="btn btn-dark btn-sm"
                        ><i class="fas fa-undo-alt"></i> Voltar</router-link
                    >
                </div>
            </div>
            <div class="card-body">
                <form
                    method="post"
                    @submit.prevent="_addPermission"
                    ref="form"
                    class="needs-validation"
                    novalidate
                >
                    <div class="form-group">
                        <label for="name">Nome</label>
                        <input
                            type="text"
                            class="form-control text-capitalize col-sm-6"
                            v-model.trim="$v.permission.name.$model"
                            :class="{
                                'is-invalid': $v.permission.name.$error
                            }"
                            name="name"
                            required
                        />
                        <div v-show="$v.permission.name.$error">
                            <small
                                v-if="errors.name"
                                :class="['text-danger']"
                                >{{ errors.name[0] }}</small
                            >
                            <small
                                v-if="!$v.permission.name.minLength"
                                :class="['text-danger']"
                            >
                                O nome deve ter pelo menos
                                {{ $v.permission.name.$params.minLength.min }}
                                caracteres.
                            </small>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="description">Descrição</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="permission.description"
                        />
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary">
                            <span
                                class="spinner-border spinner-border-sm d-none"
                                role="status"
                                id="spinner"
                                aria-hidden="true"
                            ></span>
                            <span class="sr-only">Loading...</span>
                            Salvar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import { required, minLength } from "vuelidate/lib/validators";
import { URI_BASE_API, RESOURCES, TOKEN } from "../../../config/api";
const URL = URI_BASE_API;
export default {
    data() {
        return {
            permission: {
                name: "",
                description: ""
            },
            errors: [],
            error_status: ""
        };
    },
    validations: {
        permission: {
            name: {
                required,
                minLength: minLength(5)
            }
        }
    },
    methods: {
        ...mapActions(["createPermission", "getPermissions"]),
        _addPermission() {
            this.$v.$touch();
            axios
                .post(`${URL}/${RESOURCES.PERMISSIONS}`, this.permission, {
                    headers: { Authorization: "Bearer " + TOKEN }
                })
                .then(response => {
                    if (response.data.data.status == "success") {
                        this.getPermissions();
                        this.$refs.form.reset();
                        this.$root.$emit("permission", response);
                        this.$toast.open({
                            message: "Permissão cadastrada com sucesso!",
                            type: "success",
                            position: "bottom"
                        });
                        this.$router.push("/permissions");
                        $("#spinner").addClass("d-none");
                    }
                })
                .catch(e => {
                    this.errors = e.response.data.errors;
                    this.error_status = e.response.status;
                    this.$toast.open({
                        message: `Error: ${this.error_status} - Ops! Algo deu errado...<br>Tente novamente!`,
                        type: "error",
                        position: "bottom"
                    });
                });
        }
    }
};
</script>