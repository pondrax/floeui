import type { Handle, HandleFetch } from '@sveltejs/kit';
 
// export const handle = (async ({ event, resolve }) => {
//   // console.log(event.url)
//   if (event.url.pathname.startsWith('/custom')) {
//     return new Response('custom response');
//   }
 
//   const response = await resolve(event);
//   return response;
// }) satisfies Handle;

// export const handleFetch = (({ request, fetch }) => {
//   if (request.url.startsWith('/api/')) {
//     // clone the original request, but change the URL
//     console.log(request)
//     request = new Request(
//       request.url.replace('/api/', request.url+'/api/'),
//       request
//     );
//   }
 
//   return fetch(request);
// }) satisfies HandleFetch;