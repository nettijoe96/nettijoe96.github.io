<script>
    import '../styles.css'
</script>

<div class="menu-container">
    <ul class="menu">
        <l1 class="menu-item">
            <a href="/">code</a>
        </l1>
        <l1 class="menu-item">
            <a href="/poetry">poetry</a>
        </l1>
        <l1 class="menu-item">
            <a href="https://soundcloud.com/beatniix/tracks">music</a>
        </l1>
    </ul>
</div>

<style>

    div {
        margin-left: 0;
        padding-left: 0;
        background: #fff;
        border: none;
        color: #111;
        font-size: 18px;
    }

    .menu {
        margin-left: 0;
        padding-left: 0;
        margin: 30px 0 30px 0;
        text-align: center;
        font-family: 'Inter', sans-serif;
    }

    .menu-item {
        margin: 10px 0;
        padding: 10px 10px; /* space between menu items */
    }

    a {
        color: black;
        text-decoration: none;
    }

    /* @media ( min-width: 620px ) {

        .toggle-menu { display: none; }

        .menu li { position: relative; }
        .menu > li { display: inline-block; }
        .menu > li + li { margin-left: 30px; }

        .menu .page_item_has_children > a:after,
        .menu .menu-item-has-children > a:after {
            /*content: " ↓";
            font-family: 'Lato', 'Avant Garde', sans-serif;
        }

        .menu ul {
            position: absolute;
                left: -10000px;
                top: 15px;
            width: 200px;
            z-index: 999;
        }

        .menu > li > ul {
            font-size: 0.9em;
            padding-top: 20px;
            z-index: 999;
        }

        .menu li ul:before {
            border: 6px solid transparent;
            border-bottom-color: #111;
            content: "";
            display: block;
            margin-left: -6px;
            position: absolute;
                left: 50%;
                top: 8px;
        }

        .dark-mode .menu li ul:before {
            border-bottom-color: #fff;
        }

        .menu ul a {
            background: #111;
            color: #fff;
            display: block;
            padding: 15px;
            text-align: center;
        }

        .dark-mode .menu ul a {
            background: #fff;
            color: #111;
        }

        .menu ul li:first-child > a { border-radius: 3px 3px 0 0; }
        .menu ul li:last-child > a { border-radius: 0 0 3px 3px; }
        .menu ul li:last-child:first-child > a { border-radius: 3px 3px 3px 3px; }

        .menu ul a:hover { color: #fff; }
        .dark-mode .menu ul a:hover { color: #111; }

        .menu > li:hover > ul {
            left: 50%;
            margin-left: -100px;
        }

        .menu ul li ul {
            margin: 0;
            padding-left: 20px;
            top: 0;
            width: 220px;
        }

        .menu ul li ul:before {
            border-color: transparent;
            border-right-color: #111;
            left: 14px;
            top: 18px;
        }

        .dark-mode .menu ul li ul:before {
            border-color: transparent;
                border-right-color: #fff;
        }

        .menu ul li:hover > ul {
            left: 200px;
        }
    } */

</style>

