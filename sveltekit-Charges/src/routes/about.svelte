<script>
import AboutContent from "../components/AboutContent.svelte";
</script>

<AboutContent>
    <div slot = 'header'>
        <h3 class="font-serif text-3xl text-center">Do you know today's Presenters?</h3>
    </div>
    <div slot= 'presenter1'>
        <h2 class="font-mono text-xl">Reema Goveas</h2>
    </div>
    <div slot="content1">
        <p class="font-mono">I work as a FE Developer in Cerner.</p>
    </div>
    <div slot= 'presenter2'>
        <h2 class="font-mono text-xl">Kavya</h2>
    </div>
    <div slot="content2">
        <p class="font-mono">I work as a FE Developer in Cerner.</p>
    </div>
</AboutContent>

<style>
    h3{
        text-shadow: 2px 2px 4px #000;
    }
</style>