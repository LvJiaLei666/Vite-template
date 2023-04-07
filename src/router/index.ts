import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'

export type RouteConfig = {
  name?: string
  meta: RouteRecordRaw['meta']
}
type importConfig = {
  [key: string]: RouteConfig
}

const routes: RouteRecordRaw[] = Object.entries(
  import.meta.glob('../views/**/page.config.ts', {
    eager: true,
    import: 'default',
  }) as importConfig
).map(([pagePath, config]) => {
  const path: string = pagePath
    .replace('../views', '')
    .replace('/page.config.ts', '')
  const name: string = path.split('/')[path.split('/').length - 1]
  console.log(path)
  console.log(name)
  return {
    path,
    name: config.name || name,
    meta: config.meta,
    component: import(pagePath),
    children: [],
  }
})

// 查找每个父路由下的所有子路由，并将它们添加到 children 属性中
for (let i = 0; i < routes.length; i++) {
  const parentRoute = routes[i]
  const childRoutes = routes
    .slice(i + 1)
    .filter((r) => r.path.startsWith(parentRoute.path + '/'))
  console.log(childRoutes)
  if (childRoutes.length > 0) {
    parentRoute.children = childRoutes
  }
}

console.log(routes)

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About/AboutView.vue'),
      children: [
        {
          path: '/about/product',
          name: 'product',
          component: () => import('@/views/About/product/Product.vue'),
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login/Login.vue'),
    },
  ],
})

export default router
