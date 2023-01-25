<script lang="ts">
    import '../styles.css'
    import Preload from "./Preload.svelte"
    import Menu from "./Menu.svelte";
    import { clickToCopy } from "./clickToCopy.js"
    import { fade } from 'svelte/transition';

    let code = [
        {
            name: "go bloom filter package",
            link: "https://github.com/nettijoe96/bloom"
        },
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

    $: eth_copy = false;
    $: btc_copy = false;
    let eth = "0xF0cbDbf65380D0f7784a1E2723D13E2D6760264f"
    let btc = "bc1qd542h6rgvvzqneq6tyq400wyfkf0d7af6whzhs"

    let innerWidth = 0
    let innerHeight = 0
    
    $: isMobile = innerWidth <= 500
    $: div_class = (isMobile) ? "div-mobile" : "div-web"

    let text = '';
	
	function copySuccess(event){
        if (event.detail == eth) {
            eth_copy = true
        } else if (event.detail == btc) {
            btc_copy = true
        }
		text = "Success!"
	}
	
	function copyError(event){
		text = `Error! ${event.detail}`
	}

    function clickToCopyWrapper(node, target) {
        clickToCopy(node, target)
    }

</script>

<svelte:window bind:innerWidth bind:innerHeight on:copysuccess={copySuccess} on:copyerror={copyError}/>
<Preload></Preload>

{#if innerWidth != 0}
    <Menu></Menu>
    <div class="{div_class}">
        {#if !isMobile}
                <figure>
                    <div class="card">
                        <div class="card_image">
                            <img in:fade class="joe" src="me1.png" alt="Joe"/>
                            <figcaption>
                                Joe in front of a brick wall
                            </figcaption>
                        </div>
                    </div>
                </figure>
        {/if}
        <div>   
            <ul>
                <li class="item">
                    <h1>About</h1>
                </li>
                <li class="item">
                    <p class="bio">My name is Joe Netti and I am backend software engineer. I am passionate about improving social media, privacy, governance, identity, and financial access with technology. I love music, poetry, biking and board games.</p>
                </li>
                <li class="item">
                    <h1>Info</h1>
                </li>
                <li class="item">
                    <a href="/resume">
                        <span>
                            <i class="fa-solid fa-file-lines"></i>
                            Resume
                        </span>
                    </a>
                </li>
                <li class="item">
                    <a href="https://github.com/nettijoe96">
                        <span>
                            <i class="fa-brands fa-github"></i>
                            Github
                        </span>
                    </a>
                </li>
                <li class="item">
                    <h1>
                        Tech Stack
                    </h1> 
                </li>
                <li class="item">
                    <a href={"https://go.dev/doc/effective_go"}>
                        <span>
                            <i class="fa-brands fa-golang"></i>
                            Golang
                        </span>
                    </a>
                </li>
                <li class="item">
                    <a href={"https://docs.python.org/3.12/library/index.html"}>
                        <span>
                            <i class="fa-brands fa-python"></i>
                            Python
                        </span>
                    </a>
                </li>
                <li class="item">
                    <a href={"https://docs.python.org/3.12/library/index.html"}>
                        <span>
                            <img class="scala" src="scala.png" alt="scala icon"/>
                            Scala
                        </span>
                    </a>
                </li>
                <li class="item">
                    <a href={"https://docs.docker.com/reference/"}>
                        <span>
                            <i class="fa-brands fa-docker"></i>
                            Docker
                        </span>
                    </a>
                </li>
                <li class="item">
                    <a href={"https://docs.docker.com/reference/"}>
                        <span>
                            <i class="fa-solid fa-dharmachakra"></i>
                            Kubernetes
                        </span>
                    </a>
                </li>
                <li class="item">
                    <a href={"https://svelte.dev/tutorial/basics"}>
                        <span>
                            <img class="svelte" src="svelte_red.jpg" alt="svelte icon"/>
                            Svelte/Sveltekit
                        </span>
                    </a>
                </li>
                <li class="item">
                    <h1>
                        Code
                    </h1> 
                </li>
                {#each code as {name, link}, i}
                    <li class="item">
                        <a href={link}>
                            <span>{name}</span>
                        </a>
                    </li>
                {/each}
                <li class="item">
                    <h1>
                        Crypto
                    </h1> 
                </li>
                <li class="item">
                    <i class="fa-brands fa-ethereum"></i>
                    <p class="addr" use:clickToCopyWrapper>{eth}</p>
                    {#if eth_copy}
                        <p class="copied">✓</p>
                    {/if}
                </li>
                <li class="item">
                    <i class="fa-brands fa-bitcoin"></i>
                    <p class="addr" use:clickToCopyWrapper>{btc}</p>
                    {#if btc_copy}
                        <p class="copied">✓</p>
                    {/if}
                </li>
            </ul>
        </div>
    </div>
{/if}

<style>

    div {
        text-align: center;
        font-family: 'Inter', sans-serif;
    }

    .div-web {
        display: flex;
        align-items: flex-start;
        text-align: center;
        justify-content: center;
    }

    .div-mobile {
        text-align: center;
    }

    ul {
        padding: 20px;
        padding-top: 0px;
        text-align: left;
        display: inline-block;
    }

    h1 {
        padding-top: 25px;
        padding-bottom: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .item {
        padding: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    a {
        font-weight: 100;
        text-decoration: none;
        color: inherit;
    }

    .bio {
        width: 300px;
        font-size: medium;
    }

    .fa-golang {
        margin-right: 1px;
        color: #00aed9;
    }

    .fa-docker {
        margin-left: 2px;
        color: #2497ed
    }

    .fa-dharmachakra {
        margin-left: 3px;
        margin-right: 3px;
        color: #2e6ce6
    }

    .svelte {
        padding-left: 5px;
        padding-right: 4px;
        width: 13px;
        color: #ff3c00
    }

    .fa-python {
        padding-left: 5px;
        padding-right: 3px;
        color: #551a8b;
    }

    .scala {
        padding-left: 6px;
        padding-right: 2px;
        width: 13px;
        color: #ff3c00
    }

    .fa-github {
        margin-left: 5px;
        margin-right: 1px;
    }

    .fa-file-lines {
        margin-left: 7px;
        margin-right: 3px;
    }

    .fa-bitcoin {
        margin-right: 7px;
        color: #f7931a
    }

    .fa-ethereum {
        margin-right: 10px;
        margin-left: 3px;
        color: #333333
    }

    .addr {
        font-weight: 100;
        font-size: 10px;
    }

    .addr:hover {
        color: #878787;
    }

    .copied {
        font-size: 12px;
        margin-left: 6px;
    }

    .card {
        margin-top: 20px;
        float:left;
        margin-right: 20px;
        border-radius: .4rem;
        box-shadow: 0 4px 8px rgba(0,0,0,0.23),0 1px 3px rgba(0,0,0,0.08),0 6px 12px rgba(0,0,0,0.02);
        -webkit-transition: box-shadow .1s ease-in-out;
        transition: box-shadow .1s ease-in-out;
        background-color: white;
        color: black;
    }

    .card > :last-child {
        border-bottom-right-radius: .4rem;
        border-bottom-left-radius: .4rem;
    }
    .card > :first-child {
        border-top-left-radius: .4rem;
        border-top-right-radius: .4rem;
    }
    .card_image {
        position: relative;
    }
    .card_image > img {
        width: 200px;
        display: block;
        height: auto;
        border-radius: inherit;
    }

    figcaption {
        font-size: .85rem;
    }

    .email {
        text-decoration: none;
    }
    
    span:hover {
        color: #878787;
    }

</style>
