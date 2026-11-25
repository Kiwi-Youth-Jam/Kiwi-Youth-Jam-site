<script lang="ts">
    import { onMount } from 'svelte';
    import Header from '$lib/components/Header.svelte';
    import Markdown from '$lib/components/Markdown.svelte';

    import { CDN_URL } from '$app/env/public';

    let md = $state('');

    onMount(async () => {
        const md_req = await fetch(`${CDN_URL}/pages/contact.md`);
        md = await md_req.text();
    });
</script>

<Header text="Contact us" />
<Markdown md={md} />