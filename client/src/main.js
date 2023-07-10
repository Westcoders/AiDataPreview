import {createApp} from 'vue'
import ElementPlus from 'element-plus'
import 'normalize.css/normalize.css'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './index.less'
import App from './App.vue'

import {auth} from "./auth";
import {createStore} from 'vuex';
import router from './router'
const store = createStore({
    modules: {
        auth,
    },
});

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')
