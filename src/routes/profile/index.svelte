<script>
	import { supabase } from '../../supabase/client.js';
	import { user } from '../../stores/sessionStore.js';

	import LoadingSpinner from '../../components/LoadingSpinner.svelte';

	let loading = true;
	let username = null;
	let website = null;
	let avatar_url = null;

	const getProfile = async () => {
		try {
			loading = true;
			const user = supabase.auth.user();

			let { data, error, status } = await supabase
				.from('profiles')
				.select(`username, website, avatar_url`)
				.eq('id', user.id)
				.single();

			if (error && status !== 406) throw error;

			if (data) {
				username = data.username;
				website = data.website;
				avatar_url = data.avatar_url;
			}
		} catch (error) {
			console.error(error.message);
		} finally {
			loading = false;
		}
	};

	const updateProfile = async () => {
		try {
			loading = true;

			const updates = {
				// @ts-ignore
				id: $user.id,
				username,
				website,
				avatar_url,
				updated_at: new Date()
			};

			let { error } = await supabase.from('profiles').upsert(updates, {
				returning: 'minimal' // Don't return the value after inserting
			});

			if (error) throw error;
		} catch (error) {
			alert(error.message);
		} finally {
			loading = false;
		}
	};
</script>

<div>
	<div class="mt-5 md:mt-0">
		<form>
			<div class="shadow sm:rounded-md sm:overflow-hidden">
				{#await getProfile()}
					<LoadingSpinner />
				{:then}
					<div class="px-4 py-5 bg-white space-y-6 sm:p-6">
						<div class="grid grid-cols-3 gap-6">
							<div class="col-span-3 sm:col-span-2">
								<label for="company-website" class="block text-sm font-medium text-gray-700">
									Website
								</label>
								<div class="mt-1 flex rounded-md shadow-sm">
									<span
										class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"
									>
										http://
									</span>
									<input
										bind:value={website}
										type="text"
										name="company-website"
										id="company-website"
										class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 border pl-2"
										placeholder="www.example.com"
									/>
								</div>
							</div>
						</div>

						<div>
							<label for="username" class="block text-sm font-medium text-gray-700">
								Company Name
							</label>
							<div class="mt-1">
								<input
									id="username"
									name="username"
									bind:value={username}
									rows="3"
									class=" pl-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
									placeholder="My Awesome Company"
								/>
							</div>
						</div>

						<div>
							<label for="photo" class="block text-sm font-medium text-gray-700"> Logo </label>
							<div class="mt-1 flex items-center">
								<span class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
									{#if avatar_url}
										<img src={avatar_url} alt="avatar" class="h-full w-full object-cover" />
									{:else}
										<svg
											class="h-full w-full text-gray-300"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
											/>
										</svg>
									{/if}
								</span>
								<button
									type="button"
									class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
									>Change</button
								>
							</div>
						</div>
					</div>
					<div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
						<button
							on:click|preventDefault={updateProfile}
							type="button"
							class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>Save</button
						>
					</div>
				{/await}
			</div>
		</form>
	</div>
</div>
