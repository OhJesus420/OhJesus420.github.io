<script>
    /** @type {import('./$types').PageData} */
    export let data;
    console.log(data.posts)
  </script>
  
  <h1>Blog</h1>
  
  <ul>
    {#each data.posts as post}
      <li>
        <h2>
          <a href={"/blog/"+post.path}>
            {post.meta.title}
          </a>
        </h2>
        Published {post.meta.date}
      </li>
    {/each}
  </ul>