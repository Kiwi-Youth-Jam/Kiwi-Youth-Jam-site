<script lang="ts">
	type Game = {
		title: string;
		creator: string;
		description: string;
		image: string;
		itchEmbed?: string;
		itchLink: string;
	};

	const games: Game[] = [
		{
			title: "Game One",
			creator: "Made by",
			description:
				"Something something idk",
			image: "images/IMG_9867.JPG",
			itchLink: "https://itch.io/"
		},
		{
			title: "Game Two",
			creator: "Made by",
			description:
				"Something something idk",
			image: "images/IMG_9867.JPG",
			itchLink: "https://itch.io/"
		},
		{
			title: "Game Three",
			creator: "Made by",
			description:
				"Another fantastic project from young game developers across New Zealand.",
			image: "images/IMG_9867.JPG",
			itchLink: "https://itch.io/"
		}
	];

	let currentGame = $state(0);

	function previousGame() {
		currentGame =
			(currentGame - 1 + games.length) % games.length;
	}

	function nextGame() {
		currentGame = (currentGame + 1) % games.length;
	}
</script>

<svelte:head>
	<title>Game Showcase | Kiwi Youth Jam</title>
	<meta
		name="description"
		content="Explore games created by young developers at Kiwi Youth Jam."
	/>
</svelte:head>

<section id="showcase" class="py-16">
	<div class="mb-12">
		<h1 class="text-6xl md:text-8xl font-display text-center font-logo">
			Game Showcase
		</h1>
		<p class="text-xl text-center mt-4 px-4">
            Some games made at past events.
        </p>
	</div>

	<div class="flex justify-center bg-secondary text-light text-xl">
		<div class="w-full max-w-7xl p-6 md:p-10">

			<div class="text-center mb-8">
				<p class="uppercase tracking-widest text-sm mb-3">
					Featured Game {currentGame + 1} / {games.length}
				</p>

				<h2 class="text-4xl md:text-6xl font-display mb-3">
					{games[currentGame].title}
				</h2>

				<p class="italic font-bold">
					{games[currentGame].creator}
				</p>
			</div>

			<div class="flex items-center justify-center gap-3 md:gap-8">

				<button
					onclick={previousGame}
					aria-label="Previous game"
					class="shrink-0 font-display text-4xl md:text-6xl
						p-2 md:p-4 hover:text-primary hover:cursor-pointer
						transition-colors"
				>
					&#10094;
				</button>

				<div class="w-full max-w-4xl min-w-0">
					<div
						class="aspect-video overflow-hidden rounded-xl
							shadow-lg bg-black"
					>
						{#if games[currentGame].itchEmbed}
							<iframe
								src={games[currentGame].itchEmbed}
								title={games[currentGame].title}
								class="w-full h-full border-0"
								allowfullscreen
								allow="autoplay; fullscreen; gamepad"
							></iframe>
						{:else}
							<a
								href={games[currentGame].itchLink}
								target="_blank"
								rel="noopener noreferrer"
								class="block w-full h-full group relative"
								aria-label="View {games[currentGame].title} on itch.io"
							>
								<img
									src={games[currentGame].image}
									alt="Screenshot of {games[currentGame].title}"
									class="w-full h-full object-cover
										transition-transform duration-300
										group-hover:scale-105"
								/>

								<div
									class="absolute inset-0 flex items-center
										justify-center bg-black/40
										opacity-100 md:opacity-0
										md:group-hover:opacity-100
										transition-opacity"
								>
									<span
										class="font-display text-2xl md:text-4xl
											text-white text-center px-4"
									>
										Play on itch.io &#8599;
									</span>
								</div>
							</a>
						{/if}
					</div>
				</div>

				<button
					onclick={nextGame}
					aria-label="Next game"
					class="shrink-0 font-display text-4xl md:text-6xl
						p-2 md:p-4 hover:text-primary hover:cursor-pointer
						transition-colors"
				>
					&#10095;
				</button>
			</div>

			<!-- Game description -->
			<div class="max-w-4xl mx-auto mt-8 text-center">
				<p class="font-bold mb-8">
					{games[currentGame].description}
				</p>

				<a
					href={games[currentGame].itchLink}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-block font-display text-2xl md:text-4xl
						text-white border-2 border-light rounded-lg
						px-6 py-3 hover:text-primary hover:border-primary
						transition-colors"
				>
					View Game on itch.io &#8599;
				</a>
			</div>

			<div class="flex justify-center gap-3 mt-10">
				{#each games as game, i}
					<button
						onclick={() => (currentGame = i)}
						aria-label="Show {game.title}"
						aria-current={currentGame === i ? "true" : undefined}
						class="h-3 rounded-full transition-all
							hover:cursor-pointer
							{currentGame === i
								? 'w-10 bg-primary'
								: 'w-3 bg-light/40 hover:bg-light/70'}"
					></button>
				{/each}
			</div>

		</div>
	</div>
</section>