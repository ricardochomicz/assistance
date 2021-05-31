<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h3 class="card-title mb-0">
                    <i class="fas fa-barcode mr-2"></i> Novo Produto
                </h3>
                <div class="card-tools">
                    <router-link to="/products" class="btn btn-dark btn-sm"
                        ><i class="fas fa-undo-alt"></i> Voltar</router-link
                    >
                </div>
            </div>
            <div class="card-body">
                <form
                    method="post"
                    enctype="multipart/form-data"
                    @submit.prevent="addProduct"
                    ref="form"
                    class="needs-validation"
                    novalidate
                >
                    <div class="form-group">
                        <label for="name">Nome</label>
                        <input
                            type="text"
                            class="form-control text-capitalize col-sm-6"
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
                                {{ $v.product.name.$params.minLength.min }}
                                caracteres.
                            </small>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="price">Valor</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model.trim="$v.product.price.$model"
                            :class="{
                                'is-invalid': $v.product.price.$error
                            }"
                            name="price"
                            required
                            v-money="money"
                        />
                        <div v-show="$v.product.price.$error">
                            <small
                                v-if="errors.price"
                                :class="['text-danger']"
                                >{{ errors.price[0] }}</small
                            >
                        </div>
                        {{ product.price }}
                    </div>
                    <div class="form-group">
                        <input
                            type="file"
                            name="image"
                            ref="file"
                            :class="{
                                'is-invalid': $v.product.image.$error
                            }"
                            v-on:change="onChange"
                        />
                        <div v-show="$v.product.image.$error">
                            <small
                                v-if="errors.image"
                                :class="['text-danger']"
                                >{{ errors.image[0] }}</small
                            >
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="description">Descrição</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="product.description"
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
import { URI_BASE_API, TOKEN } from "../../../config/api";
import { Money } from "v-money";
const URL = URI_BASE_API;
const RESOURCE = "products";
export default {
    data() {
        return {
            product: {
                name: "",
                price: "",
                image: "",
                description: ""
            },
            money: {
                decimal: ",",
                thousands: ".",
                precision: 2,
                masked: false
            },
            error: {},
            errors: []
        };
    },
    components: {
        Money
    },
    validations: {
        product: {
            name: {
                required,
                minLength: minLength(5)
            },
            price: {
                required
            },
            image: {
                required
            }
        }
    },
    methods: {
        onChange(e) {
            this.product.image = e.target.files[0];
        },
        ...mapActions(["createProduct", "getProducts"]),

        addProduct() {
            this.$v.$touch();
            let formData = new FormData();
            formData.append("name", this.product.name);
            formData.append("price", this.product.price);
            if (this.product.image) {
                formData.append("image", this.product.image);
            }
            formData.append("description", this.product.description);
            this.createProduct(formData)
                .then(response => {
                    if (response.status == 201) {
                        this.getProducts();
                        this.$refs.form.reset();
                        this.$root.$emit("product", response);
                        this.$toast.open({
                            message: "Produto cadastrado com sucesso!",
                            type: "success",
                            position: "bottom"
                        });
                        $("#spinner").addClass("d-none");
                        this.$router.push("/products");
                    }
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
        }
    }
};
</script>