<script lang="ts">
  import { base } from '$app/paths';
  import { candidate, challlengeStarted } from '../store';
  const { name, phone, email } = $candidate
</script>

<nav>
    <a href="{base}/" data-sveltekit-replacestate>Form</a>
</nav>

{#if $challlengeStarted}
  <div>
    <p>Nome: {name}</p>
    <p>Telefone: {phone}</p>
    <p>Email: {email}</p>
  </div>
{/if}


  