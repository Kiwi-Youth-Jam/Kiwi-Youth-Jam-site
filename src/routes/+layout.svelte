<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';

	let { children } = $props();

	let menuOpen = $state(false);

	const navBar = [
		{text: "About", href: "../about"},
        {text: "Contact us", href: "/contact"},
		{text: "Events", href: "/events"},
		{text: "Game Showcase", href: "/games"},
		{text: "Our Sponsors", href: "/sponsors"},
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

<svelte:head>
	<title>Kiwi Youth Jam</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<header class="fixed top-0 left-0 right-0 z-50 py-3 px-3">
	<div class="py-2 text-center bg-primary dark:bg-primary-dark text-(--color-text-primary) rounded-xl flex justify-between items-center px-6 backdrop-blur-xl md:px-10 relative z-10">
		<a href="/" class="font-logo text-3xl md:text-4xl hover:text-(--color-text-hover-dark) hover:dark:text-(--color-text-hover-dark)">KIWI YOUTH JAM</a>

		<nav class="hidden md:flex flex-row gap-6 text-l font-display">
			{#each navBar as navItem}
				<a href={navItem.href} class="hover:text-(--color-text-hovered) hover:dark:text-(--color-text-hovered-dark) transition">{navItem.text}</a>
			{/each}
		</nav>

        <div class="flex items-center">
            <button class="md:hidden font-display text-2xl p-2 hover:text-(--color-text-hovered) hover:dark:text-(--color-text-hovered-dark) transition" onclick={() => menuOpen = !menuOpen} aria-label="Toggle navigation menu" aria-expanded={menuOpen}>{menuOpen ? '✕' : '☰'}</button>

            <button class="hidden md:block font-display text-l text-white p-3 hover:cursor-pointer hover:text-(--color-text-hovered) hover:dark:text-(--color-text-hovered-dark)">Sign Up</button>
        </div>
	</div>

	{#if menuOpen}
		<div class="md:hidden mt-2 bg-primary backdrop-blur-xl rounded-xl p-4 text-light font-display text-md relative z-10">
			<nav class="flex flex-col">
				{#each navBar as navItem}
					<a href={navItem.href} class="hover:text-(--color-text-hovered) hover:dark:text-(--color-text-hovered-dark) py-3 px-3 transition" onclick={() => menuOpen = false}>{navItem.text}</a>
				{/each}

				<button class="font-display text-l text-white p-3 hover:cursor-pointer hover:text-(--color-text-hovered) hover:dark:text-(--color-text-hovered-dark)">Sign Up</button>
			</nav>
		</div>
	{/if}
</header>

<div class="h-32"></div>

{@render children()}
