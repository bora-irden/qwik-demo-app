import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
          <div class="rounded-lg border-4 border-dashed border-gray-200 py-4 flex flex-col">
              <div class="flex justify-center mb-3"><img src='/images/football_istatistik.jpg' /></div>
              <p class="flex justify-center">Bu demo uygulama ile bazı futbol istatistiklerine erişim sağlayabilirsiniz.</p>
              <p class="flex justify-center">Lütfen aramak istediğiniz konu için üst menüden seçim yapınız.</p>
          </div>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Demo App - Anasayfa',
  meta: [
    {
      name: 'Football Statistics Demo Application',
      content: 'OKR kapsamında Qwik teknolojisi ile yapılan demo uygulaması',
    },
  ],
};
