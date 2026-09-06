<script lang="ts">
  import { appHref } from '$lib/navigation/origins';
  import PlanCard from '$lib/Plans/PlanCard.svelte';
  import { t } from '$lib/i18n/langStore';
</script>

<div
  class="indy-root min-h-screen w-full bg-cover bg-center bg-no-repeat text-[#F1E8C7]"
  style="background-image: url('/assets/fond-5.webp');"
>
  <div class="indy-overlay">
    <main class="indy-page">
      <!-- HERO -->
      <header class="hero">
        <p class="eyebrow">PYTUNE · INDY</p>
        <h1 class="title">PyTune Indy</h1>
        <p class="tagline">
          For piano lovers who care for their instrument — and want to go further.
        </p>
      </header>

      <!-- TOP PLANS -->
      <section class="plans">
        <PlanCard
          variant="pricing"
          title={$t('plans.indy.solo.name')}
          scale={$t('plans.indy.solo.scale')}
          price={$t('plans.indy.solo.price')}

          badge={{
            label: 'INDY',
            pill: 'For curious pianists and enthusiasts',
            accent: 'indy'
          }}

          persona="🎹 You are an independent musician or piano lover exploring your sound."
          tagline={$t('plans.indy.solo.tagline')}

          features={[
            $t('plans.indy.solo.feat1'),
            $t('plans.indy.solo.feat2'),
            $t('plans.indy.solo.feat3'),
            $t('plans.indy.solo.feat4'),
            $t('plans.indy.solo.feat5')
          ]}

          cta={{
            label: $t('plans.indy.solo.cta'),
            href: appHref('/get-started'),
            primary: true
          }}
        />

        <PlanCard
          variant="pricing"
          title={$t('plans.indy.multi.name')}
          scale={$t('plans.indy.multi.scale')}
          price={$t('plans.indy.multi.price')}

          badge={{
            label: 'INDY MULTI',
            pill: 'For collectors and dedicated piano owners',
            accent: 'gold'
          }}

          persona="💎 You are a collector or dedicated piano owner who wants deeper insights and care."
          tagline={$t('plans.indy.multi.tagline')}

          features={[
            $t('plans.indy.multi.feat1'),
            $t('plans.indy.multi.feat2'),
            $t('plans.indy.multi.feat3')
          ]}

          cta={{
            label: $t('plans.indy.multi.cta'),
            href: appHref('/subscribe?plan=indy'),
            primary: true
          }}
        />
      </section>

      <!-- BENEFITS -->
      <section class="benefits">
        <div class="benefits-inner">
          <h2>✨ Why choose Indy?</h2>
          <div class="benefits-grid">
            <article class="benefit-card">
              <h3>Connect with your piano</h3>
              <p>
                Understand its story, value, and unique character through precision AI diagnostics
                and insights.
              </p>
            </article>

            <article class="benefit-card">
              <h3>Grow your expertise</h3>
              <p>
                Receive recommendations and historical data about your instrument — curated by
                PyTune AI.
              </p>
            </article>

            <article class="benefit-card">
              <h3>Stay independent</h3>
              <p>
                No ads, no commissions — just you and your piano, with tools to explore and care
                freely.
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- COMPARE TABLE -->
      <section class="compare">
        <div class="compare-inner">
          <h2>🎹 Indy Solo vs Indy Multi</h2>
          <div class="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Indy Solo</th>
                  <th>Indy Multi</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Number of pianos</td><td>1</td><td>3</td></tr>
                <tr><td>PDF reports</td><td>–</td><td>✅</td></tr>
                <tr><td>Photo identification</td><td>✅</td><td>✅</td></tr>
                <tr><td>AI tuning assistant</td><td>–</td><td>✅</td></tr>
                <tr><td>Priority support</td><td>–</td><td>–</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- FINAL CTA -->
      <section class="indy-cta">
        <div class="indy-cta-inner">
          <h2>Join the PyTune Indy community</h2>
          <p>
            Start tuning, learning, and rediscovering your piano — the smart, emotional way.
          </p>
          <a href={appHref('/subscribe?plan=indy')} class="cta-main" target="_blank" rel="noopener noreferrer">Join now</a>
        </div>
      </section>
    </main>
  </div>
</div>

<style>
  .indy-root {
    position: relative;
  }

  .indy-overlay {
    min-height: 100vh;
    background: radial-gradient(circle at top, rgba(0, 0, 0, 0.3), #020508 70%);
    backdrop-filter: blur(4px);
  }

  .indy-page {
    max-width: 1100px;
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
    color: #5fd4ff;
    margin-bottom: 0.3rem;
  }

 .title {
  color: #e7d9a3; /* pytune-gold */
  text-shadow: 0 0 14px rgba(231, 217, 163, 0.35);
}

  .tagline {
    color: #f4e8c2cc;
    font-size: 1.05rem;
    max-width: 540px;
    margin: 0 auto;
  }

  /* PLANS */
  .plans {
    display: grid;
    gap: 1.6rem;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    margin-top: 2.2rem;
  }

  /* BENEFITS */
  .benefits {
    margin-top: 3rem;
  }

  .benefits-inner {
    border-radius: 1.4rem;
    background: #020509;
    border: 1px solid #0c141b;
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.85);
    padding: 1.8rem 1.6rem 1.9rem;
    position: relative;
    overflow: hidden;
  }

  .benefits-inner::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background:
      radial-gradient(circle at 20% 0%, rgba(31, 182, 255, 0.22), transparent 55%),
      radial-gradient(circle at 80% 120%, rgba(45, 195, 74, 0.18), transparent 55%);
    opacity: 0.75;
    mix-blend-mode: screen;
    pointer-events: none;
  }

  .benefits-inner h2 {
    position: relative;
    z-index: 1;
    color: #33cc66;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .benefits-grid {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 1.3rem;
  }

  .benefit-card {
    background: #050a0f;
    border-radius: 1rem;
    padding: 1rem 1.1rem;
    border: 1px solid rgba(255, 255, 255, 0.06);
  }

  .benefit-card h3 {
    color: #ffd700;
    margin-bottom: 0.4rem;
    font-size: 1rem;
  }
  .benefits-inner h2 {
  color: #e7d9a3; /* au lieu de #33cc66 */
}

  .benefit-card p {
    font-size: 0.9rem;
    color: #f4e8c2dd;
  }

  /* COMPARE */
  .compare {
    margin-top: 3rem;
  }

  .compare-inner {
    border-radius: 1.4rem;
    background: #020509;
    border: 1px solid #0c141b;
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.85);
    padding: 1.8rem 1.4rem 1.6rem;
  }

  .compare-inner h2 {
    color: #ffd700;
    text-align: center;
    margin-bottom: 1.1rem;
  }

  .table-wrapper {
    overflow-x: auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border-radius: 1rem;
    overflow: hidden;
    background: #070b0f;
  }

  th,
  td {
    padding: 0.8rem 0.9rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    border-right: 1px solid rgba(255, 255, 255, 0.06);
    text-align: center;
    font-size: 0.9rem;
  }

  th:last-child,
  td:last-child {
    border-right: none;
  }

  thead th {
  background: #050a10;
  color: #9ad8ff; /* pytune-blue */
}
.compare-inner h2 {
  color: #e7d9a3;
}

  tbody tr:last-child td {
    border-bottom: none;
  }

  td {
    color: #e3e3e3;
  }

  /* FINAL CTA */
  .indy-cta {
    margin-top: 3.2rem;
  }

  .indy-cta-inner {
    border-radius: 1.4rem;
    background: radial-gradient(circle at top, #111 0%, #02070a 70%);
    border: 1px solid rgba(255, 255, 255, 0.09);
    box-shadow: 0 0 24px rgba(45, 195, 74, 0.35);
    padding: 1.8rem 1.6rem 2rem;
    text-align: center;
  }

  .indy-cta-inner h2 {
    color: #ffd700;
    margin-bottom: 0.4rem;
  }

  .indy-cta-inner p {
    color: #f4e8c2dd;
    margin-bottom: 1.2rem;
  }

  .cta-main {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.7rem;
    border-radius: 999px;
    background: #33cc66;
    color: #021108;
    font-weight: 700;
    font-size: 0.95rem;
    text-decoration: none;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    border: 1px solid #33cc66;
    box-shadow: 0 0 18px rgba(51, 204, 102, 0.8);
    transition: all 0.2s ease;
  }

  .cta-main:hover {
    background: #2aae59;
    box-shadow: 0 0 24px rgba(51, 204, 102, 1);
  }

  @media (max-width: 768px) {
    .indy-page {
      padding-top: 4rem;
    }
    .title {
      font-size: 2.1rem;
    }
  }
</style>
