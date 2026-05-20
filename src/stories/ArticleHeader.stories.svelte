<!--
  ArticleHeader.stories.svelte

  Stories for the ArticleHeader component.
  ArticleHeader renders a large serif headline with a metadata box showing
  the byline and publication date in NYCity News Service style.

  Props:
  - headline: The main article title (required)
  - byline: Author name(s) (optional)
  - pubDate: Publication date in YYYY-MM-DD format (optional)
-->
<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ArticleHeader from '$lib/components/ArticleHeader.svelte';

  const { Story } = defineMeta({
    title: 'Components/ArticleHeader',
    component: ArticleHeader,
    tags: ['autodocs'],
    argTypes: {
      headline: {
        control: 'text',
        description: 'The main article title displayed as a large serif heading',
      },
      byline: {
        control: 'text',
        description: 'Author name(s) shown in the metadata box',
      },
      pubDate: {
        control: 'text',
        description: 'Publication date in YYYY-MM-DD format (e.g. "2024-01-15")',
      },
    },
  });
</script>

<!-- Default: full headline with byline and date -->
<Story
  name="Default"
  args={{
    headline: 'City Council Approves $112 Billion Budget Amid Housing Crisis',
    byline: 'Jane Smith and John Doe',
    pubDate: '2024-06-15',
  }}
/>

<!-- Headline Only: no byline or date -->
<Story
  name="Headline Only"
  args={{
    headline: 'Breaking: Mayor Announces Emergency Transit Funding',
  }}
/>

<!-- With Byline Only: headline and author, no date -->
<Story
  name="With Byline Only"
  args={{
    headline: 'CUNY Enrollment Hits Record High for Third Consecutive Year',
    byline: 'Maria Lopez',
  }}
/>

<!-- With Date Only: headline and date, no byline -->
<Story
  name="With Date Only"
  args={{
    headline: 'Report: One in Five NYC Students Lacks Reliable Internet Access',
    pubDate: '2024-03-01',
  }}
/>

<!-- Long Headline: tests wrapping behavior on narrow viewports -->
<Story
  name="Long Headline"
  args={{
    headline:
      'Investigation Reveals Decades of Deferred Maintenance Left Hundreds of Public Housing Residents Without Heat During Coldest Winter on Record',
    byline: 'The NYCity News Service Investigative Team',
    pubDate: '2024-02-14',
  }}
/>
