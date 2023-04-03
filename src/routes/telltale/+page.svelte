<script>
  import { story_id_store } from "$lib/stores";
  import { stories } from "$lib/stories";

  
  import { fly } from "svelte/transition";


  $: game_id = $story_id_store;
  $: game = stories.find((game) => game.id == game_id);


</script>




<main>
  <div class="grid">
   
    {#key game_id}
     
      <div
        class="container"
        in:fly|local={{ x: 800, duration: 750 }}
        out:fly|local={{ x: -800, duration: 750 }}
      >
     
        {#if game}

          {#if game.html}
            {@html game.html}
          {/if}
          <p>{game.message}</p>
          <div class="row">
       
            {#each game.choices as choice}
              <button
                on:click={() => {
                  $story_id_store = choice.id;
                }}>{choice.text}</button
              >
            {/each}
          </div>
     
        {:else}
          <p>STORY FOR ID {game_id} MISSING</p>
        {/if}
      </div>
    {/key}
  </div>
</main>

<style>
  .grid {
    margin: 10%;
    display: grid;
    align-items: center;
    place-items: center;
    justify-content: center;
  }

  .container {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    height: 400px;
    width: 500px;
  }

  .row {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  img {
    width: 400px;
    height: 300px;
    object-fit: cover;
  }

  main {
    max-width: 100%;
    overflow-x: hidden;
  }



</style>
