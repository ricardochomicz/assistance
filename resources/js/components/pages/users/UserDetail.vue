<template>
    <div>
        <div class="invoice p-3 mb-3">
            <preloader-card></preloader-card>
            <!-- title row -->
            <div class="row">
                <div class="col-12">
                    <h4>
                        <i class="fas fa-id-card-alt mr-2"></i> {{ user.name }}
                        <small class="float-right">
                            <router-link to="/users">
                                <b-button pill variant="outline-secondary"
                                    ><i class="fas fa-undo-alt"></i>
                                    Voltar</b-button
                                >
                            </router-link>
                        </small>
                    </h4>
                </div>
                <!-- /.col -->
            </div>
            <!-- info row -->
            <div class="row invoice-info">
                <div class="col-sm-4 invoice-col">
                    <address>
                        <strong v-show="office">{{ office }}</strong
                        ><br />
                        Telefone:
                        <a
                            target="_blank"
                            v-bind:href="'https://wa.me/55' + user.phone"
                            >{{ user.phone }}</a
                        ><br />
                        Email:
                        <a v-bind:href="'mailto:' + user.email">{{
                            user.email
                        }}</a
                        ><br />
                        Status: {{ user.active == 1 ? "Ativo" : "Inativo"
                        }}<br />
                        Data Cadastro: {{ user.created_at | formatDate }}
                    </address>
                </div>
            </div>
            <!-- /.row -->

            <!-- Table row -->
            <div class="row">
                <div class="col-12 table-responsive">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Qty</th>
                                <th>Product</th>
                                <th>Serial #</th>
                                <th>Description</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Call of Duty</td>
                                <td>455-981-221</td>
                                <td>
                                    El snort testosterone trophy driving gloves
                                    handsome
                                </td>
                                <td>$64.50</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Need for Speed IV</td>
                                <td>247-925-726</td>
                                <td>Wes Anderson umami biodiesel</td>
                                <td>$50.00</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Monsters DVD</td>
                                <td>735-845-642</td>
                                <td>
                                    Terry Richardson helvetica tousled street
                                    art master
                                </td>
                                <td>$10.70</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Grown Ups Blue Ray</td>
                                <td>422-568-642</td>
                                <td>Tousled lomo letterpress</td>
                                <td>$25.99</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- /.col -->
            </div>
            <!-- /.row -->
        </div>
    </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import { URI_BASE_API, RESOURCES, TOKEN } from "../../../config/api";
export default {
    data() {
        return {
            user: {},
            office: {}
        };
    },
    mounted() {
        this.getUserById();
    },
    methods: {
        ...mapActions(["getUser"]),
        getUserById() {
            this.getUser(this.$route.params.id).then(response => {
                response.data.data.office.forEach(element => {
                    this.office = element.name;
                });
                this.user = response.data.data;
            });
        }
    }
};
</script>
