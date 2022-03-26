<script>
	let name;
	let description;

	function handleSubmit() {
		console.log(name, description, prices);
		//
	}

	$: prices = {
		// Reactively calculate the prices
	};
</script>

<a
	href="/pricesheets"
	class="text-gray-100 bg-red-600 hover:bg-red-700 hover:text-white px-5 py-2 rounded-md text-sm font-medium"
	><i class="fa-solid fa-xmark pr-2" /> Cancel</a
>

<p>Create a new pricesheet</p>

<form on:submit|preventDefault={handleSubmit}>
	<label for="name">Name</label>
	<input bind:value={name} id="name" type="text" name="name" />
	<label for="description">Description</label>
	<input bind:value={description} id="description" type="text" name="description" />
	<input id="prices" name="prices" type="hidden" bind:value={prices} />
	<button type="submit">Submit</button>
</form>
