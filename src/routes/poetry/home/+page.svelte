<script>
    import Preload from "./../../Preload.svelte";
    import '../../../styles.css'
    import "../poem.css"
    import { theme } from "$lib/stores.js";
	import { onMount } from 'svelte';
    let themeClass = "";
    onMount(async () => {
        themeClass = $theme === 'light' ? "light2" : "dark2"
	});
</script>

<Preload></Preload>
<body>
    <h1 class="title">Home</h1>
        <div class="poem">
            <div class="poemtext {themeClass}"
                > Outward--soaring!
                On an open night--nothing
                Grabbing--to rest off
                Rest easy, rest clear
                And steer the ship
                Towards shimmering
                Distinctly specific 
                Reflections of Him
                Calling me back--home  
            </div>
        </div>
</body>
