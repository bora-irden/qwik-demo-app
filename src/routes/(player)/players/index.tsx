import { component$, useStore } from '@builder.io/qwik';
import { ContinentDropdown } from '~/components/elements/continent-dropdown';
import { CountryDropdown } from '~/components/elements/country-dropdown';
import { CONTINENTS } from '../../../services';
import { PlayerList } from './player-list';

export interface PlayersStore {
  selectedContinent: CONTINENTS | undefined;
  selectedCountryId: string | number | undefined;
}

export default component$(() => {
  const playersStore = useStore<PlayersStore>({
    selectedContinent: undefined,
    selectedCountryId: undefined
  });

  return (
    <>
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
          <div class="rounded-lg border-4 border-dashed border-gray-200 py-4 flex flex-col">
            <div class="w-4/12 mx-auto">
              <ContinentDropdown parentStore={playersStore} />
              {
                playersStore.selectedContinent && <CountryDropdown parentStore={playersStore} />
              }
            </div>
            {
              playersStore.selectedCountryId && <div class="w-full"><PlayerList parentStore={playersStore} /></div>
            }
          </div>
        </div>
      </div>
    </>
  );
});



