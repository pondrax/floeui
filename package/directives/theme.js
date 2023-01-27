import { browser } from '../utils';
import { writable } from 'svelte/store';
let localTheme = 'cupcake';
if (browser && localStorage.theme) {
    localTheme = localStorage.theme;
}
export const theme = writable(localTheme);
theme.subscribe((name) => {
    // console.log(name)
    if (browser && localStorage) {
        localStorage.theme = name;
        document.documentElement.setAttribute('data-theme', name);
    }
});
