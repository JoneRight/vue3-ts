import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 再main中全局引入组件
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import '@/common/styles/common.less'

createApp(App).use(store).use(router).use(Antd).mount('#app')
