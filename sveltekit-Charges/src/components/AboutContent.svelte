<!-- multiple slots -->
<div class = 'cards'>
    <div class = 'cardHeader'>
        <slot name = 'header'/>
    </div>

    <div class = 'presenterData'>
        <slot name= 'presenter1'/>
        <slot name = 'content1'/>
    </div>
    <div class = 'presenterData' style="margin-top: 20px">
        <slot name= 'presenter2'/>
        <slot name = 'content2'/>
    </div>
   
    {#if $$slots.footer}
    <hr/>
    <div class = 'cardFooter'>
        <slot name = 'footer'></slot>
    </div>
    {/if}
</div>

<style>
    .presenterData{
        margin-left: 30px;
        margin-top: 30px;
    }
</style>