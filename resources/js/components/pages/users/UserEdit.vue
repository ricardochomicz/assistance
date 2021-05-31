<template>
    <div>
        <div
            class="modal fade show"
            id="modal-default"
            aria-modal="true"
            role="dialog"
            style="padding-right: 17px; display: block;"
            name="item-modal"
        >
            <preloader-card></preloader-card>
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">
                            <i class="fas fa-user-edit mr-1"></i>
                            {{ user.name }}
                        </h4>
                        <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                            @click="close"
                        >
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <form
                        method="put"
                        @submit.prevent="editUser"
                        ref="form"
                        class="needs-validation"
                        novalidate
                    >
                        <div class="modal-body">
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
                                        v-mask="[
                                            '(##) ####-####',
                                            '(##) #####-####'
                                        ]"
                                    />
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="">Senha</label>
                                <input
                                    type="text"
                                    name="password"
                                    class="form-control"
                                    v-model="user.password"
                                />
                            </div>
                            <div class="form-group">
                                <div class="form-inline">
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        v-model="user.active"
                                        name="active"
                                        id="flexCheckDefault"
                                    />
                                    <b>{{
                                        user.active == 1
                                            ? "Ativo"
                                            : "Inativo"
                                    }}</b>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-danger"
                                data-dismiss="modal"
                                @click="close"
                            >
                                Fechar
                            </button>
                            <button
                                type="submit"
                                class="btn btn-primary"
                                :disabled="this.$v.$invalid"
                            >
                                Salvar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import {
    required,
    minLength,
    maxLength,
    email
} from "vuelidate/lib/validators";
import { URI_BASE_API, RESOURCES, TOKEN } from "../../../config/api";
const URL = URI_BASE_API;

export default {
    name: "ModalUserEdit",
    props: { user: { type: Object } },
    data() {
        return {
            status: [
                {
                    id: 0,
                    text: "Inativo"
                },
                { id: 1, text: "Ativo" }
            ],
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
            }
        }
    },

    methods: {
        ...mapActions(["createUser", "getUsers", "updateUser"]),

        editUser() {
            this.$v.$touch();
            axios
                .put(`${URL}/${RESOURCES.USERS}/${this.user.id}`, this.user, {
                    headers: {
                        Authorization: "Bearer " + TOKEN
                    }
                })
                .then(response => {
                    this.getUsers();
                    this.$root.$emit("user", response);
                    this.close();
                    this.$toast.open({
                        message: "Usuário atualizado com sucesso!",
                        type: "info",
                        position: "bottom"
                    });
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
        },
        close() {
            this.$emit("close");
        }
    }
};
</script>