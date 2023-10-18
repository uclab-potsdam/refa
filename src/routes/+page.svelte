<script>
    import Cover from "@components/Cover.svelte";
    import Posts from "@components/Posts.svelte";

    export let data;
</script>

<Cover />

<div class="blocks">
    {#each data.posts as text}
        <Posts data={text} />
    {/each}
</div>
