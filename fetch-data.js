// Node's built-in file system and path modules - lets us write files to disk
import fs from 'fs';
import path from 'node:path';

// NYC Open Data API endpoint for food scrap drop-off sites
const apiUrl = 'https://data.cityofnewyork.us/resource/if26-z6xq.json';

// Query parameters sent to the API using the Socrata Query Language (SoQL)
const params = new URLSearchParams({
	$limit: '50000',
	$select:
		'object_id,food_scrap_drop_off_site,hosted_by,borough,ntaname,location,open_months,operation_day_hours,notes,app_ios,latitude,longitude',
	$where: 'latitude IS NOT NULL AND longitude IS NOT NULL',
	$order: 'borough ASC, ntaname ASC, food_scrap_drop_off_site ASC',
});

// Combine the base URL and query string into one complete request URL
const url = `${apiUrl}?${params.toString()}`;

console.log('Fetching dropoff data from NYC Open Data...');

// Ensure the data directory exists so we can write the output file without a separate mkdir command
const dataDir = path.join('src', 'lib', 'data');
fs.mkdirSync(dataDir, { recursive: true });

try {
	// fetch() makes an HTTP GET request to the API and returns a Promise
	const response = await fetch(url);

	if (!response.ok) {
		throw new Error(`API request failed with status ${response.status}`);
	}

	// Parse the response body as JSON
	const data = await response.json();
	console.log(`Fetched ${data.length} records from the API.`);

	// Keep only rows with valid coordinates and normalize key names for easier app usage
	const dropoffs = data
		.map((row) => ({
			id: row.object_id,
			site_name: row.food_scrap_drop_off_site,
			hosted_by: row.hosted_by,
			borough: row.borough,
			neighborhood: row.ntaname,
			address: row.location,
			open_months: row.open_months,
			operation_day_hours: row.operation_day_hours,
			notes: row.notes,
			app_ios_url:
				typeof row.app_ios?.url === 'string' ? row.app_ios.url : '',
			latitude: Number(row.latitude),
			longitude: Number(row.longitude),
		}))
		.filter(
			(row) => Number.isFinite(row.latitude) && Number.isFinite(row.longitude),
		);

	console.log(`Filtered to ${dropoffs.length} records with valid coordinates.`);

	// Write the cleaned data to a JSON file so our app can use it
	const outputPath = path.join(dataDir, 'dropoffs.json');
	fs.writeFileSync(outputPath, JSON.stringify(dropoffs, null, 2));
	console.log('Saved to src/lib/data/dropoffs.json');
} catch (error) {
	// If anything goes wrong (network error, bad JSON, etc.), log it
	console.error('Error fetching data:', error);
	process.exitCode = 1;
}