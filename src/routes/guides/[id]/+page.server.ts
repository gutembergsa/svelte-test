import { redirect } from '@sveltejs/kit';

export async function load({ fetch,  params: { id } }){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const guide = await res.json();

    if (res.ok) {
      return {
        guide
      }
    }

    return redirect(301, '/guides')
}