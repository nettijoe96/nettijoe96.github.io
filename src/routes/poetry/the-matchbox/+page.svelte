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
    <h1 class="title">The Matchbox</h1>
    <div class="poem">
        <div class="poemtext {themeClass}"
            > The man wears
            Leather boots
            Caked with mud
            From years past
            
            He crouches
            Blowing soft
            On hot coals
            In the stove
            
            Through the smoke
            The embers
            Fall and fail
            Raining ash
            
            Papa, dad
            His son cries
            Try again
            One more time
            
            The man bends
            His head low
            And blows hard
            But nothing
            
            Son, listen
            It was easy
            Years ago
            But no more
            
            Father, dad
            I know not
            Of your fire
            Nor my own
            
            But I know
            Fires are lit
            From with out
            Not within
            
            Let us go
            Somewhere else
            And we shall
            Find a match
            
            And with that
            The two left
            For the hills
            Far beyond
            
            Over the sea
            Towards the sky
            Following
            The north star
        </div>
    </div>
</body>