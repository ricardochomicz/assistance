<template>
    <div>
        <div class="card">
            <preloader></preloader>
            <div class="card-header">
                <h3 class="card-title mb-0">
                    <i class="fas fa-barcode mr-2"></i> Produtos
                </h3>
                <div class="card-tools">
                    <div class="input-group input-group-sm">
                        <input
                            type="text"
                            name="q"
                            class="form-control float-right"
                            placeholder="Pesquisa"
                            v-model="search"
                            v-on:keyup="searchUnit"
                        />

                        <div class="input-group-append">
                            <button type="submit" class="btn btn-default">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <router-link
                    to="/products-create"
                    class="btn btn-dark btn-sm mb-1 mt-1"
                    >Novo Produto
                </router-link>
                <div class="table-responsive">
                    <table class="table table-hover table-borderless">
                        <caption>
                            <small v-if="search !== ''"
                                ><b>{{ this.qty_filter.length }}</b> produto(s)
                                encontrado(s)</small
                            >
                        </caption>
                        <thead>
                            <tr>
                                <th class="text-center">ID</th>
                                <th>Nome</th>
                                <th>Valor</th>
                                <th>Descrição</th>
                                <th>Categoria</th>
                                <th class="text-center">Foto</th>
                                <th class="text-center">
                                    <i class="fas fa-cogs"></i>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="product in products.data"
                                :key="product.id"
                                :row="product"
                                v-bind:class="{
                                    'text-danger': !product.active
                                }"
                            >
                                <td class="text-center align-middle">
                                    {{ product.id }}
                                </td>
                                <td class="align-middle">{{ product.name }}</td>
                                <td class="align-middle">
                                    R$ {{ product.price | formatPrice }}
                                </td>
                                <td class="align-middle">
                                    {{ product.description }}
                                </td>
                                 <td class="align-middle">
                                    {{ product.category.name }}
                                </td>
                                <td class="align-middle text-center">
                                    <img
                                        :src="'/storage/' + product.image"
                                        :alt="product.name"
                                        v-show="product.image"
                                        style="max-width:50px"
                                    />
                                </td>
                                <td class="align-middle text-center">
                                    <b-button
                                        v-b-tooltip.hover="'Editar Produto'"
                                        variant="primary"
                                        @click="showModal(product.id)"
                                    >
                                        <i class="fas fa-pen"></i>
                                    </b-button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div
                        class="pagination pagination-sm justify-content-center"
                    >
                        <pagination
                            :data="products"
                            @pagination-change-page="getProducts"
                        ></pagination>
                    </div>
                </div>
            </div>
        </div>
        <modal
            v-show="isModalVisible"
            @close="closeModal"
            :product="product"
        ></modal>
    </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import { URI_BASE_API, TOKEN } from "../../../config/api";
import _ from "lodash";
import modal from "./ProductEdit";

const URL = URI_BASE_API;
const RESOURCE = "products";
export default {
    props: ["data"],
    data() {
        return {
            visible: false,
            product: {},
            search: "",
            qty_filter: "",
            isModalVisible: false
        };
    },
    mounted() {
        this.getProducts();
    },
    components: {
        modal
    },
    computed: {
        products() {
            return this.$store.state.products.items;
        }
    },
    methods: {
        ...mapActions(["getProducts", "getProduct"]),
        showModal(id) {
            this.getProduct(id).then(response => {
                this.product = response.data.data;
                this.isModalVisible = true;
            });
        },
        closeModal() {
            this.isModalVisible = false;
        },
        searchUnit: _.debounce(function() {
            if (this.search != "") {
                axios
                    .get(`${URL}/${RESOURCE}/search?q=` + this.search, {
                        headers: {
                            Authorization: "Bearer " + TOKEN
                        }
                    })
                    .then(response => {
                        this.products.data = response.data;
                        this.qty_filter = response.data;
                    });
            } else {
                this.getProducts();
            }
        })
    }
};
</script>