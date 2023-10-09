<script>
    export let data;
</script>

<div class="elem" id={data.path}>
    <h1>{data.meta.title}</h1>
</div>

<div class="elem">
    <div>
        {@html data.text}
    </div>
</div>

<div>
    {#each data.meta.media as img, idx}
        <img src={img} alt="Cover Images" />
    {/each}
</div>
