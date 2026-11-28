<script>
    const { name='', image, description='', padding='py-1.5 pb-1 px-2' } = $props();
</script>

<div class="flex items-center text-center flex-col gap-2 bg-(--color-primary) dark:bg-(--color-primary-dark) rounded-4xl {padding} shadow-xl text-(--color-text-primary) dark:text-(--color-text-primary-dark)">
    <span class="text-4xl font-[1000] mb-1 mt-1">{name}</span>
    <img class="rounded-4xl" src="{image}" alt="Image of {name}" width="300px"/>
    <span class="text-1xl">{description}</span>
</div>