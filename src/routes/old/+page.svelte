<script lang="ts">

    import fs from 'fs'
    import { page } from '$app/stores';
    // import p from 'static/poems/peach-picking.txt'

    async function readText(filename: string) {
        return fetch(filename)
    }

    //const fs = require('fs')
    // async function readText(filename: string) {
    //     return fs.promises.readFile(filename)
    // }
    let x = readText("src/routes/[poem]/peach-picking.txt");
    x.then((value) => {
        console.log(value.toString())
    })

</script>

<p>
    {$page.params.poem}
    <br>
    {#await x}
        <p>before</p>
    {:then r}
        {#await r.text()}
            <p>before</p>
        {:then poem}
            <p>then {poem}</p>
        {/await}
    {:catch error}
        <p>error</p>
        <p style="color: red">{error.message}</p>
    {/await}
    test
</p>