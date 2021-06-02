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
                    <div class="form-row">
                        <div class="form-group col-sm-6">
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
                                    {{ $v.product.name.$params.minLength.min }}
                                    caracteres.
                                </small>
                            </div>
                        </div>

                        <div class="form-group col-sm-3">
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
                        </div>
                        <div class="form-group col-sm-3">
                            <label for="categories">Categoria</label>
                            <Select2
                                :options="categories"
                                :value="product.category_id"
                                v-model="product.category_id"
                                name="category_id"
                                id="categories"
                            >
                                <option value="" disabled>Selecione</option>
                            </Select2>
                        </div>
                    </div>
                    <div class="form-group mt-2">
                        <input
                            type="file"
                            name="image"
                            ref="file"
                            v-on:change="onChange"
                        />
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
import { URI_BASE_API, RESOURCES, TOKEN } from "../../../config/api";
import { Money } from "v-money";

const URL = URI_BASE_API;
const RESOURCE = "products";
export default {
    created() {
        this.getCategories();
    },
    data() {
        return {
            product: {
                name: "",
                price: "",
                image: "",
                description: "",
                category_id: ""
            },
            money: {
                decimal: ",",
                thousands: ".",
                precision: 2,
                masked: false
            },
            categories: [],
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
            formData.append("category_id", this.product.category_id);
            formData.append("description", this.product.description);
            if (this.product.image) {
                formData.append("image", this.product.image);
            }
            this.createProduct(formData)
                .then(response => {
                    console.log(response)
                    if (response.status == 201) {
                        this.getProducts();
                        this.$refs.form.reset();
                        $("#categories")
                            .val("")
                            .trigger("change");
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
        },
        getCategories() {
            axios
                .get(`${URL}/${RESOURCES.CATEGORIES}/getCategories`, {
                    headers: { Authorization: "Bearer " + TOKEN }
                })
                .then(response => {
                    console.log(response.data);
                    this.categories = response.data;
                });
        }
    }
};
</script>