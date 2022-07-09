import { createRouter, createWebHistory } from 'vue-router'
import type { Person } from './store'

import Home from './views/Home.vue'
import Start from './views/Start.vue'

import Pelnoletnosc from './views/steps/Pelnoletnosc.vue'
import Nocleg from './views/steps/Nocleg.vue'
import Platnosc from './views/steps/Platnosc.vue'
import Zakoncz from './views/steps/Zakoncz.vue'
import WyszukajOsobe from './views/steps/WyszukajOsobe.vue'
import WolontariuszUmowa from '@/views/steps/WolontariuszUmowa.vue'
import WyszukajMedia from './views/steps/WyszukajMedia.vue'
import WyszukajStoisko from './views/steps/WyszukajStoisko.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Home
    },
    {
      path: '/uczestnik',
      name: 'Uczestnik',
      component: Start,
      meta: { person: 'Uczestnik' } as { person: Person },
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
        },
        {
          path: '4',
          name: 'Uczestnik - Zakończ akredytację',
          meta: { step: 4 },
          component: Zakoncz
        }
      ]
    },
    {
      path: '/tworca-programu',
      name: 'Twórca programu',
      component: Start,
      meta: { person: 'Twórca Programu' } as { person: Person },
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
          component: Zakoncz
        }
      ]
    },
    {
      path: '/wolontariusz',
      name: 'Wolontariusz',
      component: Start,
      meta: { person: 'Wolontariusz' } as { person: Person },
      children: [
        {
          path: '1',
          name: 'Wolontariusz - Wiek',
          meta: { step: 1 },
          component: Pelnoletnosc
        },
        {
          path: '2',
          name: 'Wolontariusz - Wyszukaj osobę',
          meta: { step: 2 },
          component: WyszukajOsobe
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
          component: Zakoncz
        }
      ]
    },
    {
      path: '/gosc',
      name: 'Gość',
      component: Start,
      meta: { person: 'Gość' } as { person: Person },
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
          component: Zakoncz
        }
      ]
    },
    {
      path: '/media',
      name: 'Media',
      component: Start,
      meta: { person: 'Media' } as { person: Person },
      children: [
        {
          path: '1',
          name: 'Media - Wyszukaj osobę',
          meta: { step: 1 },
          component: WyszukajMedia
        },
        {
          path: '2',
          name: 'Media - Zakończ akredytację',
          meta: { step: 2 },
          component: Zakoncz
        }
      ]
    },
    {
      path: '/wystawca',
      name: 'Wystawca',
      component: Start,
      meta: { person: 'Wystawca' } as { person: Person },
      children: [
        {
          path: '1',
          name: 'Wystawca - Nazwa stoiska',
          meta: { step: 1 },
          component: WyszukajStoisko
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
          component: Zakoncz
        }
      ]
    }
  ]
})

export default router
