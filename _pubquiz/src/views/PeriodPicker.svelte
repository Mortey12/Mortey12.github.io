<script>
  let { list, value = $bindable("") } = $props();
</script>

{#if list.length}
  <label class="small">Period
    <select bind:value>
      <option value="">{list[0].label} (latest)</option>
      {#each list.slice(1).filter(p => !p.month) as p}<option value={p.id}>{p.label}</option>{/each}
      {#if list.some(p => p.month)}
        <optgroup label="Months (every night counts)">
          {#each list.filter(p => p.month) as p}<option value={p.id}>{p.label}</option>{/each}
        </optgroup>
      {/if}
    </select>
  </label>
{/if}
