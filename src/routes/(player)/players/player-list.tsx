import { component$, Resource, useContext, useResource$, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { PlayersContext } from "~/root";
import { getPlayers } from "~/services";
import { PlayersStore } from ".";

interface TeamListProps {
    parentStore: PlayersStore
}
export const PlayerList = component$((props: TeamListProps) => {
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
        td > :global(a) {
            color: blue;
            text-decoration: underline;
        }
    `)
    
    const teamListResource = useResource$(({ track }) => {
        const countryId = track(() => props.parentStore.selectedCountryId);
        return getPlayers(countryId)
    });

    const playersContext = useContext(PlayersContext);

    return <>
        <Resource
            value={teamListResource}
            onPending={() => <div>Loading...</div>}
            onRejected={() => <div>Error</div>}
            onResolved={(playersData: any) => {
                const playersCoreData = playersData.data;
                const playerRows = playersCoreData.map((player: any) => (
                    <tr>
                        <td><Link href={`/player-detail/${player.player_id}`}>{ `${player.firstname} ${player.lastname}` }</Link></td>
                        <td>{ player.birthday } ({ player.age })</td>
                        <td>{ player.height }</td>
                        <td>{ player.weight }</td>
                    </tr>
                ))

                playersContext.lastSearchList = playersCoreData;

                return <>
                    <table>
                        <thead>
                            <tr>
                                <th>İsim Soyisim</th>
                                <th>Doğum Tarihi (Yaş)</th>
                                <th>Boy</th>
                                <th>Kilo</th>
                            </tr>
                        </thead>
                        <tbody>
                            { playerRows }
                        </tbody>    
                    </table>
                </>
            }}
        />
    </>
})