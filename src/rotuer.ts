import { createRouter, createWebHistory } from 'vue-router'
import { isUserAuth } from './store'

import Akredytacja from './views/Akredytacja.vue'
import Start from './views/Start.vue'

import Nocleg from './views/steps/Nocleg.vue'
import Pelnoletnosc from './views/steps/Pelnoletnosc.vue'
import Platnosc from './views/steps/Platnosc.vue'

import type { TicketType } from './types'
import LesniczowkaVue from './views/Lesniczowka.vue'
import ListaVue from './views/Lista.vue'
import LoginVue from './views/Login.vue'
import StatystykiVue from './views/Statystyki.vue'
import SearchGuestsVue from './views/steps/SearchGuests.vue'
import SearchMediaVue from './views/steps/SearchMedia.vue'
import SearchProgramVue from './views/steps/SearchProgram.vue'
import SearchVendorsVue from './views/steps/SearchVendors.vue'
import SearchVolunteersVue from './views/steps/SearchVolunteers.vue'

export enum RouteName {
  Login = 'login',
  Lesniczowka = 'lesniczowka',
  Lista = 'lista',
  Statystyki = 'statystyki',
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
              name: 'Twórca programu - Wyszukaj osobę',
              meta: { step: 1 },
              component: SearchProgramVue
            },
            {
              path: '2',
              name: 'Twórca programu - Wiek',
              meta: { step: 2 },
              component: Pelnoletnosc
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
              component: SearchVolunteersVue
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
              component: SearchGuestsVue
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
              component: SearchMediaVue
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
              component: SearchVendorsVue
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
