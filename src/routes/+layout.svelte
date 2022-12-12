<nav>
  <a href="/">Hem</a>
  <a href="/clicker">Cocaine Clicker</a>

  <a
    target="_blank"
    href="https://github.com/williamviktorsson/williamviktorsson.github.io"
    >GitHub</a
  >
</nav>


<slot />

<style>

nav {
    border-bottom: 2px solid rgb(6, 5, 5); /* This is the line replacing the hr*/
    margin-bottom: 0px; /* This is the space below the line */
    padding-bottom: 15px; /* This is the space between the heading text and the line */
}

  :global(body){
    margin: 0;
    padding: 0;
    min-height: 100vh;
    overflow: hidden;
  }


</style>