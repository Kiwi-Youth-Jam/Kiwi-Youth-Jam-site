<script lang="ts">
    import { onMount } from 'svelte';
    import Header from '$lib/components/Header.svelte';
    import Markdown from '$lib/components/Markdown.svelte';

    let md = $state('');

    onMount(async () => {
        const md_req = await fetch('/api/get_esp?tab=1');
        md = await md_req.text();
    });
</script>

<Header text="Kiwi Youth Jam Code of Conduct" />
<Markdown md={md} />