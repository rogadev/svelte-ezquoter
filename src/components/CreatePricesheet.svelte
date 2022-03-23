<script>
	const stagedPricesheet = {};

	const createPricesheet = () => {
		console.log('create pricesheet triggered.');
		// TODO - make create pricesheet function
	};
</script>

<form on:submit|preventDefault={createPricesheet}>
	<div>
		<label>
			<span>Pricesheet Name</span>
			<input
				class="focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
				type="text"
				name="name"
			/>
		</label>
	</div>
	<div>
		<label>
			<span>Pricesheet Description</span>
			<input
				class="focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
				type="text"
				name="description"
			/>
		</label>
	</div>
	<div />
</form>

<style>
	label {
		@apply bg-gray-50 border border-gray-50 rounded-md shadow-md transition duration-150 ease-in-out;
	}
</style>
