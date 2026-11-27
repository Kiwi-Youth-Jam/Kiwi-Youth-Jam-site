<script lang="ts">
    import { onMount } from 'svelte';
    import Header from '$lib/components/Header.svelte';
    import Markdown from '$lib/components/Markdown.svelte';

    let md = $state('');

    onMount(async () => {
        const md_req = await fetch('/api/get_esp?tab=0');
        md = await md_req.text();
    });
</script>

<Header text="Kiwi Youth Jam Privacy Policy" />
<Markdown class="text-(--color-text-secondary) dark:text-(--color-text-secondary-dark) shadow-xl rounded-4xl bg-(--color-primary) bg-(--color-primary-dark) mx-[10vw] min-[768px]:mx-[20vw] min-[1100px]:mx-[25vw] px-4" md={md} />