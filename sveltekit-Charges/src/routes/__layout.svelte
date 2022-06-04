<script>
import Login from "../components/login.svelte";
import Nav from "../components/nav.svelte";
import {isLoginOpen} from "../stores/popupStore"

</script>

<Nav/>
{#if $isLoginOpen}
    <Login/>
{/if}
<slot></slot>