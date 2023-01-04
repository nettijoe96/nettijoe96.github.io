<script>
    import '../styles.css'
    import Menu from "./Menu.svelte";

    let blogs = [
        {
            name: "sveltekit static website",
            link: "https://github.com/nettijoe96/nettijoe96.github.io"
        },
        {
            name: "lightning network simulation",
            link: "https://github.com/rustyrussell/million-channels-project"
        },
        {
            name: "JWT c-lightning plugin",
            link: "https://github.com/nettijoe96/jwt-factory"
        },
        {
            name: "graphql c-lightning plugin",
            link: "https://github.com/nettijoe96/c-lightning-graphql"
        },
        {
            name: "indexed merkle tree",
            link: "https://github.com/nettijoe96/BM-BGP/tree/master/indexedMerkleTree"
        }
    ]
</script>

<Menu></Menu>
<div>
    <ul>
        {#each blogs as {name, link}, i}
            <li>
                <a href={link}>
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
