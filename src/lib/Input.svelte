<script lang="ts">
	export let label = '';
	export let value = '';
	export let placeholder = '';
	export let type = 'text';
	export let disabled = false;
	export let name = '';

	function typeAction(node: HTMLInputElement) {
		node.type = type;
	}
</script>

<label class="flex flex-col">
	{label}:
	<input
		class="border-2 border-black-600"
		use:typeAction
		bind:value
		{name}
		{placeholder}
		{disabled}
	/>
</label>
