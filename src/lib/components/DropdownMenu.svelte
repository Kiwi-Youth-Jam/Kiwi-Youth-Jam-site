<script>
    let { children } = $props();
</script>

<div class="relative">
    {@render children?.()}
</div>

<style>
    div :global(.content) {
        display: none;
        position: absolute;
        padding-top: 20px;
        z-index: -1;
    }

    div:hover :global(.content) {
        display: flex;
    }

    div :global(.content *) {
        max-width: 180px;
    }
</style>