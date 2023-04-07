import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'
// 定义路由配置类型，包含名称和元数据
export type RouteConfig = {
  name?: string
  meta: RouteRecordRaw['meta']
}

// 使用 import.meta.glob 动态导入所有页面的路由配置文件
const routes: RouteRecordRaw[] = Object.entries(
  import.meta.glob('../views/**/page.config.ts', {
    eager: true, // 立即加载所有模块
    import: 'default', // 导入默认导出
  }) as { [key: string]: RouteConfig } // 将返回值转换为对象类型
).map(([pagePath, config]) => {
  // 将路径和配置信息映射为路由配置对象
  // 根据文件路径生成路由路径和名称
  const path: string = pagePath
    .replace('../views', '') // 去掉前缀
    .replace('/page.config.ts', '') // 去掉后缀
  const name: string = path.split('/')[path.split('/').length - 1] // 取最后一段作为名称

  return {
    path,
    name: config.name || name, // 如果有配置名称则使用，否则使用自动生成的名称
    meta: config.meta, // 元数据不变
    component: import(pagePath), // 动态导入组件
    children: [], // 初始化子路由数组
  }
})

// 遍历所有父路由，查找并添加它们的子路由
for (let i = 0; i < routes.length; i++) {
  const parentRoute = routes[i]
  const childRoutes = [] // 初始化子路由数组
  for (let j = i + 1; j < routes.length; j++) {
    const childRoute = routes[j]
    // 如果子路由的路径以父路由的路径为前缀，则认为它是父路由的子路由
    if (childRoute.path.startsWith(parentRoute.path + '/')) {
      childRoutes.push(childRoute) // 将子路由添加到数组中
      routes.splice(j, 1) // 从列表中移除已添加到子路由数组中的子路由
      j-- // 因为数组长度减小了，所以要回退一步
    }
  }
  if (childRoutes.length > 0) {
    parentRoute.children = childRoutes // 将所有子路由添加到父路由的 children 属性中
  }
}

// 返回生成的路由配置数组

console.log(routes)

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [...routes],
})

export default router
