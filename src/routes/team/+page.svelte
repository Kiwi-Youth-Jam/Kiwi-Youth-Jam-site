<script lang="ts">
    const teamMembers = [
        {
            name: "Jai Janse",
            image: "images/IMG_9867.JPG",
            description: "Some description that I'll get the person themselves to write"
        },
        {
            name: "Brendan Laking",
            image: "images/IMG_9867.JPG",
            description: "Some description that I'll get the person themselves to write"
        },
        {
            name: "John Barrow",
            image: "images/IMG_9867.JPG",
            description: "Some description that I'll get the person themselves to write"
        },
        {
            name: "Liam Mitchell",
            image: "images/IMG_9867.JPG",
            description: "Some description that I'll get the person themselves to write"
        }
    ];
</script>


<div class="margin-y-20">
	<h2 class="text-8xl font-display text-center font-logo">The Team</h2>
</div>
<br>

<div class="flex justify-center bg-secondary text-xl">
	<div class="text-light p-10 max-w-7xl">
        <div class="grid grid-cols-2 gap-8 text-center font-bold">
        {#each teamMembers as item}
            <div>
                <img src={item.image} alt={item.name} class="mx-auto mb-8 rounded-lg shadow-lg">
                <p class="text-3xl">{item.name}</p>
                <p>{item.description}</p>
            </div>
        {/each}
        </div>
    </div>
</div>