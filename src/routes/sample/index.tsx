import { component$ } from "@builder.io/qwik";
import { TableApp } from "~/integrations/react/mui";

export default component$(() => {
    return (
        <>
            <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                <div class="px-4 py-6 sm:px-0">
                    <div class="rounded-lg border-4 border-dashed border-gray-200 py-4 flex flex-col">
                        <TableApp />
                    </div>
                </div>
            </div>
        </>
    )
})