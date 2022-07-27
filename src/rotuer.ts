import { createRouter, createWebHistory } from 'vue-router'
import { isUserAuth } from './store'

import Akredytacja from './views/Akredytacja.vue'
import Start from './views/Start.vue'

import Pelnoletnosc from './views/steps/Pelnoletnosc.vue'
import Nocleg from './views/steps/Nocleg.vue'
import Platnosc from './views/steps/Platnosc.vue'
import WyszukajOsobe from './views/steps/WyszukajOsobe.vue'

import LoginView from './views/Login.vue'
import LesniczowkaVue from './views/Lesniczowka.vue'
import ListaVue from './views/Lista.vue'

export enum RouteName {
  Login = 'login',
  Lesniczowka = 'lesniczowka',
  Lista = 'lista',
  Akredytacja = 'akredytacja',
  AkredytacjaUczestnik = 'akredytacja - uczestnik',
  AkredytacjaProgram = 'akredytacja - program',
  AkredytacjaWolontariusz = 'akredytacja - wolontariusz',
  AkredytacjaGosc = 'akredytacja - gość',
  AkredytacjaMedia = 'akredytacja - media',
  AkredytacjaWystawca = 'akredytacja - wystawca'
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: RouteName.Login,
      component: LoginView
    },
    {
      path: '/lesniczowka',
      name: RouteName.Lesniczowka,
      component: LesniczowkaVue
    },
    {
      path: '/lista',
      name: 'lista',
      component: ListaVue
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
          path: 'uczestnik',
          name: RouteName.AkredytacjaUczestnik,
          component: Start,
          meta: { person: 'normal' } as { person: TicketType },
          children: [
            {
              path: '1',
              name: 'Uczestnik - Wiek',
              meta: { step: 1 },
              component: Pelnoletnosc
            },
            {
              path: '2',
              name: 'Uczestnik - Nocleg',
              meta: { step: 2 },
              component: Nocleg
            },
            {
              path: '3',
              name: 'Uczestnik - Płatność',
              meta: { step: 3 },
              component: Platnosc
            }
          ]
        },
        {
          path: 'tworca-programu',
          name: RouteName.AkredytacjaProgram,
          component: Start,
          meta: { person: 'program' } as { person: TicketType },
          children: [
            {
              path: '1',
              name: 'Twórca programu - Wiek',
              meta: { step: 1 },
              component: Pelnoletnosc
            },
            {
              path: '2',
              name: 'Twórca programu - Wyszukaj osobę',
              meta: { step: 2 },
              component: WyszukajOsobe
            },
            {
              path: '3',
              name: 'Twórca programu - Nocleg',
              meta: { step: 3 },
              component: Nocleg
            },
            {
              path: '4',
              name: 'Twórca programu - Zakończ akredytację',
              meta: { step: 4 },
              component: Platnosc
            }
          ]
        },
        {
          path: 'wolontariusz',
          name: RouteName.AkredytacjaWolontariusz,
          component: Start,
          meta: { person: 'volunteer' } as { person: TicketType },
          children: [
            {
              path: '1',
              name: 'Wolontariusz - Wyszukaj osobę',
              meta: { step: 1 },
              component: WyszukajOsobe
            },
            {
              path: '2',
              name: 'Wolontariusz - Wiek',
              meta: { step: 2 },
              component: Pelnoletnosc
            },
            {
              path: '3',
              name: 'Wolontariusz - Nocleg',
              meta: { step: 3 },
              component: Nocleg
            },
            {
              path: '4',
              name: 'Wolontariusz - Zakończ akredytację',
              meta: { step: 4 },
              component: Platnosc
            }
          ]
        },
        {
          path: 'gosc',
          name: RouteName.AkredytacjaGosc,
          component: Start,
          meta: { person: 'guest' } as { person: TicketType },
          children: [
            {
              path: '1',
              name: 'Gość - Wyszukaj osobę',
              meta: { step: 1 },
              component: WyszukajOsobe
            },
            {
              path: '2',
              name: 'Gość - Zakończ akredytację',
              meta: { step: 2 },
              component: Platnosc
            }
          ]
        },
        {
          path: 'media',
          name: RouteName.AkredytacjaMedia,
          component: Start,
          meta: { person: 'medium' } as { person: TicketType },
          children: [
            {
              path: '1',
              name: 'Media - Wyszukaj medium',
              meta: { step: 1 },
              component: WyszukajOsobe
            },
            {
              path: '2',
              name: 'Media - Zakończ akredytację',
              meta: { step: 2 },
              component: Platnosc
            }
          ]
        },
        {
          path: 'wystawca',
          name: RouteName.AkredytacjaWystawca,
          component: Start,
          meta: { person: 'vendor' } as { person: TicketType },
          children: [
            {
              path: '1',
              name: 'Wystawca - Nazwa stoiska',
              meta: { step: 1 },
              component: WyszukajOsobe
            },
            {
              path: '2',
              name: 'Wystawca - Nocleg',
              meta: { step: 2 },
              component: Nocleg
            },
            {
              path: '3',
              name: 'Wystawca - Zakończ akredytację',
              meta: { step: 3 },
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
