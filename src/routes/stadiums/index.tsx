import { component$, Resource, useStylesScoped$ } from '@builder.io/qwik';
import { RequestHandler, useEndpoint } from '@builder.io/qwik-city';
import { getStadiums } from "../../services";

interface StadiumResponse {
  query: {}
  data: {
    venue_id: number,
    name: string,
    capacity: number,
    city: string,
    country_id: number
  }[]
}

export const onGet: RequestHandler<StadiumResponse> = async ({ params }) => {
  return getStadiums(120);
};

export default component$(() => {
  useStylesScoped$(`
        table {
            width: 100%;
            margin-top: 24px;
        }
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
        }
        th, td {
            padding: 0 8px;
        }
        th {
            font-weight: bold;
        }
  `)
  const stadiumResource = useEndpoint<StadiumResponse>();

  return (
    <>
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
          <div class="rounded-lg border-4 border-dashed border-gray-200 py-4 flex flex-col">
            <h2 class="font-bold text-2xl text-center">TURKİYEDEKİ STADYUMLAR</h2>
            <h3 class="font-bold text-xl text-center text-red-600">Bu sayfanın api requesti SSR'a daha iyi bir örnek olması açısından server side üzerinde atılmıştır!!!</h3>
            <Resource
              value={stadiumResource}
              onPending={() => <div>Loading...</div>}
              onRejected={() => <div>Error</div>}
              onResolved={(stadiumData) => (
                <>
                  <table>
                    <thead>
                      <th>Stadyum Adı</th>
                      <th>Kapasite</th>
                      <th>Şehir</th>
                    </thead>
                    <tbody>
                      {
                        stadiumData?.data && stadiumData?.data.map((stadium) => {
                          return <tr>
                            <td>{stadium.name}</td>
                            <td>{stadium.capacity}</td>
                            <td>{stadium.city}</td>
                          </tr>
                        })
                      }
                    </tbody>
                  </table>
                </>
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
});



