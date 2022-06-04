import { writable } from "svelte/store";

export const isLoginOpen = writable(false);
export const isLoggedIn = writable(false);