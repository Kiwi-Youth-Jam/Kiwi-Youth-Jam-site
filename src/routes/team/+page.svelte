<script lang="ts">
    import { onMount } from 'svelte';
    import Grid from '$lib/components/Grid.svelte';
    import GridCard from '$lib/components/GridCard.svelte';
	import Header from '$lib/components/Header.svelte';

	import { CDN_URL } from '$app/env/public';

    let team: {name: string, image: string, description: string, short_description: string}[] = $state([]);

    onMount(async () => {
        const team_req = await fetch(`${CDN_URL}/pages/team.json`);
		team = await team_req.json();
	});
</script>

<Header text="The team" />

<section id="meet-the-team" class="py-8 flex flex-col items-center text-(--color-text-secondary) dark:text-(--color-text-secondary-dark)">
	<Grid>
		{#each team as team_member}
			<GridCard name={team_member.name} image={team_member.image} description={team_member.description} />
		{/each}
	</Grid>
</section>