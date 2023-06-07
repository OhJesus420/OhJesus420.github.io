
  <h1>One-Card Poker</h1>


<script>
  let playerCard = null;
  let computerCard = null;
  let winner = null;
  let playerBet = 0;
  let playerMoney = 100;

  const cards = [
    { name: 'Ace', value: 14 },
    { name: 'King', value: 13 },
    { name: 'Queen', value: 12 },
    { name: 'Jack', value: 11 },
    { name: 'Ten', value: 10 },
    { name: 'Nine', value: 9 },
    { name: 'Eight', value: 8 },
    { name: 'Seven', value: 7 },
    { name: 'Six', value: 6 },
    { name: 'Five', value: 5 },
    { name: 'Four', value: 4 },
    { name: 'Three', value: 3 },
    { name: 'Two', value: 2 },
  ];

  function dealCards() {
    if (playerBet > playerMoney) {
      alert("You don't have enough money for that bet!");
      return;
    }

    playerCard = getRandomCard();
    computerCard = getRandomCard();
    determineWinner();
  }

  function getRandomCard() {
    const randomIndex = Math.floor(Math.random() * cards.length);
    return cards[randomIndex];
  }

  function determineWinner() {
    if (playerCard.value > computerCard.value) {
      winner = 'Player wins!';
      playerMoney += playerBet;
    } else if (playerCard.value < computerCard.value) {
      winner = 'Computer wins!';
      playerMoney -= playerBet;
    } else {
      winner = 'It\'s a tie!';
    }
  }
</script>


<main>
  
  <p style="color: #3e8e41;">Player's Money: ${playerMoney}</p>

  {#if playerCard && computerCard}
    <p style="color: #3e8e41;">Player's Card: {playerCard.name}</p>
    <p style="color: #3e8e41;">Computer's Card: {computerCard.name}</p>
    <p style="color: #3e8e41;">Winner: {winner}</p>
  {:else}
    <p style="color: #3e8e41;">Click the button to deal the cards!</p>
  {/if}

  <label>
    Place a Bet:
    <input style="color: #3e8e41;" type="number" bind:value={playerBet} min="0" max={playerMoney} step="1" />
  </label>

  <button style="background-color: #3e8e41; color: darkslategrey;" on:click={dealCards}>Deal Cards</button>
</main>
<h2>
  Good luck!
</h2>

<style>



  h1 {
    text-align: center;
    font-size: 2.5rem;
    padding: 1rem;
    margin-bottom: 0.00000001rem;
    background-color: #3e8e41;
  }
  

  main {
    text-align: center;
    padding: 1rem;
    background-color: darkslategrey;
    color: #3e8e41;
  }

  
  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    margin-top: 1.5rem;
    background-color: #3e8e41;
    color: darkslategrey;
  }

  h2{
    background-color: #3e8e41;
    text-align: center;
    padding: 3rem;
  }
</style>
