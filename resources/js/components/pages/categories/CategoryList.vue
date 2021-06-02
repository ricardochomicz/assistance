<template>
    <div>
        <div class="card">
            <preloader></preloader>
            <div class="card-header">
                <h3 class="card-title mb-0">
                    <i class="fas fa-layer-group mr-2"></i> Categorias
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
                    to="/categories-create"
                    class="btn btn-dark btn-sm mb-1 mt-1"
                    >Nova Categoria
                </router-link>
                <div class="table-responsive">
                    <table class="table table-hover table-borderless">
                        <caption>
                            <small v-if="search !== ''"
                                ><b>{{ this.qty_filter.length }}</b>
                                categoria(s) encontrada(s)</small
                            >
                        </caption>
                        <thead>
                            <tr>
                                <th class="text-center">ID</th>
                                <th>Nome</th>
                                <th>Descrição</th>
                                <th class="text-center">
                                    <i class="fas fa-cogs"></i>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="category in categories.data"
                                :key="category.id"
                                :row="category"
                            >
                                <td class="text-center align-middle">
                                    {{ category.id }}
                                </td>
                                <td class="align-middle">
                                    {{ category.name }}
                                </td>
                                <td class="align-middle">
                                    {{ category.description }}
                                </td>
                                <td class="align-middle text-center">
                                    <b-button
                                        v-b-tooltip.hover="'Editar Categoria'"
                                        variant="primary"
                                        @click="showModal(category.id)"
                                    >
                                        <i class="fas fa-pen"></i>
                                    </b-button>
                                    <router-link
                                        v-bind:to="
                                            '/categories/' +
                                                category.id +
                                                '/products'
                                        "
                                        class="btn btn-warning disabled"
                                        v-b-tooltip.hover="
                                            'Produtos da Categoria'
                                        "
                                        ><i class="fas fa-barcode"></i
                                    ></router-link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div
                        class="pagination pagination-sm justify-content-center"
                    >
                        <pagination
                            :data="categories"
                            @pagination-change-page="getCategories"
                        ></pagination>
                    </div>
                </div>
            </div>
        </div>
        <modal
            v-show="isModalVisible"
            @close="closeModal"
            :category="category"
        ></modal>
    </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import { URI_BASE_API, RESOURCES, TOKEN } from "../../../config/api";
import _ from "lodash";
import modal from "./CategoryEdit";
const URL = URI_BASE_API;

export default {
    props: ["data"],
    data() {
        return {
            category: {},
            search: "",
            qty_filter: "",
            isModalVisible: false
        };
    },
    mounted() {
        this.getCategories();
    },
    components: {
        modal
    },
    computed: {
        categories() {
            return this.$store.state.categories.items;
        }
    },
    methods: {
        ...mapActions(["getCategories", "getCategory"]),
        showModal(id) {
            this.getCategory(id).then(response => {
                this.category = response.data.data;
                this.isModalVisible = true;
            });
        },
        closeModal() {
            this.isModalVisible = false;
        },
        searchUnit: _.debounce(function() {
            if (this.search != "") {
                axios
                    .get(
                        `${URL}/${RESOURCES.CATEGORIES}/search?q=` +
                            this.search,
                        {
                            headers: {
                                Authorization: "Bearer " + TOKEN
                            }
                        }
                    )
                    .then(response => {
                        this.categories.data = response.data;
                        this.qty_filter = response.data;
                    });
            } else {
                this.getCategories();
            }
        })
    }
};
</script>