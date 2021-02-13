<div class="login">
  <h2>Login to maoo</h2>
  <button on:click={goBack}>Go Back</button>
  <br/>
  <br/>
  <form>
    <label>
      email
      <input type=email bind:value={email}>
    </label>
    <br/>
    <label>
      password
      <input type=password bind:value={password}>
    </label>
    <button on:click|preventDefault={doLogin}>Login</button>
  </form>
</div>
<script lang="ts">

  import {state}  from '../store/navigation'
  import {auth}   from '../logic/firebase'

  let email     : String
  let password  : String

  const doLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password)

    } catch(error) {
      console.error(error)
    }
  }
  const goBack  = () => { $state.page = 'landing' }
</script>
