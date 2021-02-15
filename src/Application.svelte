<div class="application">
  <svelte:component this={pageDefinitions[$navState.page]}/>

  {#if $navState.dialog != null}
  <div class="application--dialog-dimmer"></div>
  <div class="application--dialog-container">
    <div class="inner">
    {#if $navState.dialog.type === 'dialog'}
      <svelte:component this={$navState.dialog.content}/>
    {:else if $navState.dialog.type === 'error'}
      <div class="content">
        <h3>{$navState.dialog.content.title}</h3>
        <p>{$navState.dialog.content.message}</p>
      </div>
    {/if}
    </div>
  </div>
  {/if}
</div>
<style>
  :global(body) {
    margin: 0;
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .application {
    position: relative;
    height: 100%;
  }

  .application--dialog-dimmer {
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100%;

    background-color: rgba(0,0,0,0.25);
  }

  .application--dialog-container {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: flex-end;

    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .application--dialog-container > .inner {
    background-color: white;
    min-width: 600px;
    min-height: 75vh;
  }

  .application--dialog-container > .inner .content {
    padding: 20pt;
  }

</style>
<script lang="ts">
  import {state as navState, pageDefinitions} from './store/navigation'
</script>
