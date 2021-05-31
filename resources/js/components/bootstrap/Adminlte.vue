<template>
    <div>
        <!-- Navbar -->
        <nav class="main-header navbar navbar-expand navbar-white navbar-light">
            <!-- Left navbar links -->
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" data-widget="pushmenu" href="#"
                        ><i class="fas fa-bars"></i
                    ></a>
                </li>
                
            </ul>

            <!-- SEARCH FORM -->
            <form class="form-inline ml-3">
                <div class="input-group input-group-sm">
                    <input
                        class="form-control form-control-navbar"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <div class="input-group-append">
                        <button class="btn btn-navbar" type="submit">
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                </div>
            </form>

            <!-- Right navbar links -->
            <ul class="navbar-nav ml-auto">
                
                <!-- Notifications Dropdown Menu -->
                <li class="nav-item dropdown">
                    <a class="nav-link" data-toggle="dropdown" href="#">
                        <i class="far fa-bell"></i>
                        <span class="badge badge-warning navbar-badge">15</span>
                    </a>
                    <div
                        class="dropdown-menu dropdown-menu-lg dropdown-menu-right"
                    >
                        <span class="dropdown-header">15 Notifications</span>
                        <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item">
                            <i class="fas fa-envelope mr-2"></i> 4 new messages
                            <span class="float-right text-muted text-sm"
                                >3 mins</span
                            >
                        </a>
                        <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item">
                            <i class="fas fa-users mr-2"></i> 8 friend requests
                            <span class="float-right text-muted text-sm"
                                >12 hours</span
                            >
                        </a>
                        <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item">
                            <i class="fas fa-file mr-2"></i> 3 new reports
                            <span class="float-right text-muted text-sm"
                                >2 days</span
                            >
                        </a>
                        <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item dropdown-footer"
                            >See All Notifications</a
                        >
                    </div>
                </li>
                <li class="nav-item">
                    <a
                        class="nav-link"
                        data-widget="control-sidebar"
                        data-slide="true"
                        href="#"
                        ><i class="fas fa-th-large"></i
                    ></a>
                </li>
            </ul>
        </nav>
        <!-- /.navbar -->

        <!-- Main Sidebar Container -->
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <!-- Brand Logo -->
            <a href="#" class="brand-link">
                <span class="brand-text font-weight-light mr-2"><i class="fab fa-watchman-monitoring mr-2"></i> 
                ATec - <small>Assistance</small></span>
            </a>

            <!-- Sidebar -->
            <div class="sidebar">
                

                <!-- Sidebar Menu -->
                <nav class="mt-2">
                    <ul
                        class="nav nav-pills nav-sidebar flex-column"
                        data-widget="treeview"
                        role="menu"
                        data-accordion="false"
                    >
                        <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
                        
                        <li class="nav-item">
                            <router-link to="/users" class="nav-link">
                                <i class="nav-icon fas fa-users mr-1"></i> <p>Usuários</p>
                            </router-link>                 
                        </li>
                         <li class="nav-item">
                            <router-link to="/profiles" class="nav-link">
                                <i class="nav-icon fas fa-id-badge mr-1"></i> <p>Perfis</p>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/permissions" class="nav-link">
                                <i class="nav-icon fas fa-user-lock mr-1"></i> <p>Permissões</p>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/roles" class="nav-link">
                                <i class="nav-icon fas fa-id-card-alt mr-1"></i> <p>Cargos</p>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/categories" class="nav-link">
                                <i class="nav-icon fas fa-layer-group mr-1"></i> <p>Categorias</p>
                            </router-link>
                        </li>
                         <li class="nav-item">
                            <router-link to="/products" class="nav-link">
                                <i class="nav-icon fas fa-barcode mr-1"></i> <p>Produtos</p>
                            </router-link>
                        </li>
                    </ul>
                </nav>
                <!-- /.sidebar-menu -->
            </div>
            <!-- /.sidebar -->
        </aside>
    </div>
</template>

<script>
export default {
    
}
</script>