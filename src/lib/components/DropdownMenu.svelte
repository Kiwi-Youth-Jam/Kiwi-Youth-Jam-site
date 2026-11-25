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
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        z-index: -1;
    }

    div:hover :global(.content) {
        display: flex;
    }

    div :global(.content *) {
        max-width: 180px;
    }
</style>