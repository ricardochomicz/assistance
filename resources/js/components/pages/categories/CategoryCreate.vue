<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h3 class="card-title mb-0">
                    <i class="fas fa-layer-group mr-2"></i> Nova Categoria
                </h3>
                <div class="card-tools">
                    <router-link to="/categories" class="btn btn-dark btn-sm"
                        ><i class="fas fa-undo-alt"></i> Voltar</router-link
                    >
                </div>
            </div>
            <div class="card-body">
                <form
                    method="post"
                    @submit.prevent="addCategory"
                    ref="form"
                    class="needs-validation"
                    novalidate
                >
                    <div class="form-group">
                        <label for="name">Nome</label>
                        <input
                            type="text"
                            class="form-control text-capitalize col-sm-6"
                            v-model.trim="$v.category.name.$model"
                            :class="{
                                'is-invalid': $v.category.name.$error
                            }"
                            name="name"
                            required
                        />
                        <div v-show="$v.category.name.$error">
                            <small
                                v-if="errors.name"
                                :class="['text-danger']"
                                >{{ errors.name[0] }}</small
                            >
                            <small
                                v-if="!$v.category.name.minLength"
                                :class="['text-danger']"
                            >
                                O nome deve ter pelo menos
                                {{ $v.category.name.$params.minLength.min }}
                                caracteres.
                            </small>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="description">Descrição</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="category.description"
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
import { URI_BASE_API } from "../../../config/api";
const URL = URI_BASE_API;
const RESOURCE = "categories";
export default {
    data() {
        return {
            category: {
                name: "",
                description: ""
            },
            errors: [],
            error_status: ''
        };
    },
    validations: {
        category: {
            name: {
                required,
                minLength: minLength(5)
            }
        }
    },
    methods: {
        ...mapActions(["createCategory", "getCategories"]),
        addCategory() {
            this.$v.$touch();
            this.createCategory(this.category)
                .then(response => {
                    if (response.data.data.status == "success") {
                        this.getCategories();
                        this.$refs.form.reset();
                        this.$root.$emit("category", response);
                        this.$toast.open({
                            message: "Categoria cadastrada com sucesso!",
                            type: "success",
                            position: "bottom"
                        });
                        $("#spinner").addClass("d-none");
                        this.$router.push("/categories");
                    }
                })
                .catch(e => {
                    this.errors = e.response.data.errors;
                    this.error_status = e.response.status;
                    this.$toast.open({
                        message:
                            `Error: ${this.error_status} - Ops! Algo deu errado...<br>Tente novamente!`,
                        type: "error",
                        position: "bottom"
                    });
                });
        }
    }
};
</script>