<script>
  var money = 0;

  function add() {
    money += 1;
  }
</script>

<main>
  <center>
    <div class="money">${money}</div>
  </center>
  <center>
    <button id="buttid" on:click={() => add()} />
  </center>

  <div class="gallery">
    <img
      src="https://houseinspectionhelp.com/3/images/small-old-house.jpg"
      alt="Small house"
    />
  </div>
</main>

<style>
  main {
    background-color: #888888;
    height: 100vh;
  }

  .money {
    color: white;
    background-color: green;
    background-position: center;
    border-radius: 5px;
    padding: 20px;
    margin: auto;
    size: 10;
    font-size: xx-large;
    width: 200px;
  }

  #buttid {
    margin-top: 30px;
    display: flex;
    place-content: center;
    place-items: center;
    padding: 0px;
    border-radius: 100%;
    overflow: hidden;
    background-image: url("https://www.colorado.edu/asmagazine-archive/sites/default/files/wordpress_import/images/news.cocaine.530.jpg");
    background-size: cover;
    height: 200px;
    width: 200px;
  }
  #buttid:hover {
    -o-transition: 0.5s;
    -ms-transition: 0.5s;
    -moz-transition: 0.5s;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    box-shadow: 10px 10px 5px #888888;
  }

  #buttid:active {
    transform: scale(1.02);
    transition: all 0.25s;
  }

  img {
    height: 200px;
    width: 200px;
    background-position: center;
  }
</style>
