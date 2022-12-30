<script>
    let poems = [
        {
            name: "A Boy Sits Upon A Tower",
            route: "/a-boy-sits-upon-a-tower"
        },
        {
            name: "A Door For Change",
            route: "/a-door-for-change"
        },
        {
            name: "Peach Picking",
            route: "/peach-picking"
        },
    ]
</script>

<h1>Poetry</h1>

{#each poems as {name, route}, i}
<h3>
    <a href={route}>{name}</a>
</h3>
{/each}

<style>
    h1 {
        padding-bottom: .3em;
        font-size: 2em;
        border-bottom: 1px solid #eee;
        border-bottom-color: rgb(238, 238, 238);
    }
</style>
