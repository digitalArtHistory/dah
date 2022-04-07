export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/projects/index.svelte")
];

export const dictionary = {
	"projects": [[0, 2], [1]]
};