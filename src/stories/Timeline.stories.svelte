<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Timeline from '$lib/components/Timeline.svelte';

  const { Story } = defineMeta({
    title: 'Components/Timeline',
    component: Timeline,
    tags: ['autodocs'],
    argTypes: {
      events: {
        control: 'object',
        description: 'Array of timeline events with date and description fields',
      },
    },
  });

  const sampleEvents = [
    {
      date: 'October 2024',
      description:
        'New York City required residents to separate organic waste from their trash',
    },
    {
      date: 'April 1, 2025',
      description: 'Ticketing for noncompliance began',
    },
    {
      date: 'April 18, 2025',
      description:
        "Mayor Eric Adams paused fines, saying they'd start back up sometime in 2026",
    },
  ];
</script>

<Story name="Default" args={{ events: sampleEvents }} />
