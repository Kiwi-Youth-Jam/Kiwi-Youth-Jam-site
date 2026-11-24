<script lang="ts">
    import { onMount } from 'svelte';

    let team: {name: string, image: string, description: string, short_description: string}[] = $state([]);

    onMount(async () => {
        const team_req = await fetch('/api/get_team');
		team = await team_req.json();
	});
</script>

<h2 class="text-8xl font-display text-center font-logo text-(--color-text-primary) dark:text-(--color-text-primary-dark)">The Team</h2>

<section id="meet-the-team" class="py-8 flex flex-col items-center text-(--color-text-secondary) dark:text-(--color-text-secondary-dark)">
	<div class="flex flex-col gap-8 md:grid grid-cols-3 justify-evenly">
		{#each team as team_member}
			<div class="flex items-center text-center flex-col gap-2 bg-(--color-primary) dark:bg-(--color-primary-dark) rounded-4xl py-3 px-4 shadow-xl">
				<h2 class="text-4xl font-bold">{team_member.name}</h2>
				<img class="rounded-xl" src="{team_member.image}" alt="Image of {team_member.name}" width="300px"/>
				<p class="text-1xl">{team_member.description}</p>
			</div>
		{/each}
	</div>
</section>