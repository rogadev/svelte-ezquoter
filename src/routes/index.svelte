<script>
	/** Tailwind CSS */
	import './app.css';

	/** Svelte Imports*/
	import { user } from '../stores/sessionStore.js';
	import { supabase } from '../supabase/client.js';

	/** Component Imports */
	import Auth from '../components/Auth.svelte';

	/** Auth Functions */
	const logout = async () => {
		await supabase.auth.signOut();
	};
</script>

<svelte:head>
	{#if user}
		<title>Dashboard</title>
	{:else}
		<title>Login | Roga.dev Window Cleaning Quote Tool</title>
	{/if}
</svelte:head>

<header class="bg-white shadow">
	<div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
		<h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
	</div>
</header>
<main>
	<div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
		<slot />
	</div>
</main>
