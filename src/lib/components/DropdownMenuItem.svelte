<script>
    let { text, href } = $props();
</script>

<a href={href} class="hover:text-(--color-text-hovered) select-none hover:dark:text-(--color-text-hovered-dark) transition">{text}</a>