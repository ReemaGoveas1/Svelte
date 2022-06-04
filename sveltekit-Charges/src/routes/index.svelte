<script>
    import { fade, scale } from "svelte/transition";
</script>

<div class="container">
    <img transition:fade class="origin-center hover:skew-y-12" src="https://thumbs.dreamstime.com/b/african-couple-peeking-out-blank-white-advertising-billboard-studio-promotion-billboard-concept-cheerful-african-american-guy-230645037.jpg" alt="people"/>
    <h1 in:scale out:fade class="uppercase text-5xl font-bold">Welcome to Devcon</h1>
</div>
<style>
    .container{
        position: relative;
        text-align: center;
    }
    h1{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: peru;
    }
</style>

