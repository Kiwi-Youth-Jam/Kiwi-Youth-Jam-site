<script lang="ts">
    const sponsors = [
        {
            name: "Company 1",
            logo: "images/IMG_9867.JPG",
        },
        {
            name: "Company 2",
            logo: "images/IMG_9867.JPG",
        },
        {
            name: "Company 3",
            logo: "images/IMG_9867.JPG",
        },
        {
            name: "Company 4",
            logo: "images/IMG_9867.JPG",
        }
    ];
</script>


<div class="margin-y-20">
	<h2 class="text-8xl font-display text-center font-logo">The Sponsors</h2>
</div>
<br>

<div class="flex justify-center bg-secondary text-xl">
	<div class="text-light p-10 max-w-7xl">
        <div class="grid grid-cols-2 gap-8 text-center font-bold">
        {#each sponsors as item}
            <div>
                <img src={item.logo} alt={item.name} class="mx-auto mb-8 rounded-lg shadow-lg">
                <p class="text-3xl">{item.name}</p>
            </div>
        {/each}
        </div>
    </div>
</div>