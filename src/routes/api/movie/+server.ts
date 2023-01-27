import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
// @ts-ignore
// import { DOMParser } from 'dom-lite'

export const GET = (async ({ fetch, url }) => {
  let site = 'https://a.lk21official.lol/theres-something-wrong-with-the-children-2023/';
  const res = await (await fetch(site)).text();
  // const parser = new DOMParser();

  // const doc = parser.parseFromString(res, 'text/html');
  // let iframes = [...doc.querySelectorAll('[target="iframe"]')]
  // iframes = iframes.map(node => {
  //   // console.log(node)
  //   return {
  //     href: node.href,
  //     name: node.class
  //   }
  // })

  // return new Response(JSON.stringify(iframes));
  return new Response(String(res));
}) satisfies RequestHandler;
