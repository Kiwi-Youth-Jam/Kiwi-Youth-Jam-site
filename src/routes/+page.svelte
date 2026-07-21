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
			class="font-display text-2xl text-white inline-block bg-black p-6 m-15 rounded-xl hover:bg-blue-950 hover:cursor-pointer transition-colors">
			Join
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
	    <h2 class="text-4xl font-display mb-3">What is Kiwi Youth Jam?</h2>

        <p class="font-bold mb-8">
            Kiwi Youth Jam is an organisation that runs events to help young
            people across New Zealand get into game development. Our flagship
            event, the Kiwi Youth Jam, is a game-making competition known as a
            game jam, where participants create a game from scratch in a limited
            amount of time.
        </p>

        <h2 class="text-4xl font-display mb-8">How Can I Join?</h2>

        <section id="events">
            <h2 class="text-5xl font-display text-center">Events</h2>
			<h2 class="text-4xl font-display mb-3 text-center">Kiwi Youth Jam / Flagship</h2>
			<p class="font-bold italic mb-8 text-center">
				Insert Date / Time / Info
        	</p>
			<p class="font-bold mb-8">
        	    Kiwi Youth Jam is an organisation that runs events to help young
        	    people across New Zealand get into game development. Our flagship
        	    event, the Kiwi Youth Jam, is a game-making competition known as a
        	    game jam, where participants create a game from scratch in a limited
        	    amount of time.
        	</p>
        </section>
    </div>
</section>