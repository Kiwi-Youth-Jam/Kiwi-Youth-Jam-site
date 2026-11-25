<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import DropdownMenu from '$lib/components/DropdownMenu.svelte';
	import DropdownMenuItem from '$lib/components/DropdownMenuItem.svelte';

	import '../app.css';

	let { children } = $props();

	let menuOpen = $state(false);

	class NavbarLinkCtx {
		text?: string;
		href?: string;
	}

	class NavbarDropdownCtx {
		text?: string;
		navbarChildren?: NavbarLink[];
	}

	class NavbarLink {
		text?: string;
		href?: string;

		constructor(ctx: NavbarLinkCtx={}) {
			this.text = ctx.text;
			this.href = ctx.href;
		}
	}

	class NavbarDropdown {
		text?: string;
		navbarChildren?: NavbarLink[];

		constructor(ctx: NavbarDropdownCtx={}) {
			this.text = ctx.text;
			this.navbarChildren = ctx.navbarChildren;
		}
	}

	const navBar = [
		new NavbarDropdown({text: "About", navbarChildren: [
			new NavbarLink({text: "About us", href: "/about"}),
			new NavbarLink({text: "Contact us", href: "/contact"}),
			new NavbarLink({text: "The team", href: "/team"}),
			new NavbarLink({text: "Sponsors", href: "/sponsors"})
		]}),

		new NavbarDropdown({text: "Events", navbarChildren: [
			new NavbarLink({text: "Our past events", href: "/events"}),
			new NavbarLink({text: "Schedule", href: "/schedule"}),
			new NavbarLink({text: "Game Showcase", href: "/games"}),
			new NavbarLink({text: "Media", href: "/media"})
		]}),

		new NavbarDropdown({text: "The boring but important stuff", navbarChildren: [
			new NavbarLink({text: 'Privacy policy', href: '/privacy'}),
			new NavbarLink({text: 'Code of conduct', href: '/codeofconduct'}),
			new NavbarLink({text: 'Safeguarding', href: '/safeguarding'})
		]}),

		new NavbarDropdown({text: 'For parents', navbarChildren: [
			new NavbarLink({text: 'Safeguarding', href: '/safeguarding'}),
			new NavbarLink({text: 'For parents', href: '/parents'}),
			new NavbarLink({text: 'In the event of an emergency', href: '/emergency'}),
			new NavbarLink({text: 'FAQ', href: '/faq'})
		]}),

		new NavbarLink({text: 'FAQ', href: '/faq'}),
		new NavbarLink({text: "Sponsors", href: "/sponsors"})
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
	<div class="py-2 text-center bg-(--color-nav) dark:bg-(--color-nav-dark) text-(--color-text-primary) rounded-xl flex justify-evenly items-center backdrop-blur-xl md:px-10 relative z-10">
		<a href="/" class="font-logo text-3xl md:text-4xl hover:text-(--color-text-hover-dark) hover:dark:text-(--color-text-hover-dark)">KIWI YOUTH JAM</a>

		<nav class="hidden md:flex flex-row gap-6 text-l font-display">
			{#each navBar as navItem}
				{#if navItem instanceof NavbarLink}
					<a href={navItem.href} class="hover:text-(--color-text-hovered) select-none hover:dark:text-(--color-text-hovered-dark) transition">{navItem.text}</a>
				{/if}

				{#if navItem instanceof NavbarDropdown}
					<DropdownMenu>
						<span class="hover:text-(--color-text-hovered) select-none hover:dark:text-(--color-text-hovered-dark) transition">{navItem.text}</span>

						<div class='content bg-(--color-nav-secondary) dark:bg-(--color-nav-secondary-dark) text-left shadow-2xl px-3 pb-3 rounded-b-xl flex-col gap-3 min-w-max'>
							{#each navItem.navbarChildren as dropdownItem}
								<DropdownMenuItem text={dropdownItem.text} href={dropdownItem.href} />
							{/each}
						</div>
					</DropdownMenu>
				{/if}
			{/each}
		</nav>

        <div class="flex items-center">
            <button class="md:hidden font-display text-2xl p-2 hover:text-(--color-text-hovered) hover:dark:text-(--color-text-hovered-dark) transition" onclick={() => menuOpen = !menuOpen} aria-label="Toggle navigation menu" aria-expanded={menuOpen}>{menuOpen ? '✕' : '☰'}</button>

            <button class="hidden md:block font-display text-l text-white p-3 hover:cursor-pointer hover:text-(--color-text-hovered) hover:dark:text-(--color-text-hovered-dark)">Sign Up</button>
        </div>
	</div>

	{#if menuOpen}
		<div class="md:hidden mt-2 bg-(--color-nav) dark:bg-(--color-nav-dark) backdrop-blur-xl rounded-xl p-4 text-light font-display text-md relative z-10">
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
