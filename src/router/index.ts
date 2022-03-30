import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import readOnly from '../views/compositionApi/readOnly.vue'
import isProxy from '../views/compositionApi/isProxy.vue'
import isReactive from '../views/compositionApi/isReactive.vue'
import toRef from '../views/compositionApi/refs/toRef.vue'
import isRef from '../views/compositionApi/refs/isRef.vue'
import computedView from '../views/compositionApi/ComputedWatch/computedView.vue'
import computedGetterSetter from '../views/compositionApi/ComputedWatch/computedGetterSetter.vue'
import watchEffect from '../views/compositionApi/ComputedWatch/watchEffect.vue'
import watchView from '../views/compositionApi/ComputedWatch/watchView.vue'
import setUp1 from '../views/compositionApi/setUp/setUp1.vue'
import hooksView from '../views/compositionApi/hooks/hooksView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/refActive',
    name: 'refActive',
    component: () => import(/* webpackChunkName: "about" */ '../views/compositionApi/refActive.vue'),
  },
  {
    path: '/readOnly',
    name: 'readOnly',
    component: readOnly,
  },
  {
    path: '/isProxy',
    name: 'isProxy',
    component: isProxy,
  },
  {
    path: '/isReactive',
    name: 'isReactive',
    component: isReactive,
  },
  {
    path: '/toRef',
    name: 'toRef',
    component: toRef,
  },
  {
    path: '/isRef',
    name: 'isRef',
    component: isRef,
  },
  {
    path: '/computedView',
    name: 'computedView',
    component: computedView,
  },
  {
    path: '/computedGetterSetter',
    name: 'computedGetterSetter',
    component: computedGetterSetter,
  },
  {
    path: '/watchEffect',
    name: 'watchEffect',
    component: watchEffect,
  },
  {
    path: '/watchView',
    name: 'watchView',
    component: watchView,
  },
  {
    path: '/setUp1',
    name: 'setUp1',
    component: setUp1,
  },
  {
    path: '/hooksView',
    name: 'hooksView',
    component: hooksView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
