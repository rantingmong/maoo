<div class="navigation">
  <span>maoo</span>
  <div class="navigation--menu">
    <a href="feed">Feed</a>
    <a href="drop">maoo drop</a>
    <a href="profile">Profile</a>
    <a on:click={logout}>Logout</a>
  </div>
</div>
<style>
  .navigation {
    display: flex;
    justify-content: space-between;

    padding: 15pt 20pt 15pt;
  }
</style>
<script lang="ts">

  import {auth} from "../logic/firebase"
  import {state} from "../store/navigation"

  async function logout() {
    await auth.signOut()
  }
</script>
