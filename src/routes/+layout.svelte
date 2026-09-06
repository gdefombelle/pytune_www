<script lang="ts">
  import '../app.css';
  import { page } from '$app/stores';

  import TopBar from '$lib/TopBar.svelte';
  import Footer from '$lib/Footer.svelte';
  import { publicDocumentTitle } from '$lib/navigation/publicRoutes';

  // ✅ routes où l’on affiche le footer compact
  const COMPACT_FOOTER_ROUTES = [
    '/',
    '/discover',
    '/for/piano-owners',
    '/for/technicians-workshops',
    '/for/churches-community',
    '/for/schools',
    '/for/investors',
    '/how-it-works',
    '/plan-faith',
    '/plan-pro',
    '/plan-indy',
    '/plan-enterprise',
    '/plans',
    '/contacts/investor',
    '/contacts/enterprise',
    '/about',
  ];

  // ✅ affichage du footer
  $: showFooter = $page.url.pathname !== '/';

  // ✅ version compacte du footer sur certaines routes
  $: useCompactFooter = COMPACT_FOOTER_ROUTES.some((route) =>
    $page.url.pathname === route || $page.url.pathname.startsWith(`${route}/`)
  );

</script>

<svelte:head>
  <title>{publicDocumentTitle($page.url.pathname)}</title>
  <link rel="canonical" href={`https://www.pytune.com${$page.url.pathname}`} />
  <meta name="robots" content="index, follow" />
</svelte:head>

<TopBar />

<main class="page-container">
  <slot />
</main>

{#if showFooter}
  <div class="footer-wrapper">
    <Footer compact={useCompactFooter} />
  </div>
{/if}

<style>
  :global(html),
  :global(body) {
    background-color: #111 !important;
    color: #e5e5e5 !important;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    margin: 0;
    padding: 0;
    font-size: 16px;
  }

  :global(body) {
    max-width: 100vw !important;
    overflow-x: hidden !important;
    transform: none !important;
    zoom: 1 !important;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #111 !important;
  }

  main.page-container {
    flex: 1;
    padding-top: 44px;
    background-color: #111;
    margin-bottom: 0;
  }

  .footer-wrapper {
    background-color: #111;
    margin: 0;
    padding: 0;
  }

  .footer-wrapper :global(footer) {
    margin: 0 !important;
    border-radius: 0 !important;
  }
</style>
