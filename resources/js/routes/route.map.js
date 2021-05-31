import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import Users from '../components/pages/users/UserList'
import UserDetail from '../components/pages/users/UserDetail'
import UserCreate from '../components/pages/users/UserCreate'
import Profile from '../components/pages/profiles/ProfileList'


const routes = [{
        path: '/',
        component: Login,
        name: 'login'
    },
    {
        path: '/register',
        component: Register,
        name: 'register'
    },
    {
        path: '/users',
        component: Users,
        name: 'users'
    },
    {
        path: '/users-create',
        component: UserCreate,
        name: 'users-create'
    },
    {
        path: '/users-details/:id',
        component: UserDetail,
        name: 'users-details'
    },
    {
        path: '/profiles',
        component: () => import('../components/pages/profiles/ProfileList'),
        name: 'profiles'
    },
    {
        path: '/profiles-create',
        component: () => import('../components/pages/profiles/ProfileCreate'),
        name: 'profiles-create'
    },
    {
        path: '/permissions',
        component: () => import('../components/pages/permissions/PermissionList'),
        name: 'permissions'
    },
    {
        path: '/permissions-create',
        component: () => import('../components/pages/permissions/PermissionCreate'),
        name: 'permissions-create'
    },
    {
        path: '/profiles/:id/permissions',
        component: () => import('../components/pages/profiles/permissions/ProfilePermissions'),
        name: 'profiles-permissions'
    },
    {
        path: '/profiles/:id/permissions/available',
        component: () => import('../components/pages/profiles/permissions/Available'),
        name: 'profiles-permissions-available'
    },
    {
        path: '/permissions/:id/profiles',
        component: () => import('../components/pages/permissions/profiles/PermissionProfiles'),
        name: 'permissions-profiles'
    },
    {
        path: '/roles',
        component: () => import('../components/pages/roles/RoleList'),
        name: 'roles'
    },
    {
        path: '/roles-create',
        component: () => import('../components/pages/roles/RoleCreate'),
        name: 'roles-create'
    },
    {
        path: '/roles/:id/permissions',
        component: () => import('../components/pages/roles/permissions/RolePermissions'),
        name: 'roles-permissions'
    },
    {
        path: '/roles/:id/permissions/available',
        component: () => import('../components/pages/roles/permissions/Available'),
        name: 'roles-permissions-available'
    },
    {
        path: '/permissions/:id/roles',
        component: () => import('../components/pages/permissions/roles/PermissionRoles'),
        name: 'permissions-roles'
    },
    {
        path: '/users/:id/roles/available',
        component: () => import('../components/pages/users/roles/Available'),
        name: 'users-roles-available'
    },
    {
        path: '/users/:id/roles',
        component: () => import('../components/pages/users/roles/UserRoles'),
        name: 'users-roles'
    },
    {
        path: '/roles/:id/users',
        component: () => import('../components/pages/roles/users/RoleUsers'),
        name: 'roles-users'
    },
    {
        path: '/categories',
        component: () => import('../components/pages/categories/CategoryList'),
        name: 'categories'
    },
    {
        path: '/categories-create',
        component: () => import('../components/pages/categories/CategoryCreate'),
        name: 'categories-create'
    },
    {
        path: '/products',
        component: () => import('../components/pages/products/ProductList'),
        name: 'products'
    },
    {
        path: '/products-create',
        component: () => import('../components/pages/products/ProductCreate'),
        name: 'products-create'
    },

]

export default routes
