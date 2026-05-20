/**
 * .storybook/main.js  Storybook Configuration
 *
 * This file configures Storybook for the SvelteKit project.
 * It tells Storybook where to find stories, which addons to use,
 * and which framework to use for rendering components.
 *
 * Learn more: https://storybook.js.org/docs/configure
 */

/** @type {import('@storybook/sveltekit').StorybookConfig} */
const config = {
  // Story files: look for .stories.svelte files in the src directory
  stories: ["../src/**/*.stories.svelte"],

  // Addons enhance Storybook with extra features
  addons: [
    // Autodocs renderer for Svelte stories
    "@storybook/addon-docs",
    // Svelte CSF: allows writing stories as .svelte files (cleaner for slot/children content)
    "@storybook/addon-svelte-csf",
  ],

  // Use the SvelteKit framework (handles $app/* mocks, $lib aliases, SCSS, etc.)
  framework: {
    name: "@storybook/sveltekit",
    options: {},
  },

  // Opt out of Storybook's anonymous usage telemetry
  core: {
    disableTelemetry: true,
  },

  // Enable auto-generated documentation pages for components tagged with 'autodocs'
  docs: {
    autodocs: "tag",
  },
};

export default config;
