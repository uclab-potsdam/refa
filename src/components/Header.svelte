<header>
    <h2>Restaging Fashion</h2>

    <nav>
        <div
            on:click={(d) => {
                document.getElementById("/texts/0_approach").scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                });
            }}
            on:keypress={(d) => {
                document.getElementById("/texts/0_approach").scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                });
            }}
        >
            About the project
        </div>
        <div><a href="/" target="_blank">Visual interface</a></div>
        <div><a href="https://uclab.fh-potsdam.de/refa/s/pinacotheca/page/home" target="_blank">Catalogue</a></div>
    </nav>
</header>

<style>
    div {
        cursor: pointer;
    }
    
    a {
        text-decoration: none;
        color: black;
    }

    header {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        font-size: 1rem;
        font-family: "Inter", sans-serif;
        font-weight: 500;
        position: sticky;
        top: 0;
        z-index: 10;
        background: rgb(255, 255, 255);
        box-shadow: 1px 1px 6px 10px white;
        padding: 5px 10px 10px 10px;
        height: 10px;
    }

    @media only screen and (max-width: 900px) {
        header {
            padding: 5px 10px 30px 10px;
        }
    }
    nav {
        display: flex;
        gap: 20px;
    }

    h2 {
        margin: 0;
        font-size: 1rem;
        font-family: "Inter", sans-serif;
        font-weight: 500;
    }
</style>
