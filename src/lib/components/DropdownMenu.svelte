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
        left: 50%;
        padding-top: 20px;
        transform: translateX(-50%);
        z-index: -1;
    }

    div:hover :global(.content) {
        display: flex;
    }
</style>