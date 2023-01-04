<script>
    import '../styles.css'
    import { base } from "$app/paths";
</script>

<nav>
    <div class="menu-container">
        <ul class="menu">
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
            <l1 class="menu-item">
                <a href="https://soundcloud.com/beatniix/tracks">
                    <span>music</span>
                </a>
            </l1>
        </ul>
    </div>
</nav>

<style>

   /* *, ::before, ::after {
    box-sizing: border-box;
   } */

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

    
    .menu-item {
        margin: 10px 0;
        padding: 10px;
        list-style: none
    } 

    a {
        font-weight: 100;
        text-decoration: none;
    }

    span {
        color: black;
    }

    span:hover {
        /* color:  #7010ca; */
        color: #878787;
    }


</style>

