<script>
import Login from "../components/Login.svelte";
import Nav from "../components/Nav.svelte";
import {isLoginOpen} from "../stores/popupStore"

</script>

<Nav/>
{#if $isLoginOpen}
    <Login/>
{/if}
<slot></slot>