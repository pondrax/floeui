import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch, params }) => {
  const post = await fetch('/api/coba');
  // const todos = await fetch('https://jsonplaceholder.typicode.com/todos/');
  return {
    post: await post.json(),
    // todos: await todos.json()
  }
}) satisfies PageServerLoad;