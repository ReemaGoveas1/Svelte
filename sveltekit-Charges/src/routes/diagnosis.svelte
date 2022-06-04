<script context="module">
    //svelte will come here check if this below async function is present, and calls this load before it actually lets that thing be rendered to the page
    export async function load(){
    const url = `http://localhost:3000/diagnosis`;
    const res = await fetch(url);
    const diagnosisData = await res.json();
    return {props: { diagnosis: diagnosisData}}
    //query all the info before this page is loaded
    }
</script>
<script>
import AddDiagnosis from "../components/addDiagnosis.svelte";
import DiagnosisCard from "../components/diagnosisCard.svelte";
import { isAddDiagnosisOpen, diagnosisLength} from '../stores/diagnosisStore'

    export let diagnosis;
    let searchItem = "";
    let filteredDiagnosis = [];
    $: diaLength = diagnosis.length;
    $: {
        if(searchItem){
            filteredDiagnosis = diagnosis.filter(problem => problem.title.toLowerCase().includes(searchItem.toLowerCase()))
        }else{
            filteredDiagnosis = [...diagnosis]
        }
    }
</script>

<svelte:head>
    <title>Diagnosis</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Diagnosis!!</h1>
<div class="sectionWrap">
    <input type="text" bind:value={searchItem} placeholder="Search Diagnosis"/>
    <button type="submit" on:click={() => {isAddDiagnosisOpen.set(true)}} class=" w-fit bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Add Diagnosis</button>
</div>
<div class = "cardWrapper">
    {#each filteredDiagnosis as diagnosis}     
        <DiagnosisCard diagnosisData={diagnosis} />
    {/each}
</div>
<div>
    {#if $isAddDiagnosisOpen}
        <AddDiagnosis on:close={() => {isAddDiagnosisOpen.set(false)}} diagnoLength = {diaLength}/>
    {/if}
</div>
<style>
    h1{
        color: brown;
        text-align: center;
    }
    .cardWrapper{
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
    }

    input{
        border-radius: 2px;
        font-size: large;
        padding: 4px;
        border: 2px;
        border-color: gray;
        width: 50%;
        margin-left: 20px;
        margin-right: 29%;
    }
    .sectionWrap{
        display: flex;
        margin-bottom: 30px;
    }
</style>
