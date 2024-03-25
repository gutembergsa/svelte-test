<script lang="ts">
  export let data
  $: ({ guides } = data)

  export const ssr = false

  async function clientSideFetch(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const guides = await res.json();

    console.log('Client side fetch result:', guides.length, { guides });

    if (res.ok) {
      return guides
    }

    return {
      status: res.status,
      error: error(500, 'Client Fetch error')
    }
  }
</script>

<div class="guides">
  <ul>
    ///Server side list
    {#if guides.length > 0}
      {#each guides as { title, id }}
        <li>
          <a sveltekit:prefetch href={`/guides/${id}`}>{title}</a>
        </li>
      {/each}
    {/if}
    ///Client side list
    {#await clientSideFetch()}
      loading clientSideFetch
    {:then guides}
      {#each guides as { name, id }}
        <li>
          <a sveltekit:prefetch href={`/guides/${id}`}>{name}</a>
        </li>
      {/each}
    {/await}
  </ul>
</div>

<style>
  .guides {
    margin-top: 20px;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  a {
    display: inline-block;
    margin-top: 10px;
    padding: 10px;
    border: 1px dotted rgba(255,255,255,0.2);
  }
</style>