import { writable } from "svelte/store";

export const isAddDiagnosisOpen = writable(false);
export const diagnosisLength = writable(0);