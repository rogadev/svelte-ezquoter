<script>
	/** Tailwind CSS */
	import './app.css';

	/** Component Imports */
	import Navigation from '../components/Navigation.svelte';
</script>

<div class="min-h-full">
	<Navigation />

	<slot />
</div>
