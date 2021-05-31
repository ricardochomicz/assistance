<template>
    <main class="d-flex align-items-center min-vh-100 py-3 py-md-0">
        <div class="container">
            <div class="card login-card">
                <div class="row no-gutters">
                    <div class="col-md-6">
                        <img
                            src="images/bg.png"
                            alt="login"
                            class="login-card-img"
                        />
                    </div>
                    <div class="col-md-6">
                        <div class="card-body">
                            <div class="brand-wrapper">
                                <img
                                    src="images/crm.png"
                                    alt="logo"
                                    class="logo"
                                />
                            </div>
                            <p class="login-card-description">
                                Entre com sua conta
                            </p>
                            <form action="#!">
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
                                        >Password</label
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
                                <input
                                    name="login"
                                    id="login"
                                    class="btn btn-block login-btn mb-4"
                                    type="button"
                                    value="Login"
                                    @click.prevent="login"
                                />
                            </form>
                            <a href="#!" class="forgot-password-link"
                                >Esqueceu sua senha?</a>
                            <p class="login-card-footer-text">
                                <router-link to="/register" class="text-reset">Registrar-se</router-link>
                            </p>                      
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
                email: "",
                password: ""
            },
            errors: {}
        };
    },
    methods: {
        login() {
            axios.post("/api/login", this.formData).then(response => {
                const token = response.data.token;
                window.localStorage.setItem("token", token);
                this.$router.push({ name: "users" });
            });
        }
    }
};
</script>
