import { lazy } from 'react';

const Task = lazy(() => import('../pages/task'));
const Category = lazy(() => import ('../pages/categories'))
const TaskForm = lazy(() => import ('./TaskForm'))
const TaskTable = lazy(() => import ('./TaskTable'))

const RoutesComponent = [
    { path: '/', page: Task },
    { path: '/category', page: Category },
    { path: '/taskForm', page: TaskForm },
    { path: '/taskTable', page: TaskTable },
    { path: '/taskForm/:id', page: TaskForm }
  ];
    


export default RoutesComponent