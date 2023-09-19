<script>
    import Header from "./Header.svelte";
    export let items;
</script>

<Header />
{#if items.length > 0}
    <section class="blocks">
        <div class="elem">
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </div>
        {#each items as item}
            <div class="elem">
                <div class="head">
                    <p class="label">
                        {item["@type"][1].split(":")[1].replaceAll("_", " ")}
                    </p>
                    <h1>{item["o:title"]}</h1>
                    <img
                        src={item.thumbnail_display_urls.large}
                        alt="Cover Items"
                    />
                </div>
            </div>
        {/each}
    </section>
{/if}

<style>
    section {
        margin-bottom: 100px;
    }

    .head {
        background: #f2f2f2;
        padding: 8px;
    }

    h1 {
        font-size: 1.2rem;
        line-height: 1;
        text-align: left;
        margin: 0;
    }

    .label {
        font-size: 0.875rem;
        width: fit-content;
        text-transform: capitalize;
        margin: 0;
    }
</style>
