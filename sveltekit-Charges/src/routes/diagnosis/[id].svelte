<!-- ssr-> load data before we display this component to the user in the browser, so we can query and get the information-->
<script context="module">
    //svelte will come here check if this below async function is present, and calls this load before it actually lets that thing be rendered to the page
    export async function load({params}){
        const id = params.id;
        const url = `http://localhost:3000/diagnosis/${id}`;
        const res = await fetch(url);
        const diagnosisItem = await res.json();
        return {props: {diagnosisItem}};
    }
</script>
<script>
    export let diagnosisItem;
</script>
<h2>{diagnosisItem.title}</h2>
<img src = {diagnosisItem.diagImage} alt="diagnosis"/>
<p>{diagnosisItem.description}</p>
<style>
    h2{
        color:cornflowerblue;
        text-transform: uppercase;
        text-align: center;
        font-size: xx-large;
    }
    p{
        text-align: center;
        width: 80%;
        margin: auto;
    }
    img{
        margin: auto;
        width: 20%;
    }
</style>