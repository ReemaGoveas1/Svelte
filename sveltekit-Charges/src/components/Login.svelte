<script>
    import {isLoginOpen, isLoggedIn} from '../stores/popupStore'
    import { createEventDispatcher } from 'svelte'
    import {fly, fade} from 'svelte/transition';
    import {getUserDetails, store} from '../stores/loginStore'

    let username = '';
    let password = '';
    let error = '';
    const dispatch = createEventDispatcher();
    async function handleLogin() {
		const user = await getUserDetails( username, password )

		if ( user ) {
			console.log(user)
			$store = user
			if ( error ) error = ''
            isLoginOpen.set(false);
		}
		else {
			error = 'Incorrect username and password.'
			console.log("Incorrect username and password.")
		}

	}

</script>
<div class="w-screen h-screen fixed top-0 left-0 flex justify-center items-center main-div" transition:fly={{y: -500}}>
    <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 modal-content" >
        <div class="max-w-md w-full space-y-8">
            <span class="close" on:click={() => {isLoginOpen.set(false)}}>&times;</span> 
          <div>
            <img class="mx-auto h-12 w-auto" src="https://i.pinimg.com/originals/9d/c4/df/9dc4dfad72768c854e40fbc5ab8d3de8.png" alt="Workflow">
            <h2 class="text-center text-3xl font-extrabold text-gray-900">Sign in to your account
            
            <p class="mt-2 text-center text-sm text-gray-600">
            </p>
          </div>
          <form class="mt-8 space-y-6" on:submit|preventDefault={handleLogin} action="#" method="POST">
            <input type="hidden" name="remember" value="true">
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="email-address" class="sr-only">Email address</label>
                <input id="email-address" name="email" type="email" autocomplete="email" bind:value={username} required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
              </div>
              <div>
                <label for="password" class="sr-only">Password</label>
                <input id="password" name="password" type="password" autocomplete="current-password" bind:value={password} required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
              </div>
            </div>
            <div>
              <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  
                  <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                  </svg>
                </span>
                Sign in
              </button>
            </div>
            <div id="error_message" class="text-danger">
                <small>{error}</small>
            </div>
          </form>
        </div>
      </div>
</div>

<style>
    .main-div{
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        padding-top: 100px; /* Location of the box */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }
    .modal-content {
        background-color: #fefefe;
        margin: auto;
        padding: 20px;
        border: 1px solid #888;
        height: 200px;
        border-radius: 44px;
        width: 50%;
    }
    .close {
        color: #aaaaaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }

    .close:hover,
    .close:focus {
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }
</style>
