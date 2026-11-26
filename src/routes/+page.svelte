<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
    import { onMount, tick } from 'svelte';

	import CaruoselImage from '$lib/components/CaruoselImage.svelte';

	import Grid from '$lib/components/Grid.svelte';
	import GridCard from '$lib/components/GridCard.svelte';

	import { CDN_URL } from '$app/env/public';

	function shuffle(array: string[]) {
		let i = array.length, j, temp;

		while (--i > 0) {
			j = Math.floor(Math.random() * (i + 1));

			temp = array[j];
			array[j] = array[i];
			array[i] = temp;
		}

		return array;
	}

	const iconPositions = [
		{ y: 'top-1/4', x: 'left-1/8' },
		{ y: 'top-1/8', x: 'left-1/4' },
		{ y: 'top-3/4', x: 'left-1/8' },
		{ y: 'top-7/8', x: 'left-1/4' },
		{ y: 'top-1/4', x: 'right-1/8' },
		{ y: 'top-1/8', x: 'right-1/4' },
		{ y: 'top-3/4', x: 'right-1/8' },
		{ y: 'top-7/8', x: 'right-1/4' }
	];

	let team: {name: string, image: string, description: string, short_description: string}[] = $state([]);

	let carousel_images: string[] = $state([]);
	const carousel_speed = 0.7;
	let row: HTMLUListElement;
	let animationFrame: any;

	function animate() {
		if (row) {
			row.scrollLeft += carousel_speed;

			if (row.scrollLeft >= row.scrollWidth / 2)
				row.scrollLeft = 0;
		}

		animationFrame = requestAnimationFrame(animate);
	}

	onMount(() => {
		async function init() {
			const carousel_images_req = await fetch('/api/get_carousel_images');
			carousel_images = shuffle(await carousel_images_req.json());

			const team_req = await fetch(`${CDN_URL}/pages/team.json`);
			team = await team_req.json();

			await tick();

			row.scrollLeft = 150;
			animationFrame = requestAnimationFrame(animate);
		}

		init();
		return () => cancelAnimationFrame(animationFrame);
	});
</script>

<style>
	.carousel {
		width: 100%;
	}

	.carousel-row::-webkit-scrollbar {
		display: none;
	}

	.carousel [class*="mask-image"] {
		-webkit-mask: linear-gradient(90deg, transparent, #000 4%, #000 96%, transparent);
	}

	@media (prefers-reduced-motion: reduce) {
		.carousel-row {
			scroll-behavior: auto;
		}
	}
</style>

<section class="relative flex justify-center h-[60vh] md:mb-20">
	<div class="p-3 flex flex-col justify-center items-center absolute top-[10svh] md:top-[20svh] text-center z-10 text-(--color-text-secondary) dark:text-(--color-text-secondary-dark)">
		<h1 class="text-8xl m-0 md:text-9xl font-logo">KIWI YOUTH JAM</h1>
		<h1 class="text-2xl font-display mb-5 max-w-2xl font-light">Proudly building and supporting the next generation of New Zealand game developers.</h1>

		<h2 class="text-2xl font-bold mb-1.5">Kiwi Youth Jam 27: Date TBD</h2>
		<button class="text-3xl bg-primary dark:bg-(--color-primary-dark) shadow-xl rounded-xl font-display md:text-4xl transition p-3 hover:cursor-pointer hover:bg-(--color-hovered) text-(--color-text-primary) hover:dark:bg-(--color-hovered-dark) hover:text-(--color-text-hovered) hover:dark:text-(--color-text-hovered-dark)">Sign up</button>
	</div>

	{#each iconPositions as pos}
		<img src={favicon} alt="Kiwi Youth Jam Icon" height="100" width="100" class="hidden md:block absolute {pos.y} {pos.x}" />
	{/each}
</section>

<section class="carousel overflow-hidden w-full flex flex-col justify-center [--tile-w:clamp(220px,28vw,300px)] max-sm:[--tile-w:clamp(180px,60vw,240px)]">
	<div class="[mask-image:linear-gradient(90deg,transparent,#000_4%,#000_96%,transparent)]">
		<ul bind:this={row} aria-label="Scrolling carousel" class="carousel-row list-none flex gap-2 overflow-x-auto py-[34px] px-[clamp(16px,5vw,48px)] m-0 [scrollbar-width:none] focus-visible:outline-none">
			{#each [...carousel_images, ...carousel_images] as image}
				<CaruoselImage image={image} />
			{/each}
		</ul>
	</div>
</section>

<section id="about" class="flex justify-center bg-(--color-primary) dark:bg-(--color-primary-dark) text-xl">
	<div class="text-(--color-text-primary) dark:text-(--color-text-primary-dark) p-10 max-w-7xl">
	    <h2 class="text-5xl font-display text-center">What is Kiwi Youth Jam?</h2>
		<br>

        <p class="font-bold mb-8">
            Kiwi Youth Jam is an organisation, founded in Wellington, New Zealand that runs events to help young
            people across New Zealand get learn or hone their game development skills. The name, Kiwi Youth Jam, refers to the primary kind of event we run, that being a game jam.
			A game jam is an event where people compete in teams or solo
        </p>
    </div>
</section>

<section id="meet-the-team" class="py-8 flex flex-col items-center text-(--color-text-secondary) dark:text-(--color-text-secondary-dark)">
	<h2 class="text-5xl font-bold mb-5">Meet the team</h2>

	<Grid>
		{#each team as team_member}
			<GridCard name={team_member.name} image={team_member.image} description={team_member.short_description} />
		{/each}
	</Grid>
</section>