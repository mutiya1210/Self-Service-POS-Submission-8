import './bootstrap';
//import '../css/app.css';

import { createApp} from 'vue';
import PostIndex from './components/Posts/Index'

const app = createApp({})
    app.component('post-index', PostIndex)
    app.mount('#app')

