<script lang="ts">
  import PlanCard from '$lib/Plans/PlanCard.svelte';
</script>

<div
  class="fh-root min-h-screen w-full bg-cover bg-center bg-no-repeat text-[#F1E8C7]"
  style="background-image: url('/assets/fond-5.webp');"
>
  <div class="fh-overlay">
    <main class="fh-page">
      <!-- HERO -->
      <header class="hero">
        <p class="eyebrow">PYTUNE · FAITH &amp; HARMONY</p>
        <h1 class="title">Faith &amp; Harmony Edition</h1>
        <p class="tagline">
          Supporting music in your community — free for churches and non-profits.
        </p>
      </header>

      <!-- PLAN CARD -->
      <section class="plans">
        <PlanCard
          variant="pricing"
          title="Faith & Harmony"
          price="Free (upon approval)"

          badge={{
            label: 'COMMUNITY',
            pill: 'Churches, non-profits & community groups',
            accent: 'emerald'
          }}

          persona="⛪ You are a church, school, or community organization caring for shared instruments."
          tagline="Supporting music in your community — respectfully, freely, and sustainably."

          features={[
            'Unlimited pianos within your venue or organization',
            'All Pro tools (diagnosis, reports & dashboard)',
            'Shared access for music directors & volunteers',
            'Priority support for events and recitals',
            'No ads · respectful data policy · optional faith branding'
          ]}

          cta={{
            label: 'Request access',
            href: '/contacts/community',
            primary: true
          }}
        />
      </section>

      <!-- VALUES -->
      <section class="values">
        <div class="values-inner">
          <h2>🎶 A spirit of care and connection</h2>
          <p>
            PyTune believes that music brings people together — in faith, in art, and in
            kindness. The Faith &amp; Harmony Edition helps you take care of your
            instruments so they can continue inspiring worship, learning, and harmony
            for generations.
          </p>
        </div>
      </section>

      <!-- FEATURES -->
      <section class="features">
        <div class="features-inner">
          <h2>🌿 What you receive</h2>
          <div class="grid">
            <div class="item">
              <h3>Unlimited access</h3>
              <p>
                Maintain and tune every piano in your church, school, or community
                center.
              </p>
            </div>
            <div class="item">
              <h3>Community collaboration</h3>
              <p>
                Share access with multiple members — choirs, teachers, organists,
                and caretakers.
              </p>
            </div>
            <div class="item">
              <h3>AI guidance, simply</h3>
              <p>
                Use PyTune AI to guide your volunteers with clear care tips and
                diagnostics.
              </p>
            </div>
            <div class="item">
              <h3>Respectful data policy</h3>
              <p>
                No ads, no selling data. Just your community and your music —
                safely stored.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="fh-cta">
        <div class="fh-cta-inner">
          <h2>Join Faith &amp; Harmony</h2>
          <p>Let’s make your music ministry even more inspiring.</p>
          <a href="/contacts/community" class="cta-main">
            Request free access
          </a>
        </div>
      </section>
    </main>
  </div>
</div>

<style>
  .fh-root {
    position: relative;
  }

  .fh-overlay {
    min-height: 100vh;
    background: radial-gradient(circle at top, rgba(0, 0, 0, 0.35), #020509 70%);
    backdrop-filter: blur(4px);
  }

  .fh-page {
    max-width: 1100px;
    margin: 0 auto;
    padding: 4.5rem 1.5rem 3.5rem;
  }

  /* HERO */

  .hero {
    text-align: center;
    margin-bottom: 2.6rem;
  }

  .eyebrow {
    font-size: 0.75rem;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    color: #aaf0c1;
    margin-bottom: 0.3rem;
  }

  .title {
    font-size: 2.4rem;
    font-weight: 600;
    color: #aaf0c1;
    text-shadow: 0 0 14px rgba(170, 240, 193, 0.5);
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
    margin-top: 2.1rem;
    margin-bottom: 2.8rem;
  }

  /* VALUES */

  .values {
    margin-bottom: 3rem;
  }

  .values-inner {
    border-radius: 1.6rem;
    background: #020509;
    border: 1px solid rgba(170, 240, 193, 0.6);
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.85);
    padding: 1.9rem 1.6rem 2.1rem;
    max-width: 900px;
    margin: 0 auto;
  }

  .values-inner h2 {
    color: #aaf0c1;
    margin-bottom: 0.9rem;
    text-align: center;
  }

  .values-inner p {
    color: #f4f4dd;
    line-height: 1.7;
    max-width: 720px;
    margin: 0 auto;
    text-align: center;
  }

  /* FEATURES */

  .features {
    margin-bottom: 3.2rem;
  }

  .features-inner {
    border-radius: 1.6rem;
    background: #05070a;
    border: 1px solid rgba(255, 255, 255, 0.08);
    padding: 2rem 1.7rem 2.3rem;
    max-width: 950px;
    margin: 0 auto;
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.85);
  }

  .features-inner h2 {
    color: #ffd700;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.4rem;
  }

  .item {
    background: #070913;
    border-radius: 1rem;
    padding: 1rem 1.2rem;
    border: 1px solid rgba(170, 240, 193, 0.28);
  }

  .item h3 {
    color: #aaf0c1;
    margin-bottom: 0.45rem;
  }

  .item p {
    font-size: 0.94rem;
    color: #f4f4dd;
  }

  /* CTA */

  .fh-cta {
    margin-top: 3rem;
  }

  .fh-cta-inner {
    border-radius: 1.4rem;
    background: radial-gradient(circle at top, #111 0%, #02070a 70%);
    border: 1px solid rgba(170, 240, 193, 0.8);
    box-shadow: 0 0 22px rgba(170, 240, 193, 0.9);
    padding: 1.8rem 1.6rem 2rem;
    text-align: center;
  }

  .fh-cta-inner h2 {
    color: #aaf0c1;
    margin-bottom: 0.4rem;
  }

  .fh-cta-inner p {
    color: #f4f4dd;
    margin-bottom: 1.1rem;
  }

  .cta-main {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.7rem;
    border-radius: 999px;
    background: #aaf0c1;
    color: #020409;
    font-weight: 700;
    font-size: 0.95rem;
    text-decoration: none;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    border: 1px solid #aaf0c1;
    box-shadow: 0 0 18px rgba(170, 240, 193, 0.9);
    transition: all 0.2s ease;
  }

  .cta-main:hover {
    background: #8cdba6;
    box-shadow: 0 0 24px rgba(170, 240, 193, 1);
  }

  @media (max-width: 768px) {
    .fh-page {
      padding-top: 4rem;
    }
    .title {
      font-size: 2.1rem;
    }
  }
</style>
