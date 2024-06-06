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
        <figure>
            <img src={img.source} alt={img.cap} />
            {#if img.cap}
                <figcaption>{img.cap}</figcaption>
            {/if}
        </figure>
    {/each}
</div>

<style>
    figcaption {
        font-size: 0.75rem;
        color: #9a9a9a;
        font-family: "Inter", sans-serif;
        margin-bottom: 1rem;
    }

    figure {
        margin: 1.25rem 0 0 0;
    }
</style>
