<script lang="ts">
    import { onMount } from 'svelte';
    import Grid from '$lib/components/Grid.svelte';
    import GridCard from '$lib/components/GridCard.svelte';
    import Header from '$lib/components/Header.svelte';

    import { CDN_URL } from '$app/env/public';

    let sponsors: {name: string, image: string}[] = $state([]);

    onMount(async () => {
        const sponsors_req = await fetch(`${CDN_URL}/pages/sponsors.json`);
		sponsors = await sponsors_req.json();
	});
</script>

<Header text="Our sponsors" />

<section id="sponsors" class="py-8 flex flex-col items-center text-(--color-text-secondary) dark:text-(--color-text-secondary-dark)">
	<Grid>
		{#each sponsors as sponsor}
			<GridCard name={sponsor.name} image={sponsor.image} description='' />
		{/each}
	</Grid>
</section>