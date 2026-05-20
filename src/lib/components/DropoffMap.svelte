<script>
  import { onMount } from 'svelte';
  import 'leaflet/dist/leaflet.css';

  let { points = [], title = 'Food Scrap Drop-Off Locations' } = $props();

  let mapElement;
  let map;
  let markerLayer;
  let leaflet;

  const nycCenter = [40.7128, -74.006];
  const nycProperBounds = [
    [40.4774, -74.2591],
    [40.9176, -73.7004],
  ];
  const markerColors = {
    smartBin: {
      stroke: '#e65100',
      fill: '#f57c00',
    },
    standard: {
      stroke: '#1b5e20',
      fill: '#2e7d32',
    },
  };

  const escapeHtml = (value = '') =>
    String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');

  function renderMarkers() {
    if (!leaflet || !map || !markerLayer) return;

    markerLayer.clearLayers();

    for (const point of points) {
      const lat = Number(point.latitude);
      const lng = Number(point.longitude);

      if (!Number.isFinite(lat) || !Number.isFinite(lng)) continue;

      const hasIosAppLink =
        typeof point.app_ios_url === 'string' &&
        point.app_ios_url.trim().length > 0;
      const pointColor = hasIosAppLink
        ? markerColors.smartBin
        : markerColors.standard;

      const marker = leaflet.circleMarker([lat, lng], {
        radius: 5,
        color: pointColor.stroke,
        fillColor: pointColor.fill,
        fillOpacity: 0.85,
        weight: 1,
      });

      const popupParts = [];
      const primaryLabel =
        (point.address && point.address.trim()) ||
        (point.site_name && point.site_name.trim()) ||
        '';

      if (primaryLabel) {
        popupParts.push(`<strong>${escapeHtml(primaryLabel)}</strong>`);
      }

      if (point.hosted_by && point.hosted_by.trim()) {
        popupParts.push(
          `<strong>Hosted by:</strong> ${escapeHtml(point.hosted_by)}`,
        );
      }

      if (point.operation_day_hours && point.operation_day_hours.trim()) {
        popupParts.push(
          `<strong>Days and hours:</strong> ${escapeHtml(point.operation_day_hours)}`,
        );
      }

      if (point.open_months && point.open_months.trim()) {
        popupParts.push(
          `<strong>Open months:</strong> ${escapeHtml(point.open_months)}`,
        );
      }

      marker.bindPopup(popupParts.join('<br>'));
      marker.on('mouseover', () => marker.openPopup());
      marker.on('mouseout', () => marker.closePopup());

      marker.addTo(markerLayer);
    }
  }

  onMount(async () => {
    leaflet = await import('leaflet');

    map = leaflet.map(mapElement, {
      scrollWheelZoom: false,
      minZoom: 10,
      maxZoom: 16,
    }).setView(nycCenter, 10);

    leaflet
      .tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      })
      .addTo(map);

    markerLayer = leaflet.layerGroup().addTo(map);
    renderMarkers();
    map.fitBounds(nycProperBounds, { padding: [16, 16], maxZoom: 11 });

    return () => {
      map.remove();
    };
  });

  $effect(() => {
    renderMarkers();
  });
</script>

<section class="map-wrap" aria-label="Map of NYC compost drop-off sites">
  <h3 class="map-title">{title}</h3>
  <div class="map-legend" role="note" aria-label="Map key">
    <span class="legend-item">
      <span class="legend-dot legend-dot-smart" aria-hidden="true"></span>
      Smart Bin (app access)
    </span>
    <span class="legend-item">
      <span class="legend-dot legend-dot-standard" aria-hidden="true"></span>
      Other drop-off sites
    </span>
  </div>
  <div bind:this={mapElement} class="map"></div>
</section>

<style>
  .map-wrap {
    margin: var(--spacing-lg) 0;
    background: transparent;
    --marker-smart-fill: #f57c00;
    --marker-smart-stroke: #e65100;
    --marker-standard-fill: #2e7d32;
    --marker-standard-stroke: #1b5e20;
  }

  .map-title {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif !important;
    font-size: var(--font-size-lg);
    font-weight: 900 !important;
    color: black;
    background-color: var(--transparent);
  }

  .map {
    height: 420px;
    width: 100%;
  }

  .map-legend {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-sm);
    margin: var(--spacing-xs) 0 var(--spacing-sm);
    font-family: var(--font-sans);
    font-size: var(--font-size-sm);
    color: var(--color-text);
  }

  .legend-item {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
  }

  .legend-dot {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 999px;
    border: 1px solid;
    flex: 0 0 auto;
  }

  .legend-dot-smart {
    background: var(--marker-smart-fill);
    border-color: var(--marker-smart-stroke);
  }

  .legend-dot-standard {
    background: var(--marker-standard-fill);
    border-color: var(--marker-standard-stroke);
  }

  :global(.leaflet-popup-content) {
    font-family: var(--font-sans);
    line-height: 1.35;
  }
</style>
