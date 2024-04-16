import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from "primevue/config";
// Themes
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primevue/resources/primevue.min.css';
// PrimeFlex
import 'primeflex/primeflex.css';

// PrimeIcons
import 'primeicons/primeicons.css';
import Button from "primevue/button";
import Card from "primevue/card";
import Toolbar from "primevue/toolbar";
import Menubar from "primevue/menubar";

const app = createApp(App);
app.use(PrimeVue)
    .component('pv-button', Button)
    .component('pv-card', Card)
    .component('pv-toolbar', Toolbar)
    .component('pv-menubar', Menubar)
app.mount('#app')