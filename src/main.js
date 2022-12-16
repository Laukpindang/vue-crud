import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/*
    Font Awesome
*/
import "../node_modules/font-awesome/css/font-awesome.css"

/*
    Bootstrap
*/
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

import "./style.css" //main css file

createApp(App).use(store).use(router).mount('#app')
