<div class="register">
  <h2>Register to maoo!</h2>
  <button on:click={goBack}>Go Back</button>
  <br/>
  <br/>
  <form>
    <label>
      Email
      <input type=email bind:value={email}>
    </label>
    <br/>
    <label>
      Password
      <input type=password bind:value={password}>
    </label>
    <button on:click|preventDefault={doRegister}>Register</button>
  </form>
</div>
<script lang="ts">

  import {state}  from '../store/navigation'
  import {auth}   from '../logic/firebase'

  let email     : string
  let password  : string

  const doRegister  = async () => {
    try {
      console.log('registering')

      await auth.createUserWithEmailAndPassword(email, password)

      console.log('registered!')
    } catch (problem) {
      console.error(problem)
    }
  }
  const goBack      = () => { $state.page = 'landing' }
</script>
