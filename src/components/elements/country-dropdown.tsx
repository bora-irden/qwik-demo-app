import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { TeamsStore } from "~/routes/teams";
import { getCountries } from "~/services";

interface CountryDropdownProps {
    parentStore: TeamsStore
}
export const CountryDropdown = component$((props: CountryDropdownProps) => {
    const countryListResource = useResource$(({ track }) => {
        const continentData = track(() => props.parentStore.selectedContinent);
        return getCountries(continentData)
    });

    return <>
        <select class="w-full mt-5" onInput$={(ev: any) => (props.parentStore.selectedCountryId = ev.target.value)}>
            <option value="" disabled selected>Lütfen ülke seçiniz</option>
            <Resource
                value={countryListResource}
                onPending={() => <div>Loading...</div>}
                onRejected={() => <div>Error</div>}
                onResolved={(countryData: any) => {
                    const countryObjData = countryData?.data;
                    const countryCoreData = Object.keys(countryObjData).map((key) => countryObjData[key]);
                    const countryOptions = countryCoreData.map((country) => <option value={country.country_id}>{country.name}</option>)
                    return <>{countryOptions}</>
                }}
            />
        </select>
    </>
})