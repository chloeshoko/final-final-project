<!--
@component
This is your page!
-->
<script>
  // Import all the news furniture components
  import ArticleHeader from '$lib/components/ArticleHeader.svelte';
  import ArticleBody from '$lib/components/ArticleBody.svelte';
  import DropoffMap from '$lib/components/DropoffMap.svelte';
  import Image from '$lib/components/Image.svelte';
  import ReadMore from '$lib/components/ReadMore.svelte';
  import Timeline from '$lib/components/Timeline.svelte';
  import ContextBox from '$lib/components/ContextBox.svelte'; 

  let { data } = $props();

  // Article metadata
  let headline = 'Mayor Mamdani Keeps Mandatory Composting';
  let byline = 'Chloe Shoko Rogers';
  let pubDate = '2025-05-18';
</script>

<!-- This sets the page title in the browser tab -->
<svelte:head>
  <title>{headline} | NYCity News Service</title>
  <meta name="description" content="At the Craig Newmark Graduate School of Journalism at the City University of New York, change is in our DNA. That comes of being born in 2006, as the digital revolution was transforming our profession in ways none of us could have imagined." />
</svelte:head>

<!-- Your page content goes here -->
<div class="container">
  
  <!-- Lead Image with overlaid header -->
  <div class="header-image" style="background-image: url('bins.JPG');">
    <div class="header-overlay">
      <div class="header-content">
        <h1>{headline}</h1>
        <p class="byline">{byline}</p>
        <p class="pubdate">{pubDate}</p>
      </div>
    </div>
  </div>
</div>

<!-- Article content starts here -->
<div class="container">
  <ArticleBody>
    <p>
      Mayor Zohran Mamdani is maintaining New York City's requirement that residents separate their organic waste — food scraps, compostable paper and yard trimmings — from other trash. 
    </p>

    <p>
      The organic waste is processed into compost or renewable energy, a key component of reducing the city’s carbon footprint and the amount of waste sent to landfills. The Department of Sanitation states that residents can be fined up to $300 for noncompliance. But former Mayor Eric Adams paused most enforcement just weeks after ticketing began last April, saying fines would resume sometime in 2026. 
    </p>
     
    <p>
      Under Adams, enforcement was paused for most buildings, except for those with more than 30 units that receive four warnings. The agency continued to issue warnings to residents in buildings of all sizes as an educational reminder that participation is mandatory, but fines were not being issued at this time beyond that exception.
    </p>

    <Timeline
      events={[
        {
          date: 'October 2024',
          description: 'New York City required residents to separate organic waste from their trash'
        },
        {
          date: 'April 1, 2025',
          description: 'Ticketing for noncompliance began'
        },
        {
          date: 'April 18, 2025',
          description: "Mayor Eric Adams paused fines, saying they\'d start back up sometime in 2026"
        }
      ]}
    />

    <p>
      Fines resumed in 2026 with Mamdani taking office in January. Still, the city only captures only 10 percent of its organic waste — a fraction of what it needs to meet its goal of sending zero waste to landfills by 2030."
    </p>

    <p>
     New Yorkers have been required to separate organic waste since October 2024. When ticketing for noncompliance began in April 2025, the residential organic waste capture rate increased by nearly 200 percent, rising to more than 9,000 tons in April from about 3,100 tons in March, according to NYC Open Data. 
     </p>

     <iframe title="Residential Food Waste Collected in NYC, 2025 (tons)" 
     aria-label="Line chart" 
     id="datawrapper-chart-XNbGX" 
     src="https://datawrapper.dwcdn.net/XNbGX/4/" 
     scrolling="no" 
     frameborder="0" 
     style="width: 0; min-width: 100% !important; border: none;" 
     height="410" data-external="1"></iframe>
     <script type="text/javascript">window.addEventListener("message",function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r,i=0;r=e[i];i++)if(r.contentWindow===a.source){var d=a.data["datawrapper-height"][t]+"px";r.style.height=d}}});
    </script>

    <p class="chart-transition-paragraph">
     Enforcement halted in April and while the capture rate gradually decreased between May and October, November’s totals reached record highs, according to the Department of Sanitation. Even so, the city is only capturing a fraction of its organic waste. 
     </p>

     <div class="datawrapper-map-box">
      <iframe title="Organic Waste Collection Spiked Across NYC When Fines Began in April 2025" 
      aria-label="Choropleth map" 
      id="datawrapper-chart-ElVSn" 
      class="datawrapper-map-frame"
      src="https://datawrapper.dwcdn.net/ElVSn/3/" 
      scrolling="no" 
      frameborder="0" 
      style="width: 0; min-width: 100% !important; border: none;" 
      height="180" 
      data-external="1">
      </iframe>
    </div>
     <script type="text/javascript">window.addEventListener("message",function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r,i=0;r=e[i];i++)if(r.contentWindow===a.source){var d=a.data["datawrapper-height"][t]+"px";r.style.height=d}}});
    </script>

   <p>The city is only capturing about 10 percent of its organic waste. Samantha MacBride, a professor at Baruch College who teaches sustainability, said that means a significant portion of the city's roughly $500 million annual waste export budget is spent transporting organics to landfills that could have been diverted.</p>


    <p>
      MacBride said the core issue is a lack of effective education by the Department of Sanitation. While the department said in a request for comment that it has conducted a “massive amount of public education including knocking on nearly 800,000 doors,” MacBride said that the department has failed to work with owners and managers of apartment buildings to increase participation, noting that they are only required to place the correct bins outside.
    </p>

    <p>
      “ There’s a far cry between doing that and actually getting a system going in your building where some or most of the people are contributing their food scraps,” she said. 
    </p>

    <p>Marisa DeDominicis, co-founder and executive director of the community composting organization Earth Matter, said that the city should prioritize education starting as early as kindergarten. She said it’s more effective for people to understand why composting matters and how they can participate so they “feel good about their actions” rather than having stress or anxiety about getting a fine. 
    </p>

    <div class="compost-box">
      <h3>Here's what you <strong>can</strong> compost, according to the Department of Sanitation:</h3>

      <p>
        <strong>Food scraps:</strong> vegetables and fruit, prepared foods, baked goods, cereal/flour/grains/pasta/rice, eggs and eggshells, dairy products, nuts, meat, fish, and bones.
      </p>

      <p>
        <strong>Paper products:</strong> paper towels and napkins, paper plates, coffee filters and tea bags, paper bags, paper food boats, paper trays, and plant-based compostable trays.
      </p>

      <p>
        <strong>Other:</strong> compostable utensils and greasy uncoated paper plates, pizza boxes, and yard waste such as leaves.
      </p>

      <p>
        A few things that might surprise you: you can also compost your hair and your pet's fur. And you don't need to take sticker labels off fruit or remove staples from tea bags before tossing them in. You can even put compostables inside plastic bags — industrial machines separate the plastic from the organic material. However, don't dump cooking oil or grease in the bin; put it in a container and throw it in the regular trash.
      </p>

      <p>
        <strong>What you cannot compost:</strong> diapers, personal hygiene products, animal waste, wrappers, non-paper packaging, foam products, glass, metal, rigid plastic, and beverage cartons. PIX11
      </p>

      <p>
        You can find more info at <a href="https://portal.311.nyc.gov/article/?kanumber=KA-02030">NYC 311's website</a>.
      </p>
    </div>

    <div class="setout-box">
      <h3>Set-Out Times</h3>

      <p>Compost is collected every week on the same day as recycling.</p>

      <p>Set composting out the night before your collection day:</p>

      <ul>
        <li>After 6 PM, if using a bin, or</li>
        <li>After 8 PM, if putting bags of leaf and yard waste directly on the curb. You can mix food scraps with leaf and yard waste only if you are using a bin with a secure lid.</li>
      </ul>

      <p>To ensure collection, all waste must be set out by midnight before your collection day.</p>
    </div>

    <div class="map-section">
      <div class="left-content">
        <section class="dropoff-section">
          <h2 class="dropoff-heading">📍 Options Beyond Curbside: Where to Drop Off Food Scraps</h2>
          <p class="dropoff-subtitle">Smart Composting Bins, community garden and nonprofit drop-off sites — check accepted materials and hours.</p>

          <ContextBox
            title=""
            items={[
              "The city has 400 bright orange Smart Composting Bins, accessible 24/7 via the free NYC Compost app. They accept all food scraps and plant waste, including meat, dairy, and prepared foods.",
              "More than 200 additional drop-off sites at community gardens, parks, schools, and nonprofits are also available across the five boroughs — but most do not accept meat, dairy, or prepared food. Hours and accepted materials vary by site.",
            ]}      
          />
        </section>
      </div>

      <div class="map-container">
        <DropoffMap points={data.dropoffs} />

        <ReadMore title="About the map data">
          <p>
            This map uses <a href=https://data.cityofnewyork.us/Environment/Food-Scrap-Drop-Off-Locations-in-NYC/if26-z6xq/about_dataNYC>NYC Open Data</a> on Food Scrap Drop-Off Sites from the Department of Sanitation.
            It currently includes {data.dropoffs.length} locations with valid coordinates.
          </p>
        </ReadMore>
      </div>
    </div>
    
  
</ArticleBody>

  

</div>

<style>
  .container :global(article.article-body p.chart-transition-paragraph) {
    margin-top: var(--spacing-lg);
    margin-bottom: var(--spacing-xl);
  }

  .datawrapper-map-box {
    margin: var(--spacing-sm) 0 var(--spacing-md);
    padding: var(--spacing-sm);
    background: var(--color-white);
    border-radius: var(--border-radius-sm);
  }

  .datawrapper-map-frame {
    display: block;
  }

  .compost-box {
    margin: var(--spacing-md) 0;
    padding: var(--spacing-sm);
    background: var(--color-white);
    border: 1px solid rgba(0,0,0,0.06);
    border-radius: var(--border-radius-sm);
  }

  .compost-box h3 {
    margin-top: 0;
  }

  .setout-box {
    margin: var(--spacing-md) 0;
    padding: var(--spacing-sm);
    background: #f6fff2;
    border-left: 4px solid #4caf50;
    border-radius: var(--border-radius-sm);
  }

  .setout-box h3 { margin-top: 0; }

.setout-box ul { margin-left: 1.25rem; }

  /* Increase page width and reduce side spacing so content uses more horizontal space */
  .container {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--spacing-md);
    padding-right: var(--spacing-md);
  }

  .container:first-child {
    margin-top: 0;
    padding-top: 0;
  }

  @media (max-width: 800px) {
    .container {
      padding-left: var(--spacing-sm);
      padding-right: var(--spacing-sm);
    }
  }

  .dropoff-section {
    margin-top: 0;
    padding-top: 0;
    border-top: none;
  }

  .dropoff-heading {
    margin: 0 0 var(--spacing-2xs) 0;
    font-size: 1.5rem;
    font-weight: 700;
    color: #14532d;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .dropoff-subtitle {
    margin: 0 0 var(--spacing-sm) 0;
    color: rgba(0,0,0,0.7);
    font-size: 0.95rem;
  }

  .map-section {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: var(--spacing-lg);
    align-items: start;
    margin-top: var(--spacing-xl);
    padding: var(--spacing-xl);
    border-top: 3px solid rgba(0,0,0,0.2);
    background-color: #f9fafb;
    border-radius: var(--border-radius-sm);
    box-shadow: none;
  }

  .left-content {
    min-width: 0;
    padding-top: var(--spacing-xs);
  }

  .map-container {
    min-width: 0;
  }

  @media (max-width: 768px) {
    .map-section {
      grid-template-columns: 1fr;
    }
  }

  .header-image {
    background-size: cover;
    background-position: center;
    height: 280px;
    position: relative;
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    margin-top: 0;
    margin-bottom: var(--spacing-md);
  }

  .header-overlay {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .header-content {
    text-align: center;
    color: white;
  }

  .header-content h1 {
    margin: 0 0 0.5rem 0;
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
    color: white;
  }

  .header-content .byline {
    margin: 0 0 0.25rem 0;
    font-size: 1rem;
    font-weight: 500;
  }

  .header-content .pubdate {
    margin: 0;
    font-size: 0.85rem;
    opacity: 0.95;
  }
</style>
