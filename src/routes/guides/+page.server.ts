import { error } from '@sveltejs/kit';

export async function load({ fetch }){
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const guides = await res.json();
  console.log('Server side fetch result:', guides.length);

  if (res.ok) {
    return {
      guides
    }
  }

  return {
    status: res.status,
    error: error(500, 'Server Fetch error')
  }
}