<script>
	/** Svelte Imports */
	import { user } from '../stores/sessionStore.js';

	/** Svelte Imports */
	import { supabase } from '../supabase/client.js';

	/** Component Imports */
	import MobileMenu from '../components/MobileMenu.svelte';
	import ProfileDropdown from '../components/ProfileDropdown.svelte';

	/** Auth Functions */
	const logout = async () => {
		closeAllModals();
		await supabase.auth.signOut();
	};

	/** Close All Modals */
	function closeAllModals() {
		showProfileDropdown = false;
	}

	/** Profile Dropdown Logic */
	let showProfileDropdown = false;
	const toggleProfileDropdown = () => {
		showProfileDropdown = !showProfileDropdown;
	};
	const profileDropdownFocusout = ({ currentTarget, relatedTarget }) => {
		if (!currentTarget.contains(relatedTarget)) {
			showProfileDropdown = false;
		}
	};
</script>

<nav class="bg-gray-800">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between h-16">
			<div class="flex items-center">
				<div class="flex-shrink-0">
					<img
						class="h-8 w-8"
						src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
						alt="Workflow"
					/>
				</div>
				{#if $user}
					<div class="hidden md:block">
						<div class="ml-10 flex items-baseline space-x-4">
							<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
							<a
								href="/"
								class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
								aria-current="page">Dashboard</a
							>

							<a
								href="/pricesheets"
								class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
								>Pricesheets</a
							>

							<a
								href="/customers"
								class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
								>Customers</a
							>

							<a
								href="/quotes"
								class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
								>Quotes</a
							>

							<a
								href="/new-quote"
								class="text-blue-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
								><i class="fa-solid fa-circle-plus pr-1" /> Create Quote</a
							>
						</div>
					</div>
				{/if}
			</div>
			<div class="hidden md:block">
				<div class="ml-4 flex items-center md:ml-6">
					<button
						type="button"
						class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
					/>

					<!-- Profile dropdown -->
					{#if $user}
						<div class="ml-3 relative" on:focusout={profileDropdownFocusout}>
							<div>
								<button
									on:click={toggleProfileDropdown}
									type="button"
									class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
									id="user-menu-button"
									aria-expanded="false"
									aria-haspopup="true"
								>
									<span class="sr-only">Open user menu</span>
									<img
										class="h-8 w-8 rounded-full"
										src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
										alt=""
									/>
								</button>
							</div>
							{#if showProfileDropdown}
								<ProfileDropdown on:logout={logout} />
							{/if}
						</div>
					{/if}
				</div>
			</div>
			<div class="-mr-2 flex md:hidden">
				<!-- Mobile menu button -->
				<button
					type="button"
					class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
					aria-controls="mobile-menu"
					aria-expanded="false"
				>
					<span class="sr-only">Open main menu</span>
					<!--
              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
            -->
					<svg
						class="block h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
					<!--
              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
            -->
					<svg
						class="hidden h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	<MobileMenu on:logout={logout} user={$user} />
</nav>
