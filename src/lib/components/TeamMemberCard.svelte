<script>
    const { name, image, description } = $props();
</script>

<div class="flex items-center text-center flex-col gap-2 bg-(--color-primary) dark:bg-(--color-primary-dark) rounded-4xl py-3 px-4 shadow-xl">
    <h2 class="text-4xl font-bold">{name}</h2>
    <img class="rounded-4xl" src="{image}" alt="Image of {name}" width="300px"/>
    <p class="text-1xl">{description}</p>
</div>