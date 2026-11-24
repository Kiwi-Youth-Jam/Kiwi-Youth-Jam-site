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
        top: calc(100% + 20px);
        transform: translateX(-50%);
    }

    div:hover :global(.content) {
        display: flex;
    }
</style>