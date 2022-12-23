import { createWebHistory, createRouter } from "vue-router";
import Home from '../views/Home';
import User from '../views/User';
import { Auth } from '../routes/auth';
import Mypage from '../views/user/MyPage';
import UserProfile from '../views/user/UserProfile.vue';
import UserBoard from '../views/user/UserBoard.vue';
import Board from '../views/Board';
import BoardWrite from '../components/board/BoardWrite';
import BoardEdit from '../components/board/BoardEdit';
import BoardDetail from '../components/board/BoardDetail';
import NotFound from '../views/NotFound';
import store from '../store/index';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  ...Auth,
  { 
    path: '/user',
    component: User,
    children: [
      {
        path: 'mypage',
        name: 'Mypage',
        component: Mypage,
        meta: { requiresAuth: true},
        children: [
          {
            path: 'article',
            name: 'Article',
            component: UserBoard,
            meta: { requiresAuth: true }
          },
          {
            path: '',
            name: 'profile',
            component: UserProfile,
          },
        ]
      },
    ]
  }, 
  {
    path: '/board',
    name: 'Board',
    component: Board,
    children: [
      {
        path: '',
        name: 'BoardList',
        component: () => import('../components/board/BoardList'),
      },
      {
        path: 'write',
        name: 'BoardWrite',
        component: BoardWrite,
        meta: { requiresAuth: true }
      },
      {
        path: 'edit/:id',
        name: 'BoardEdit',
        component: BoardEdit,
        meta: { requiresAuth: true }
      },
      {
        path: 'detail/:id',
        name: 'BoardDetail',
        component: BoardDetail,
        props: (route) => ({ id: Number(route.params.id)})
      }
    ],
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});


router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth == true) {
    const isAuthorized = store.getters['user/getToken'];
    if(isAuthorized !== null) {
      next();
    } else {
      next('/login');
    }
  } else {
    next();
  } 
})

export default router;