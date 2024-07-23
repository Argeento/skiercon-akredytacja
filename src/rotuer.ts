import { createRouter, createWebHistory } from 'vue-router'
import { isUserAuth } from './store'
import Akredytacja from './views/Akredytacja.vue'
import LesniczowkaVue from './views/Lesniczowka.vue'
import ListaVue from './views/Lista.vue'
import LoginVue from './views/Login.vue'
import Start from './views/Start.vue'
import StatystykiVue from './views/Statystyki.vue'
import Nocleg from './views/steps/Nocleg.vue'
import Pelnoletnosc from './views/steps/Pelnoletnosc.vue'
import Platnosc from './views/steps/Platnosc.vue'
import SearchVue from './views/steps/Search.vue'

export enum RouteName {
  Login = 'login',
  Lesniczowka = 'lesniczowka',
  Lista = 'lista',
  Statystyki = 'statystyki',
  Akredytacja = 'akredytacja',
  Szukaj = 'szukaj',
  Wiek = 'wiek',
  Nocleg = 'nocleg',
  Platnosc = 'platnosc'
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: RouteName.Login,
      component: LoginVue
    },
    {
      path: '/lesniczowka',
      name: RouteName.Lesniczowka,
      component: LesniczowkaVue
    },
    {
      path: '/lista',
      name: RouteName.Lista,
      component: ListaVue
    },
    {
      path: '/statystyki',
      name: RouteName.Statystyki,
      component: StatystykiVue
    },
    {
      path: '/akredytacja',
      name: 'a',
      meta: { step: 0 },
      children: [
        {
          path: 'start',
          name: RouteName.Akredytacja,
          component: Akredytacja
        },
        {
          path: 'szukaj',
          name: 'b',
          component: Start,
          children: [
            {
              path: '1',
              name: RouteName.Szukaj,
              meta: { step: 1 },
              component: SearchVue
            },
            {
              path: '2',
              name: RouteName.Wiek,
              meta: { step: 2 },
              component: Pelnoletnosc
            },
            {
              path: '3',
              name: RouteName.Nocleg,
              meta: { step: 3 },
              component: Nocleg
            },
            {
              path: '4',
              name: RouteName.Platnosc,
              meta: { step: 4 },
              component: Platnosc
            }
          ]
        }
      ]
    }
  ]
})

router.beforeEach((to, _from, next) => {
  if (to.name === RouteName.Login && isUserAuth.value) {
    next({ name: RouteName.Akredytacja })
  } else if (to.name !== RouteName.Login && !isUserAuth.value) {
    next({ name: RouteName.Login })
  } else {
    next()
  }
})

export default router
