<script lang="ts">
    import remarkParse from 'remark-parse'
    import remarkRehype from 'remark-rehype'
    import rehypeStringify from 'rehype-stringify'
    import { unified } from 'unified'

    import { onMount } from 'svelte';

    let html = $state("Loading...");

    onMount(async () => {
        const md_req = await fetch('/api/get_esp?tab=1');
        const md = await md_req.text();

        html = String(await unified().use(remarkParse).use(remarkRehype).use(rehypeStringify).process(md));
    });
</script>

<h2 class="text-(--color-text-secondary) dark:text-(--color-text-secondary-dark) text-6xl font-display text-center font-logo md-4">Kiwi Youth Jam Code of Conduct</h2>

<section class="rounded-4xl bg-(--color-primary) bg-(--color-primary-dark) text-(--color-text-secondary) dark:text-(--color-text-secondary-dark) flex flex-col gap-4 doc-content mx-[10vw] min-[768px]:mx-[20vw] min-[1100px]:mx-[25vw] p-6">
    {@html html}
</section>

<style>
    .doc-content :global(h1), .doc-content :global(h2), .doc-content :global(h3), .doc-content :global(h4), .doc-content :global(h5), .doc-content :global(h6) {
        font-size: revert;
        font-weight: revert;
        margin: revert;
    }

    .doc-content :global(ul) {
        list-style-type: disc;
        padding-left: 1.5rem;
    }
</style>