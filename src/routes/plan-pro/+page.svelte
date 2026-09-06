<script lang="ts">
  import { appHref } from '$lib/navigation/origins';
  import PlanCard from '$lib/Plans/PlanCard.svelte';
  import { t } from '$lib/i18n/langStore';
</script>

<div
  class="pro-root min-h-screen w-full bg-cover bg-center bg-no-repeat text-[#F1E8C7]"
  style="background-image: url('/assets/fond-5.webp');"
>
  <div class="pro-overlay">
    <main class="pro-page">
      <!-- HERO -->
      <header class="hero">
        <p class="eyebrow">PYTUNE · PRO</p>
        <h1 class="title">The full workspace for piano professionals</h1>
        <p class="tagline">
          Tune, diagnose, report and follow up — with no reduced version and no device lock.
        </p>
      </header>
      

      <!-- PRO / PRO+ CARDS -->
      <section class="plans">
        <PlanCard
          variant="pricing"
          title={$t('plans.pro.main.name')}
          price="€5/month or €45/year"

          badge={{
            label: $t('plans.pro.main.badge'),
            pill: 'Full version · 1 user · all devices',
            accent: 'gold'
          }}

          persona="🧰 You are a piano technician, teacher or independent professional who wants the full PyTune workspace from day one."
          tagline={$t('plans.pro.main.tagline')}

          features={[
            $t('plans.pro.main.feat1'),
            $t('plans.pro.main.feat2'),
            $t('plans.pro.main.feat3'),
            $t('plans.pro.main.feat4'),
            $t('plans.pro.main.feat5')
          ]}

          cta={{
            label: $t('plans.pro.main.cta'),
            href: appHref('/subscribe?plan=pro'),
            primary: true
          }}
        />

        <PlanCard
          variant="pricing"
          title="Pro+"
          price="From €10/month"

          badge={{
            label: 'PRO+',
            pill: 'Team workspace · seats · shared follow-up',
            accent: 'violet'
          }}

          persona="🏢 You manage a workshop, studio, shop or school and need shared access, team roles and structured follow-up."
          tagline="Everything in Pro, built for multiple users."

          features={[
            'Everything in Pro',
            'Additional users / seats',
            'Team workspace with role-based permissions',
            'Shared customer and instrument follow-up',
            'Organization dashboard and collaborator visibility',
            'Multi-site / workshop-ready evolution',
            'Progressive pricing for larger teams',
            'Priority support'
          ]}

          cta={{
            label: 'Talk to us',
            href: '/contacts/enterprise',
            primary: false
          }}
        />
      </section>

      <!-- GROWTH FLOW -->
      <section class="lead-flow">
        <div class="lead-flow-inner">
          <h2>🚀 More than tuning: PyTune helps you win and keep customers</h2>
          <p class="flow-intro">
            PyTune is not just a tuner. It helps you get discovered, build trust, deliver beautiful reports, and create long-term relationships with piano owners.
          </p>

          <div class="flow-steps">
            <div class="step-card">
              <div class="step-badge">1️⃣ Owners start with PyTune</div>
              <h3>Piano owners identify, check or diagnose their instrument</h3>
              <p>
                Individuals use <strong>PyTune</strong> to identify their piano, explore its condition,
                and start understanding tuning or maintenance needs.
              </p>
            </div>

            <div class="connector">
              <span class="dot"></span>
              <span class="line"></span>
            </div>

            <div class="step-card">
              <div class="step-badge">2️⃣ Your expertise becomes visible</div>
              <h3>Get discovered by relevant piano owners</h3>
              <p>
                PyTune can surface your <strong>professional profile, services and listings</strong>
                to owners looking for help nearby or searching for the right professional.
              </p>
            </div>

            <div class="connector">
              <span class="dot"></span>
              <span class="line"></span>
            </div>

            <div class="step-card">
              <div class="step-badge">3️⃣ You receive qualified context</div>
              <h3>Better than a simple contact request</h3>
              <p>
                Instead of a vague message, you may receive <strong>useful piano context</strong>:
                identification details, condition clues, diagnostics, and owner intent.
              </p>
            </div>

            <div class="connector">
              <span class="dot"></span>
              <span class="line"></span>
            </div>

            <div class="step-card">
              <div class="step-badge">4️⃣ Deliver a premium customer experience</div>
              <h3>Beautiful reports, follow-up and trust</h3>
              <p>
                Send <strong>clear PDF reports, tuning summaries, piano identification emails,
                and professional follow-up messages</strong> that strengthen trust and elevate your image.
              </p>
            </div>

            <div class="connector">
              <span class="dot"></span>
              <span class="line"></span>
            </div>

            <div class="step-card">
              <div class="step-badge">5️⃣ Build lasting client relationships</div>
              <h3>Turn one intervention into long-term care</h3>
              <p>
                With reminders, instrument history and structured follow-up, PyTune helps you
                transform one appointment into an ongoing customer relationship —
                <strong>without commission, without marketplace dependency</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- FINAL CTA -->
      <section class="pro-cta">
        <div class="pro-cta-inner">
          <h2>Start with the full version — grow when your team grows</h2>
          <p>
            Join PyTune Pro for full tuning, diagnosis, reports and customer follow-up,
            then scale to Pro+ when you need more users and shared organization tools.
          </p>
          <a href={appHref('/subscribe?plan=pro')} class="cta-main" target="_blank" rel="noopener noreferrer">
            Join PyTune Pro
          </a>
        </div>
      </section>
    </main>
  </div>
</div>

<style>
  .pro-root {
    position: relative;
  }

  .pro-overlay {
    min-height: 100vh;
    background: radial-gradient(circle at top, rgba(0, 0, 0, 0.35), #020508 70%);
    backdrop-filter: blur(4px);
  }

  .pro-page {
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
    font-size: 2.4rem;
    font-weight: 600;
    color: #ffd700;
    text-shadow: 0 0 14px rgba(255, 215, 0, 0.45);
    margin-bottom: 0.4rem;
  }

  .tagline {
    color: #8df29c;
    font-size: 1.05rem;
    max-width: 560px;
    margin: 0 auto;
  }

  /* PLANS */

  .plans {
    display: grid;
    gap: 1.6rem;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    margin-top: 2.2rem;
  }

  /* LEADS FLOW */
    .flow-intro {
    position: relative;
    z-index: 1;
    max-width: 760px;
    margin: 0 auto 1.6rem;
    text-align: center;
    color: #f4e8c2dd;
    font-size: 0.96rem;
    line-height: 1.6;
  }
  .lead-flow {
    margin-top: 3rem;
  }

  .lead-flow-inner {
    position: relative;
    border-radius: 1.6rem;
    background: #020509;
    border: 1px solid #0c141b;
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.9);
    padding: 2rem 1.6rem 2.3rem;
    overflow: hidden;
  }

  .lead-flow-inner::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background:
      radial-gradient(circle at 15% 0%, rgba(31, 182, 255, 0.25), transparent 55%),
      radial-gradient(circle at 85% 120%, rgba(255, 215, 0, 0.25), transparent 55%);
    opacity: 0.75;
    mix-blend-mode: screen;
    pointer-events: none;
  }

  .lead-flow-inner h2 {
    position: relative;
    z-index: 1;
    color: #ffd700;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .flow-steps {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.1rem;
  }

  .step-card {
    background: #050a0f;
    border-radius: 1rem;
    padding: 1rem 1.4rem 1.1rem;
    border: 1px solid rgba(255, 255, 255, 0.08);
    max-width: 560px;
    width: 100%;
    text-align: left;
  }

  .step-badge {
    display: inline-flex;
    align-items: center;
    padding: 0.15rem 0.6rem;
    border-radius: 999px;
    background: rgba(63, 207, 142, 0.12);
    border: 1px solid rgba(63, 207, 142, 0.6);
    color: #7fffd4;
    font-size: 0.8rem;
    margin-bottom: 0.4rem;
  }

  .step-card h3 {
    color: #f4e8c2;
    font-size: 1rem;
    margin-bottom: 0.25rem;
  }

  .step-card p {
    font-size: 0.9rem;
    color: #f4e8c2dd;
  }

  .connector {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.15rem;
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
    height: 18px;
    border-radius: 999px;
    background: linear-gradient(to bottom, #ffd700, transparent);
    opacity: 0.9;
  }

  /* FINAL CTA */

  .pro-cta {
    margin-top: 3.2rem;
  }

  .pro-cta-inner {
    border-radius: 1.4rem;
    background: radial-gradient(circle at top, #111 0%, #02070a 70%);
    border: 1px solid rgba(255, 255, 255, 0.09);
    box-shadow: 0 0 24px rgba(255, 215, 0, 0.45);
    padding: 1.8rem 1.6rem 2rem;
    text-align: center;
  }

  .pro-cta-inner h2 {
    color: #ffd700;
    margin-bottom: 0.4rem;
  }

  .pro-cta-inner p {
    color: #f4e8c2dd;
    margin-bottom: 1.2rem;
  }

  .cta-main {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.7rem;
    border-radius: 999px;
    background: #ffd700;
    color: #021108;
    font-weight: 700;
    font-size: 0.95rem;
    text-decoration: none;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    border: 1px solid #ffd700;
    box-shadow: 0 0 18px rgba(255, 215, 0, 0.9);
    transition: all 0.2s ease;
  }

  .cta-main:hover {
    background: #f0c800;
    box-shadow: 0 0 24px rgba(255, 215, 0, 1);
  }

  @media (max-width: 768px) {
    .pro-page {
      padding-top: 4rem;
    }
    .title {
      font-size: 2.1rem;
    }
  }
</style>
