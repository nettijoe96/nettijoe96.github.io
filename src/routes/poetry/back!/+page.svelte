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
    <h1 class="title">Back!</h1>
    <div class="poem">
        <div class="poemtext {themeClass}"
            > "Back!" 
            An exclaim to stop the return
            It's back.
            A cry to stifle a slow death
            A weak desperate cry
            
            Two pendulums hit: crash!
            They revolt and twirl away 
            Emerging from the embers: a river
            Water dances, falling from the rocks to the grove 
            Green, magnificent green makes the air thick
            And within it, a slight wind pulls the leaves into the undergrowth
            They spin and tumble to the--crash!
            
            "Back!"
            An exclaim to stop the return
            It's back.
            A cry to stifle a slow death
            A weak desperate cry
        </div>
    </div>
</body>