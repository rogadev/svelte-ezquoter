<script>
	import { user } from '../stores/sessionStore.js';

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	/** Props */
	export let showMenu;

	/** State */
	let email = $user?.email;

	/** Logout */
	function logout() {
		dispatch('logout');
	}
</script>

<!-- Mobile menu, show/hide based on menu state. -->
<div class="md:hidden" id="mobile-menu">
	{#if showMenu}
		<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
			<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
			<a
				href="/"
				class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
				aria-current="page">Dashboard</a
			>

			<a
				href="/pricesheets"
				class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
				>Pricesheets</a
			>

			<a
				href="/customers"
				class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
				>Customers</a
			>

			<a
				href="/quotes"
				class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
				>Quotes</a
			>

			<a
				href="/new-quote"
				class="text-blue-300 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
				><i class="fa-solid fa-circle-plus pr-1" /> Create Quote</a
			>
		</div>
		<div class="pt-4 pb-3 border-t border-gray-700">
			<a href="/profile">
				<div
					class="flex items-center px-5 text-gray-400 hover:bg-gray-700 hover:text-white rounded-md mx-2 py-1 my-0"
				>
					<div class="flex-shrink-0">
						<i class="fa-solid fa-user h-8 mt-1 w-auto text-white" />
					</div>
					<div class="ml-3">
						<div class="text-sm font-medium leading-none hover:text-white cursor-pointer">
							{email ? email : 'loading...'}
						</div>
					</div>
				</div>
			</a>
			<div class="mt-3 px-2 space-y-1">
				<button
					on:click={logout}
					class="block px-12 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-yellow-600"
					>Sign out</button
				>
			</div>
		</div>
	{/if}
</div>
