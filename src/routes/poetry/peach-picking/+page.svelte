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
    <h1 class="title">Peach Picking</h1>
    <div class="poem">
        <div class="poemtext {themeClass}"
            > We wrap ourselves
            In light linen coats
            Grey woolen socks
            And leather shoes
            To journey
            With baskets in hand
            To narrow streets
            Of yellow peach trees
            That meander through the wood

            We follow the trail up a hill
            To feel the sky widen
            Before us
            To dance freely
            As it does
            To pause.
            To stitch together
            Shapes, lines, colors 
            Where trees become forest
            Leaves--a canopy
            
            Dancing swiftly, swiftly
            Down blades of grass 
            Through matchbox meadows
            Patchwork paths
            We are free.
            Weaving in and out 
            Of expansive fabrics
            Crimson bows
            Against the horizon
            Tapping toes
            On the rising sun
        </div>
    </div>
</body>
