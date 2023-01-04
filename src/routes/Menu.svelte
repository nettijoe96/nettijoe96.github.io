<script>
    import '../styles.css'
    import { base } from "$app/paths";

    let innerWidth = 0
    let innerHeight = 0
    
    $: condition = innerWidth*1.33 <= innerHeight
    $: isMobile = innerWidth <= 344 // TODO
</script>


<svelte:window bind:innerWidth bind:innerHeight />
<nav>
    <div class="menu-container">
        <ul class="menu">
            {#if !isMobile}
                <li class="menu-item img-item">
                    <img src=/apple-touch-icon.png alt="go icon"/>
                </li>
            {/if}
            <l1 class="menu-item">
                <a href="{base}/">
                    <span>code</span>
                </a>
            </l1>
            <l1 class="menu-item">
                <a href="{base}/blog">
                    <span>blog</span>
                </a>
            </l1>
            <l1 class="menu-item">
                <a href="{base}/poetry">
                    <span>poetry</span>
                </a>
            </l1>
            {#if isMobile}
                <l1 class="menu-item">
                    <a href="{base}/music">
                        <span>music</span>
                    </a>
                </l1>
            {:else}
                <l1 class="menu-item last-item">
                    <a href="{base}/music">
                        <span>music</span>
                    </a>
                </l1>
            {/if}
        </ul>
    </div>
</nav>

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
        list-style: none
    } 

    .img-item {
        display: inline;
        margin: 0;
        width: 50;
        /* margin: 10px 0; */
        padding: 5px;
        list-style: none
    }

    .last-item {
        margin-right: 40px;
    }

    nav {
        margin: 0;
        padding: 0;
        border: 0;
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
        padding-left: 0;
        padding: 20px;
        text-align: center;
        font-family: 'Inter', sans-serif;
    }

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

