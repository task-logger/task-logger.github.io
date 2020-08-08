import App from './components/Page.svelte';

const app = new App({
	target: document.body,
	props: {
		name: "world"
	}
});

export default app;
