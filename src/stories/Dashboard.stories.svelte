<!--
  Dashboard.stories.svelte

  Stories for the Dashboard component.
  Dashboard is a flex-row layout container designed to hold BigNumber stat cards
  side by side. It wraps on small screens so cards stack vertically on mobile.

  Props:
  - children: BigNumber (or other) components passed between opening/closing tags
-->
<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Dashboard from '$lib/components/Dashboard.svelte';
  import BigNumber from '$lib/components/BigNumber.svelte';

  const { Story } = defineMeta({
    title: 'Components/Dashboard',
    component: Dashboard,
    tags: ['autodocs'],
    parameters: {
      layout: 'padded',
    },
  });
</script>

<!-- Default: three BigNumber cards in a row -->
<Story name="Default">
  <Dashboard>
    <BigNumber number="42%" label="Response Rate" />
    <BigNumber number="3,500" label="Residents Surveyed" />
    <BigNumber number="$1.2M" label="Annual Budget Cut" />
  </Dashboard>
</Story>

<!-- Two Stats: two-card layout -->
<Story name="Two Stats">
  <Dashboard>
    <BigNumber number="127" label="Schools Affected" />
    <BigNumber number="1 in 5" label="Students Qualify" footnote="Source: NYC DOE, 2023" />
  </Dashboard>
</Story>

<!-- Four Stats: four-card layout that wraps on small screens -->
<Story name="Four Stats">
  <Dashboard>
    <BigNumber number="58%" label="Graduation Rate" />
    <BigNumber number="2,100" label="Teachers Hired" />
    <BigNumber number="$400M" label="Capital Investment" />
    <BigNumber number="83" label="New Schools" footnote="Over the next 5 years" />
  </Dashboard>
</Story>

<!-- With Footnotes: stat cards with source attribution -->
<Story name="With Footnotes">
  <Dashboard>
    <BigNumber
      number="34%"
      label="Units with Mold"
      footnote="Source: NYCHA Inspection Report 2023"
    />
    <BigNumber
      number="18%"
      label="Broken Elevators"
      footnote="Source: NYCHA Inspection Report 2023"
    />
    <BigNumber
      number="41%"
      label="Heat Failures"
      footnote="At least once per winter season"
    />
  </Dashboard>
</Story>
