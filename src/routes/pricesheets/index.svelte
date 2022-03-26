<script>
	import { pricesheets } from '../../stores/pricesheetStore.js';
</script>

<a
	href="/pricesheets/new"
	class="text-gray-100 bg-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
	>Create a New Pricesheets</a
>

<div id="list-of-pricesheets">
	{#each $pricesheets as sheet}
		<p>One pricesheet line item {sheet.a}</p>
	{/each}
</div>
