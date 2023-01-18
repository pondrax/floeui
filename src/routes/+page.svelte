<script lang="ts">


import type { PageData } from './$types';

export let data: PageData;


const test = async()=>{
  const req = await fetch('/api/coba');
  const data = await req.json()
  console.log(data)
}
</script>

<h1 text-2xl>FloeUI</h1>

<button on:click={test}>coba</button>
{JSON.stringify(data)}
