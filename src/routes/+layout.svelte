<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';

	let { children } = $props();

	let menuOpen = $state(false);

	const navBar = [
		{text: "[About]", href: "../#about"},
        {text: "[Contacts]", href: "/#contacts"},
		{text: "[Events]", href: "/events"},
        {text: "[The Team]", href: "/team"},
		{text: "[Game Showcase]", href: "/games"},
	];
</script>

<svelte:head>
	<title>Kiwi Youth Jam</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<header class="fixed top-0 left-0 right-0 z-50 py-3 px-3 glass-header">
	<div class="py-4 bg-secondary/95 text-light rounded-xl flex justify-between items-center px-6 md:px-10 relative z-10">
		<a href="/" class="font-logo text-3xl md:text-4xl hover:text-primary">
			KIWI YOUTH JAM
		</a>

		<nav class="hidden min-[1100px]:flex text-l font-display">
			{#each navBar as navItem}
				<a href={navItem.href} class="hover:text-primary px-3 transition">
					{navItem.text}
				</a>
			{/each}
		</nav>

        <div class="flex items-center">
            <button
		    	class="min-[1100px]:hidden font-display text-2xl p-2 hover:text-primary transition"
		    	onclick={() => menuOpen = !menuOpen}
		    	aria-label="Toggle navigation menu"
		    	aria-expanded={menuOpen} >
		    	{menuOpen ? '✕' : '☰'}
		    </button>

            <button 
		    	class="hidden md:block font-display text-l text-white p-3 hover:cursor-pointer hover:text-primary"
		    >
		    	Sign Up
		    </button>
        </div>


	</div>

	{#if menuOpen}
		<div class="min-[1100px]:hidden mt-2 bg-secondary/95 backdrop-blur-xl rounded-xl p-4 text-light font-display text-min-[1100px] relative z-10">
			<nav class="flex flex-col">
				{#each navBar as navItem}
					<a
						href={navItem.href}
						class="hover:text-primary py-3 px-3 transition"
						onclick={() => menuOpen = false}
					>
						{navItem.text}
					</a>
				{/each}

				<button
		    	    class="font-display text-l text-white p-3 hover:cursor-pointer hover:text-primary"
				>
					Sign Up
				</button>
			</nav>
		</div>
	{/if}
</header>

<style>
	.glass-header::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 200px;

		backdrop-filter: blur(20px);

		mask-image: linear-gradient(
			to bottom,
			black 0%,
			black 50%,
			transparent 100%
		);

		pointer-events: none;
		z-index: 0;
	}
</style>

<div class="h-32"></div>

{@render children()}
