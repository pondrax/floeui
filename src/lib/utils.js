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
export const groupBy = (arr, key) =>
	arr.reduce((groups, item) => {
		if (!groups[key(item)]) {
			groups[key(item)] = [];
		}
		groups[key(item)].push(item);
		return groups;
	}, {});
