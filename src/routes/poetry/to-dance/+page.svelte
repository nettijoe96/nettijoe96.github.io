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
    <h1 class="title">To Dance</h1>
    <div class="poem">
        <div class="poemtext {themeClass}"
        > Light into black
        Black to light.
        It's <em>all</em>
        We ever needed
        Ever needed to dance
        Tonight
        It's all we needed.
        Combining 3 
        to 1 ...
        One step, two
        Ever needed
        To dance.
        </div>
    </div>
</body>