<script>
  let { events = [] } = $props();
</script>

<div class="timeline">
  {#each events as event, index}
    <div class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <div class="timeline-date">{event.date}</div>
        <div class="timeline-description">{event.description}</div>
      </div>
    </div>
  {/each}
</div>

<style lang="scss">
  @use '../styles' as *;

  .timeline {
    margin-top: 0;
    margin-bottom: var(--spacing-lg); 
    padding: var(--spacing-md) var(--spacing-md) var(--spacing-md);
    border: var(--border-width-thin) solid var(--color-border);
    background-color: var(--color-light-gray);
  }

  .timeline-title {
    margin: 0;
    padding-top: 0;
    font-family: var(--font-sans);
    font-size: var(--font-size-sm);
    font-weight: 700;
    line-height: 1.2;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-dark);
  }

  .timeline-list {
    list-style: none;
    margin: var(--spacing-md) 0 0;
    padding: 0;
    border-left: var(--border-width-thin) solid var(--color-border);
  }

  .timeline-item {
    position: relative;
    margin-left: var(--spacing-xs);
    padding: 0 0 var(--spacing-md) var(--spacing-sm);

    &:last-child {
      padding-bottom: 0;
    }

    &::before {
      content: '';
      position: absolute;
      top: calc(var(--font-size-xs) + var(--spacing-xs) + 0.4rem);
      left: calc(-1 * var(--spacing-xs));
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background-color: var(--color-accent);
      transform: translateX(-50%);
    }
  }

  .timeline-date {
    display: inline-block;
    margin-bottom: var(--spacing-xs);
    font-family: var(--font-sans);
    font-size: var(--font-size-xs);
    font-weight: 700;
    line-height: 1;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--color-accent);
  }

  .timeline-description {
    margin: 0;
    font-family: var(--font-sans);
    font-size: var(--font-size-base);
    color: var(--color-text);
    line-height: 1.6;
  }
</style>