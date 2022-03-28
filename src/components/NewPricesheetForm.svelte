<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	let title;
	let description;
	let prices = [[]];

	function cancel() {
		dispatch('cancel');
	}

	function submit() {
		// TODO handle submit
	}
</script>

<form class="space-y-8 divide-y divide-gray-200">
	<div class="space-y-8 divide-y divide-gray-200">
		<div>
			<div>
				<h3 class="text-lg leading-6 font-medium text-gray-900">Details</h3>
				<p class="mt-1 text-sm text-gray-500 mb-4">Name and describe your pricesheet.</p>
			</div>

			<div class="sm:col-span-4">
				<label for="title" class="block text-sm font-medium text-gray-700"> Name </label>
				<div class="mt-1">
					<input
						id="title"
						name="title"
						type="text"
						autocomplete="pricesheet-title"
						class="border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
						bind:value={title}
					/>
				</div>
			</div>

			<div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
				<div class="sm:col-span-6">
					<label for="description" class="block text-sm font-medium text-gray-700">
						Description
					</label>
					<div class="mt-1">
						<textarea
							id="description"
							name="description"
							rows="3"
							class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
							bind:value={description}
						/>
					</div>
				</div>
			</div>
		</div>

		<div class="pt-8">
			<div>
				<h3 class="text-lg leading-6 font-medium text-gray-900">Prices</h3>
				<p class="mt-1 text-sm text-gray-500">Create your pricesheet below.</p>
			</div>
			<div class="mt-6" />
		</div>
	</div>

	<div class="pt-5">
		<div class="flex justify-end">
			<button
				type="button"
				class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				on:click|preventDefault={cancel}>Cancel</button
			>
			<button
				type="submit"
				class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>Save</button
			>
		</div>
	</div>
</form>
