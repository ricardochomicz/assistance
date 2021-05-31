<template>
    <main class="d-flex align-items-center min-vh-100 py-3 py-md-0">
        <div class="container">
            <div class="card login-card">
                <div class="row no-gutters">
                    <div class="col-md-6">
                        <img
                            src="images/pensamento.png"
                            alt="login"
                            class="login-card-img"
                        />
                    </div>
                    <div class="col-md-6">
                        <div class="card-body">
                            
                            <p class="login-card-description">
                                Crie sua conta
                            </p>
                            <form action="#!">
                                <div class="form-group">
                                    <label for="cnpj" class="sr-only"
                                        >CNPJ</label
                                    >
                                    <input
                                        type="text"
                                        name="cnpj"
                                        id="cnpj"
                                        class="form-control"
                                        placeholder="CNPJ"
                                        v-model="formData.cnpj"
                                        maxlength="14"
                                    />
                                    {{ formData.cnpj }}
                                </div>
                                <div class="form-group">
                                    <label for="company" class="sr-only"
                                        >Razão Social</label
                                    >
                                    <input
                                        type="text"
                                        name="company"
                                        id="company"
                                        class="form-control"
                                        placeholder="Razão Social"
                                        v-model="formData.company"
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="name" class="sr-only"
                                        >Nome</label
                                    >
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        class="form-control"
                                        placeholder="Nome"
                                        v-model="formData.name"
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="email" class="sr-only"
                                        >Email</label
                                    >
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        class="form-control"
                                        placeholder="Email"
                                        v-model="formData.email"
                                    />
                                </div>
                                <div class="form-group mb-4">
                                    <label for="password" class="sr-only"
                                        >Senha</label
                                    >
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        class="form-control"
                                        placeholder="***********"
                                        v-model="formData.password"
                                    />
                                </div>
                                <div class="form-group mb-4">
                                    <label for="password_confirmation" class="sr-only"
                                        >Confirme sua senha</label
                                    >
                                    <input
                                        type="password"
                                        name="password_confirmation"
                                        id="password_confirmation"
                                        class="form-control"
                                        placeholder="***********"
                                        v-model="formData.password_confirmation"
                                    />
                                </div>
                                <input
                                    name="login"
                                    id="login"
                                    class="btn btn-block login-btn mb-4"
                                    type="button"
                                    value="Criar Conta"
                                    @click.prevent="register"
                                />
                            </form>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                cnpj: "",
                company: "",
                name: "",
                email: "",
                password: "",
                password_confirmation: ""
            },
            errors: {}
        };
    },
    methods: {
        register() {
            axios.post("/api/register", this.formData).then(response => {
                const token = response.data.token;
                window.localStorage.setItem("token", token);
                this.$router.push({ name: "users" });
            });
        }
    }
};
</script>
