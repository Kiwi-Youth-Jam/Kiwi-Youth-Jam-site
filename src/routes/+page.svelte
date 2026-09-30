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
	
</script>

<style>
    @reference "../app.css";
    :global(body) {
        @apply bg-light;
    }
	:global(html) {
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
			class="font-display text-4xl text-black p-3 hover:cursor-pointer hover:text-secondary">
			Sign up for the Jam!
		</button>
	</div>

	{#each iconPositions as pos}
		<img 
			src={favicon} 
			alt="Kiwi Youth Jam Icon"
			height="100" 
			width="100" 
			class="absolute {pos.y} {pos.x}"
		/>
	{/each}
</div>


<section id="about" class="flex justify-center bg-secondary text-xl">
	<div class="text-light p-10 max-w-7xl">
	    <h2 class="text-5xl font-display text-center">What is Kiwi Youth Jam?</h2>
		<br>

        <p class="font-bold mb-8">
            Kiwi Youth Jam is an organisation, founded in Wellington that runs events to help young
            people across New Zealand get into game development. 
        </p>

    </div>
</section>
<section id="contacts" class="flex justify-center bg-light text-xl">
	<div class="text-black p-10 max-w-7xl">
	    <h2 class="text-5xl font-display text-center">Contacts?</h2>
		<br>
    </div>
</section>
