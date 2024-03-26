<script lang="ts">
    import { timeLeft, showModal, modalMessage, showTimer, candidate, challlengeStarted, resetTimer } from './store';
	import { json } from '@sveltejs/kit';
    export const prerender = true;
    import { base } from '$app/paths';


    type Data = {
        success: boolean,
        errors: Record<string, string>
    }


    let name = '';
    let phone = '';
    let email = '';
    let intervalId: number;
    let form: Data

    // let countdown: number;
    // timeLeft.subscribe(value => {
    //     countdown = value;
    // });

    // let timerShouldApper: boolean;
    // showTimer.subscribe(value => {
    //     timerShouldApper = value;
    // });

    // onDestroy(() => {
    //   clearInterval(intervalId);
    // });
  
    async function handleSubmit(event: Event) {
        showModal.set(true);

        const formEl = event.target as HTMLFormElement
        const formData = new FormData(formEl)

        const [name, phone, email] = [
            String(formData.get("name")), 
            String(formData.get("phone")), 
            String(formData.get("email"))
        ]
        
        const data: Data = {
            success: false,
            errors: {}
        }


        if (!name || !phone || !email) {
            data.errors.fields = 'required field is missing'
            return json(data, { status: 400 })
        }

        modalMessage.set('Desafio finalizado com sucesso!');
        clearInterval(intervalId);

        data.success = true

        candidate.set({name, phone, email})

        return json(data, { status: 200 })
    }

    function handleChallengeStart() {
        console.log('handleChallengeStart');
        timeLeft.set(15);
        showModal.set(false);
        showTimer.set(true)
        challlengeStarted.set(true)
        clearInterval(intervalId);

        intervalId = setInterval(() => {
            if ($timeLeft > 0) {
            timeLeft.update(n => n > 0 ? n - 1 : 0);
            } else {
                clearInterval(intervalId);
                console.log('clearInterval');

                showTimer.set(false)
                showModal.set(true);
                challlengeStarted.set(false)
                modalMessage.set('Desafio finalizado com falha!');
            }
        }, 1000);
    }
  
    function handleModalClose() {
        resetTimer()
        clearInterval(intervalId);
        console.log('clearInterval');   
    }
    </script>
  
  <!-- rest of the code -->
  

<nav>
    <a data-sveltekit-replacestate href="{ base }/candidates">Candidate</a>
</nav>

<form on:submit|preventDefault={handleSubmit}>
    <label>
    Nome:
    <input type="text" bind:value={name} name="name"/>
    </label>
    <label>
    Telefone:
    <input type="tel" bind:value={phone} name="phone"/>
    </label>
    <label>
    Email:
    <input type="email" bind:value={email} name="email"/>
    </label>
    <button on:click={handleChallengeStart} type="button" data-testid="challenge-button">Iniciar Desafio</button>
    <button type="submit">Enviar</button>
</form>

{#if $showTimer == true}
    <p data-testid="timer">Tempo restante: {$timeLeft}</p>
{/if}

{#if $showModal}
    <div class="modal">
    <button on:click={handleModalClose}>X</button>
    <p data-testid="modal-message">{$modalMessage}</p>
    </div>
{/if}
  