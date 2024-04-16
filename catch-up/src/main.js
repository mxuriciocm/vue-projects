import { createApp } from 'vue'
import './style.css'
import App from './app.vue'

// Import PrimeVue
import PrimeVue from "primevue/config";

// Import themes
import 'primevue/resources/themes/md-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'

// Import Icons
import 'primeicons/primeicons.css'

// Import PrimeFlex
import 'primeflex/primeflex.css'

// Import UI Components
import Button from "primevue/button";
import Sidebar from "primevue/sidebar";
import SelectButton from "primevue/selectbutton";
import Card from "primevue/card";
import Avatar from "primevue/avatar";
import Menu from "primevue/menu";
import Menubar from "primevue/menubar";
import Toolbar from "primevue/toolbar";


const app = createApp(App);
app.use(PrimeVue, {ripple: true})
    .component('pv-button', Button)
    .component('pv-card', Card)
    .component('pv-select-button', SelectButton)
    .component('pv-sidebar', Sidebar)
    .component('pv-avatar', Avatar)
    .component('pv-menu', Menu)
    .component('pv-menubar', Menubar)
    .component('pv-toolbar', Toolbar)
    .mount('#app');
