import { component$, createContext, useContextProvider, useStore, useStyles$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';
import globalStyles from './global.css?inline';

export interface Player {
  firstname: string;
  lastname: string;
  birthday: string;
  img: string;
  height: number;
  weight: number;
  age: number;
}
export const PlayersContext = createContext<{ lastSearchList: [], selectedPlayer?: Player }>('players-context');

export default component$(() => {
  useStyles$(globalStyles);

  const playerStore = useStore({
    lastSearchList: []
  });
  useContextProvider(PlayersContext, playerStore);

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en" class="h-full">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
