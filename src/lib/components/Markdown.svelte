<script>
    import remarkParse from 'remark-parse';
    import remarkRehype from 'remark-rehype';
    import rehypeRaw from 'rehype-raw';
    import rehypeSanitize from 'rehype-sanitize';
    import rehypeStringify from 'rehype-stringify';
    import { unified } from 'unified'

    const { md, class: className = "" } = $props();
    let html = $derived(unified().use(remarkParse).use(remarkRehype, { allowDangerousHtml: true }).use(rehypeRaw).use(rehypeSanitize).use(rehypeStringify).process(md).then(result => String(result)));
</script>

<section class="{className} text-(--color-text-secondary) dark:text-(--color-text-secondary-dark) flex flex-col gap-4 doc-content">
    {#await html}
        <span>Loading...</span>
    {:then content}
        {@html content}
    {:catch error}
        <span>Failed to render Markdown: {error.message}</span>
    {/await}
</section>

<style>
    .doc-content :global(h1), .doc-content :global(h2), .doc-content :global(h3), .doc-content :global(h4), .doc-content :global(h5), .doc-content :global(h6) {
        font-size: revert;
        font-weight: revert;
        margin: revert;
        overflow-wrap: anywhere;
        word-break: normal;
        box-sizing: border-box;
    }

    .doc-content :global(*) {
        max-width: 100%;
        box-sizing: border-box;
    }

    .doc-content :global(pre) {
        max-width: 100%;
        overflow-x: auto;
        white-space: pre;
    }

    .doc-content :global(ul) {
        list-style-type: disc;
        padding-left: 1.5rem;
    }
</style>