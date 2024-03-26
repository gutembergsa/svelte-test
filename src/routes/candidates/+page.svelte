<script lang="ts">
    import { writable } from 'svelte/store';
	  import type { PageData } from '../$types';
	import { candidate, challlengeStarted } from '../store';
    export let data: PageData;
    // $: ({ name, phone, email } = data)
    
    console.log({data});

    const { name, phone, email } = $candidate
  </script>

<nav>
    <a href="/" data-sveltekit-replacestate>Form</a>
</nav>

{#if $challlengeStarted}
  <div>
    <p>Nome: {name}</p>
    <p>Telefone: {phone}</p>
    <p>Email: {email}</p>
  </div>
{/if}


  