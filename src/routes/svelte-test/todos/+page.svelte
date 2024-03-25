<script lang="ts">
    import type { PageData } from './$types';
    import type { Data } from './+server';
    import { invalidateAll } from '$app/navigation'

    export let data: PageData;
    let form: Data

    async function removeTodo(event: Event) {
        console.log({ event });
        
        const formEl = event.target as HTMLFormElement

        console.log({ formEl });

        const data = new FormData(formEl)
        console.log({ data: data.get("id") });

        const response  = await fetch(formEl.action, {
            method: "DELETE",
            body: data
        })
        
        await invalidateAll()
    }

    async function addTodo(event: Event) {
        const formEl = event.target as HTMLFormElement
        const data = new FormData(formEl)

        console.log({ formEl });
        
        const response  = await fetch(formEl.action, {
            method: "POST",
            body: data
        })
        const responseData = await response.json()
        
        form = responseData

        formEl.reset()
        
        await invalidateAll()
    }
</script>


<ul>
    {#each data.todos as todo}
        <li>
            <span>{todo.text}</span>
            <form on:submit|preventDefault={removeTodo} method="POST">
                <input type="hidden" name="id" value={todo.id} />
                <button type="submit" value={todo.id} >remove</button>
            </form>
        </li>
    {/each}
</ul>

<form on:submit|preventDefault={addTodo} method="POST">
    <input type="text" name="todo" />
    <input type="submit" value="add todo" />
</form>
