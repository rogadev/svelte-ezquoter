<script>
	/** Tailwind CSS */
	import './app.css';

	/** Svelte Imports*/
	import { user } from '../stores/sessionStore.js';
	import { supabase } from '../supabase/client.js';

	/** Component Imports */
	import Auth from '../components/Auth.svelte';
	import Profile from '../components/Profile.svelte';

	/** Auth Functions */
	const logout = async () => {
		await supabase.auth.signOut();
	};
</script>

{#if $user}
	<Profile />
{:else}
	<Auth />
{/if}
