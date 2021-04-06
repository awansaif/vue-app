import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Logout from '../components/Logout.vue'
import Image from '../views/Images.vue'
import Video from '../views/Videos.vue'

const routes = [
  
  {
    path: '/',
    name: 'sign',
    component: Login,
    beforeEnter: (to, from, next) => {
      if(localStorage.getItem('token'))
      {
        next('/home');
      }
      else
      {
        next();
      }
    }  
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout
  },
  {
    path: '/forget-password',
    name: 'Forget',
    component: Home,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      if(localStorage.getItem('token'))
      {
        next();
      }
      else
      {
        next('/');
      }
    }
  },
  {
    path: '/videos',
    name: 'Video',
    component: Video,
    beforeEnter: (to, from, next) => {
      if(localStorage.getItem('token'))
      {
        next();
      }
      else
      {
        next('/');
      }
    }
  },
  {
    path: '/images',
    name: 'Image',
    component: Image,
    beforeEnter: (to, from, next) => {
      if(localStorage.getItem('token'))
      {
        next();
      }
      else
      {
        next('/');
      }
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
