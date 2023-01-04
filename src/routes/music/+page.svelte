<script>
    import '../../styles.css'
    import Menu from "../Menu.svelte";

    let music = [
        {
            name: "Beatniix: my electronic music",
            link: "https://soundcloud.com/beatniix/tracks"
        },
        {
            name: "Follow me on Spotify",
            link: "https://open.spotify.com/user/lp0eon6y1fj7c734mlxpt6nbt?si=6b58aa679baa472f"
        },
    ]
</script>

<Menu></Menu>
<div>
    <ul>
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



<style>

    .fa-soundcloud {
        margin-right: 5px;
        color: #ff551a;
    }

    .fa-spotify {
        margin-left: 4px;
        margin-right: 9px;
        color: #1ed760;
    }

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
