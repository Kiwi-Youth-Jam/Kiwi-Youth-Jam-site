<script lang="ts">
    import { onMount } from 'svelte';
    import TeamMemberGrid from '$lib/components/TeamMemberGrid.svelte';
    import TeamMemberCard from '$lib/components/TeamMemberCard.svelte';

    let team: {name: string, image: string, description: string, short_description: string}[] = $state([]);

    onMount(async () => {
        const team_req = await fetch('/api/get_team');
		team = await team_req.json();
	});
</script>

<h2 class="text-8xl font-display text-center font-logo text-(--color-text-secondary) dark:text-(--color-text-secondary-dark)">The Team</h2>

<section id="meet-the-team" class="py-8 flex flex-col items-center text-(--color-text-secondary) dark:text-(--color-text-secondary-dark)">
	<TeamMemberGrid>
		{#each team as team_member}
			<TeamMemberCard name={team_member.name} image={team_member.image} description={team_member.description} />
		{/each}
	</TeamMemberGrid>
</section>