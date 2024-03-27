<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { modalMessage } from '../routes/store';

	const dispatch = createEventDispatcher();

	let modalTrigger: HTMLDialogElement;

	onMount(() => {
		dispatch('modalTrigger', modalTrigger);
	});
</script>

<dialog id="my_modal_3" class="modal" bind:this={modalTrigger}>
	<div class="modal-box">
		<form method="dialog">
			<button
				class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
				data-testid="modal-close-button">✕</button
			>
		</form>
		<p data-testid="modal-message">{$modalMessage}</p>
	</div>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>
