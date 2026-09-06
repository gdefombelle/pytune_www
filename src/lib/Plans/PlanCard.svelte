<script lang="ts">
  export let variant: 'pricing' | 'simple' = 'simple';

  export let title: string;
  export let price: string;

  // ---------- TYPES ----------
  type PlanBadge = {
    label: string;
    pill?: string;
    accent?: 'free' | 'indy' | 'pro' | 'gold' | 'faith' | 'emerald' | 'violet';
  };

  type PlanCTA = {
    label: string;
    href?: string;
    action?: () => void;
    primary?: boolean;
  };

  // ---------- PROPS ----------
  export let badge: PlanBadge | null = null;

  export let persona: string | null = null;
  export let scale: string | null = null;
  export let tagline: string | null = null;

  export let features: string[] = [];

  export let cta!: PlanCTA;
</script>

<article class="plan-card {variant}">
  <div class="card-glow"></div>

  <div class="card-inner">
    {#if badge}
      <div class="plan-strip plan-strip-{badge.accent}">
        <span class="strip-label">{badge.label}</span>
        {#if badge.pill}
          <span class="strip-pill">{badge.pill}</span>
        {/if}
      </div>
    {/if}

    <h2 class="plan-name">{title}</h2>

    {#if scale}
      <p class="plan-scale">{scale}</p>
    {/if}

    {#if persona}
      <p class="plan-persona">{persona}</p>
    {/if}

    <p class="plan-price">{@html price}</p>

    {#if tagline}
      <p class="plan-tagline">{tagline}</p>
    {/if}

    <ul class="features">
      {#each features as f}
        <li>{@html f}</li>
      {/each}
    </ul>

    {#if cta.href}
      <a
        class="cta {cta.primary ? 'main-cta' : ''}"
        href={cta.href}
        target={cta.href.startsWith('http') ? '_blank' : undefined}
        rel={cta.href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {cta.label}
      </a>
    {:else}
      <button
        class="cta {cta.primary ? 'main-cta' : ''}"
        on:click={cta.action}
      >
        {cta.label}
      </button>
    {/if}
  </div>
</article>
<style>
 

  .plan-card {
  position: relative;
  border-radius: 1.4rem;
  overflow: hidden;
  background: #020509;
  border: 1px solid #0c141b;
  box-shadow: 0 18px 40px rgba(0,0,0,.85);
  display: flex;
}

.card-glow {
  pointer-events: none;
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background:
    radial-gradient(circle at 20% 0%, rgba(31,182,255,.22), transparent 55%),
    radial-gradient(circle at 80% 120%, rgba(45,195,74,.18), transparent 55%);
  opacity: .8;
  mix-blend-mode: screen;
}

.card-inner {
  position: relative;
  z-index: 1;
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.plan-strip {
  display:flex;
  justify-content:space-between;
  gap:.5rem;
  padding:.25rem .7rem;
  border-radius:999px;
  font-size:.7rem;
  text-transform:uppercase;
  letter-spacing:.2em;
  background:linear-gradient(90deg,#041421,#031019);
  border:1px solid rgba(95,212,255,.65);
  color:#8fe3ff;
}

.strip-pill {
  padding:.18rem .6rem;
  border:1px solid currentColor;
  border-radius:999px;
  font-size:.65rem;
  background:rgba(0,0,0,.6);
}

.plan-name {
  color:#f4e8c2;
  font-size:1.4rem;
}

.plan-scale {
  color:#8fa3ad;
  font-size:.8rem;
  letter-spacing:.02em;
  margin:0;
}

.plan-price {
  color:#2dc34a;
  font-size:.95rem;
}

.features {
  list-style:none;
  padding:0;
  margin:.5rem 0;
  font-size:.88rem;
  color:#e3e3e3;
}

.cta.main-cta {
  margin-top:auto;
}
</style>
