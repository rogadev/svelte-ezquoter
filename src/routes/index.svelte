<script>
	import { user } from '../stores/sessionStore.js';
	import { supabase } from '../supabase/client.js';
	import Auth from '../components/Auth.svelte';
	import Profile from '../components/Profile.svelte';

	user.set(supabase.auth.user());

	supabase.auth.onAuthStateChange((_, session) => {
		user.set(session.user);
	});
</script>

<div>
	<h1>Dashboard</h1>
	<ul>
		<li>list</li>
		<li>of</li>
		<li>tasks</li>
	</ul>
	{#if $user}
		<Profile />
	{:else}
		<Auth />
	{/if}
</div>
