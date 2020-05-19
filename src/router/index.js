import Vue from 'vue'
import Router from 'vue-router'
import Task from '../pages/Task'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Task',
      component: Task
    },

  ]
})
