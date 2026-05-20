/**
 * .storybook/preview.js  Storybook Preview Configuration
 *
 * This file sets up the global environment for all stories.
 * It imports global styles so CSS custom properties are available
 * in every story, matching the live site's appearance.
 *
 * Learn more: https://storybook.js.org/docs/configure#configure-story-rendering
 */

// Import global styles so CSS custom properties and typography are applied
import '../src/app.scss';

/** @type {import('@storybook/sveltekit').Preview} */
const preview = {
  parameters: {
    // Default layout for all stories
    layout: 'padded',

    // Configure background options to match the site's color scheme
    backgrounds: {
      default: 'white',
      values: [
        { name: 'white', value: '#ffffff' },
        { name: 'light gray', value: '#f5f5f5' },
        { name: 'CUNY Blue', value: '#0033A1' },
      ],
    },
  },
};

export default preview;
