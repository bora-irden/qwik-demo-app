import { component$, useClientEffect$, useContext } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { PlayersContext } from '~/root';

export default component$(() => {
  const location = useLocation();
  const playersContext = useContext(PlayersContext);
  // NOT => Id ile oyuncu arama servisi çalışmadığı context üzerinden gösterim yapılmıştır. Doğrudan sayfa linki ile erişim mümkün değildir. Context kullanımını gösterim amaçlı yapılmıştır...
  useClientEffect$(() => {
    playersContext.selectedPlayer = playersContext.lastSearchList.find((item: any) => String(item.player_id) === location.params.playerId) ?? undefined;
  });

  return (
    <>
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
          <div class="rounded-lg border-4 border-dashed border-gray-200 py-4 flex flex-col">
            {
              playersContext.selectedPlayer ? <div class="w-6/12 mx-auto border border-solid p-4">
                <div class="grid grid-cols-3 gap-4">
                  <div class="col-span-3 flex justify-center"><img class="rounded-full" src={playersContext.selectedPlayer?.img ? playersContext.selectedPlayer.img : "/images/profile_dummy.jpg"} /></div>

                  <div class="col-span-1"><strong>İsim Soyisim:</strong></div>
                  <div class="col-span-2">{`${playersContext.selectedPlayer?.firstname} ${playersContext.selectedPlayer?.lastname}`}</div>

                  <div class="col-span-1"><strong>Doğum Tarihi (Yaş):</strong></div>
                  <div class="col-span-2">{`${playersContext.selectedPlayer?.birthday} (${playersContext.selectedPlayer?.age})`}</div>

                  <div class="col-span-1"><strong>Boy:</strong></div>
                  <div class="col-span-2">{playersContext.selectedPlayer?.height}</div>

                  <div class="col-span-1"><strong>Kilo:</strong></div>
                  <div class="col-span-2">{playersContext.selectedPlayer?.weight}</div>
                </div>
              </div> : <p class="text-center">Böyle bakamazsın :) Futbolcular menüsünden arama sonucunda çıkan futbolcuların isimlerine tıklayarak gel sen canım...</p>
            }
          </div>
        </div>
      </div>
    </>
  );
});



