import { createRouter, createWebHistory } from 'vue-router'
import { isUserAuth } from './store'

import Home from './views/Home.vue'
import Start from './views/Start.vue'

import Pelnoletnosc from './views/steps/Pelnoletnosc.vue'
import Nocleg from './views/steps/Nocleg.vue'
import Platnosc from './views/steps/Platnosc.vue'
import WyszukajOsobe from './views/steps/WyszukajOsobe.vue'
import WolontariuszUmowa from '@/views/steps/WolontariuszUmowa.vue'
import LoginView from './views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/start',
      name: 'Start',
      component: Home,
      meta: { step: 0 }
    },
    {
      path: '/uczestnik',
      name: 'Uczestnik',
      component: Start,
      meta: { person: 'Uczestnik' } as { person: TicketType },
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
      path: '/tworca-programu',
      name: 'Twórca programu',
      component: Start,
      meta: { person: 'Twórca Programu' } as { person: TicketType },
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
      path: '/wolontariusz',
      name: 'Wolontariusz',
      component: Start,
      meta: { person: 'Wolontariusz' } as { person: TicketType },
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
          name: 'Wolontariusz - Umowa',
          meta: { step: 3 },
          component: WolontariuszUmowa
        },
        {
          path: '4',
          name: 'Wolontariusz - Nocleg',
          meta: { step: 4 },
          component: Nocleg
        },
        {
          path: '5',
          name: 'Wolontariusz - Zakończ akredytację',
          meta: { step: 5 },
          component: Platnosc
        }
      ]
    },
    {
      path: '/gosc',
      name: 'Gość',
      component: Start,
      meta: { person: 'Gość' } as { person: TicketType },
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
      path: '/media',
      name: 'Media',
      component: Start,
      meta: { person: 'Media' } as { person: TicketType },
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
      path: '/wystawca',
      name: 'Wystawca',
      component: Start,
      meta: { person: 'Wystawca' } as { person: TicketType },
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
})

router.beforeEach((to, _from, next) => {
  if (to.name === 'Login' && isUserAuth.value) {
    next({ name: 'Start' })
  } else if (to.name !== 'Login' && !isUserAuth.value) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
