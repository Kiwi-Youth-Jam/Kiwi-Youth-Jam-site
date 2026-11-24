<script lang="ts">
    import { onMount } from 'svelte';

    let sponsors: {name: string, image: string}[] = $state([]);

    onMount(async () => {
        const team_req = await fetch('/api/get_sponsors');
		sponsors = await team_req.json();
	});
</script>

<h2 class="text-8xl font-display text-center font-logo text-(--color-text-primary) dark:text-(--color-text-primary-dark)">Our Sponsors</h2>

<section id="sponsors">
    
</section>