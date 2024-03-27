<script lang="ts">
	import { candidate, challlengeStarted, formFeedback } from '../store';
	const { name, phone, email } = $candidate;
</script>

<nav class="container mx-auto flex justify-end">
	<a class="btn" data-sveltekit-replacestate href="/" data-testid="nav-to-form">Form</a>
</nav>

{#if $challlengeStarted || $formFeedback.success}
	<div class="container mx-auto flex flex-col gap-3" data-testid="candidate-board">
		<p>Nome: {name}</p>
		<p>Telefone: {phone}</p>
		<p>Email: {email}</p>
	</div>
{/if}
