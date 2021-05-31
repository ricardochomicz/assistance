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
                            <i class="fas fa-layer-group mr-1"></i>
                            {{ category.name }}
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
                        @submit.prevent="editCategory"
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
                                        {{
                                            $v.category.name.$params.minLength
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
                                    v-model="category.description"
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
                                Excluir Categoria
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
                    <p class="alert alert-danger m-2" v-show="message">
                        Excluir <strong>{{ category.name }}</strong
                        >?
                        <button
                            class="btn btn-sm btn-danger"
                            @click="deleteCategory(category.id)"
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
    props: { category: { type: Object } },
    data() {
        return {
            errors: [],
            error_status: '',
            message: false
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
        ...mapActions(["getCategories", "updateCategory"]),

        editCategory() {
            this.$v.$touch();
            axios
                .put(
                    `${URL}/${RESOURCES.CATEGORIES}/${this.category.id}`,
                    this.category,
                    {
                        headers: {
                            Authorization: "Bearer " + TOKEN
                        }
                    }
                )
                .then(response => {
                    console.log(response.status)
                    if(response.data.data.status == 'success'){
                        this.getCategories();
                        this.$root.$emit("category", response);
                        this.close();
                        this.$toast.open({
                            message: "Categoria atualizada com sucesso!",
                            type: "info",
                            position: "bottom"
                        });
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
                
        },
        close() {
            this.$emit("close");
            this.message = false;
        },
        msgDelete() {
            this.message = true;
        },
        deleteCategory(id) {
            axios
                .delete(`${URL}/${RESOURCES.CATEGORIES}/${id}`, {
                    headers: {
                        Authorization: "Bearer " + TOKEN
                    }
                })
                .then(() => {
                    this.close();
                    this.$toast.open({
                        message: "Categoria excluída com sucesso!",
                        type: "info",
                        position: "bottom"
                    });
                    this.getCategories();
                });
        }
    }
};
</script>