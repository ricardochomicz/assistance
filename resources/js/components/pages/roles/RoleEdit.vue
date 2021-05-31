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
                            <i class="fas fa-id-card-alt mr-1"></i>
                            {{ role.name }}
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
                        @submit.prevent="editRole"
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
import { required, minLength } from "vuelidate/lib/validators";
import { URI_BASE_API, RESOURCES, TOKEN } from "../../../config/api";
const URL = URI_BASE_API;

export default {
    props: { role: { type: Object } },
    data() {
        return {
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
        ...mapActions(["getRoles", "updateRole"]),
        editRole() {
            this.$v.$touch();
            const token = window.localStorage.getItem("token");
            axios
                .put(`${URL}/${RESOURCES.ROLES}/${this.role.id}`, this.role, {
                    headers: {
                        Authorization: "Bearer " + TOKEN
                    }
                })
                .then(response => {
                    this.getRoles();
                    this.$root.$emit("role", response);
                    this.close();
                    this.$toast.open({
                        message: "Cargo atualizado com sucesso!",
                        type: "info",
                        position: "bottom"
                    });
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
        },
        close() {
            this.$emit("close");
        }
    }
};
</script>