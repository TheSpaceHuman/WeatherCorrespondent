import './App.scss';
import App from './App.svelte';
import type { SvelteComponentTyped } from 'svelte/types/runtime/internal/dev';

const app: SvelteComponentTyped = new App({
	target: document.getElementById('app'),
});

export default app;
