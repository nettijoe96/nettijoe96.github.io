<script lang="ts">
    import { theme } from "$lib/stores.js";

    $: isLight = $theme === 'light';
    $: themeClass = isLight ? "light" : "dark"

    function toggleMode() {
        if (isLight) {
            document.documentElement.classList.add("dark");
            theme.set("dark")
        } else {
            document.documentElement.classList.remove("dark");
            theme.set("light")
        }
    }

    import '../styles.css'
    import { base } from "$app/paths";

    let innerWidth = 0
    let innerHeight = 0
    
    $: isMobile = innerWidth <= 500
</script>


<svelte:window bind:innerWidth bind:innerHeight />

{#if innerWidth != 0}
    <nav>
        <div class="menu-container {themeClass}">
            <ul class="menu">
                <!-- {#if isLight}
                    <li class="menu-item img-item">
                        <span>
                            <a href="{base}/">
                                <img src=/apple-touch-icon.png alt="go icon"/>
                            </a>
                        </span>
                    </li>
                {:else}
                    <li class="menu-item img-item">
                        <span>
                            <a href="{base}/">
                                <img src=/negative.png alt="go icon"/>
                            </a>
                        </span>
                    </li>  
                {/if} -->
                <l1 class="menu-item">
                    <a href="{base}/">
                        <span>about</span>
                    </a>
                </l1>
                <l1 class="menu-item">
                    <a href="{base}/blog">
                        <span>thoughts</span>
                    </a>
                </l1>
                <l1 class="menu-item">
                    <a href="{base}/code">
                        <span>software</span>
                    </a>
                </l1>
                <l1 class="menu-item">
                    <a href="{base}/poetry">
                        <span>poetry</span>
                    </a>
                </l1>
                <!-- {#if isMobile}
                    { #if isLight }
                        <l1 class="menu-item">
                            <button on:click={toggleMode}>
                                <span>
                                    <i class="fa-solid fa-toggle-off"></i>
                                </span>
                            </button>
                        </l1>
                    { :else } 
                        <l1 class="menu-item">
                            <button on:click={toggleMode}>
                                <span>
                                    <i class="fa-solid fa-toggle-on"></i>
                                </span>
                            </button>
                        </l1>
                    { /if }
                {:else}
                    { #if isLight }
                        <l1 class="menu-item last-item">
                            <button on:click={toggleMode}>
                                <span>
                                    <i class="fa-solid fa-toggle-off"></i>
                                </span>
                            </button>
                        </l1>
                    { :else } 
                        <l1 class="menu-item last-item">
                            <button on:click={toggleMode}>
                                <span>
                                    <i class="fa-solid fa-toggle-on"></i>
                                </span>                            
                            </button>
                        </l1>
                    { /if }
                {/if} -->
            </ul>
        </div>
    </nav>
{/if}

<style>

    img {
        vertical-align: middle;
        width: 50px;
        margin: 0;
        padding: 0;
    }

    .menu-item {
        margin: 10px 0;
        padding: 10px;
        list-style: none;
    } 

    .img-item {
        display: inline;
        margin: 0;
        width: 50;
        /* margin: 10px 0; */
        padding: 5px;
        list-style: none;
    }

    .last-item {
        margin-right: 40px;
    }

    nav {
        margin: 0;
        padding: 0;
        border: 0;
        /* background-color: #ffffff; */
        /* background-color: #FBFAF5; */
        background: #fbfbfb;
        box-shadow: 0 1px 1px rgba(0,0,0,.05),0 1px 1px rgba(0,0,0,.05);
    }

    
    div {
        border: none;
        color: #111;
        font-size: 18px;
    }

    .menu {
        margin-left: 0;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 20px;
        padding-bottom: 20px;

        text-align: center;
        font-family: 'Inter', sans-serif;
    }

    a {
        font-weight: 100;
        text-decoration: none;
        color: inherit; /* inherits black/white color from div */
    }

    .fa-toggle-off {
        color: black;
        font-size: x-large;
        border-top: 10px;
        margin: 0;
        vertical-align: middle;
        cursor: pointer;
    }

    .fa-toggle-on {
        color: white;
        font-size: x-large;
        border-top: 10px;
        margin: 0;
        vertical-align: middle;
        cursor: pointer;
    }
    
    .fa-moon {
        font-size: x-large;
        margin: 0;
    }

    /* span {
        color: black;
    } */

    span:hover {
        color: #878787;
    }

    .dark {
        background-color: rgba(0, 0, 0, 0.907);
        color: white;
    }



</style>

