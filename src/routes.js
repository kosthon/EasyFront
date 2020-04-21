import Home           from './views/Home.vue';
import Soporte        from './views/Soporte';
import Acompanamiento from './views/Acomponamiento';
export const routes = [
    {path:'/', name:'home', component: Home},
    {path:'/soporte', name:'support', component:Soporte},
    {path:'/registrar-trabajo', name:'acompanamiento', component: Acompanamiento}
]

