import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { getTeams } from "~/services";
import { TeamsStore } from ".";

interface TeamListProps {
    parentStore: TeamsStore
}
export const TeamList = component$((props: TeamListProps) => {
    const teamListResource = useResource$(({ track }) => {
        const countryId = track(() => props.parentStore.selectedCountryId);
        return getTeams(countryId)
    });

    return <>
        <Resource
            value={teamListResource}
            onPending={() => <div>Loading...</div>}
            onRejected={() => <div>Error</div>}
            onResolved={(teamsData: any) => {
                const teamsCoreData = teamsData.data;
                const teamsBox = teamsCoreData.map((team: any) => (
                    <div>
                        <img src={team.logo} />
                        <p>{team.name}</p>
                    </div>
                ))

                return <><div class="grid grid-cols-12 gap-4 p-5">{ teamsBox }</div></>
            }}
        />
    </>
})