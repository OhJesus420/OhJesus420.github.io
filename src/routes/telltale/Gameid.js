import { writable } from "svelte/store";

const game_id =  window.localStorage.getItem('game_id') ?? "1"

export const story_id_store=writable(game_id)


story_id_store.subscribe((value) => {
       
        window.localStorage.setItem('game_id', value);
        console.log(value)
})

