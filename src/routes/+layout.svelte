<script lang="ts">
    import favicon from '$lib/assets/favicon.svg';
    import '../app.css';

    let { children } = $props();

	const navBar = [
		{text: "[Home]", href: "../#about"},
		{text: "[Home]", href: "/"},
		{text: "[Home]", href: "/"},
	]
</script>

<svelte:head>
    <title>Kiwi Youth Jam</title>
    <link rel="icon" href={favicon} />
</svelte:head>

<header class="py-3 px-3">
    <div class="py-6 bg-secondary text-light rounded-xl flex justify-between items-center px-10">
        <h1 class="font-logo text-6xl"> KIWI YOUTH JAM </h1>
        
        <nav class="flex text-2xl font-display">
			{#each navBar as navItem}
            	<a href="{navItem.href}" class="hover:text-blue-950 px-3 transition">
            	   {navItem.text}
				</a>
			{/each}
        </nav>

         <a href="/signup" class="font-display text-xl inline-block bg-black p-3 rounded-xl hover:bg-blue-950"> Sign Up </a>
    </div>
</header>

{@render children()}
