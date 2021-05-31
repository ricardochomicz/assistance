<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h3 class="card-title mb-0">
                    <i class="fas fa-id-badge mr-2"></i> Novo Perfil
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
                    @submit.prevent="addProfile"
                    ref="form"
                    class="needs-validation"
                    novalidate
                >
                    <div class="form-group">
                        <label for="name">Nome</label>
                        <input
                            type="text"
                            class="form-control text-capitalize col-sm-6"
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
                                {{ $v.profile.name.$params.minLength.min }}
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
                    <div class="form-group">
                        <button
                            class="btn btn-primary"
                        >
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
import { URI_BASE_API } from "../../../config/api";
const URL = URI_BASE_API;
const RESOURCE = "profiles";
export default {
    data() {
        return {
            profile: {
                name: "",
                description: ""
            },
            errors: [],
            error_status: ''
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
        ...mapActions(["createProfile", "getProfiles"]),
        addProfile() {
            this.$v.$touch();
            this.createProfile(this.profile)
                .then(response => {
                    if (response.data.data.status == "success") {
                        this.getProfiles();
                        this.$refs.form.reset();
                        this.$root.$emit("profile", response);
                        this.$toast.open({
                            message: "Perfil cadastrado com sucesso!",
                            type: "success",
                            position: "bottom"
                        });
                        $("#spinner").addClass("d-none");
                        this.$router.push("/profiles");
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