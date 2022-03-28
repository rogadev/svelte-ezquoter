<script>
	/** Tailwind CSS */
	import './app.css';

	/** Auth Imports */
	import { user } from '../stores/sessionStore.js';

	/** Component Imports */
	import Navigation from '../components/Navigation.svelte';
	import Auth from '../components/Auth.svelte';
</script>

<div class="min-h-full">
	<Navigation />
	{#if $user}
		<slot />
	{:else}
		<Auth />
	{/if}
</div>
