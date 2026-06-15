<script>

	import favicon from '$lib/assets/favicon.svg'; 

	const iconPositions = [
		{ top: 'top-1/4', left: 'left-1/8' },
		{ top: 'top-1/8', left: 'left-1/4' },
		{ top: 'top-3/4', left: 'left-1/8' },
		{ bottom: 'bottom-0', left: 'left-1/4' },
		{ top: 'top-1/4', right: 'right-1/8' },
		{ top: 'top-1/8', right: 'right-1/4' },
		{ top: 'top-3/4', right: 'right-1/8' },
		{ bottom: 'bottom-0', right: 'right-1/4' }
	];

	function handleSignUp() {
        //TODO: Handle Sign UP
	}
</script>

<style>
    @reference "../app.css";
    :global(body) {
        @apply bg-light;
    }
    html {
        scroll-behavior: smooth;
    }
</style>

<div class="relative flex justify-center h-[60vh] mb-20">
	<div class="flex flex-col justify-center items-center absolute top-[40%] text-center z-10">
		<h1 class="text-9xl font-logo">KIWI YOUTH JAM</h1>
		<h1 class="text-2xl font-display mb-10 max-w-2xl">
			Proudly building and supporting the next generation of New Zealand game developers.
		</h1>
		
		<button 
			on:click={handleSignUp}
			class="font-display text-2xl text-white inline-block bg-black p-6 m-15 rounded-xl hover:bg-blue-950 hover:cursor-pointer transition-colors">
			Sign Up
		</button>
	</div>

	{#each iconPositions as pos}
		<img 
			src={favicon} 
			alt="Kiwi Youth Jam Icon"
			height="100" 
			width="100" 
			class="absolute {pos.top || ''} {pos.bottom || ''} {pos.left || ''} {pos.right || ''}"
		/>
	{/each}
</div>


<section id="about" class="flex justify-center">
    <h1 class="text-5xl font-display mb-10 max-w-2xl">
        What is Kiwi Youth Jam
    </h1>
</section>