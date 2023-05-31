import { createApp } from 'vue'
import App from './App.vue'
import { router, setupRouter } from './router'
import { setupRouterGuard } from './router/guard'
import { setupStore } from './store'
import { setupDesign } from '@/design/index'

function bootstrap() {
  const app = createApp(App)

  setupDesign()

  // 配置 store
  setupStore(app)

  // 配置路由
  setupRouter(app)

  // 路由守卫
  setupRouterGuard(router)

  app.mount('#app')
}

bootstrap()
