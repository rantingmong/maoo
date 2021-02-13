<div class="landing">
  <h1>Welcome to maoo!</h1>
  <p>You can login or register:</p>

  <button on:click={login}>Login</button>
  <button on:click={register}>Register</button>

</div>
<script lang="ts">

  import {state} from '../store/navigation'
  import {onMount} from "svelte"

  import ProfileRemote from '../logic/remote/profile'

  const login     = () => $state.page = 'login'
  const register  = () => $state.page = 'register'

  onMount(() => {
    ProfileRemote.get_info().then()
  })
</script>
