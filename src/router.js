import vueRouter from 'vue-router'
import Inicio from './components/Inicio'
import UserListado from './components/UserListado'
import App from './App'

const router = new vueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: "root",
      component: App
    },
    {
      path: '/inicio',
      name: "inicio",
      component: Inicio
    },
    {
      path: '/userlistado',
      name: 'user_listado',
      component: UserListado
    }
  ]
})
export default router
