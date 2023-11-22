/**
 * @param container
 * @param id
 * @returns element
 */
export const getById = <T extends Element>(
	container: HTMLElement,
	id: string
): T => container.querySelector<T>(`#${id}`) as T
