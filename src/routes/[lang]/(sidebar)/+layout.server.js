import { groupBy } from '$lib/utils.js';

export async function load({ url }) {
	const docModules = await Promise.all(
		Object.entries(import.meta.glob('./docs/**/+page.svelte')).map(async ([path]) => {
			path = path.replace(/(\.|\/|docs|\+page\.svelte)/g, '');
			const active = url.pathname.includes(path);
			return {
				path,
				active
			};
		})
	);
	const componentModules = await Promise.all(
		Object.entries(import.meta.glob('./components/**/+page.svelte')).map(async ([path, fn]) => {
			path = path.replace(/(\.|\/|components|\+page\.svelte)/g, '');
			const props = await fn();
			const active = url.pathname.split('/').pop() == path;
			return {
				path,
				active,
				action: props?.action || null,
				heading: props?.heading || 'Input'
			};
		})
	);

	// const docs=[]
	const docs = docModules.filter((u) => u.path != '');
	const components = componentModules.filter((u) => u.path != '');
	// console.log(components)
	const pageTitle = url.pathname.split('/').pop().replace(/\b\w/g, (char) => char.toUpperCase())

	return {
		pageTitle,
		docs: docs,
		components: Object.entries(groupBy(components, (obj) => obj.heading))
	};
}
