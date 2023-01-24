<script>
    import '../../styles.css'
	import Menu from '../Menu.svelte';
    import { base } from "$app/paths";

    let poems = [
        //"nft_link": "TODO",
        //"date": "TODO"
        {
            name: "Stoic Haikus",
            route: "poetry/stoic-haikus"
        },
        {
            name: "Back!",
            route: "poetry/back!"
        },
        {
            name: "A Door For Change",
            route: "poetry/a-door-for-change"
        },
        {
            name: "The Matchbox",
            route: "poetry/the-matchbox"
        },
        {
            name: "To Dance",
            route: "poetry/to-dance"
        },
        {
            name: "Reconciliation",
            route: "poetry/reconciliation"
        },
        {
            name: "Peach Picking",
            route: "poetry/peach-picking"
        },
        {
            name: "Forgive",
            route: "poetry/forgive"
        },
        {
            name: "Home",
            route: "poetry/home"
        },
    ]

    import { theme } from "$lib/stores.js";

    $: isLight = $theme === 'light';
    $: themeClass = isLight ? "light" : "dark"

</script>

<Menu></Menu>
<div class="{themeClass}">
    <ul>
        {#each poems as {name, route}, i}
            <li>
                <a href={base}/{route}>
                    <span>{name}</span>
                </a>
            </li>
        {/each}
    </ul>
</div>

<style>

    div {
        text-align: center;
        height: 100vh;
    }

    ul {
        padding: 20px;
        text-align: left;
        display: inline-block;
    }

    li {
        padding: 5px;
        /* width: 50%; */
        text-align: left;
        font-family: 'Inter', sans-serif;
        list-style: none
    }

    a {
        font-weight: 100;
        text-decoration: none;
        color: inherit
    }

    span:hover {
        color: #878787;
    }

    .dark {
        background-color: black;
        color: white;
    }

</style>
