<script lang="ts">
	import {
		timeLeft,
		modalMessage,
		showTimer,
		candidate,
		challlengeStarted,
		intervalId,
		decrementCounter,
		formFeedback,
		helperToClearInterval
	} from './store';
	import { onMount } from 'svelte';
	import Modal from '$lib/Modal.svelte';
	import type { Data } from '$lib/types';
	import Input from '$lib/Input.svelte';

	let modalTrigger: HTMLDialogElement;
	let [name, phone, email] = '';

	async function handleSubmit(event: Event) {
		const formEl = event.target as HTMLFormElement;
		const formData = new FormData(formEl);

		const [name, phone, email] = [
			String(formData.get('name')),
			String(formData.get('phone')),
			String(formData.get('email'))
		];

		const data: Data = {
			success: false,
			errors: {}
		};

		if (!name || !phone || !email) {
			data.errors.fields = 'Prencha os campos obrigatórios';
			return formFeedback.set(data);
		}

		modalTrigger.showModal();
		helperToClearInterval(false);
		modalMessage.set('Desafio finalizado com sucesso!');

		data.success = true;

		candidate.set({ name, phone, email });
		formFeedback.set(data);
	}

	function handleChallengeStart() {
		helperToClearInterval(true);
		interval();
	}

	function interval() {
		const id = setInterval(() => {
			if ($timeLeft > 0) {
				decrementCounter();
			} else {
				helperToClearInterval(false);
				modalTrigger.showModal();
				modalMessage.set('Desafio finalizado com falha!');

				const data: Data = {
					success: false,
					errors: {
						form: 'Tempo excedido'
					}
				};
				formFeedback.set(data);
			}
		}, 1000);

		intervalId.set(id);
	}

	onMount(() => {
		if ($intervalId && $timeLeft > 0) {
			clearInterval($intervalId);
			interval();
		}
	});

	export const prerender = true;
	export const ssr = false;
</script>

<nav class="container mx-auto flex justify-end">
	<a class="btn" data-sveltekit-replacestate href="/candidates" data-testid="nav-to-candidates"
		>Candidate</a
	>
</nav>
<main class="container mx-auto">
	<form
		on:submit|preventDefault={handleSubmit}
		data-testid="form"
		autocomplete="off"
		class="container mx-auto flex flex-col gap-3"
	>
		<Input bind:value={name} label="Nome" type="text" name="name" disabled={!$challlengeStarted} />
		<Input
			bind:value={phone}
			label="Telefone"
			type="tel"
			name="phone"
			disabled={!$challlengeStarted}
		/>
		<Input
			bind:value={email}
			type="email"
			label="Email"
			name="email"
			disabled={!$challlengeStarted}
		/>
		<div class="container mx-auto flex flex-col py-4 gap-4">
			<button
				class="btn"
				on:click={handleChallengeStart}
				type="button"
				data-testid="challenge-button">Iniciar Desafio</button
			>
			<button class="btn" type="submit" data-testid="send-button">Enviar</button>
		</div>
	</form>

	{#if $showTimer == true}
		<p data-testid="timer">Tempo restante: {$timeLeft}</p>
	{/if}

	<Modal on:modalTrigger={({ detail }) => (modalTrigger = detail)} />
</main>
