<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h3 class="card-title mb-0">
                    <i class="fas fa-id-card-alt mr-2"></i> Novo Cargo
                </h3>
                <div class="card-tools">
                    <router-link to="/roles" class="btn btn-dark btn-sm"
                        ><i class="fas fa-undo-alt"></i> Voltar</router-link
                    >
                </div>
            </div>
            <div class="card-body">
                <form
                    method="post"
                    @submit.prevent="addRole"
                    ref="form"
                    class="needs-validation"
                    novalidate
                >
                    <div class="form-group">
                        <label for="name">Nome</label>
                        <input
                            type="text"
                            class="form-control text-capitalize col-sm-6"
                            v-model.trim="$v.role.name.$model"
                            :class="{
                                'is-invalid': $v.role.name.$error
                            }"
                            name="name"
                            required
                        />
                        <div v-show="$v.role.name.$error">
                            <small
                                v-if="errors.name"
                                :class="['text-danger']"
                                >{{ errors.name[0] }}</small
                            >
                            <small
                                v-if="!$v.role.name.minLength"
                                :class="['text-danger']"
                            >
                                O nome deve ter pelo menos
                                {{ $v.role.name.$params.minLength.min }}
                                caracteres.
                            </small>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="description">Descrição</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="role.description"
                        />
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary" :disabled="this.$v.$invalid">
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
            role: {
                name: "",
                description: ""
            },
            errors: []
        };
    },
    validations: {
        role: {
            name: {
                required,
                minLength: minLength(5)
            }
        }
    },
    methods: {
        ...mapActions(["createRole", "getRoles"]),
        addRole() {
            $("#spinner").removeClass("d-none");
            this.$v.$touch();
            axios
                .post(`${URL}/${RESOURCES.ROLES}`, this.role, {
                    headers: {
                        Authorization: "Bearer " + TOKEN
                    }
                })
                .then(response => {
                    if (response.status == 201) {
                        this.getRoles();
                        this.$refs.form.reset();
                        this.$root.$emit("role", response);
                        this.$toast.open({
                            message: "Cargo cadastrado com sucesso!",
                            type: "success",
                            position: "bottom"
                        });
                        this.$router.push("/roles");
                        $("#spinner").addClass("d-none");
                    }
                })
                .catch(e => {
                    console.clear();
                    this.errors = e.response.data.errors || {};
                    this.$toast.open({
                        message:
                            "Ops! Algo deu errado...<br>Preencha os campos obrigatórios!",
                        type: "error",
                        position: "bottom"
                    });
                });
        }
    }
};
</script>