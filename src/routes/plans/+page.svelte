<script lang="ts">
  import ComparePlansModal from '$lib/Plans/ComparePlansModal.svelte';
  import { appHref } from '$lib/navigation/origins';
  import { page } from '$app/state';
  import { goto } from '$app/navigation';
  import { t } from '$lib/i18n/langStore';
  
  let showCompare = false;

  type PlansTab = 'owners' | 'pros' | 'community';
  let activeTab: PlansTab = 'owners';
  type ProsSubTab = 'technicians' | 'schools';
  let activeProsTab: ProsSubTab = 'technicians';

  $: {
    const tabParam = page.url.searchParams.get('tab');
    if (tabParam === 'pros' || tabParam === 'owners' || tabParam === 'community') {
      activeTab = tabParam;
    }
  }

  function setTab(tab: PlansTab) {
    activeTab = tab;
    goto(`/plans?tab=${tab}`, {
      replaceState: true,
      noScroll: true,
      keepFocus: true
    });
  }

</script>

<div
  class="pricing-root min-h-screen w-full bg-cover bg-center bg-no-repeat text-[#F1E8C7]"
  style="background-image: url('/assets/fond-5.webp');"
>
  <div class="pricing-overlay">
    <section class="pricing-page">

      <!-- HERO -->
      <header class="hero">
        <p class="eyebrow">{$t('plans.header.eyebrow')}</p>
        <h1 class="title">{$t('plans.header.title')}</h1>
        <p class="subtitle">
          {$t('plans.header.subtitle')}
        </p>
      </header>

      <!-- TABS -->
    <nav class="tabs-wrap">
        <div class="tabs" role="tablist" aria-label="Plans tabs">
            <button
            type="button"
            class="tab {activeTab === 'owners' ? 'is-active' : ''}"
            role="tab"
            on:click={() => setTab('owners')}
            >
            {$t('plans.tabs.indy')}
            </button>

            <button
            type="button"
            class="tab {activeTab === 'pros' ? 'is-active' : ''}"
            role="tab"
            on:click={() => setTab('pros')}
            >
            {$t('plans.tabs.pro')}
            </button>

            <button
            type="button"
            class="tab {activeTab === 'community' ? 'is-active' : ''}"
            role="tab"
            on:click={() => setTab('community')}
            >
            {$t('plans.tabs.community')}
            </button>
        </div>

        <p class="tabs-subtitle">
            {#if activeTab === 'owners'}
            Personal piano care, at your pace.
            {:else if activeTab === 'pros'}
            Professional tools for real-world piano work.
            {:else}
            Supporting shared instruments and collective spaces.
            {/if}
        </p>
                {#if activeTab === 'pros'}
                  <div class="pros-subtabs">
                    <button
                      type="button"
                      class="pros-subtab {activeProsTab === 'technicians' ? 'is-active' : ''}"
                      on:click={() => (activeProsTab = 'technicians')}
                    >
                      Technicians & Workshops
                    </button>

                    <button
                      type="button"
                      class="pros-subtab {activeProsTab === 'schools' ? 'is-active' : ''}"
                      on:click={() => (activeProsTab = 'schools')}
                    >
                      Schools & Conservatories
                    </button>
                  </div>

                  <p class="tabs-subtitle tabs-subtitle-pro">
                    {#if activeProsTab === 'technicians'}
                      Independent technicians, workshops and growing professional practices.
                    {:else}
                      Shared access, structured follow-up and pedagogical environments.
                    {/if}
                  </p>
                {/if}
    </nav>

      <!-- PLANS GRID -->
      <section class="plans-grid">
        {#if activeTab === 'owners'}
            <!-- FREE -->
            <article class="plan-card plan-free">
            <div class="card-glow"></div>

            <div class="card-inner">
                <div class="plan-top">
                <div class="plan-strip plan-strip-free">
                    <span class="strip-label">HOME</span>
                    <span class="strip-pill">🎁 {$t('plans.indy.solo.badge')}</span>
                </div>
                <h2 class="plan-name">{$t('plans.indy.solo.name')}</h2>
                <p class="plan-scale">{$t('plans.indy.solo.scale')}</p>
                <p class="plan-persona">
                    👤 You are a piano owner curious to discover PyTune.
                </p>
                <p class="plan-price">{$t('plans.indy.solo.price')}</p>
                <p class="plan-tagline">
                    {$t('plans.indy.solo.tagline')}
                </p>
                </div>

                <ul class="features">
                <li>{$t('plans.indy.solo.feat1')}</li>
                <li>{$t('plans.indy.solo.feat2')}</li>
                <li>{$t('plans.indy.solo.feat3')}</li>
                <li>{$t('plans.indy.solo.feat4')}</li>
                <li>{$t('plans.indy.solo.feat5')}</li>
                </ul>

                <a
                    class="cta main-cta"
                    href={appHref('/get-started')}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {$t('plans.indy.solo.cta')}
                </a>
            </div>
            </article>

            <!-- INDY -->
            <article class="plan-card">
            <div class="card-glow"></div>

            <div class="card-inner">
                <div class="plan-top">
                <div class="plan-strip">
                    <span class="strip-label">INDY PLANS</span>
                </div>
                <h2 class="plan-name">🎶 {$t('plans.indy.multi.name')}</h2>
                <p class="plan-scale">{$t('plans.indy.multi.scale')}</p>
                <p class="plan-persona">
                    🎹 You are an independent musician or piano lover exploring your sound.
                </p>
                <p class="plan-price">{$t('plans.indy.multi.price')}</p>
                </div>

                <ul class="features">
                <li>{$t('plans.indy.multi.feat1')}</li>
                <li>{$t('plans.indy.multi.feat2')}</li>
                <li>{$t('plans.indy.multi.feat3')}</li>
                </ul>

                <a href="/plan-indy" class="cta">View Indy Plans</a>
            </div>
            </article>
        {/if}
                {#if activeTab === 'pros' && activeProsTab === 'technicians'}
                  <!-- PRO STARTER -->
                  <article class="plan-card plan-pro-starter">
                    <div class="card-glow"></div>

                    <div class="card-inner">
                      <div class="plan-top">
                        <div class="plan-strip">
                          <span class="strip-label">PRO STARTER</span>
                          <span class="strip-pill">{$t('plans.pro.starter.badge')}</span>
                        </div>
                        <h2 class="plan-name">🧭 {$t('plans.pro.starter.name')}</h2>
                        <p class="plan-persona">
                          🎓 You are a piano technician exploring PyTune before growing your professional activity.
                        </p>
                        <p class="plan-price">{$t('plans.pro.starter.price')}</p>
                        <p class="plan-tagline">
                          {$t('plans.pro.starter.tagline')}
                        </p>
                      </div>

                      <ul class="features">
                        <li>{$t('plans.pro.starter.feat1')}</li>
                        <li>{$t('plans.pro.starter.feat2')}</li>
                      </ul>

                      <a href={appHref('/subscribe?plan=pro_starter')} class="cta" target="_blank" rel="noopener noreferrer">
                        {$t('plans.pro.starter.cta')}
                      </a>
                    </div>
                  </article>

                  <!-- PRO -->
                  <article class="plan-card plan-pro">
                    <div class="card-glow"></div>

                    <div class="card-inner">
                      <div class="plan-top">
                        <div class="plan-strip plan-strip-pro">
                          <span class="strip-label">PRO FULL ACCESS</span>
                          <span class="strip-pill">{$t('plans.pro.main.badge')}</span>
                        </div>
                        <h2 class="plan-name">🎹 {$t('plans.pro.main.name')}</h2>
                        <p class="plan-persona">
                          🧰 You are a piano technician, teacher or workshop professional who wants the full PyTune experience from day one.
                        </p>
                        <p class="plan-price">€5/month or €45/year</p>
                        <p class="plan-tagline">
                          {$t('plans.pro.main.tagline')}
                        </p>
                      </div>

                      <ul class="features">
                        <li>{$t('plans.pro.main.feat1')}</li>
                        <li>{$t('plans.pro.main.feat2')}</li>
                        <li>{$t('plans.pro.main.feat3')}</li>
                        <li>{$t('plans.pro.main.feat4')}</li>
                        <li>{$t('plans.pro.main.feat5')}</li>
                      </ul>

                      <a href="/plan-pro" class="cta main-cta">Discover Pro</a>
                    </div>
                  </article>

                  <!-- ENTERPRISE -->
                  <article class="plan-card plan-enterprise">
                    <div class="card-glow"></div>

                    <div class="card-inner">
                      <div class="plan-top">
                        <div class="plan-strip plan-strip-enterprise">
                          <span class="strip-label">PARTNERS</span>
                          <span class="strip-pill">Networks &amp; brands</span>
                        </div>
                        <h2 class="plan-name">🏢 {$t('plans.pro.enterprise.name')}</h2>
                        <p class="plan-persona plan-persona-blue">
                          🌍 You support a premium piano brand, a dealer network or institutional partners and want a more consistent service experience around the instrument.
                        </p>
                        <p class="plan-price">{$t('plans.pro.enterprise.price')}</p>
                        <p class="plan-tagline">
                          {$t('plans.pro.enterprise.tagline')}
                        </p>
                      </div>

                      <ul class="features">
                        <li>{$t('plans.pro.enterprise.feat1')}</li>
                        <li>{$t('plans.pro.enterprise.feat2')}</li>
                        <li>{$t('plans.pro.enterprise.feat3')}</li>
                        <li>{$t('plans.pro.enterprise.feat4')}</li>
                      </ul>

                      <a href="/plan-enterprise" class="cta">View Enterprise</a>
                    </div>
                  </article>
                {/if}

                {#if activeTab === 'pros' && activeProsTab === 'schools'}
                  <!-- SCHOOL / STUDIO -->
                  <article class="plan-card plan-schools">
                    <div class="card-glow"></div>

                    <div class="card-inner">
                      <div class="plan-top">
                        <div class="plan-strip plan-strip-schools">
                          <span class="strip-label">EDUCATION</span>
                          <span class="strip-pill">Shared access</span>
                        </div>
                        <h2 class="plan-name">🎼 Studio / School</h2>
                        <p class="plan-persona plan-persona-schools">
                          🏫 You manage teachers, rooms and student instruments in a structured music environment.
                        </p>
                        <p class="plan-price">From €19/month</p>
                        <p class="plan-tagline">
                          Built for pedagogy, shared pianos and multi-user access.
                        </p>
                      </div>

                      <ul class="features">
                        <li>Shared team workspace</li>
                        <li>Instrument history per room or class</li>
                        <li>Diagnosis &amp; tuning follow-up</li>
                        <li>Branded school reports</li>
                        <li>Teacher / technician collaboration</li>
                      </ul>

                      <a href="/contacts/enterprise" class="cta main-cta">Talk to us</a>
                    </div>
                  </article>

                  <!-- CONSERVATORY PLUS -->
                  <article class="plan-card plan-conservatory">
                    <div class="card-glow"></div>

                    <div class="card-inner">
                      <div class="plan-top">
                        <div class="plan-strip plan-strip-conservatory">
                          <span class="strip-label">CONSERVATORY</span>
                          <span class="strip-pill">Advanced</span>
                        </div>
                        <h2 class="plan-name">🎓 Conservatory+</h2>
                        <p class="plan-persona plan-persona-schools">
                          🎹 You operate a larger institution with many pianos, multiple stakeholders and reporting needs.
                        </p>
                        <p class="plan-price">Custom / annual</p>
                        <p class="plan-tagline">
                          For conservatories, academies and structured multi-site programs.
                        </p>
                      </div>

                      <ul class="features">
                        <li>Everything in Studio / School</li>
                        <li>Multi-site support</li>
                        <li>Advanced role management</li>
                        <li>Priority support &amp; onboarding</li>
                        <li>White-label / institutional exports</li>
                      </ul>

                      <a href="/contacts/enterprise" class="cta">Contact sales</a>
                    </div>
                  </article>

                  <!-- EDUCATION ENTERPRISE -->
                  <article class="plan-card plan-enterprise">
                    <div class="card-glow"></div>

                    <div class="card-inner">
                      <div class="plan-top">
                        <div class="plan-strip plan-strip-enterprise">
                          <span class="strip-label">PARTNERS</span>
                        </div>
                        <h2 class="plan-name">🏢 Education Enterprise</h2>
                        <p class="plan-persona plan-persona-blue">
                          🌍 For large institutions, networks and advanced deployments.
                        </p>
                        <p class="plan-price">Custom pricing</p>
                      </div>

                      <ul class="features">
                        <li>Dedicated environment</li>
                        <li>Advanced organization management</li>
                        <li>API / integration options</li>
                        <li>Institutional branding</li>
                        <li>Deployment support</li>
                      </ul>

                      <a href="/contacts/enterprise" class="cta">Discuss project</a>
                    </div>
                  </article>
                {/if}
        <!-- CHURCH & COMMUNITY (2e rangée, centré) -->
        {#if activeTab === 'community'}
            <article class="plan-card plan-faith">
            <div class="card-glow"></div>

            <div class="card-inner">
                <div class="plan-top">
                <div class="plan-strip plan-strip-faith">
                    <span class="strip-label">COMMUNITY</span>
                </div>
                <h2 class="plan-name">⛪ Church &amp; Community</h2>
                <p class="plan-persona plan-persona-faith">
                    🎵 You are a church, choir, or community group keeping pianos alive for worship and harmony.
                </p>
                <p class="plan-price">Free (upon approval)</p>
                <p class="plan-tagline">
                    Faith &amp; Harmony Edition — supporting music in your community.
                </p>
                </div>

                <ul class="features">
                <li>Unlimited pianos within your venue or organization</li>
                <li>All Pro tools (diagnosis, reports, dashboard)</li>
                <li>Shared access for directors &amp; volunteers</li>
                <li>No ads · respectful data policy</li>
                <li>Custom faith-based branding available</li>
                </ul>

                <a href="/plan-faith" class="cta faith-cta">Discover Faith &amp; Harmony</a>
            </div>
            </article>
        {/if}
        
      </section>

      <!-- COMPARE BUTTON -->
    {#if activeTab !== 'community'}
    <button class="compare-btn" on:click={() => (showCompare = true)}>
        {$t('plans.compare.cta')} →
    </button>
    {/if}

      <!-- HIGHLIGHT BAND -->
      <div class="highlight-band">
        <p>
          🎹 <strong>{$t('plans.footer.title')}</strong><br />
          {$t('plans.footer.body')}
        </p>
      </div>

      {#if showCompare}
        <ComparePlansModal on:close={() => (showCompare = false)} />
      {/if}
    </section>
  </div>
</div>

<style>
  .pricing-root {
    position: relative;
  }

  .pricing-overlay {
    min-height: 100vh;
    background: radial-gradient(circle at top, rgba(0, 0, 0, 0.3), #020508 70%);
    backdrop-filter: blur(4px);
  }

  .pricing-page {
    max-width: 1300px;
    margin: 0 auto;
    padding: 4.5rem 1.5rem 3rem;
  }

  /* HERO */
  .hero {
    text-align: center;
    margin-bottom: 2.8rem;
  }

  .eyebrow {
    font-size: 0.75rem;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    color: #5fd4ff;
    margin-bottom: 0.4rem;
  }

  .title {
    font-size: 2.5rem;
    font-weight: 600;
    color: #33cc66;
    text-shadow: 0 0 16px rgba(51, 204, 102, 0.45);
    margin-bottom: 0.5rem;
  }

  .subtitle {
    color: #f4e8c2cc;
    font-size: 1.1rem;
    max-width: 520px;
    margin: 0 auto;
  }
  .tabs-wrap {
  max-width: 980px;
  margin: 0 auto;
  margin-top: 1.3rem;
  text-align: center;
}

.tabs {
  justify-content: center;
}

.tabs-subtitle {
  margin-top: 0.8rem;
  color: #f4e8c2cc;
  font-size: 0.95rem;
}
  .pros-subtabs {
    margin-top: 1rem;
    display: inline-flex;
    gap: 0.75rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .pros-subtab {
    border: 1px solid rgba(95, 212, 255, 0.3);
    background: rgba(2, 9, 14, 0.88);
    color: #bfefff;
    padding: 0.5rem 1rem;
    border-radius: 999px;
    cursor: pointer;
    font-size: 0.82rem;
    letter-spacing: 0.03em;
    transition: all 0.2s ease;
  }

  .pros-subtab:hover {
    border-color: rgba(95, 212, 255, 0.7);
    box-shadow: 0 0 14px rgba(95, 212, 255, 0.18);
  }

  .pros-subtab.is-active {
    border-color: #33cc66;
    color: #d8ffe5;
    background: rgba(10, 30, 18, 0.92);
    box-shadow: 0 0 16px rgba(51, 204, 102, 0.25);
  }

  .tabs-subtitle-pro {
    margin-top: 0.9rem;
  }

  /* GRID */
  .plans-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.6rem;
    align-items: stretch;
    margin-top: 2.5rem;
  }

  /* CARD BASE */
  .plan-card {
    position: relative;
    border-radius: 1.4rem;
    overflow: hidden;
    background: #020509;
    border: 1px solid #0c141b;
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.85);
    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
    display: flex;
  }

  .plan-card:hover {
    transform: translateY(-4px);
    border-color: #1fb6ff99;
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.95);
  }

  .plan-card.plan-free:hover,
  .plan-card.plan-pro:hover {
    border-color: #2dc34a;
    box-shadow: 0 26px 70px rgba(0, 0, 0, 0.98);
  }

  .card-glow {
    pointer-events: none;
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background:
      radial-gradient(circle at 20% 0%, rgba(31, 182, 255, 0.22), transparent 55%),
      radial-gradient(circle at 80% 120%, rgba(45, 195, 74, 0.18), transparent 55%);
    opacity: 0.8;
    mix-blend-mode: screen;
  }

  .card-inner {
    position: relative;
    z-index: 1;
    padding: 1.8rem 1.7rem 1.6rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  .plan-top {
    margin-bottom: 0.4rem;
  }

  .plan-strip {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    padding: 0.25rem 0.7rem;
    border-radius: 999px;
    background: linear-gradient(90deg, #041421, #031019);
    border: 1px solid rgba(95, 212, 255, 0.65);
    margin-bottom: 0.9rem;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: #8fe3ff;
  }

  .plan-strip-free {
    border-color: rgba(45, 195, 74, 0.9);
    box-shadow: 0 0 14px rgba(45, 195, 74, 0.55);
  }

  .plan-strip-pro {
    border-color: #ffd700aa;
    box-shadow: 0 0 16px rgba(255, 215, 0, 0.55);
  }

  .plan-strip-enterprise {
    border-color: #b26bffaa;
  }

  .plan-strip-faith {
    border-color: #aaf0c1dd;
  }

  .strip-label {
    font-weight: 500;
  }

  .strip-pill {
    padding: 0.18rem 0.65rem;
    border-radius: 999px;
    background: rgba(0, 0, 0, 0.6);
    border: 1px solid currentColor;
    font-size: 0.65rem;
  }

  .plan-name {
    font-size: 1.4rem;
    margin: 0 0 0.2rem;
    color: #f4e8c2;
  }

  .plan-scale {
    font-size: 0.8rem;
    color: #8fa3ad;
    letter-spacing: 0.02em;
    margin: 0 0 0.4rem;
  }

  .plan-persona {
    font-size: 0.88rem;
    font-style: italic;
    color: #ffd700cc;
    margin: 0 0 0.5rem;
  }

  .plan-persona-blue {
    color: #5fd4ff;
  }

  .plan-persona-faith {
    color: #aaf0c1;
  }

  .plan-price {
    font-size: 0.95rem;
    color: #2dc34a;
    margin-bottom: 0.2rem;
  }

  .plan-tagline {
    font-size: 0.82rem;
    color: #f4e8c2b3;
    margin: 0.1rem 0 0.4rem;
  }

  .features {
    list-style: none;
    padding: 0;
    margin: 0.4rem 0 0.8rem;
    font-size: 0.88rem;
    color: #e3e3e3;
  }

  .features li + li {
    margin-top: 0.25rem;
  }

  /* CTA */
  .cta {
    margin-top: auto;
    align-self: center;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.6rem 1.6rem;
    border-radius: 999px;
    border: 1px solid #1fb6ffcc;
    background: #020a12;
    color: #8fe3ff;
    font-size: 0.9rem;
    font-weight: 500;
    text-decoration: none;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    transition: all 0.23s ease;
  }

  .cta:hover {
    background: rgba(31, 182, 255, 0.18);
    box-shadow: 0 0 18px rgba(31, 182, 255, 0.65);
  }

  .main-cta {
    border-color: #2dc34a;
    color: #c9ffd6;
    background: #020b05;
  }

  .main-cta:hover {
    background: rgba(45, 195, 74, 0.15);
    box-shadow: 0 0 20px rgba(45, 195, 74, 0.8);
  }

  .faith-cta {
    border-color: #aaf0c1;
    color: #0b1810;
    background: #aaf0c1;
  }

  .faith-cta:hover {
    background: #c0f4d0;
    box-shadow: 0 0 18px rgba(170, 240, 193, 0.7);
  }

  /* COMPARE BUTTON & HIGHLIGHT */
  .compare-btn {
    margin: 2.5rem auto 0;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    background: none;
    border-radius: 999px;
    border: 1px solid #33cc66;
    color: #33cc66;
    padding: 0.55rem 1.4rem;
    cursor: pointer;
    font-size: 0.92rem;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    transition: all 0.2s ease;
  }

  .compare-btn:hover {
    background: rgba(51, 204, 102, 0.12);
    box-shadow: 0 0 16px rgba(51, 204, 102, 0.6);
  }

  .highlight-band {
    margin-top: 3rem;
    text-align: center;
    max-width: 760px;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.02rem;
    color: #f4e8c2dd;
  }

  .highlight-band strong {
    color: #ffd700;
  }

  @media (max-width: 768px) {
    .pricing-page {
      padding-top: 4rem;
    }
    .plans-grid {
      grid-template-columns: 1fr;
    }
  }

  .plan-pro-starter {
  border-color: #1fb6ff55;
}
</style>
