<script>
    const { name, image, description } = $props();
</script>

<div class="flex items-center text-center flex-col gap-2 bg-(--color-primary) dark:bg-(--color-primary-dark) rounded-4xl py-2 px-5 shadow-xl text-(--color-text-primary) dark:text-(--color-text-primary-dark)">
    <span class="text-4xl font-[1000] mb-1">{name}</span>
    <img class="rounded-4xl" src="{image}" alt="Image of {name}" width="330px"/>
    <p class="text-1xl">{description}</p>
</div>