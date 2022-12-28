import { createWebHistory, createRouter } from "vue-router";
const Home = () => import('../views/Home.vue');
import User from '../views/User';
import { Auth } from '../routes/auth';
import MyPage from '../views/user/MyPage';
import UserProfile from '../views/user/UserProfile.vue';
import MyPageEdit from '../views/user/MyPageEdit.vue';
const UserBoard = () =>  import('../views/user/UserBoard.vue');
const Board = () => import('../views/Board.vue');
const BoardList = () => import('../views/board/BoardList.vue');
import BoardWrite from '../views/board/BoardWrite';
import BoardEdit from '../views/board/BoardEdit';
import BoardDetail from '../views/board/BoardDetail';
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
        component: MyPage,
        meta: { requiresAuth: true },
        children: [
          {
            path: '',
            name: 'profile',
            component: UserProfile,
            meta: { name: 'MypageProfile'}
          },
          {
            path: 'article',
            name: 'Article',
            component: UserBoard,
            meta: { requiresAuth: true }
          },
           {
            path: 'edit',
            name: 'MyPageEdit',
            component: MyPageEdit,
            meta: { requiresAuth: true, name: 'MyPageEdit' }
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