<!--
  ArticleBody.stories.svelte

  Stories for the ArticleBody component.
  ArticleBody is a wrapper that applies NYCity News Service typography to
  any HTML content — paragraphs, headings, links, blockquotes, and lists.

  Props:
  - children: Content passed between opening and closing tags (Svelte snippet)
-->
<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ArticleBody from '$lib/components/ArticleBody.svelte';

  const { Story } = defineMeta({
    title: 'Components/ArticleBody',
    component: ArticleBody,
    tags: ['autodocs'],
    parameters: {
      layout: 'padded',
    },
  });
</script>

<!-- Default: typical article with multiple paragraphs -->
<Story name="Default">
  <ArticleBody>
    <p>
      New York City officials announced Tuesday a sweeping overhaul of the city's public housing
      inspection program, following a year-long investigation by the NYCity News Service that
      revealed widespread failures in the system meant to keep residents safe.
    </p>
    <p>
      The changes, which take effect immediately, will require all New York City Housing Authority
      buildings to undergo independent inspections every six months, up from the current annual
      schedule. The city will hire 200 additional inspectors to meet the new mandate.
    </p>
    <p>
      "Every New Yorker deserves a safe home," said Mayor Adams at a press conference in Brooklyn.
      "These reforms will hold NYCHA accountable and restore trust with residents who have waited
      too long for change."
    </p>
  </ArticleBody>
</Story>

<!-- With Subheadings: shows h2/h3 typography inside article body -->
<Story name="With Subheadings">
  <ArticleBody>
    <p>
      The city announced new affordable housing initiatives on Wednesday, promising to build 50,000
      units over the next decade.
    </p>
    <h2>What the Plan Includes</h2>
    <p>
      Under the proposal, 30% of new units will be reserved for families earning less than 40% of
      the area median income, with the remainder targeted at moderate-income households.
    </p>
    <h3>Funding Sources</h3>
    <p>
      Officials said the $4.2 billion initiative will be funded through a combination of federal
      grants, city bonds, and public-private partnerships.
    </p>
  </ArticleBody>
</Story>

<!-- With Blockquote: shows the NYCity-style blue-bordered pull quote -->
<Story name="With Blockquote">
  <ArticleBody>
    <p>
      Advocates have long pushed for the changes, saying the current system leaves too many
      residents in dangerous conditions.
    </p>
    <blockquote>
      <p>
        "This is a historic moment for public housing residents across the five boroughs. We
        demanded accountability, and today the city delivered."
      </p>
    </blockquote>
    <p>
      — Maria Gonzalez, director of the NYC Housing Justice Coalition
    </p>
  </ArticleBody>
</Story>

<!-- With Links and Lists: shows inline link and list typography -->
<Story name="With Links and Lists">
  <ArticleBody>
    <p>
      The report identified three main issues affecting residents across all five boroughs. Read the
      full findings on the <a href="https://www.nyc.gov">city's website</a>.
    </p>
    <ul>
      <li>Mold and moisture in 34% of inspected units</li>
      <li>Broken elevators in 18% of high-rise buildings</li>
      <li>Heating failures during at least one winter month in 41% of properties</li>
    </ul>
    <p>
      Officials said repairs would be prioritized based on severity and the number of residents
      affected.
    </p>
  </ArticleBody>
</Story>
