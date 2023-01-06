import Sign from '../views/Home.vue';
import Login from '../views/Home.vue';

export const Auth = [
  {
    path: '/signup',
    name: 'Sign',
    component: Sign,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];