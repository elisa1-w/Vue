import { createRouter, createWebHistory } from 'vue-router'
import Footer from '../components/Footer.vue'
import Login from '../components/Login.vue'
import Body from '../components/Body.vue'


//import Register from '../components/Register.vue'
//import Main from '../components/Main.vue'
//import DashBoard from '../components/Dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'Footer',
    component: Footer
  },

  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  {
    path: '/',
    name: 'Body',
    component: Body
  },


 

  



/*  {
    path: '/dashboard',
    name: 'DashBoard',
    component: DashBoard
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }*/
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL || '/'),
  routes
})

export default router