<div class="setup-profile">
  <h2>1 - Setup your maoo profile</h2>
  <form>
    <MaooInput label='Username'>
      <input type="text">
    </MaooInput>
    <MaooInput label='First Name'>
      <input type="text">
    </MaooInput>
    <MaooInput label='Last Name'>
      <input type="text">
    </MaooInput>
    <hr/>
    <label> Gender
      <select>
        <option>Him/He</option>
        <option>Her/She</option>
        <option>Other</option>
        <option>Prefer not to say</option>
      </select>
    </label>
    <br/>
    <label> Birthdate
      <input type="date">
    </label>
    <br/>
    <label> Bio
      <textarea></textarea>
    </label>
  </form>
  <h2>2 - Add your furr-childs</h2>
</div>
<style>
  .setup-profile {
    padding: 20pt;
  }
</style>
<script lang="ts">
  import MaooInput from '../../parts/maoo-input'
</script>
