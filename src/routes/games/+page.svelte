<script>
    import '../../styles.css'
    import Menu from "../Menu.svelte";
</script>

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
                    <!-- <i class="fa-solid fa-chess-board"></i> -->
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
