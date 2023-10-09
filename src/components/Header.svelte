<header>
    <h1>Restaging Fashion</h1>

    <nav>
        <div>About the project</div>
        <div>Visual interface</div>
        <div>Catalogue</div>
    </nav>
</header>

<style>
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

    h1 {
        margin: 0;
        font-size: 1rem;
        font-family: "Inter", sans-serif;
        font-weight: 500;
    }
</style>
