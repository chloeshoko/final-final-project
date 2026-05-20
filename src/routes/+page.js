import dropoffs from '$lib/data/dropoffs.json';

// Page settings and static data loaded at build time
export function load() {
  return {
    // Set to false to hide the NYCity News Service header
    showHeader: false,
    // Set to false to hide the site footer
    showFooter: false,
    dropoffs,
  };
}