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
    <h1 class="title">Stoic Haikus</h1>
    <div class="poem">
        <div class="poemtext {themeClass}"
            > Take what's for granted.                     
            Use it with daily comforts                                                 
            Watch it disappear  
            
            Loose something needed.                      
            Become ultimately free                                                     
            Cherish everything
            
            Looking for the gold.                               
            Only the silver appears                          
            Better anyways    
        </div>
    </div>
</body>  
