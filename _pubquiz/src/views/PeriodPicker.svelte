<script>
  let { list, value = $bindable("") } = $props();
</script>

{#if list.length}
  <label class="small">Period
    <select bind:value>
      <option value="">{list[0].label} (latest)</option>
      {#each list.slice(1) as p}<option value={p.id}>{p.label}</option>{/each}
    </select>
  </label>
{/if}
