<script>
    import '../../styles.css'
	import Menu from '../Menu.svelte';

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

<Menu></Menu>
<div>
    <ul>
        {#each poems as {name, route}, i}
            <li>
                <a href={route}>
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
