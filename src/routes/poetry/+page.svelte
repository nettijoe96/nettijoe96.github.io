<script>
    import '../../styles.css'
	import Menu from '../Menu.svelte';
    import { base } from "$app/paths";

    let poems = [
        //"nft_link": "TODO",
        //"date": "TODO"
        {
            name: "A Boy Sits Upon A Tower",
            route: "poetry/a-boy-sits-upon-a-tower"
        },
        {
            name: "A Door For Change",
            route: "poetry/a-door-for-change"
        },
        {
            name: "Back!",
            route: "poetry/back!"
        },
        {
            name: "Forgive",
            route: "poetry/forgive"
        },
        {
            name: "Home",
            route: "poetry/home"
        },
        {
            name: "Peach Picking",
            route: "poetry/peach-picking"
        },
        {
            name: "Reconciliation",
            route: "poetry/reconciliation"
        },
        {
            name: "Stoic Haikus",
            route: "poetry/stoic-haikus"
        },
        {
            name: "The Matchbox",
            route: "poetry/the-matchbox"
        },
        {
            name: "To Dance",
            route: "poetry/to-dance"
        }
    ]
</script>

<Menu></Menu>
<div>
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
        color: black;
        font-family: 'Inter', sans-serif;
        list-style: none
    }

    /* li:hover {
        background-color: #B694FF;
    } */

    a {
        font-weight: 100;
        text-decoration: none;
    }

    span {
        color: black;
    }

    span:hover {
        color: #878787;
    }


</style>
