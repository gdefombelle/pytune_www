<script lang="ts">
  import PlanCard from '$lib/Plans/PlanCard.svelte';
  import { t } from '$lib/i18n/langStore';
</script>

<div
  class="ent-root min-h-screen w-full bg-cover bg-center bg-no-repeat text-[#F1E8C7]"
  style="background-image: url('/assets/fond-5.webp');"
>
  <div class="ent-overlay">
    <main class="ent-page">
      <!-- HERO -->
      <header class="hero">
        <p class="eyebrow">PYTUNE · ENTERPRISE</p>
        <h1 class="title">PyTune for Enterprise</h1>
        <p class="tagline">
          Help your network deliver a more consistent, premium service experience around the instrument.
        </p>
      </header>

      <!-- PLAN CARD -->
      <section class="plans">
        <PlanCard
          variant="pricing"
          title={$t('plans.pro.enterprise.name')}
          price={$t('plans.pro.enterprise.price')}

          badge={{
            label: 'ENTERPRISE',
            pill: 'Manufacturers, distributors & service networks',
            accent: 'violet'
          }}

          persona="🌍 You support a premium piano brand, a dealer network or institutional partners and want a more consistent service experience around the instrument."
          tagline={$t('plans.pro.enterprise.tagline')}

          features={[
            $t('plans.pro.enterprise.feat1'),
            $t('plans.pro.enterprise.feat2'),
            $t('plans.pro.enterprise.feat3'),
            $t('plans.pro.enterprise.feat4')
          ]}

          cta={{
            label: $t('plans.pro.enterprise.cta'),
            href: '/contacts/enterprise',
            primary: true
          }}
        />
      </section>

      <!-- CONNECTED ECOSYSTEM -->
      <section class="ecosystem">
        <div class="eco-inner">
          <h2>🎹 One platform for brands, partners and service networks</h2>
          <p class="intro">
            PyTune helps manufacturers, importers and premium networks align reports, follow-up and service standards across dealers, technicians and institutional partners.
          </p>

          <div class="eco-flow">
            <div class="eco-row">
              <div class="node">
                <div class="node-label">🎼 Brand</div>
                <h3>Service identity & standards</h3>
                <p>
                  Define a more consistent service presentation with shared reports, branded communication and network-wide quality expectations.
                </p>
              </div>

              <div class="connector">
                <span class="dot"></span>
                <span class="line"></span>
              </div>

              <div class="node">
                <div class="node-label">🏪 Importer / Distributor</div>
                <h3>Partner coordination</h3>
                <p>
                  Support dealers, showrooms and technical partners with a common service layer instead of disconnected tools and ad hoc reporting.
                </p>
              </div>
            </div>

            <div class="eco-row eco-row-bottom">
              <div class="node">
                <div class="node-label">🧑‍🔧 Technician / Dealer</div>
                <h3>Guided service delivery</h3>
                <p>
                  Use PyTune workflows, diagnostics and reports to deliver a more professional, traceable and premium service experience.
                </p>
              </div>

              <div class="connector">
                <span class="dot"></span>
                <span class="line"></span>
              </div>

              <div class="node">
                <div class="node-label">🏫 Institution / Client</div>
                <h3>Better continuity after the sale</h3>
                <p>
                  Receive clearer reports, structured follow-up and a more coherent service relationship around the instrument over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- PLATFORM / DATA -->
      <section class="platform">
        <div class="platform-inner">
          <h2>🔒 Enterprise deployment, support and brand-specific options</h2>
          <p class="platform-intro">
            Start with service consistency and partner support, then extend into dedicated deployment, security and brand-specific intelligence when needed.
          </p>

          <div class="platform-grid">
            <div class="item">
              <h3>Dedicated Environment</h3>
              <p>
                Dedicated deployment options are available for brands or networks that need stronger isolation, governance or rollout control.
              </p>
            </div>

            <div class="item">
              <h3>Brand-Specific AI</h3>
              <p>
                Connect documentation, guidance and internal knowledge to support more tailored diagnostics, recommendations and service assistance.
              </p>
            </div>

            <div class="item">
              <h3>Security & Support</h3>
              <p>
                Priority online support, enterprise-grade access policies and deployment options can be aligned with your internal requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="ent-cta">
        <div class="ent-cta-inner">
          <h2>Let’s build your piano ecosystem together</h2>
          <p>
            We work with selected partners to design pilot programs, co-branded service experiences and long-term digital strategies around PyTune.
          </p>
          <a href="/contacts/enterprise" class="cta-main">
            Contact sales
          </a>
        </div>
      </section>
    </main>
  </div>
</div>

<style>
  .ent-root {
    position: relative;
  }

  .ent-overlay {
    min-height: 100vh;
    background: radial-gradient(circle at top, rgba(0, 0, 0, 0.35), #020509 70%);
    backdrop-filter: blur(4px);
  }

  .ent-page {
    max-width: 1240px;
    margin: 0 auto;
    padding: 4.5rem 1.5rem 3.5rem;
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
    color: #b08cff;
    margin-bottom: 0.3rem;
  }

  .title {
    font-size: 2.4rem;
    font-weight: 600;
    color: #e0c2ff;
    text-shadow: 0 0 14px rgba(176, 140, 255, 0.55);
    margin-bottom: 0.4rem;
  }

  .tagline {
    color: #ffd700;
    font-size: 1.05rem;
    max-width: 620px;
    margin: 0 auto;
  }

  /* PLAN */

  .plans {
    display: flex;
    justify-content: center;
    margin-top: 2.2rem;
    margin-bottom: 3rem;
  }

  /* ECOSYSTEM */

  .ecosystem {
    margin-bottom: 3rem;
  }

  .eco-inner {
    position: relative;
    border-radius: 1.6rem;
    background: #020509;
    border: 1px solid #1b1030;
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.9);
    padding: 2.1rem 1.7rem 2.4rem;
    overflow: hidden;
  }

  .eco-inner::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background:
      radial-gradient(circle at 20% 0%, rgba(31, 182, 255, 0.32), transparent 55%),
      radial-gradient(circle at 80% 120%, rgba(176, 140, 255, 0.32), transparent 55%);
    opacity: 0.8;
    mix-blend-mode: screen;
    pointer-events: none;
  }

  .eco-inner h2 {
    position: relative;
    z-index: 1;
    color: #ffd700;
    text-align: center;
    margin-bottom: 0.8rem;
  }

  .intro {
    position: relative;
    z-index: 1;
    color: #f4e8c2dd;
    max-width: 720px;
    margin: 0 auto 1.8rem;
    text-align: center;
  }

  .eco-flow {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.4rem;
    max-width: 980px;
    margin: 0 auto;
  }

  .eco-row {
    display: contents;
  }

  .eco-row-bottom {
    margin-top: 0;
  }

  .node {
    background: #070913;
    border-radius: 1rem;
    padding: 1.15rem 1.4rem 1.2rem;
    border: 1px solid rgba(255, 255, 255, 0.12);
    width: 100%;
    min-height: 185px;
  }

  .node-label {
    display: inline-flex;
    align-items: center;
    padding: 0.15rem 0.6rem;
    border-radius: 999px;
    background: rgba(176, 140, 255, 0.16);
    border: 1px solid rgba(176, 140, 255, 0.7);
    font-size: 0.8rem;
    margin-bottom: 0.35rem;
    color: #e0c2ff;
  }

  .node h3 {
    color: #8df29c;
    margin-bottom: 0.25rem;
    font-size: 1rem;
  }

  .node p {
    font-size: 0.9rem;
    color: #f4e8c2dd;
  }

  .connector {
    display: none;
  }

  .connector .dot {
    width: 7px;
    height: 7px;
    border-radius: 999px;
    background: #ffd700;
    box-shadow: 0 0 8px rgba(255, 215, 0, 0.9);
  }

  .connector .line {
    width: 2px;
    height: 24px;
    border-radius: 999px;
    background: linear-gradient(to bottom, #ffd700, transparent);
    opacity: 0.9;
  }

  /* PLATFORM / DATA */

  .platform {
    margin-bottom: 3.2rem;
  }

  .platform-inner {
    border-radius: 1.6rem;
    background: #05050b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    padding: 2rem 1.7rem 2.3rem;
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.8);
  }

  .platform-inner h2 {
    text-align: center;
    color: #ffd700;
    margin-bottom: 0.8rem;
  }

  .platform-intro {
    text-align: center;
    max-width: 720px;
    margin: 0 auto 1.7rem;
    color: #f4e8c2dd;
  }

  .platform-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.4rem;
  }

  .item {
    background: #070913;
    border-radius: 1rem;
    padding: 1rem 1.3rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .item h3 {
    color: #8df29c;
    margin-bottom: 0.4rem;
  }

  .item p {
    font-size: 0.92rem;
    color: #f4e8c2dd;
  }

  /* CTA */

  .ent-cta {
    margin-top: 3rem;
  }

  .ent-cta-inner {
    border-radius: 1.4rem;
    background: radial-gradient(circle at top, #111 0%, #02070a 70%);
    border: 1px solid rgba(176, 140, 255, 0.7);
    box-shadow: 0 0 24px rgba(176, 140, 255, 0.8);
    padding: 1.8rem 1.6rem 2rem;
    text-align: center;
  }

  .ent-cta-inner h2 {
    color: #e0c2ff;
    margin-bottom: 0.4rem;
  }

  .ent-cta-inner p {
    color: #f4e8c2dd;
    margin-bottom: 1.2rem;
  }

  .cta-main {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.7rem;
    border-radius: 999px;
    background: #b08cff;
    color: #020409;
    font-weight: 700;
    font-size: 0.95rem;
    text-decoration: none;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    border: 1px solid #b08cff;
    box-shadow: 0 0 18px rgba(176, 140, 255, 0.9);
    transition: all 0.2s ease;
  }

  .cta-main:hover {
    background: #9f76ff;
    box-shadow: 0 0 24px rgba(176, 140, 255, 1);
  }

  @media (max-width: 768px) {
    .ent-page {
      padding-top: 4rem;
    }
    .title {
      font-size: 2.1rem;
    }
    .eco-row {
      flex-direction: column;
    }
    .eco-flow {
      grid-template-columns: 1fr;
    }
    .platform-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
