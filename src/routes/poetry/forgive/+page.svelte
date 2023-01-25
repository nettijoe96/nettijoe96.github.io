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
    <h1 class="title">Forgive</h1>
    <div class="poem">
        <div class="poemtext {themeClass}"
            > Listen to the wake of the world fly by 
            As a bird leaves its wings

            You don't know why, how, what, who, 
            when you do ride off into the sunset.
            So grab a candle with me

            Grab a candle with me
            And listen to its body whistle
            It will never come again

            Ever in a million dreams
            Past the crescent moon
            The early grove

            It will never 
            Come again
        </div>
    </div>
</body>
