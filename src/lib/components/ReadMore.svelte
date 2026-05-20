<script>
  let { title, children } = $props();
  let isExpanded = $state(false);
</script>

<div class="read-more">
  <button onclick={() => isExpanded = !isExpanded}>
    {isExpanded ? '▼' : '▶'} {title}
  </button>
  {#if isExpanded}
    <div class="content">
      {@render children()}
    </div>
  {/if}
</div>

<style>
  .read-more {
    margin: 1.5rem 0;
    border: 1px solid var(--color-white);
  }

  button {
    width: 100%;
    padding: 1rem;
    text-align: left;
    background: var(--color-white);
    border: none;
    font-weight: bold;
    cursor: pointer;
  }

  .content {
    padding: 1rem;
    border-top: 1px solid var(--color-white);
    background: var(--color-white);
    font-size: var(--font-size-sm);
  }
  .content :global(p) {
    font-size: var(--font-size-sm);
    line-height: var(--leading-normal);
  }
</style>