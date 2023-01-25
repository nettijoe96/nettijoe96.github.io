<script>
    import '../../styles.css'
    import Preload from "../Preload.svelte"
    import Menu from "../Menu.svelte";
</script>

<Preload></Preload>
<Menu></Menu>
<div>
    <ul>
        <li>
            <a href="https://online-go.com/player/372785/">
                <span>    
                    <img class="ogs" src="ogs-icon.png" alt="online-go logo of a go stone"/>
                    Play me in Go
                </span>
            </a>
        </li>
        <li>
            <a href="https://www.chess.com/member/ts4b9g1cyoh9">
                <span>    
                    <i class="fa-solid fa-chess"></i>
                    Play me in Chess
                </span>
            </a>
        </li>
    </ul>
</div>

<style>

    .ogs {
        width: 15px;
        margin-right: 5px;
    }

    .fa-chess {
        margin-right: 5px;
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
        font-family: 'Inter', sans-serif;
        list-style: none
    }

    a {
        font-weight: 100;
        text-decoration: none;
        color: inherit;
    }

    span:hover {
        color: #878787;
    }
</style>
