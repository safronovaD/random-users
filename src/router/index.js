import Vue from 'vue';
import VueRouter from 'vue-router';
import UsersPage from '../pages/UsersPage/UsersPage';
import UserPage from '../pages/UserPage/UserPage';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: UsersPage
  },
  {
    path: '/user/:id',
    component: UserPage
  }
]

const router = new VueRouter({
  routes
})

export default router
