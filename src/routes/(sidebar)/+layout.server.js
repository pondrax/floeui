// import template from "./components.js"
import { groupBy } from '$lib/utils.js';
/** @type {import { LayoutServerLoad } from "./$types";} */
export async function load() {
	
	const docModules = await Promise.all(
		Object.entries(import.meta.glob('./docs/**/+page.svelte')).map(async ([path]) => {
			path = path.replace(/(\.|\/|docs|\+page\.svelte)/g, '');
			return path
		})
	);
	const componentModules = await Promise.all(
		Object.entries(import.meta.glob('./components/**/+page.svelte')).map(async ([path, fn]) => {
			path = path.replace(/(\.|\/|components|\+page\.svelte)/g, '');
			const props = await fn();
			return {
				path,
				heading: props?.heading || 'Input'
			};
		})
	);

	const docs = docModules.filter((u) => u!= '');
	const components = componentModules.filter((u) => u.path != '');
	// console.log(components)

	return {
		docs: docs,
		components: Object.entries(groupBy(components, (obj) => obj.heading))
	};
}
