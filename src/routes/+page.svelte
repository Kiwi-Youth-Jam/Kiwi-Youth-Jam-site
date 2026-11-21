<script lang="ts">

	import favicon from '$lib/assets/favicon.svg';
    import { onMount } from 'svelte';

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

	const team = [
		{
			name: "Jai Janse",
			image: "images/people/jai.jpg",
			description: "Jai Janse is a massive gooner"
		},
		{
			name: "Drew Fitzgerald",
			image: "",
			description: "Drew Fitzgerald is awesome"
		}
	]

	const scrolling_images = [
		{
			src: "images/people/jai.jpg",
			alt: "rah"
		},
		{
			src: "images/people/jai.jpg",
			alt: "rah"
		},
		{
			src: "images/people/jai.jpg",
			alt: "rah"
		},
		{
			src: "images/people/jai.jpg",
			alt: "rah"
		},
	]

	const repeated_images = [
		...scrolling_images,
		...scrolling_images
	]

	const speed = 0.5;

	let row: HTMLUListElement;
	let animationFrame: any;

	function animate() {
		if (row) {
			row.scrollLeft += speed;

			if (row.scrollLeft >= row.scrollWidth / 2)
				row.scrollLeft = 0;
		}

		animationFrame = requestAnimationFrame(animate);
	}

	onMount(() => {
		row.scrollLeft = 150;
		animationFrame = requestAnimationFrame(animate);

		return () => cancelAnimationFrame(animationFrame);
	});
</script>

<style>
    @reference "../app.css";

    :global(body) {
        @apply bg-light dark:bg-dark;
    }

	:global(html) {
        scroll-behavior: smooth;
    }

	.carousell {
		width: 100%;
	}

	.carousell-row::-webkit-scrollbar {
		display: none;
	}

	.carousell [class*="mask-image"] {
		-webkit-mask: linear-gradient(90deg, transparent, #000 4%, #000 96%, transparent);
	}

	@media (prefers-reduced-motion: reduce) {
		.carousell-row {
			scroll-behavior: auto;
		}
	}
</style>

<section class="relative flex justify-center h-[60vh] mb-20">
	<div class="p-3 flex flex-col justify-center items-center absolute top-[10svh] md:top-[20svh] text-center z-10 text-(--color-text-secondary) dark:text-(--color-text-secondary-dark)">
		<h1 class="text-8xl m-0 md:text-9xl font-logo">KIWI YOUTH JAM</h1>
		<h1 class="text-2xl font-display mb-5 max-w-2xl font-light">Proudly building and supporting the next generation of New Zealand game developers.</h1>

		<h2 class="text-2xl font-bold mb-1">Kiwi Youth Jam 27: Date TBD</h2>
		<button class="text-3xl bg-primary dark:bg-(--color-primary-dark) rounded-xl font-display md:text-4xl transition p-3 hover:cursor-pointer hover:bg-(--color-hovered) text-(--color-text-primary) hover:dark:bg-(--color-hovered-dark) hover:text-(--color-text-hovered) hover:dark:text-(--color-text-hovered-dark)">Sign up</button>
	</div>

	{#each iconPositions as pos}
		<img
			src={favicon} 
			alt="Kiwi Youth Jam Icon"
			height="100"
			width="100"
			class="hidden md:block absolute {pos.y} {pos.x}"
		/>
	{/each}
</section>

<section class="carousell w-full flex flex-col justify-center [--tile-w:clamp(220px,28vw,300px)] max-sm:[--tile-w:clamp(180px,60vw,240px)]" aria-label="Trending now">
	<div class="overflow-hidden">
		<div class="[mask-image:linear-gradient(90deg,transparent,#000_4%,#000_96%,transparent)]">
			<ul bind:this={row} aria-label="Scrolling Carousell" class="carousell-row list-none flex gap-1.5 overflow-x-auto py-[34px] px-[clamp(16px,5vw,48px)] m-0 [scrollbar-width:none] focus-visible:outline-none">
				{#each repeated_images as image}
					<li class="flex-none basis-[var(--tile-w)] snap-start relative">
						<div class="block relative rounded-xl overflow-hidden no-underline">
							<span class="block relative w-full aspect-video overflow-hidden">
								<img src="{image.src}" alt="{image.alt}" />
							</span>
						</div>
					</li>
				{/each}
			</ul>
		</div>
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

	<div class="flex flex-col gap-8 md:grid grid-cols-3 justify-evenly">
		{#each team as team_member}
			<div class="flex items-center text-center flex-col gap-2">
				<h2 class="text-2xl font-bold">{team_member.name}</h2>
				<img class="rounded-xl" src="{team_member.image}" alt="Image of {team_member.name}" width="300px"/>
				<p class="text-1xl">{team_member.description}</p>
			</div>
		{/each}
	</div>
</section>

<!--<section id="contacts" class="flex justify-center bg-light text-xl">
	<div class="text-black p-10 max-w-7xl">
	    <h2 class="text-5xl font-light font-display text-center pb-3">Contact us</h2>

		<div class="flex flex-col gap-4 md:grid grid-cols-3 justify-evenly">
			{#each contacts as contact}
				<div class='flex flex-col gap-1 text-md bg-gray-200 rounded-md p-4'>
					<span>{contact.name} - {contact.role}</span>
					<span>{contact.email}</span>
					<img src="{contact.image}" alt="Image of {contact.name}" />
				</div>
			{/each}
		</div>
    </div>
</section>-->
