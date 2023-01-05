<script>
    import '../styles.css'
    import Menu from "./Menu.svelte";
    import { clickToCopy } from "./clickToCopy.js"

    let code = [
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
    
    $: isMobile = innerWidth*1.33 <= innerHeight
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

<svelte:window on:copysuccess={copySuccess} on:copyerror={copyError} bind:innerWidth bind:innerHeight/>

<Menu></Menu>
<div class={div_class}>

    {#if !isMobile}
        <img class="joe" src="me1.png" alt="Joe"/>
    {/if}
    <div>   
        <ul>
            <li class="item">
                <h1>
                    Projects
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
                    Tech Stack
                </h1> 
            </li>
            <li class="item">
                <a href={"https://go.dev/doc/effective_go"}>
                    <i class="fa-brands fa-golang"></i>
                    <span>
                        Golang
                    </span>
                </a>
            </li>
            <li class="item">
                <a href={"https://svelte.dev/tutorial/basics"}>
                    <img class="svelte" src="svelte_red.jpg" alt="svelte icon"/>
                    <span>
                        Svelte/Sveltekit
                    </span>
                </a>
            </li>
            <li class="item">
                <a href={"https://docs.docker.com/reference/"}>
                    <i class="fa-brands fa-docker"></i>
                    <span>
                        Docker
                    </span>
                </a>
            </li>
            <li class="item">
                <a href={"https://docs.docker.com/reference/"}>
                    <i class="fa-solid fa-dharmachakra"></i>
                    <span>
                        Kubernetes
                    </span>
                </a>
            </li>
            <li class="item">
                <a href={"https://docs.python.org/3.12/library/index.html"}>
                    <i class="fa-brands fa-python"></i>
                    <span>
                        Python
                    </span>
                </a>
            </li>
            <li class="item">
                <a href={"https://docs.python.org/3.12/library/index.html"}>
                    <img class="scala" src="scala2.png" alt="scala icon"/>
                    <span>
                        Scala
                    </span>
                </a>
            </li>
            <li class="item">
                <h1>
                    Crypto
                </h1> 
            </li>
            <li class="item">
                <i class="fa-brands fa-ethereum"></i>
                <p use:clickToCopyWrapper>{eth}</p>
                {#if eth_copy}
                    <p class="copied">✓</p>
                {/if}
            </li>
            <li class="item">
                <i class="fa-brands fa-bitcoin"></i>
                <p use:clickToCopyWrapper>{btc}</p>
                {#if btc_copy}
                    <p class="copied">✓</p>
                {/if}
            </li>
        </ul>
    </div>
</div>

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

    .joe {
        margin: 0;
        padding: 20px;
        width: 200px;
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
    }

    .fa-golang {
        margin-right: 1px;
        color: #00aed9;
    }

    .fa-docker {
        margin-left: 1px;
        color: #2497ed
    }

    .fa-dharmachakra {
        margin-left: 2px;
        margin-right: 3px;
        color: #2e6ce6
    }

    .svelte {
        padding-left: 5px;
        padding-right: 3px;
        width: 13px;
        color: #ff3c00
    }

    .fa-python {
        padding-left: 3px;
        padding-right: 3px;
    }

    .scala {
        padding-left: 4px;
        padding-right: 3px;
        width: 13px;
        color: #ff3c00
    }

    span {
        color: black;
    }

    span:hover {
        color: #878787;
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

    p {
        font-weight: 100;
        font-size: 12px;
    }

    p:hover {
        color: #878787;
    }

    .copied {
        margin-left: 4px;
    }

</style>
