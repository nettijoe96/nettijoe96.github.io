<script>
    import '../../styles.css'
    import Menu from "../Menu.svelte";

    let poems = [
        //"nft_link": "TODO",
        //"date": "TODO"
        {
            name: "Zero-sum Schelling Data Oracles",
            link: "https://medium.com/@joenetti/zero-sum-schelling-data-oracles-cb9c7105c2c0"
        },
        {
            name: "Pietrzak Verifiable Delay Functions",
            link: "https://medium.com/@joenetti/pietrzak-verifiable-delay-functions-f5683131882b"
        },
        {
            name: "AI and Human Extinction",
            link: "https://steemit.com/anarchism/@ai-guy/3gjiju-killer-robots-artificial-intelligence-and-human-extinction"
        },
        {
            name: "Learn How To Play Go",
            link: "https://steemit.com/gaming/@nettijoe96/learn-how-to-play-go-the-world-s-oldest-game"
        },
        {
            name: "Psilocybin and Depression",
            link: "https://steemit.com/science/@brain-man/new-study-shrooms-helps-depression"
        }
    ]
</script>

<Menu></Menu>
<div>
    <ul>
        {#each poems as {name, link}, i}
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
