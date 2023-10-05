<script>
    import Header from "./Header.svelte";
</script>

<div>
    <div class="elem" id="header-image" />
</div>
<Header />

<style>
    div {
        background: linear-gradient(gainsboro 0%, white 50%);
    }

    .elem {
        width: 100vw;
        height: 70vh;
        background-image: url("./cover.png");
        background-size: 80% auto;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
    }

    @media only screen and (max-width: 900px) {
        .elem {
            height: 40vh;
        }
    }
</style>
