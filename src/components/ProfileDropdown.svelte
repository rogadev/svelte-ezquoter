<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function logout() {
		dispatch('logout');
	}
</script>

<!--
									Dropdown menu, show/hide based on menu state.
	
									Entering: "transition ease-out duration-100"
										From: "transform opacity-0 scale-95"
										To: "transform opacity-100 scale-100"
									Leaving: "transition ease-in duration-75"
										From: "transform opacity-100 scale-100"
										To: "transform opacity-0 scale-95"
								-->
<div
	class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
	role="menu"
	aria-orientation="vertical"
	aria-labelledby="user-menu-button"
	tabindex="-1"
>
	<!-- Active: "bg-gray-100", Not Active: "" -->
	<a
		href="/profile"
		class="block px-4 py-2 text-sm text-gray-700"
		role="menuitem"
		tabindex="-1"
		id="user-menu-item-0">Your Profile</a
	>

	<button
		on:click={logout}
		class="block px-4 py-2 text-sm text-gray-700"
		role="menuitem"
		tabindex="-1"
		id="user-menu-item-2">Sign out</button
	>
</div>
