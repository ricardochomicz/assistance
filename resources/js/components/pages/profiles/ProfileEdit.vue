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
                            {{ profile.name }}
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
                        @submit.prevent="editProfile"
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
                                    v-model.trim="$v.profile.name.$model"
                                    :class="{
                                        'is-invalid': $v.profile.name.$error
                                    }"
                                    name="name"
                                    required
                                />
                                <div v-show="$v.profile.name.$error">
                                    <small
                                        v-if="errors.name"
                                        :class="['text-danger']"
                                        >{{ errors.name[0] }}</small
                                    >
                                    <small
                                        v-if="!$v.profile.name.minLength"
                                        :class="['text-danger']"
                                    >
                                        O nome deve ter pelo menos
                                        {{
                                            $v.profile.name.$params.minLength
                                                .min
                                        }}
                                        caracteres.
                                    </small>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="description">Descrição</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    v-model="profile.description"
                                />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-danger"
                                data-dismiss="modal"
                                @click="msgDelete"
                            >
                                Excluir Perfil
                            </button>
                            <button
                                type="submit"
                                class="btn btn-primary"
                            >
                                Salvar
                            </button>
                        </div>
                    </form>
                    <p class="alert alert-danger m-2" v-show="message">
                        Excluir <strong>{{ profile.name }}</strong
                        >?
                        <button
                            class="btn btn-sm btn-danger"
                            @click="deleteProfile(profile.id)"
                        >
                            Sim
                        </button>
                        <button class="btn btn-sm btn-primary" @click="close">
                            Não
                        </button>
                    </p>
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
    props: { profile: { type: Object } },
    data() {
        return {
            errors: [],
            error_status: "",
            message: false
        };
    },
    validations: {
        profile: {
            name: {
                required,
                minLength: minLength(5)
            }
        }
    },

    methods: {
        ...mapActions(["getProfiles"]),

        editProfile() {
            this.$v.$touch();
            axios
                .put(
                    `${URL}/${RESOURCES.PROFILES}/${this.profile.id}`,
                    this.profile,
                    {
                        headers: {
                            Authorization: "Bearer " + TOKEN
                        }
                    }
                )
                .then(response => {
                    if (response.data.data.status == "success") {
                        this.getProfiles();
                        this.$root.$emit("profile", response);
                        this.close();
                        this.$toast.open({
                            message: "Perfil atualizado com sucesso!",
                            type: "info",
                            position: "bottom"
                        });
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
        },
        close() {
            this.$emit("close");
            this.message = false;
        },
        msgDelete() {
            this.message = true;
        },
        deleteProfile(id) {
            axios
                .delete(`${URL}/${RESOURCES.PROFILES}/${id}`, {
                    headers: {
                        Authorization: "Bearer " + TOKEN
                    }
                })
                .then(() => {
                    this.close();
                    this.$toast.open({
                        message: "Perfil excluído com sucesso!",
                        type: "info",
                        position: "bottom"
                    });
                    this.getProfiles();
                });
        }
    }
};
</script>