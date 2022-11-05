import { createWebHistory, createRouter } from "vue-router";
import Home from '../views/Home';
import Board from '../views/Board';
import BoardList from '../components/board/BoardList';
import BoardWrite from '../components/board/BoardWrite';
import BoardDetail from '../components/board/BoardDetail';
import NotFound from '../views/NotFound';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
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

export default router;