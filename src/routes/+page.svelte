<script>
    import { onMount } from "svelte";
    import Intro from "@components/Intro.svelte";
    import Posts from "@components/Posts.svelte";

    export let data;

    let items = [];
    export const api =
        "https://uclab.fh-potsdam.de/refa/api/items?item_set_id=48646&per_page=3";
    onMount(async () => {
        const response = await fetch(api);
        const queryData = await response.json();

        items = queryData
            .filter((d) => d.thumbnail_display_urls?.large)
            .sort(() => Math.random() - 0.5)
            .slice(0, 3);
    });
</script>

{#if items.length > 0}
    <Intro {items} />
    <div>links</div>

    <div class="blocks">
        {#each data.posts as text}
            <Posts data={text} />
        {/each}
    </div>
{/if}
