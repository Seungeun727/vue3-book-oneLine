const Sign = () => import(/* webpackChunkName: "signup" */ '../views/Sign.vue');
const Login = () => import(/* webpackChunkName: "login" */ '../views/Login.vue');

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