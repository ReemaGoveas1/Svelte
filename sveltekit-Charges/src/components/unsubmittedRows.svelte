<script>
    import {unsubmittedRowsData, isDetailPanelOpen} from '../stores/unsubmittedCharges'
import UnsubmittedDetailPanel from './unsubmittedDetailPanel.svelte';
    
    console.log($unsubmittedRowsData);
    let columns = ["Date of service", "Performing Provider", "Supervising Provider", "Referring Provider"]
    export let detailPaenel = false;
</script>

<table>
    <tr>
	{#each columns as column}
		<th>{column}</th>
	{/each}
	</tr>
    <tr>
        <td>Unsubmitted Rows</td>
    </tr>
    { #each $unsubmittedRowsData as unsubmittedData}
    <tr on:click={() => {isDetailPanelOpen.set(true)}}>
        <td>{unsubmittedData.date}</td>
        <td>{unsubmittedData.performingProvider}</td>
        <td>{unsubmittedData.supervisingProvider}</td>
        <td>{unsubmittedData.refrringProvider}</td>
      </tr>
    {/each}  
</table>
<div>
    {#if $isDetailPanelOpen}
        <UnsubmittedDetailPanel/>
    {/if}
</div>
<style>
    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }
    td, th {
        text-align: left;
        padding: 8px;
    }
    td{
        border-bottom: 1px solid #dddddd;
    }
    th{
        background-color: #dddddd;
    }
</style>
