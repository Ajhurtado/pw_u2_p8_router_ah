import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import EstudianteView from '../views/EstudianteView.vue'
import ContadorView from "../views/ContadorView.vue"
import EstudianteTablaView from "../views/EstudianteTablaView.vue"
import PreguntaView from "../views/PreguntaView.vue"
import ResponsivoView from "../views/ResponsivoView.vue"


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/estudiante/:cedula',
    name: 'estudianteview',
    component: EstudianteView
  },

  {
    path: '/contador',
    name: 'contadorView',
    component: ContadorView
  },

  {
    path: '/estudianteTabla',
    name: 'estudianteTablaView',
    component: EstudianteTablaView
  },

  {
    path: '/pregunta',
    name: 'preguntaView',
    component: PreguntaView
  },

  {
    path: '/responsivo',
    name: 'responsivoView',
    component: ResponsivoView
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },


  {
    path: '/contador/numeros',
    name: 'contadorView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contadorView" */ '../views/ContadorView.vue')
  },

  {
    path: '/videojuego',
    name: 'videojuegoView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contadorView" */ '../views/VideojuegoView.vue')
  },

  {
    path: '/animalesExtintos',
    name: 'animalesExtintosView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contadorView" */ '../views/AnimalesExtintosView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
