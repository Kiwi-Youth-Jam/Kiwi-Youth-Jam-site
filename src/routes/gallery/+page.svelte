<script lang="ts">
    import { onMount } from 'svelte';
    import Grid from '$lib/components/Grid.svelte';
    import GridCard from '$lib/components/GridCard.svelte';
    import Header from '$lib/components/Header.svelte';

    import { CDN_URL } from '$app/env/public';

    let photos: string[] = $state([]);

    onMount(async () => {
        const query_dir = await fetch(`${CDN_URL}/gallery?ls`);
        const query_json = await query_dir.json();

        for (let image of query_json.files) {
            if (image.ext !== 'jpg')
                continue;

            photos.push(`${CDN_URL}/gallery/${image.href}`);
        }
	});
</script>

<Header text="Gallery" />

<section id="gallery" class="py-8 flex flex-col items-center text-(--color-text-secondary) dark:text-(--color-text-secondary-dark)">
	<Grid grid='grid-cols-2 min-[1000px]:grid-cols-3 min-[1920px]:grid-cols-5'>
		{#each photos as photo}
			<GridCard padding='py-1 px-3' image={photo} />
		{/each}
	</Grid>
</section>