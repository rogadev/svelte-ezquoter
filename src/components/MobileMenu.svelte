<script>
	import { createEventDispatcher } from 'svelte';
	import { user } from '../stores/sessionStore.js';

	const dispatch = createEventDispatcher();

	function logout() {
		dispatch('logout');
	}

	let email = $user?.email;
</script>

<!-- Mobile menu, show/hide based on menu state. -->
<div class="md:hidden" id="mobile-menu">
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
		<div class="flex items-center px-5">
			<div class="flex-shrink-0">
				<img
					class="h-10 w-10 rounded-full"
					src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
					alt=""
				/>
			</div>
			<div class="ml-3">
				<!-- <div class="text-base font-medium leading-none text-white">{user.username]</div> -->
				<div class="text-sm font-medium leading-none text-gray-400">
					{email ? email : 'loading...'}
				</div>
			</div>
			<button
				type="button"
				class="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
			/>
		</div>
		<div class="mt-3 px-2 space-y-1">
			<button
				on:click={logout}
				class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
				>Sign out</button
			>
		</div>
	</div>
</div>
