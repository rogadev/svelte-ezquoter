<script>
	import { fade } from 'svelte/transition';

	import CancelModal from '../../../components/CancelModal.svelte';
	import NewPricesheetForm from '../../../components/NewPricesheetForm.svelte';

	let name;
	let description;
	let showCancelModal = false;

	function handleSubmit() {
		console.log(name, description, prices);
		// TODO - Gather data and send to DB.
	}

	function handleCancel() {
		toggleCancelModal();
		history.back();
		console.log('should have gone back');
	}

	function toggleCancelModal() {
		// TODO - Build cancel modal.
		showCancelModal = !showCancelModal;
	}

	$: prices = {
		// TODO - Build prices component and pass props here.
	};
</script>

<svelte:head>
	<title>New Pricesheet</title>
</svelte:head>

{#if showCancelModal}
	<CancelModal on:cancel={toggleCancelModal} on:okay={handleCancel} />
{/if}

<NewPricesheetForm on:okay={handleSubmit} on:cancel={toggleCancelModal} />
