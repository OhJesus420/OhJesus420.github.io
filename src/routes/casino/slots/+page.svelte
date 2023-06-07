

<script>
    let spinning = false;
    let result1 = "";
    let result2 = "";
    let result3 = "";
    let result4 = "";
    let result5 = "";
    let result6 = "";
    let currency = 30;
  let costPerSpin = 1;

    function spin() {
      if (!spinning && currency >= costPerSpin) {
        spinning = true;
        currency -= costPerSpin;
        let i = 0;
        let j = 0;
        let k = 0;
        let p = 0;
        let a = 0;
        let h = 0;
  
        let interval1 = setInterval(() => {
          result1 = getRandomValue();
          i++;
        }, 100);
        let interval2 = setInterval(() => {
          result2 = getRandomValue();
          j++;
        }, 110);
        let interval3 = setInterval(() => {
          result3 = getRandomValue();
          k++;
        }, 120);
        let interval4 = setInterval(() => {
          result4 = getRandomValue();
          p++;
        }, 130);
        let interval5 = setInterval(() => {
          result5 = getRandomValue();
          a++;
        }, 140);
        let interval6 = setInterval(() => {
          result6 = getRandomValue();
          h++;
        }, 150);
  
        setTimeout(() => {
          clearInterval(interval1);
          clearInterval(interval2);
          clearInterval(interval3);
          clearInterval(interval4);
          clearInterval(interval5);
          clearInterval(interval6);
          spinning = false;
          if (result1 === result2 && result1 === result3 && result1 == result4 && result1 == result5 && result1 == result6) {
            currency += 1000;
            alert("You got six+ Aaq                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     122222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222in a row, congrats for winning 1000 coins!");
          }
          if (result1 === result2 && result1 == result3) {
            currency += 10;
            alert("You got three in a row, congrats for winning 10 coins!");
          }
          if (result2 === result3 && result2 == result4) {
            currency += 10;
            alert("You got three in a row, congrats for winning 10 coins!");
          }
          if (result3 === result4 && result3 == result5) {
            currency += 10;
            alert("You got three in a row, congrats for winning 10 coins!");
          }
          if (result4 === result5 && result4 == result6) {
            currency += 10;
            alert("You got three in a row, congrats for winning 10 coins!");
          }
         
         
        }, 2000);
      }
    }
  
    function getRandomValue() {
      let slotValues = ["🍇", "🍊", "🍋", "🍉", "🍓", "🍒"];
      let index = Math.floor(Math.random() * slotValues.length);
      return slotValues[index];
    }
  </script>
  
  <main>
   
    <h1>Fruit Rolls</h1>
  <div class="slot-machine">
   
    <div class="slots">
      <div class="slot">{result1}</div>
      <div class="slot">{result2}</div>
      <div class="slot">{result3}</div>
      <div class="slot">{result4}</div>
      <div class="slot">{result5}</div>
      <div class="slot">{result6}</div>
    </div>
    <coins>
    <div class="currency">{currency} coins</div>
    </coins>
    <button on:click={spin} disabled={currency < costPerSpin}>Spin ({costPerSpin} coins)</button>
  </div>
</main>
  <style>
    .slot-machine {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 4rem;
      font-weight: bold;
      text-align: center;
      margin-top: 2rem;
      background-size: cover;
      background-color: darkslategrey;
      
    }
  
    .slot-machine button {
      font-size: 2rem;
      padding: 1rem;
      margin-top: 2rem;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  
    .slot-machine button:hover {
      background-color: #3e8e41;
    }
  
    .slot-machine .slot {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 6rem;
      width: 6rem;
      background-color: white;
      border: 1px solid black;
      border-radius: 5px;
      margin: 0.5rem;
      margin-top: 6rem;;
    }

    .slots{
      display: flex;
      flex-direction: row;
      align-content: center;
      justify-content: center;
    }

    main{
      background-color: #4CAF50;
    }
    coins{
      color: #4CAF50;
    }

    h1{
      text-align: center;
    }

   
  </style>
  
