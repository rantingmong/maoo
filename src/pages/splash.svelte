<h1>loading...</h1>
<script lang="ts">
  import SplashInteraction  from '../logic/splash-interaction'
  import {onMount} from "svelte"

  const logic = new SplashInteraction()
  onMount(logic.start.bind(logic))

</script>
