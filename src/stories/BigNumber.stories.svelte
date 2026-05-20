<!--
  BigNumber.stories.svelte

  Stories for the BigNumber component.
  BigNumber displays a large statistic with a label — perfect for data dashboards
  in journalism projects.

  Props:
  - number: The value to display prominently (string or number)
  - label: Short description of the metric (string)
  - footnote: Optional small clarifying text below the label (string)
-->
<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import BigNumber from '$lib/components/BigNumber.svelte';

  const { Story } = defineMeta({
    title: 'Components/BigNumber',
    component: BigNumber,
    tags: ['autodocs'],
    argTypes: {
      number: {
        control: 'text',
        description: 'The prominent value to display (e.g. "42%", "$1.2M", "3,500")',
      },
      label: {
        control: 'text',
        description: 'Short description of the metric displayed below the number',
      },
      footnote: {
        control: 'text',
        description: 'Optional small clarifying text below the label',
      },
    },
  });
</script>

<!-- Default: percentage stat with a label -->
<Story name="Default" args={{ number: '42%', label: 'Response Rate' }} />

<!-- With Footnote: includes optional clarifying text -->
<Story
  name="With Footnote"
  args={{
    number: '3,500',
    label: 'Residents Surveyed',
    footnote: 'Data collected March–April 2024',
  }}
/>

<!-- Dollar Amount: shows currency formatting -->
<Story name="Dollar Amount" args={{ number: '$1.2M', label: 'Annual Budget Cut' }} />

<!-- Large Count: whole number example -->
<Story name="Large Count" args={{ number: '127', label: 'Schools Affected' }} />

<!-- Ratio: shows ratio/fraction examples -->
<Story
  name="Ratio"
  args={{
    number: '1 in 5',
    label: 'Students Qualify',
    footnote: 'Source: NYC Dept. of Education, 2023',
  }}
/>
