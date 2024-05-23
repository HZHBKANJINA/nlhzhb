import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PocetnaView from '@/views/PocetnaView.vue'
import KluboviView from '@/views/KluboviView.vue'
import UtakmiceView from '@/views/UtakmiceView.vue'
import TablicaLige from '@/views/TablicaLige.vue'
import AddPlayers from '@/components/AddPlayers.vue'
import PrikazIgraca from '@/components/PrikazIgraca.vue'
import AddMatches from '@/components/AddMatches.vue'
import PrikazTablice from '@/components/PrikazTablice.vue'

const routes = [
  {
    path: '/oldhome',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'pocetna',
    component:PocetnaView
  },
  {
    path:'/klubovi',
    name:'klubovi',
    component:KluboviView
  },
  {
    path:'/utakmice',
    name:'utakmice',
    component:UtakmiceView
  },
  {
    path:'/tablica',
    name:'tablica',
    component:TablicaLige
  },
  {
    path:'/igraci',
    name:'igraci',
    component:AddPlayers
  },
  {
    path:'/prikazigraca',
    name:'prikazigraca',
    component:PrikazIgraca
  },
  {
    path:'/prikaztablice',
    name:'prikaztablice',
    component:PrikazTablice
  },
  {
    path:'/utakmica',
    name:'utakmica',
    component:AddMatches
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
