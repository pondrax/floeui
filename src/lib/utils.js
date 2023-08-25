// export { dayjs as d } from 'dayjs'

export * from './lang'

export const browser = typeof window !== 'undefined';

/**
 * Groups an array of items by a specified key.
 *
 * @template T - The type of items in the array.
 * @template K - The type of the key used for grouping.
 * @param {T[]} arr - The array of items to be grouped.
 * @param {(i: T) => K} key - A function that extracts the grouping key from an item.
 * @returns {Record<K, T[]>} An object where keys are the grouping keys and values are arrays of items.
 */
export function groupBy(arr, key) {
	return arr.reduce((groups, item) => {
		if (!groups[key(item)]) {
			groups[key(item)] = [];
		}
		groups[key(item)].push(item);
		return groups;
	}, {});
}

/**
 * Delays the execution of a function by the specified amount of time.
 *
 * @param {number} delay - The delay in milliseconds.
 * @returns {Promise} A promise that resolves after the delay.
 */
export function delay(delay) {
	return new Promise(resolve => setTimeout(resolve, delay));
}