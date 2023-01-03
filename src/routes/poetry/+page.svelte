<script>
    import '../../styles.css'

    // orange FFA755
    // purple B694FF
    // green 52CC66

    let poems = [
        //"nft_link": "TODO",
        //"date": "TODO"
        {
            name: "A Boy Sits Upon A Tower",
            route: "/a-boy-sits-upon-a-tower"
        },
        {
            name: "A Door For Change",
            route: "/a-door-for-change"
        },
        {
            name: "Back!",
            route: "/back!"
        },
        {
            name: "Forgive",
            route: "/forgive"
        },
        {
            name: "Home",
            route: "/home"
        },
        {
            name: "Peach Picking",
            route: "/peach-picking"
        },
        {
            name: "Reconciliation",
            route: "/reconciliation"
        },
        {
            name: "Stoic Haikus",
            route: "/stoic-haikus"
        },
        {
            name: "The Matchbox",
            route: "/the-matchbox"
        },
        {
            name: "To Dance",
            route: "/to-dance"
        }
    ]
</script>

<div>
    <h1>Poetry</h1>

    {#each poems as {name, route}, i}
        <h2>
            <a style="text-decoration:none" href={route}>{name}</a>
        </h2>
    {/each}
</div>

<style>
    /* div {
        background: rgb(255,167,85);
        background: linear-gradient(180deg, rgba(255,167,85,1) 0%, rgba(182,148,255,1) 50%, rgba(82,204,102,1) 100%);
    } */

    h1 {
        font-weight: bold;
        margin-left: 42.5%;
        width: 15%;
        text-align: center;
        margin-top: 3%;
        margin-bottom: 0%;
        padding-bottom: 1px;
        border-bottom: 1px solid #eee;
        border-bottom-color: rgb(238, 238, 238);
        color: black;
        font-family: 'Inter', sans-serif;
    }

    h2 {
        margin-left: 35%;
        width: 50%;
        text-align: left;
        color: black;
        font-family: 'Inter', sans-serif;
    }

    a {
        color: black;
    }

</style>
