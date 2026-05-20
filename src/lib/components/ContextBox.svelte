<!--
@component
ContextBox.svelte — Story context summary box

Displays brief background context paragraphs and an optional source link.

USAGE EXAMPLE:
<ContextBox
  title="Why This Matters"
  items={[
    'Paragraph one',
    'Paragraph two'
  ]}
  sourceLabel="Read the full report"
  sourceHref="https://example.com/report"
/>
-->
<script>
  let {
    title = 'Why This Matters',
    items = [],
    sourceLabel = '',
    sourceHref = '',
  } = $props();
</script>

{#if items.length > 0}
  <aside class="context-box" aria-labelledby="context-box-title">
    <h2 id="context-box-title" class="context-box-title">{title}</h2>

    <div class="context-box-body">
      {#each items as item}
        <p class="context-box-paragraph">{item}</p>
      {/each}
    </div>

    {#if sourceLabel && sourceHref}
      <a class="context-box-source" href={sourceHref}>{sourceLabel}</a>
    {/if}
  </aside>
{/if}

<style lang="scss">
  @use '../styles' as *;

  .context-box {
    padding: var(--spacing-xs) var(--spacing-md) var(--spacing-md);
    border-left: var(--border-width-accent) solid var(--color-accent);
    background-color: var(--color-light-gray);
  }

  .context-box .context-box-title {
    margin: var(--spacing-sm) 0 var(--spacing-sm);
    font-family: var(--font-serif);
    font-size: var(--font-size-4xl);
    font-weight: var(--font-weight-normal);
    line-height: var(--leading-tight);
    color: var(--color-dark);
  }

  .context-box-body {
    margin: 0;
  }

  .context-box-paragraph {
    margin-bottom: var(--spacing-sm);
    font-family: 'Roboto', sans-serif !important;
    font-size: var(--font-size-base);
    color: var(--color-text);
    line-height: 1.6;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .context-box-source {
    display: inline-block;
    margin-top: 0;
    font-family: 'Roboto', sans-serif !important;
    font-size: var(--font-size-sm);
    font-weight: 700;
    color: var(--color-accent);
    text-decoration: none;

    &:hover {
      color: var(--color-accent-hover);
      text-decoration: underline;
    }
  }
</style>