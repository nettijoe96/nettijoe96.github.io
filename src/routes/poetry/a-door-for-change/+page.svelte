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
    <h1 class="title">A Door For Change</h1>
    <div class="poem"> 
        <div class="poemtext {themeClass}"
            > In my kingdom of lead
            A wise man once said
            "You can't change the world"
            And it's true--(but fuck it).
            
            It's <em>hard</em> to change.
            And <em>now</em> adays ...
            My brain is like a maze 
            and my head like is a penny jar
            Shoot, <em>one</em> tw--WAIT!
            Pace the world, <em>face</em> the world
            Change: be em<em>braced</em>
            Phased: no <em>way</em>-(fuck it)
            Hazed: I <em>swear</em> --
            
            Leave me to <em>dry</em>.
            Heave a sigh of <em>relief</em> ...
            An open heart for <em>belief</em> 
            and <em>beneath</em> the sky
            Falls [ an open door | rain once more ]
            Reins in this insane wind
            <pre>Heavenly gates: [ adore | no more ]</pre>
        </div>
    </div>
</body>
