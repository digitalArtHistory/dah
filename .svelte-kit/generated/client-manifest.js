export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/index.md"),
	() => import("../../src/routes/bookmarks.md"),
	() => import("../../src/routes/projects/index.svelte"),
	() => import("../../src/routes/projects/projet1.svelte"),
	() => import("../../src/routes/projects/projet2.md"),
	() => import("../../src/routes/about.md")
];

export const dictionary = {
	"": [[0, 2], [1], 1],
	"bookmarks": [[0, 3], [1]],
	"projects": [[0, 4], [1]],
	"projects/projet1": [[0, 5], [1]],
	"projects/projet2": [[0, 6], [1]],
	"about": [[0, 7], [1]]
};