<script lang="ts">
    import '../styles.css'
    import Preload from "./Preload.svelte"
    import Menu from "./Menu.svelte";
    import { clickToCopy } from "./clickToCopy.js"
    import { fade } from 'svelte/transition';
    import { flip } from 'svelte/animate';

    $: eth_copy = false;
    $: btc_copy = false;
    let eth = "0xF0cbDbf65380D0f7784a1E2723D13E2D6760264f"
    let btc = "bc1qd542h6rgvvzqneq6tyq400wyfkf0d7af6whzhs"

    let innerWidth = 0
    let innerHeight = 0
    
    $: isMobile = innerWidth <= 500
    $: div_class = (isMobile) ? "top-div-mobile" : "top-div-web"

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

    function preload(src) {
        return new Promise(function(resolve) {
            let img = new Image()
            img.onload = resolve
            img.src = src
        })
    }

    let unique = {}
    function restart() {
        unique = {} // every {} is unique, {} === {} evaluates to false
    }

</script>

<svelte:window bind:innerWidth bind:innerHeight on:copysuccess={copySuccess} on:copyerror={copyError}/>
<Preload></Preload>

{#if innerWidth != 0}
    <Menu></Menu>
    {#await preload("me1.png") then _}
        <div class="{div_class}">
            {#if !isMobile}
                    <figure>
                        <div class="card-web">
                            <div class="card-image">
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
                    {#if isMobile}
                        <li class="item">
                            <figure>
                                <div class="card-mobile">
                                    <div class="card-image">
                                        <img in:fade class="joe" src="me1.png" alt="Joe"/>
                                        <figcaption>
                                            Joe in front of a brick wall
                                        </figcaption>
                                    </div>
                                </div>
                            </figure>
                        </li>
                    {/if}
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
                            Code
                        </h1> 
                    </li>
                    <li class="item">
                        <a href="https://github.com/nettijoe96/bloom">
                            <span>
                                <i class="fa-brands fa-golang"></i>
                                go bloom filter package
                            </span>
                        </a>
                    </li>
                    <li class="item">
                        <a href="https://github.com/nettijoe96/nettijoe96.github.io">
                            <span>
                                <img class="svelte" src="svelte_red.jpg" alt="svelte icon"/>
                                sveltekit static website
                            </span>
                        </a>
                    </li>
                    <li class="item">
                        <a href="https://github.com/rustyrussell/million-channels-project">
                            <span>
                                <i class="fa-brands fa-python"></i>
                                lightning network simulation
                            </span>
                        </a>
                    </li>
                    <li class="item">
                        <a href="https://github.com/nettijoe96/jwt-factory">
                            <span>
                                <i class="fa-brands fa-golang"></i>
                                JWT c-lightning plugin
                            </span>
                        </a>
                    </li>
                    <li class="item">
                        <a href="https://github.com/nettijoe96/c-lightning-graphql">
                            <span>
                                <i class="fa-brands fa-golang"></i>
                                graphql c-lightning plugin
                            </span>
                        </a>
                    </li>
                    <li class="item">
                        <a href="https://github.com/nettijoe96/BM-BGP/tree/master/indexedMerkleTree">
                            <span>
                                <i class="fa-brands fa-python"></i>
                                indexed merkle tree
                            </span>
                        </a>
                    </li>
                    <li class="item">
                        <h1>
                            Crypto
                        </h1> 
                    </li>
                    <li class="item">
                        <span>
                            <i class="fa-brands fa-ethereum"></i>
                            <p class="addr" use:clickToCopyWrapper>{eth}</p>
                            {#if eth_copy}
                                <p class="copied">✓</p>
                            {/if}
                        </span>
                    </li>
                    <li class="item">
                        <span>
                            <i class="fa-brands fa-bitcoin"></i>
                            <p class="addr" use:clickToCopyWrapper>{btc}</p>
                            {#if btc_copy}
                                <p class="copied">✓</p>
                            {/if}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    {/await}
{/if}

<style>

    div {
        text-align: center;
        font-family: 'Inter', sans-serif;
    }

    .top-div-web {
        display: flex;
        justify-content: center;
    }

    .top-div-mobile {
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
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

    /* .item {
        padding: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
    } */

    li {
        padding: 5px;
        list-style: none
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
        display: inline;
        cursor: pointer;
    }

    .addr:hover {
        color: #878787;
    }

    .copied {
        font-size: 12px;
        margin-left: 2px;
        display: inline;
    }

    figure {
        text-align: center;
        font-size: .85rem;
    }

    .card-mobile {
        width: 200px;
        margin: auto;
        margin-top: 20px;
        margin-bottom: 0px;
        border-radius: .4rem;
        box-shadow: 0 4px 8px rgba(0,0,0,0.23),0 1px 3px rgba(0,0,0,0.08),0 6px 12px rgba(0,0,0,0.02);
        -webkit-transition: box-shadow .1s ease-in-out;
        transition: box-shadow .1s ease-in-out;
        background-color: white;
        color: black;
    }

    .card-web {
        width: 200px;
        margin: auto;
        margin-top: 20px;
        margin-right: 20px;
        border-radius: .4rem;
        box-shadow: 0 4px 8px rgba(0,0,0,0.23),0 1px 3px rgba(0,0,0,0.08),0 6px 12px rgba(0,0,0,0.02);
        -webkit-transition: box-shadow .1s ease-in-out;
        transition: box-shadow .1s ease-in-out;
        background-color: white;
        color: black;
    }

    .card-web > :last-child {
        border-bottom-right-radius: .4rem;
        border-bottom-left-radius: .4rem;
    }
    .card-web > :first-child {
        border-top-left-radius: .4rem;
        border-top-right-radius: .4rem;
    }

    .card-mobile > :last-child {
        border-bottom-right-radius: .4rem;
        border-bottom-left-radius: .4rem;
    }
    .card-mobile > :first-child {
        border-top-left-radius: .4rem;
        border-top-right-radius: .4rem;
    }

    .card-image > img {
        width: 200px;
        display: block;
        height: auto;
        border-radius: inherit;
    }
    .card-image {
        position: relative;
        text-align: center;
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
