<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h3 class="card-title mb-0">
                    <i class="fas fa-users mr-2"></i> Novo Usuário
                </h3>
                <div class="card-tools">
                    <router-link to="/users" class="btn btn-dark btn-sm"
                        ><i class="fas fa-undo-alt"></i> Voltar</router-link
                    >
                </div>
            </div>
            <div class="card-body">
                <form
                    method="post"
                    @submit.prevent="addUser"
                    ref="form"
                    class="needs-validation"
                    novalidate
                >
                    <div class="form-group">
                        <label for="name">Nome</label>
                        <input
                            type="text"
                            class="form-control text-capitalize"
                            v-model.trim="$v.user.name.$model"
                            :class="{
                                'is-invalid': $v.user.name.$error
                            }"
                            name="name"
                            required
                        />
                        <div v-show="$v.user.name.$error">
                            <small
                                v-if="errors.name"
                                :class="['text-danger']"
                                >{{ errors.name[0] }}</small
                            >
                            <small
                                v-if="!$v.user.name.minLength"
                                :class="['text-danger']"
                            >
                                O nome deve ter pelo menos
                                {{ $v.user.name.$params.minLength.min }}
                                caracteres.
                            </small>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="email">E-mail</label>
                        <input
                            type="email"
                            class="form-control"
                            :class="{
                                'is-invalid': $v.user.email.$error
                            }"
                            v-model.trim="$v.user.email.$model"
                            required
                        />
                        <div v-show="$v.user.email.$error">
                            <small
                                v-if="errors.email"
                                :class="['text-danger']"
                                >{{ errors.email[0] }}</small
                            >
                            <small
                                v-if="!$v.user.email.email"
                                :class="['text-danger']"
                            >
                                Informe uma e-mail válido!
                            </small>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-sm-6">
                            <label for="uphone">Telefone</label>
                            <input
                                type="text"
                                class="form-control"
                                v-model="user.phone"
                                v-mask="['(##) ####-####', '(##) #####-####']"
                            />
                        </div>
                        <!-- <div class="form-group col-sm-6">
                            <label for="uoffice">Cargo</label>
                            <Select2
                                :options="office"
                                v-model="user.office"
                                data-width="100%"
                            >
                            </Select2>
                        </div> -->
                    </div>

                    <div class="form-group">
                        <label for="">Senha</label>
                        <input
                            type="text"
                            name="password"
                            class="form-control"
                            :class="{
                                'is-invalid': $v.user.password.$error
                            }"
                            v-model.trim="$v.user.password.$model"
                            required
                        />
                        <div v-show="$v.user.password.$error">
                            <small
                                v-if="errors.password"
                                :class="['text-danger']"
                                >{{ errors.password[0] }}</small
                            >
                            <small
                                v-if="!$v.user.password.minLength"
                                :class="['text-danger']"
                            >
                                A senha deve ter pelo menos
                                {{ $v.user.password.$params.minLength.min }}
                                caracteres.
                            </small>
                        </div>
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
import {
    required,
    minLength,
    maxLength,
    email
} from "vuelidate/lib/validators";
import { URI_BASE_API, RESOURCES, TOKEN } from "../../../config/api";
const URL = URI_BASE_API;

export default {
    data() {
        return {
            user: {
                name: "",
                email: "",
                phone: "",
                password: ""
            },
            errors: []
        };
    },
    validations: {
        user: {
            name: {
                required,
                minLength: minLength(4)
            },
            email: {
                required,
                email
            },
            password: {
                required,
                minLength: minLength(6),
                maxLength: maxLength(16)
            }
        }
    },
    methods: {
        ...mapActions(["createUser", "getUsers"]),
        addUser() {
            $("#spinner").removeClass("d-none");
            this.$v.$touch();
            axios
                .post(`${URL}/${RESOURCES.USERS}`, this.user, {
                    headers: {
                        Authorization: "Bearer " + TOKEN
                    }
                })
                .then(response => {
                    if (response.status == 201) {
                        this.getUsers();
                        this.$refs.form.reset();
                        this.$root.$emit("user", response);
                        this.$toast.open({
                            message: "Usuário cadastrado com sucesso!",
                            type: "success",
                            position: "bottom"
                        });
                        this.$router.push("/users");
                    }
                    $("#spinner").addClass("d-none");
                })
                .catch(e => {
                    this.errors = e.response.data.errors || {};
                    this.$toast.open({
                        message:
                            "Ops! Algo deu errado...<br>Preencha os campos obrigatórios!",
                        type: "error",
                        position: "bottom"
                    });
                })
        }
    }
};
</script>