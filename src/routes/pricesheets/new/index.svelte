<script>
	import CancelModal from '../../../components/CancelModal.svelte';
	import NewPricesheetForm from '../../../components/NewPricesheetForm.svelte';

	let showCancelModal = false;

	function handleCancel() {
		toggleCancelModal();
		history.back();
		console.log('should have gone back');
	}

	function toggleCancelModal() {
		showCancelModal = !showCancelModal;
	}
</script>

<svelte:head>
	<title>New Pricesheet</title>
</svelte:head>

{#if showCancelModal}
	<CancelModal on:cancel={toggleCancelModal} on:okay={handleCancel} />
{/if}

<NewPricesheetForm on:cancel={toggleCancelModal} />
