import {writable} from "svelte/store";

export const unsubmittedRowsData = writable([]);
export const isDetailPanelOpen = writable(false);

const fetchUnsubmittedRows = async() =>{
    const url = `http://localhost:3000/unsubmittedRows`;
    const res = await fetch(url);
    const data = await res.json();
    unsubmittedRowsData.set(data)
}
fetchUnsubmittedRows();
