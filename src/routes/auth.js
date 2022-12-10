export const Auth = [
  {
    path: '/signup',
    name: 'Sign',
    component: () => import('../views/Sign.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
];