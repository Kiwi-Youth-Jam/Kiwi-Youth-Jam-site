<script>
    const { children, grid='grid-cols-3' } = $props();
</script>

<div class="flex flex-col gap-8 md:grid {grid} justify-evenly">
    {@render children?.()}
</div>