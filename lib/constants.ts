/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const SITE_URL = 'https://arrastaocultural.com.br';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'vercel';
export const BRAND_NAME = 'Arrastão';
export const SITE_NAME_MULTILINE = ['Arrastão', 'Cultural'];
export const SITE_NAME = 'Arrastão Cultural';
export const META_DESCRIPTION =
  'Isso é só um exemplo do que da pra fazer, o céu é o limite.';
export const SITE_DESCRIPTION =
  'Uma experiência online interativa pela comunidade, gratuita para todos.';
export const DATE = '30 de Junho de 2021';
export const SHORT_DATE = '30 Jun - 21:00h';
export const FULL_DATE = '30 de Junho de 2021 as 21:00h';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const CODE_OF_CONDUCT =
  'https://www.notion.so/vercel/Code-of-Conduct-Example-7ddd8d0e9c354bb597a0faed87310a78';
export const REPO = 'https://github.com/vercel/virtual-event-starter-kit';
export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [
  {
    name: 'Palco A',
    route: '/stage/a'
  },
  {
    name: 'Palco B',
    route: '/stage/c'
  },
  {
    name: 'Palco C',
    route: '/stage/c'
  },
  {
    name: 'Palco D',
    route: '/stage/d'
  },
  {
    name: 'Agenda',
    route: '/schedule'
  },
  {
    name: 'Participações',
    route: '/speakers'
  }
];

export type TicketGenerationState = 'default' | 'loading';
