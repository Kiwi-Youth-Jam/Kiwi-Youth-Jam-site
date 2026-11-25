<script>
    const { children } = $props();
</script>

<div class="flex flex-col gap-8 md:grid grid-cols-3 justify-evenly">
    {@render children?.()}
</div>