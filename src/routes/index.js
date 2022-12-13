import { createWebHistory, createRouter } from "vue-router";
import Home from '../views/Home';
import { Auth } from '../routes/auth';
import Mypage from '../views/user/MyPage';
import Board from '../views/Board';
import BoardList from '../components/board/BoardList';
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
    path: '/mypage',
    name: 'Mypage',
    component: Mypage,
    meta: { requiresAuth: true},
  }, 
  {
    path: '/board',
    name: 'Board',
    component: Board,
    children: [
      {
        path: '',
        name: 'BoardList',
        component: BoardList,
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