<script lang="ts">
  import { scale } from 'svelte/transition';
  import { onMount, onDestroy } from 'svelte';
  import { page } from '$app/state';
  import { lang, availableLangs, setLang, t } from '$lib/i18n/langStore';
  import { browser } from '$app/environment';
  import { appHref } from '$lib/navigation/origins';
  import { publicPageTitle } from '$lib/navigation/publicRoutes';

  const studioHref = appHref('/studio');
  const accountHref = appHref('/user');

  let showLangMenu = false;
  let langContainerEl: HTMLElement | null = null;

  let showMobileMenu = false;
  let mobileMenuEl: HTMLElement | null = null;

  const isActive = (path: string) =>
    page.url.pathname === path || page.url.pathname.startsWith(path + '/');

  // Handlers defined once (no document usage here)
  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as Node;

    if (langContainerEl && !langContainerEl.contains(target)) {
      showLangMenu = false;
    }
    if (mobileMenuEl && !mobileMenuEl.contains(target)) {
      showMobileMenu = false;
    }
  };

  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      showLangMenu = false;
      showMobileMenu = false;
    }
  };

  onMount(() => {
    if (!browser) return;
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEsc);
  });
  
  onDestroy(() => {
    if (browser) {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    }
  });

  function toggleLangMenu(e?: MouseEvent | KeyboardEvent) {
    e?.stopPropagation();
    showLangMenu = !showLangMenu;
  }
  function onLangKeydown(e: KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') toggleLangMenu(e);
    else if (e.key === 'Escape') showLangMenu = false;
  }

  function toggleMobileMenu(e?: MouseEvent | KeyboardEvent) {
    e?.stopPropagation();
    showMobileMenu = !showMobileMenu;
  }

</script>

<nav class="navbar">
  <!-- LEFT -->
  <div class="nav-left">
    <a
      href="/"
      class="nav-link nav-main hide-sm"
      class:active={isActive('/')}
    >
      {$t('navbar.home')}
    </a>
    <!-- Desktop / tablette -->
   <a
      href={studioHref}
      class="nav-link nav-secondary hide-sm"
    >
      Studio
    </a>


    <a href="/plans" class="nav-link nav-secondary hide-sm" class:active={isActive('/plans')}>
      {$t('navbar.pricing')}
    </a>

    <!-- Mobile hamburger -->
    <button
      class="hamburger-btn show-sm"
      on:click|stopPropagation={toggleMobileMenu}
      aria-label="Open navigation menu"
      aria-expanded={showMobileMenu}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    {#if showMobileMenu}
      <div
        bind:this={mobileMenuEl}
        class="mobile-menu"
        transition:scale|local={{ duration: 150, start: 0.9, opacity: 0.9 }}
      >
        <a href="/" class="mobile-item" on:click={() => (showMobileMenu = false)}>
          Home
        </a>

        <a
          href={studioHref}
          class="mobile-item"
          on:click={() => (showMobileMenu = false)}
        >
          Studio
        </a>

        <a href="/plans" class="mobile-item" on:click={() => (showMobileMenu = false)}>
          Pricing
        </a>
      </div>
    {/if}

  </div>

  <!-- CENTER -->
  <div class="nav-center">
    <h1 class="welcome">
      {publicPageTitle(page.url.pathname)}
    </h1>
  </div>

  <!-- RIGHT -->
  <div class="nav-right">
    <a
      href={accountHref}
      class="user-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg class="user-icon" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="8" r="4" />
        <path d="M4.5 20c.8-4 3.3-6 7.5-6s6.7 2 7.5 6" />
      </svg>
      <span class="user-firstname hide-xs">Sign in</span>
    </a>


    <div
      bind:this={langContainerEl}
      class="lang-container"
      role="button"
      tabindex="0"
      aria-haspopup="menu"
      aria-expanded={showLangMenu}
      aria-label={$t('navbar.change_language')}
      on:click={toggleLangMenu}
      on:keydown={onLangKeydown}
    >
      <span class="globe-wrap" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.4 2.5 3.6 5.5 3.6 9S14.4 18.5 12 21c-2.4-2.5-3.6-5.5-3.6-9S9.6 5.5 12 3Z" />
        </svg>
      </span>

      {#if showLangMenu}
        <div
          class="lang-menu"
          role="menu"
          transition:scale|local={{ duration: 150, start: 0.9, opacity: 0.9 }}
        >
          {#each availableLangs as code}
            <button
              type="button"
              class="flag-btn"
              role="menuitem"
              tabindex="0"
              aria-label={`Switch to ${code}`}
              on:click={() => {
                setLang(code);
                showLangMenu = false;
              }}
              style="opacity: {$lang === code ? 1 : 0.5};"
            >
              {#if code === 'en'}🇺🇸{/if}
              {#if code === 'fr'}🇫🇷{/if}
              {#if code === 'de'}🇩🇪{/if}
              {#if code === 'el'}🇬🇷{/if}
            </button>
          {/each}
        </div>
      {/if}

    </div>
  </div>
</nav>

<style>
  .hide-sm {
    display: inline-flex;
  }
  .navbar {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    padding: 0 18px;
    background: rgba(0, 0, 0, 0.92);
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 44px;
    z-index: 1000;
    border-bottom: 1px solid #3fcf8e;
    box-sizing: border-box;
  }

  .nav-left {
    display: flex;
    align-items: center;
    gap: 12px;
    position: relative;
    min-width: 0;
  }

  .nav-center {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
  }

  .nav-right {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: flex-end;
    min-width: 0;
  }

  .nav-link {
    color: #9ca3af;
    text-decoration: none;
    font-size: 0.9rem;
    padding: 2px 6px;
    border-radius: 4px;
    transition: color 0.18s ease, background 0.18s ease;
    white-space: nowrap;
  }

  .nav-link:hover {
    color: #f9fafb;
    background: rgba(63, 207, 142, 0.08);
  }

  .nav-link.active {
    color: #3fcf8e;
    font-weight: 600;
    background: rgba(63, 207, 142, 0.18);
  }

  .welcome {
    color: var(--pytune-gold);
    font-size: 1.05rem;
    font-weight: 500;
    margin: 0;
    letter-spacing: 0.5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* USER */
  .user-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 2px 6px;
    border-radius: 999px;
    background: rgba(15, 23, 42, 0.85);
    border: 1px solid var(--pytune-blue);
    gap: 4px;
    transition: background 0.18s ease, border-color 0.18s ease;
    flex-shrink: 0;
    color: var(--pytune-blue);
  }

  .user-link:hover {
    background: rgba(15, 23, 42, 1);
     border-color: var(--pytune-blue);
  }

  .user-icon {
    width: 16px;
    height: 16px;
    fill: none;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
  }

  .user-firstname {
    color: #9ad8ff;
    font-weight: 600;
    font-size: 0.82rem;
    white-space: nowrap;
  }

  /* LANG */
  .lang-container {
    position: relative;
    display: flex;
    align-items: center;
    color: var(--pytune-blue);
    cursor: pointer;
    flex-shrink: 0;
  }

  .lang-container:hover {
    color: #f5cc66;
  }

  .globe-wrap :global(svg) {
    width: 18px;
    height: 18px;
    display: block;
    fill: none;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
  }

  .lang-menu {
    position: absolute;
    right: 0;
    top: 38px;
    background: rgba(0, 0, 0, 0.95);
    border: 1px solid rgba(31, 182, 255, 0.55);
    border-radius: 6px;
    padding: 6px 8px;
    display: flex;
    gap: 6px;
     box-shadow: 0 0 10px rgba(31, 182, 255, 0.35);
    z-index: 1500;
  }

  .flag-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    line-height: 1;
    padding: 2px;
    transition: transform 0.2s ease, filter 0.2s ease, opacity 0.2s ease;
    color: var(--pytune-blue);
  }

  .flag-btn:hover {
    transform: scale(1.2);
    filter: drop-shadow(0 0 4px var(--pytune-blue));
  }

  /* HAMBURGER + MOBILE MENU */

  .hamburger-btn {
    display: none; /* shown only on small devices */
    background: none;
    border: none;
    padding: 2px 4px;
    cursor: pointer;
    color: #e5e7eb;
    flex-shrink: 0;
  }

  .hamburger-btn :global(svg) {
    width: 20px;
    height: 20px;
    fill: none;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-width: 2;
  }

  .mobile-menu {
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
    background: rgba(10, 10, 10, 0.98);
    border-bottom: 1px solid #3fcf8e;
    display: flex;
    flex-direction: column;
    padding: 8px 16px 10px;
    gap: 6px;
    z-index: 999; /* sous la topbar mais au-dessus du reste */
  }

  .mobile-item {
    color: #e5e7eb;
    text-decoration: none;
    font-size: 0.95rem;
    padding: 6px 8px;
    border-radius: 6px;
    background: rgba(31, 41, 55, 0.9);
  }

  .mobile-item:hover {
    background: rgba(34, 197, 94, 0.2);
    color: #f9fafb;
  }

  .show-sm { display: none; }

  /* --------- Responsive --------- */
  @media (max-width: 640px) {
    .navbar {
      padding: 0 10px;
      height: 40px;
    }

    .nav-left {
      gap: 6px;
    }

    .nav-right {
      gap: 6px;
    }

    .nav-link.nav-secondary {
      display: none;
    }

    .welcome {
      font-size: 0.9rem;
    }

    .user-firstname {
      display: none;
    }

    .hide-xs {
      display: none;
    }

    .show-sm {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .mobile-menu {
      top: 40px;
    }
     .hide-sm {
      display: none;
    }
  }

</style>
