<script>
    export let diagnosisData;
    import { fade } from 'svelte/transition'
</script>

<div class="card">
    <a href={`/diagnosis/${diagnosisData.id}`} transition:fade>
        <div class="container">
            <h2>{diagnosisData.id}. {diagnosisData.title}</h2>
            <div class="imageWrap bg-contain bg-center"><img src = {diagnosisData.diagImage} alt="diagnosis"/></div>
            <p>{diagnosisData.description}</p>
        </div>
    </a>
</div>
<style>
    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        width: 30%;
        background-color: white;
        border-radius: 0.25rem;
        box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
        margin: auto;
    }
    
    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    h2 {
        font-size: 24px;
        font-weight: 400;
        text-align: center;
    }
    .container {
        padding: 2px 16px;
        padding: 1rem;
    }
    p{
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    .imageWrap{
        width: 70px;
        margin: auto;
        
    }
</style>
