<script>
    export let data;
    console.log(data);
</script>

<div class="elem">
    <div>
        <h1>{data.meta.title}</h1>
        {@html data.text}
    </div>
</div>

{#each data.meta.media as img}
    <div class="elem">
        <img src={img} alt="Cover Images" />
    </div>
{/each}
