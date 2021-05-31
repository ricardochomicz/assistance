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
                            <i class="fas fa-barcode mr-1"></i>
                            {{ product.name }}
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
                        method="post"
                        enctype="multipart/form-data"
                        @submit.prevent="editProduct"
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
                                    v-model.trim="$v.product.name.$model"
                                    :class="{
                                        'is-invalid': $v.product.name.$error
                                    }"
                                    name="name"
                                    required
                                />
                                <div v-show="$v.product.name.$error">
                                    <small
                                        v-if="errors.name"
                                        :class="['text-danger']"
                                        >{{ errors.name[0] }}</small
                                    >
                                    <small
                                        v-if="!$v.product.name.minLength"
                                        :class="['text-danger']"
                                    >
                                        O nome deve ter pelo menos
                                        {{
                                            $v.product.name.$params.minLength
                                                .min
                                        }}
                                        caracteres.
                                    </small>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="price">Valor</label>
                                <money
                                    type="text"
                                    class="form-control"
                                    v-model.trim="$v.product.price.$model"
                                    :class="{
                                        'is-invalid': $v.product.price.$error
                                    }"
                                    v-bind="money"
                                ></money>
                                <div v-show="$v.product.price.$error">
                                    <small
                                        v-if="errors.price"
                                        :class="['text-danger']"
                                        >{{ errors.price[0] }}</small
                                    >
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="description">Descrição</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    name="description"
                                    v-model="product.description"
                                />
                            </div>
                            <div class="form-group">
                                <input
                                    type="file"
                                    name="image"
                                    ref="file"
                                    @change="onChange"
                                />
                            </div>

                            <div class="form-group">
                                <div class="form-inline">
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        v-model="product.active"
                                        name="active"
                                        id="flexCheckDefault"
                                    />
                                    <b>{{
                                        product.active == 1
                                            ? "Ativo"
                                            : "Inativo"
                                    }}</b>
                                </div>
                            </div>
                            <div class="form-group text-center">
                                <img
                                    :src="'/storage/' + product.image"
                                    :alt="product.name"
                                    v-show="product.image"
                                    style="max-width:70px"
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
                                Excluir Produto
                            </button>
                            <button
                                class="btn btn-primary"
                                :disabled="this.$v.$invalid"
                            >
                                Salvar
                            </button>
                        </div>
                    </form>
                    <p class="alert alert-danger m-2" v-show="message">
                        Excluir <strong>{{ product.name }}</strong
                        >?
                        <button
                            class="btn btn-sm btn-danger"
                            @click="deleteProduct(product.id)"
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
import { Money } from "v-money";
const URL = URI_BASE_API;
export default {
    props: { product: { type: Object } },
    data() {
        return {
            errors: [],
            message: false,
            money: {
                decimal: ",",
                thousands: ".",
                precision: 2,
                masked: false
            }
        };
    },
    validations: {
        product: {
            name: {
                required,
                minLength: minLength(5)
            },
            price: {
                required
            }
        }
    },
    methods: {
        ...mapActions(["getProducts", "updateProduct"]),
        onChange(e) {
            this.image = e.target.files[0];
        },

        editProduct() {
            this.$v.$touch();
            const formData = new FormData();
            formData.append("name", this.product.name);
            formData.append("price", this.product.price);
            formData.append("description", this.product.description);
            formData.append("active", this.product.active ? 1 : 0);
            if (this.image) {
                formData.append("image", this.image);
            }
            formData.append("_method", "PUT");
            axios
                .post(
                    `${URL}/${RESOURCES.PRODUCTS}/` + this.product.id,
                    formData,
                    {
                        headers: {
                            Authorization: "Bearer " + TOKEN,
                            "content-type": "multipart/form-data"
                        }
                    }
                )
                .then(response => {
                    console.log(response);
                    this.getProducts();
                    this.$refs.form.reset();
                    this.$root.$emit("product", response);
                    this.close();
                    this.$toast.open({
                        message: "Produto atualizado com sucesso!",
                        type: "info",
                        position: "bottom"
                    });
                })
                .catch(e => {
                    this.errors = e.response.data.errors;
                    if (this.errors.image) {
                        this.$toast.open({
                            message:
                                "Arquivo inválido, você deve selecionar uma imagem!",
                            type: "error",
                            position: "bottom"
                        });
                    }
                });
        },

        close() {
            this.$emit("close");
            this.message = false;
        },
        msgDelete() {
            this.message = true;
        },
        deleteProduct(id) {
            axios
                .delete(`${URL}/${RESOURCES.PRODUCTS}/${id}`, {
                    headers: {
                        Authorization: "Bearer " + TOKEN
                    }
                })
                .then(() => {
                    this.close();
                    this.$toast.open({
                        message: "Produto excluído com sucesso!",
                        type: "info",
                        position: "bottom"
                    });
                    this.getProducts();
                });
        },
        handleFileObject() {
            this.image = this.$refs.file.files[0];
        }
    }
};
</script>