import { createWebHistory, createRouter } from "vue-router";
import Home from '../views/Home.vue';
import User from '../views/User.vue';
import { Auth } from '../routes/auth';
const MyPage = () => import(/* webpackChunkName: "mypage"*/'../views/user/MyPage.vue');
import MyUserProfile from '../views/user/UserProfile.vue';
import MyPageEdit from '../views/user/MyPageEdit.vue';
import MyUserBoard from '../views/user/UserBoard.vue';
const Board = () => import(/* webpackChunkName: "board" */ '../views/Board.vue');
import BoardList from '../views/board/BoardList.vue';
import BoardWrite from '../views/board/BoardWrite.vue';
import BoardEdit from '../views/board/BoardEdit.vue';
import BoardDetail from '../views/board/BoardDetail.vue';
import NotFound from '../views/NotFound.vue';
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
            component: MyUserProfile,
            meta: { name: 'MypageProfile'}
          },
          {
            path: 'article',
            name: 'Article',
            component: MyUserBoard,
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