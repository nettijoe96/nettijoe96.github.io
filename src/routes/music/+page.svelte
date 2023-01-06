<script>
    import '../../styles.css'
    import Menu from "../Menu.svelte";

    let innerWidth = 0
    let innerHeight = 0
    
    $: isMobile = innerWidth*1.33 <= innerHeight

    function preload(src) {
        return new Promise(function(resolve) {
            let img = new Image()
            img.onload = resolve
            img.src = src
        })
    }
</script>

<svelte:window bind:innerWidth bind:innerHeight/>

{#if innerWidth != 0}
    {#await preload("music.png") then _}
        <Menu></Menu>
        <div class="top-div">
            {#if isMobile}
                <div class="top-div-mobile">
                    <ul>
                        <li>
                            <figure>
                                <div class="card-mobile">
                                    <div class="card_image">
                                        <img src="music.png" alt="record player and midi piano"/>
                                    </div>
                                </div>
                            </figure>
                        </li>
                        <li>
                            <a href="https://soundcloud.com/beatniix/tracks">
                                <span>    
                                    <i class="fa fa-soundcloud" aria-hidden="true"></i> 
                                    Beatniix: my electronic music
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="https://open.spotify.com/user/lp0eon6y1fj7c734mlxpt6nbt?si=6b58aa679baa472f">
                                <span>    
                                    <i class="fa fa-spotify" aria-hidden="true"></i> 
                                    Follow me on Spotify!
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            {:else}
                <div class="top-div-web">
                    <div class="fig">
                        <figure>
                            <div class="card-web">
                                <div class="card_image">
                                    <img src="music.png" alt="record player and midi piano"/>
                                </div>
                            </div>
                        </figure>
                    </div>
                    <div class="links">
                        <div class="link">
                            <a href="https://soundcloud.com/beatniix/tracks">
                                <span>    
                                    <i class="fa fa-soundcloud"></i> 
                                    Beatniix: my electronic music
                                </span>
                            </a>
                        </div>
                        <div class="link">
                            <a href="https://open.spotify.com/user/lp0eon6y1fj7c734mlxpt6nbt?si=6b58aa679baa472f">
                                <span>    
                                    <i class="fa fa-spotify"></i> 
                                    Follow me on Spotify!
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            {/if}
        </div>
    {/await}
{/if}

<style>

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

    .links {
        margin-top: 20px;
        display: block;
    }

    .link {
        margin: 10px;
    }

    a {
        font-weight: 100;
        text-decoration: none;
    }

    ul {
        padding: 20px;
        text-align: left;
        display: inline-block;
    }

    li {
        padding: 5px;
        text-align: left;
        color: black;
        list-style: none
    }

    .fa-soundcloud {
        margin-right: 5px;
        margin-left: 3px;
        color: #ff551a;
    }

    .fa-spotify {
        margin-left: 6px;
        margin-right: 7px;
        color: #1ed760;
    }
    
    span {
        color: black;
        font-family: 'Inter', sans-serif;
    }

    span:hover {
        color: #878787;
    }

    figure {
        text-align: center;
    }

    .card-mobile {
        width: 200px;
        margin: auto;
        margin-top: 5px;
        /* float:left; */
        margin-right: 20px;
        margin-bottom: 20px;
        border-radius: .4rem;
        /* box-shadow: 0 4px 8px rgba(0,0,0,0.23),0 1px 3px rgba(0,0,0,0.08),0 6px 12px rgba(0,0,0,0.02); */
        box-shadow: 0 4px 8px rgba(0,0,0,0.23),0 1px 3px rgba(0,0,0,0.08),0 6px 12px rgba(0,0,0,0.02);
        -webkit-transition: box-shadow .1s ease-in-out;
        transition: box-shadow .1s ease-in-out;
    }

    .card-web {
        width: 200px;
        margin: auto;
        margin-top: 20px;
        /* float:left; */
        margin-right: 20px;
        border-radius: .4rem;
        /* box-shadow: 0 4px 8px rgba(0,0,0,0.23),0 1px 3px rgba(0,0,0,0.08),0 6px 12px rgba(0,0,0,0.02); */
        box-shadow: 0 4px 8px rgba(0,0,0,0.23),0 1px 3px rgba(0,0,0,0.08),0 6px 12px rgba(0,0,0,0.02);
        -webkit-transition: box-shadow .1s ease-in-out;
        transition: box-shadow .1s ease-in-out;
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

    .card_image > img {
        width: 200px;
        display: block;
        height: auto;
        border-radius: inherit;
    }
    .card_image {
        position: relative;
        text-align: center;
    }

</style>
