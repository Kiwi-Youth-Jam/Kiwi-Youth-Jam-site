<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Kiwi Youth Jam</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navbar />

<div class="h-32"></div>

{@render children()}
