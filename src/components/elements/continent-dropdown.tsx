import { component$, useStore } from "@builder.io/qwik";
import { ContinentStore } from "~/models/continent";
import { TeamsStore } from "~/routes/teams";
import { getContinents } from "~/services";

interface ContinentDropdownProps {
    parentStore: TeamsStore
}
export const ContinentDropdown = component$((props: ContinentDropdownProps) => {
    const continentStore = useStore<ContinentStore>({
        continentList: getContinents()
    })

    return <>
        <select class="w-full" onInput$={(ev: any) => (props.parentStore.selectedContinent = ev.target.value)}>
            <option value="" disabled selected>Lütfen kıta seçiniz</option>
            {
                continentStore.continentList.map((continent) => {
                    return (
                        <option value={continent}>{continent}</option>
                    )
                })
            }
        </select>
    </>
})