import { component$, useContext } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';
import { PlayersContext } from '~/root';
import { navigation } from '../../routes/navigation';
import { isCurrentPath, getCurrentNavData } from '../../utils/helper';

export default component$(() => {
  const location = useLocation();
  const playersContext = useContext(PlayersContext);
  const navLinkClassCurrent = "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium";
  const navLinkClass = "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium";

  return (
    <>
      <nav class="bg-gray-800">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 items-center justify-between">
            <div class="flex items-center">
              <div class="flex-shrink-0 bg-white">
                <img class="h-8 w-8" src="https://www.svgrepo.com/show/71104/football-game.svg?color=white&shade=500" alt="Your Company" />
              </div>
              <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                  { 
                    navigation.map((nav) => (
                      <Link key={nav.href} href={nav.href} class={isCurrentPath(nav.href, location.pathname) ? navLinkClassCurrent : navLinkClass}>{nav.name}</Link>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <header class="bg-white shadow">
        <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900">
            {
              location.pathname.includes('/player-detail/')
              ? `${playersContext.selectedPlayer?.firstname ?? ''} ${playersContext.selectedPlayer?.lastname ?? ''}` 
              : getCurrentNavData(location.pathname).name }</h1>
        </div>
      </header>
    </>

  );
});
