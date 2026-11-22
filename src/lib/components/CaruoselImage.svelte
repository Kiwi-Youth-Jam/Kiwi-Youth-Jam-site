<script>
    let { image } = $props();
</script>

<li class="flex-none basis-[var(--tile-w)] snap-start relative">
    <div class="block relative rounded-xl overflow-hidden no-underline">
        <span class="block relative w-full aspect-video overflow-hidden">
            <img src="{image}" alt="From CDN" />
        </span>
    </div>
</li>;