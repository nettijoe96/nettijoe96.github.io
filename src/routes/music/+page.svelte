<script>
    import '../../styles.css'
    import Preload from "../Preload.svelte"
    import Menu from "../Menu.svelte";
    import { fade } from 'svelte/transition';

    let innerWidth = 0
    let innerHeight = 0
    
    $: isMobile = innerWidth <= 500

    function preload(src) {
        return new Promise(function(resolve) {
            let img = new Image()
            img.onload = resolve
            img.src = src
        })
    }
</script>

<svelte:window bind:innerWidth bind:innerHeight/>
<Preload></Preload>

{#if innerWidth != 0}
    <Menu></Menu>
    {#await preload("music.png") then _}
        <div class="top-div">
            {#if isMobile}
                <div class="top-div-mobile">
                    <ul>
                        <li>
                            <figure>
                                <div class="card-mobile">
                                    <div class="card-image">
                                        <img src="music.png" alt="record player and midi piano" in:fade/>
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
                                    Follow me on Spotify
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="https://open.spotify.com/artist/0hCWVMGGQnRVfDgmhwLIxq?si=QBOk4nHVTPaxvfEqDhX7BQ">
                                <span>    
                                    <i class="fa-solid fa-fish-fins"></i>
                                    Sakanation: Favorite Musician
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="https://open.spotify.com/album/5pLmzFu2ienSbr1SxBJvwB?si=lSo4QedLRXqyW1wwP2_Sqw">
                                <span>    
                                    <i class="fa-solid fa-record-vinyl"></i> 
                                    834.194: Favorite Album
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
                                <div class="card-image">
                                    <img src="music.png" alt="record player and midi piano" in:fade/>
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
                                    Follow me on Spotify
                                </span>
                            </a>
                        </div>
                        <div class="link">
                            <a href="https://open.spotify.com/artist/0hCWVMGGQnRVfDgmhwLIxq?si=QBOk4nHVTPaxvfEqDhX7BQ">
                                <span>    
                                    <i class="fa-solid fa-fish-fins"></i>
                                    Sakanation: Favorite Musician
                                </span>
                            </a>
                        </div>
                        <div class="link">
                            <a href="https://open.spotify.com/album/5pLmzFu2ienSbr1SxBJvwB?si=lSo4QedLRXqyW1wwP2_Sqw">
                                <span>    
                                    <i class="fa-solid fa-record-vinyl"></i> 
                                    834.194: Favorite Album
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

    /* .top-div {
        height: 100vh;
    } */

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
        color: inherit;
    }

    ul {
        padding: 20px;
        text-align: left;
        display: inline-block;
    }

    li {
        padding: 5px;
        text-align: left;
        list-style: none
    }

    li:hover {
        cursor: pointer;
    }

    .fa-soundcloud {
        margin-left: 3px;
        margin-right: 5px;
        color: #ff551a;
    }

    .fa-spotify {
        margin-left: 6px;
        margin-right: 7px;
        color: #1ed760;
    }

    .fa-fish-fins {
        margin-left: 5px;
        margin-right: 5px;
        color: #025587
    }

    .fa-record-vinyl {
        margin-left: 6px;
        margin-right: 6px;
    }
    
    span {
        font-family: 'Inter', sans-serif;
    }

    span:hover {
        color: #878787;
    }

    figure {
        text-align: center;
        font-size: .85rem;
    }

    .card-mobile {
        width: 200px;
        margin: auto;
        margin-top: 5px;
        /* float:left; */
        margin-right: 20px;
        margin-bottom: 20px;
        border-radius: .4rem;
        box-shadow: 0 4px 8px rgba(0,0,0,0.23),0 1px 3px rgba(0,0,0,0.08),0 6px 12px rgba(0,0,0,0.02);
        -webkit-transition: box-shadow .1s ease-in-out;
        transition: box-shadow .1s ease-in-out;
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

</style>
