<script lang="ts">

	import favicon from '$lib/assets/favicon.svg'; 

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

	const contacts = [
		{
			name: "Jai Janse",
			email: "jai@kiwiyouthjam.org",
			role: "somting",
			image: "images/people/jai.jpg"
		},
		{
			name: "Drew Fitzgerald",
			email: "jai@kiwiyouthjam.org",
			role: "somting",
			image: "images/people/drew.jpg"
		}
	];
</script>

<style>
    @reference "../app.css";

    :global(body) {
        @apply bg-light dark:bg-dark;
    }

	:global(html) {
        scroll-behavior: smooth;
    }
</style>

<div class="relative flex justify-center h-[60vh] mb-20">
	<div class="flex flex-col justify-center items-center absolute top-[10svh] md:top-[20svh] text-center z-10 text-(--color-text-secondary) dark:text-(--color-text-secondary-dark)">
		<h1 class="text-8xl m-0 md:text-9xl font-logo">KIWI YOUTH JAM</h1>
		<h1 class="text-2xl font-display mb-10 max-w-2xl font-thin">Proudly building and supporting the next generation of New Zealand game developers.</h1>

		<button class="text-3xl bg-primary dark:bg-(--color-primary-dark) rounded-xl font-display md:text-4xl transition p-3 hover:cursor-pointer hover:bg-(--color-hovered) text-(--color-text-primary) hover:dark:bg-(--color-hovered-dark) hover:text-(--color-text-hovered) hover:dark:text-(--color-text-hovered-dark)">Sign up for the Jam!</button>
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
</div>

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

<section id="contacts" class="flex justify-center bg-light text-xl">
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
</section>
