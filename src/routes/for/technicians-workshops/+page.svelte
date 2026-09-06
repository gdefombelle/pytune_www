<script lang="ts">
  import { appHref } from '$lib/navigation/origins';
  import { t } from '$lib/i18n/langStore';
</script>

<div
  class="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-black text-[#F1E8C7]"
  style="
    background-image:
      linear-gradient(to bottom,
        rgba(0,0,0,0.76),
        rgba(0,0,0,0.24),
        rgba(0,0,0,0.38)
      ),
      url('/assets/fond-5.webp');
  "
>
  <!-- HERO -->
  <section
    class="max-w-[1200px] mx-auto pt-12 md:pt-20 pb-14 px-6
           flex flex-col md:flex-row items-center gap-12"
  >
    <!-- VISUAL BLOCK -->
    <div class="relative flex justify-center w-full md:w-1/2">
      <div
        class="absolute inset-0 blur-3xl opacity-40
               bg-[radial-gradient(circle,rgba(31,182,255,0.18),transparent_72%)]"
      ></div>

      <div
        class="relative w-full max-w-[520px] rounded-[30px] overflow-hidden
               border border-white/10 bg-black/30 backdrop-blur-xl
               shadow-[0_0_70px_rgba(0,0,0,0.65)]"
      >
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(31,182,255,0.18),transparent_35%)]"></div>
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(45,195,74,0.14),transparent_35%)]"></div>

        <img
          src="/assets/fond-5.webp"
          alt="PyTune Pro"
          width="1536"
          height="1024"
          fetchpriority="high"
          decoding="async"
          class="w-full h-[320px] md:h-[420px] object-cover opacity-70"
        />

        <div class="absolute inset-0 flex items-end">
          <div class="p-6 md:p-8">
            <div class="text-xs tracking-[0.35em] uppercase text-[#5fd4ff]/80 mb-3">
              PYTUNE ™ · PRO
            </div>
            <div class="text-2xl md:text-4xl font-semibold text-[#F4E8C2] leading-tight">
              Structured tools for real piano field work.
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- TEXT -->
    <div class="w-full md:w-1/2 relative">
      <div
        class="rounded-3xl p-8 md:p-10
               border border-white/15
               bg-black/50 backdrop-blur-2xl
               shadow-[0_0_60px_rgba(0,0,0,0.75)]
               text-center md:text-left space-y-6"
      >
        <div class="text-xs tracking-[0.35em] uppercase text-white/60">
          {$t('pro.hero.eyebrow')}
        </div>

        <h1 class="text-3xl md:text-5xl font-semibold leading-tight text-[#F4E8C2]">
          {$t('pro.hero.title')}
        </h1>

        <p class="text-lg text-white/85 font-light max-w-[680px]">
          {$t('pro.hero.subtitle')}
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-white/75">
          <div class="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            {$t('pro.strip.item1')}
          </div>
          <div class="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            {$t('pro.strip.item2')}
          </div>
          <div class="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            {$t('pro.strip.item3')}
          </div>
          <div class="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            {$t('pro.strip.item4')}
          </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 pt-2 justify-center md:justify-start">
          <!-- svelte-ignore a11y_invalid_attribute -->
          <a
            href={appHref('/get-started')}
            target="_blank"
            rel="noopener noreferrer"
            class="px-10 py-4 rounded-md
                   bg-[#2dc34a]/20 border border-[#2dc34a]
                   text-[#a3ffb8]
                   hover:bg-[#2dc34a]/30
                   hover:shadow-[0_0_30px_#2dc34aAA]
                   transition font-semibold text-center"
          >
            {$t('pro.hero.cta_primary')}
          </a>

          <a
            href="/how-it-works"
            class="px-10 py-4 rounded-md
                   border border-[#1fb6ff]
                   text-[#1fb6ff]
                   hover:bg-[#1fb6ff]/20
                   hover:shadow-[0_0_18px_#1fb6ff66]
                   transition font-semibold text-center"
          >
            {$t('pro.hero.cta_secondary')}
          </a>
        </div>

        <div class="text-[12px] text-[#5fd4ff]/90">
          {$t('pro.hero.reassurance')}
        </div>
      </div>
    </div>
  </section>

  <!-- CRAFT -->
  <section class="max-w-[820px] mx-auto px-6 pb-20 text-center">
    <h2 class="text-2xl md:text-3xl font-light text-[#F4E8C2] mb-4">
      {$t('pro.craft.title')}
    </h2>
    <p class="text-[#F4E8C2]/75 text-[15px] leading-relaxed">
      {$t('pro.craft.body')}
    </p>
  </section>

  <!-- HOW IT WORKS -->
  <section class="max-w-[1200px] mx-auto px-6 pb-20">
    <h2 class="text-2xl md:text-3xl font-light text-center text-[#F4E8C2] mb-12">
      {$t('pro.how.title')}
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-7">
      <div class="relative overflow-hidden rounded-3xl p-7 bg-black/40 border border-white/15 backdrop-blur-xl">
        <div class="absolute top-5 right-6 text-6xl font-bold text-[#1fb6ff]/40 pointer-events-none select-none">1</div>
        <h3 class="text-xl font-light text-[#1fb6ff] mb-2">{$t('pro.how.step1.title')}</h3>
        <p class="text-[#F4E8C2]/80 text-[15px] leading-relaxed">{$t('pro.how.step1.body')}</p>
      </div>

      <div class="relative overflow-hidden rounded-3xl p-7 bg-black/40 border border-white/15 backdrop-blur-xl">
        <div class="absolute top-5 right-6 text-6xl font-bold text-[#5fd4ff]/40 pointer-events-none select-none">2</div>
        <h3 class="text-xl font-light text-[#5fd4ff] mb-2">{$t('pro.how.step2.title')}</h3>
        <p class="text-[#F4E8C2]/80 text-[15px] leading-relaxed">{$t('pro.how.step2.body')}</p>
      </div>

      <div class="relative overflow-hidden rounded-3xl p-7 bg-black/40 border border-white/15 backdrop-blur-xl">
        <div class="absolute top-5 right-6 text-6xl font-bold text-[#2dc34a]/40 pointer-events-none select-none">3</div>
        <h3 class="text-xl font-light text-[#2dc34a] mb-2">{$t('pro.how.step3.title')}</h3>
        <p class="text-[#F4E8C2]/80 text-[15px] leading-relaxed">{$t('pro.how.step3.body')}</p>
      </div>
    </div>
  </section>

  <!-- WHAT A REQUEST CONTAINS -->
  <section class="max-w-[1200px] mx-auto px-6 pb-20">
    <div class="mb-10 text-center">
      <h2 class="text-2xl md:text-3xl font-light text-[#F4E8C2] mb-3">
        {$t('pro.lead.title')}
      </h2>
      <p class="text-[#F4E8C2]/70 max-w-[760px] mx-auto text-[15px] leading-relaxed">
        {$t('pro.lead.subtitle')}
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      <div class="rounded-2xl border border-white/10 bg-black/40 p-5">
        <div class="text-[#5fd4ff] font-medium mb-1">{$t('pro.lead.item1.label')}</div>
        <div class="text-[#F4E8C2]/75 text-[13px] leading-relaxed">{$t('pro.lead.item1.value')}</div>
      </div>
      <div class="rounded-2xl border border-white/10 bg-black/40 p-5">
        <div class="text-[#5fd4ff] font-medium mb-1">{$t('pro.lead.item2.label')}</div>
        <div class="text-[#F4E8C2]/75 text-[13px] leading-relaxed">{$t('pro.lead.item2.value')}</div>
      </div>
      <div class="rounded-2xl border border-white/10 bg-black/40 p-5">
        <div class="text-[#5fd4ff] font-medium mb-1">{$t('pro.lead.item3.label')}</div>
        <div class="text-[#F4E8C2]/75 text-[13px] leading-relaxed">{$t('pro.lead.item3.value')}</div>
      </div>
      <div class="rounded-2xl border border-white/10 bg-black/40 p-5">
        <div class="text-[#5fd4ff] font-medium mb-1">{$t('pro.lead.item4.label')}</div>
        <div class="text-[#F4E8C2]/75 text-[13px] leading-relaxed">{$t('pro.lead.item4.value')}</div>
      </div>
      <div class="rounded-2xl border border-white/10 bg-black/40 p-5">
        <div class="text-[#5fd4ff] font-medium mb-1">{$t('pro.lead.item5.label')}</div>
        <div class="text-[#F4E8C2]/75 text-[13px] leading-relaxed">{$t('pro.lead.item5.value')}</div>
      </div>
    </div>
  </section>

  <!-- VALUE / ROI -->
  <section class="max-w-[820px] mx-auto px-6 pb-24 text-center">
    <h2 class="text-2xl md:text-3xl font-light text-[#F4E8C2] mb-4">
      {$t('pro.value.title')}
    </h2>
    <p class="text-[#F4E8C2]/75 text-[15px] leading-relaxed mb-8">
      {$t('pro.value.body')}
    </p>

    <div class="rounded-3xl border border-white/15 bg-black/40 p-6 max-w-[600px] mx-auto mb-8">
      <div class="text-[#a3ffb8] font-medium mb-2">{$t('pro.value.guarantee.title')}</div>
      <div class="text-[#F4E8C2]/80 text-[15px] leading-relaxed">{$t('pro.value.guarantee.body')}</div>
    </div>

    <a
      href="/plans?tab=pros"
      class="inline-block px-10 py-4 rounded-md
             bg-[#2dc34a]/20 border border-[#2dc34a]
             text-[#a3ffb8]
             hover:bg-[#2dc34a]/30
             hover:shadow-[0_0_30px_#2dc34aAA]
             transition font-semibold text-center"
    >
      {$t('pro.value.cta')}
    </a>
  </section>

  <!-- PRO × INDY LOOP -->
  <section class="max-w-[1200px] mx-auto px-6 pb-24">
    <div class="text-center mb-10">
      <p class="text-xs tracking-[0.35em] uppercase text-[#5fd4ff]/70 mb-3">
        ONE PLATFORM · TWO SIDES
      </p>
      <h2 class="text-2xl md:text-3xl font-light text-[#F4E8C2]">
        Indy activity becomes Pro opportunities.
      </h2>
      <p class="text-[#F4E8C2]/70 mt-3 text-[15px] max-w-[860px] mx-auto">
        Owners run private sessions. Pros get contextual leads — only when shared.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-7">
      <div class="relative overflow-hidden rounded-3xl p-7 bg-black/40 border border-white/15 backdrop-blur-xl">
        <div class="absolute top-5 right-6 text-6xl font-bold text-[#1fb6ff]/40 pointer-events-none select-none">1</div>
        <div class="flex items-center gap-3 mb-3">
          <div class="h-10 w-10 rounded-2xl bg-white/5 border border-white/10 grid place-items-center">
            <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" style="color:#5fd4ff">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3l2-3h8l2 3h3a2 2 0 0 1 2 2z"/>
              <circle cx="12" cy="13" r="4"/>
            </svg>
          </div>
          <div class="text-xs tracking-[0.3em] uppercase text-[#1fb6ff]/80">Indy</div>
        </div>
        <div class="text-lg font-medium text-[#F4E8C2] mb-2">Runs a session</div>
        <ul class="text-[#F4E8C2]/75 text-[13px] space-y-1">
          <li>• Identify / Diagnosis / Tuner</li>
          <li>• 1 piano free forever</li>
          <li>• Private by default</li>
        </ul>
      </div>

      <div class="relative overflow-hidden rounded-3xl p-7 bg-black/40 border border-white/15 backdrop-blur-xl">
        <div class="absolute top-5 right-6 text-6xl font-bold text-[#5fd4ff]/35 pointer-events-none select-none">2</div>
        <div class="flex items-center gap-3 mb-3">
          <div class="h-10 w-10 rounded-2xl bg-white/5 border border-white/10 grid place-items-center">
            <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" style="color:#5fd4ff">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <div class="text-xs tracking-[0.3em] uppercase text-[#5fd4ff]/80">Platform</div>
        </div>
        <div class="text-lg font-medium text-[#F4E8C2] mb-2">Stores & structures</div>
        <ul class="text-[#F4E8C2]/75 text-[13px] space-y-1">
          <li>• Session + instrument record</li>
          <li>• Measurements & history</li>
          <li>• Shareable link (optional)</li>
        </ul>
      </div>

      <div class="relative overflow-hidden rounded-3xl p-7 bg-black/40 border border-white/15 backdrop-blur-xl">
        <div class="absolute top-5 right-6 text-6xl font-bold text-[#2dc34a]/35 pointer-events-none select-none">3</div>
        <div class="flex items-center gap-3 mb-3">
          <div class="h-10 w-10 rounded-2xl bg-white/5 border border-white/10 grid place-items-center">
            <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" style="color:#2dc34a">
              <rect x="2" y="7" width="20" height="14" rx="2"/>
              <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
              <path d="M2 12h20"/>
            </svg>
          </div>
          <div class="text-xs tracking-[0.3em] uppercase text-[#2dc34a]/85">Pro</div>
        </div>
        <div class="text-lg font-medium text-[#F4E8C2] mb-2">Gets a lead</div>
        <ul class="text-[#F4E8C2]/75 text-[13px] space-y-1">
          <li>• Sees anonymized context</li>
          <li>• Sends advice / offer</li>
          <li>• Contact via PyTune email</li>
        </ul>
      </div>

      <div class="relative overflow-hidden rounded-3xl p-7 bg-black/40 border border-white/15 backdrop-blur-xl">
        <div class="absolute top-5 right-6 text-6xl font-bold text-[#a3ffb8]/35 pointer-events-none select-none">4</div>
        <div class="flex items-center gap-3 mb-3">
          <div class="h-10 w-10 rounded-2xl bg-white/5 border border-white/10 grid place-items-center">
            <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" style="color:#a3ffb8">
              <path d="M12 2l1.5 5L19 8.5l-5.5 1.5L12 15l-1.5-5L5 8.5 10.5 7z"/>
              <path d="M20 14l.8 2.6L23 17.4l-2.2.8L20 21l-.8-2.8L17 17.4l2.2-.8z"/>
            </svg>
          </div>
          <div class="text-xs tracking-[0.3em] uppercase text-[#a3ffb8]/80">Loop</div>
        </div>
        <div class="text-lg font-medium text-[#F4E8C2] mb-2">Repeat work</div>
        <ul class="text-[#F4E8C2]/75 text-[13px] space-y-1">
          <li>• Reminders & follow-up</li>
          <li>• Listings & visibility</li>
          <li>• Tips (pro content)</li>
        </ul>
      </div>
    </div>

    <div class="mt-8 rounded-3xl p-5 md:p-6 bg-black/35 border border-white/12 backdrop-blur-xl">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div class="flex items-center gap-3">
          <div class="h-9 w-9 rounded-2xl bg-white/5 border border-white/10 grid place-items-center">
            <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" style="color:#F4E8C2">
              <rect x="3" y="11" width="18" height="10" rx="2"/>
              <path d="M7 11V8a5 5 0 0 1 10 0v3"/>
            </svg>
          </div>
          <div>
            <div class="text-sm text-[#F4E8C2]">Privacy first</div>
            <div class="text-xs text-[#F4E8C2]/65">Indy sessions stay private — pros only see what the owner shares.</div>
          </div>
        </div>

        <div class="flex flex-wrap gap-2 justify-start md:justify-end">
          <span class="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#F4E8C2]/80">Anonymous by default</span>
          <span class="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#F4E8C2]/80">Share link opt-in</span>
          <span class="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#F4E8C2]/80">Contact via PyTune</span>
        </div>
      </div>
    </div>
  </section>

  <!-- WORKSPACE MODULES -->
  <section class="max-w-[1200px] mx-auto px-6 pb-14">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="rounded-3xl p-8 bg-black/40 border border-white/15 backdrop-blur-xl">
        <h3 class="text-xl md:text-2xl font-light text-[#F4E8C2] mb-3">Leads</h3>
        <p class="text-[#F4E8C2]/80 leading-relaxed text-[15px]">
          Access nearby diagnostics, review session data and audio samples, and decide whether to respond or archive.
        </p>
      </div>

      <div class="rounded-3xl p-8 bg-black/40 border border-white/15 backdrop-blur-xl">
        <h3 class="text-xl md:text-2xl font-light text-[#F4E8C2] mb-3">Reminders</h3>
        <p class="text-[#F4E8C2]/80 leading-relaxed text-[15px]">
          Track maintenance history, last interventions and follow-ups for each client.
        </p>
      </div>

      <div class="rounded-3xl p-8 bg-black/40 border border-white/15 backdrop-blur-xl">
        <h3 class="text-xl md:text-2xl font-light text-[#F4E8C2] mb-3">Listings</h3>
        <p class="text-[#F4E8C2]/80 leading-relaxed text-[15px]">
          Publish listings, monitor views and inquiries, and update content when needed.
        </p>
      </div>

      <div class="rounded-3xl p-8 bg-black/40 border border-white/15 backdrop-blur-xl">
        <h3 class="text-xl md:text-2xl font-light text-[#F4E8C2] mb-3">Operations</h3>
        <p class="text-[#F4E8C2]/80 leading-relaxed text-[15px]">
          Review identifications, diagnosis sessions and tuning history with consistent reporting per instrument.
        </p>
      </div>
    </div>
  </section>

  <!-- TOOLS (relegated to bottom of page: not an entry argument, a trust argument) -->
  <section class="max-w-[1200px] mx-auto px-6 pb-20">
    <div class="mb-10 text-center">
      <p class="text-xs tracking-[0.3em] uppercase text-[#1fb6ff]/70 mb-3">
        PRECISION TOOLS
      </p>
      <h2 class="text-2xl md:text-3xl font-light text-[#F4E8C2]">
        Identify · Diagnose · Tune
      </h2>
      <p class="text-[#F4E8C2]/70 mt-4 max-w-[820px] mx-auto text-[15px] leading-relaxed">
        Each module connects to measurable acoustic sessions: identification, diagnosis and tuning data remain linked to the instrument record.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <!-- IDENTIFY -->
      <div class="relative overflow-hidden rounded-3xl p-8 bg-black/40 border border-[#1fb6ff]/40 backdrop-blur-xl hover:shadow-[0_0_40px_#1fb6ff33] transition-all duration-500">
        <div class="absolute top-5 right-6 text-6xl font-bold text-[#1fb6ff]/40 pointer-events-none select-none">1</div>

        <div class="text-[10px] uppercase tracking-[0.25em] text-[#5fd4ff]/70 mb-1">
          AI IDENTIFICATION
        </div>

        <h3 class="text-xl font-light text-[#1fb6ff] mb-3">Identify</h3>

        <p class="text-[#F4E8C2]/80 text-[15px] leading-relaxed">
          Turn photos into structured piano records.
          Age estimation, model hypothesis and technical baseline — ready for service or listing.
        </p>

        <div class="mt-6">
          <div class="mt-6 flex items-center gap-2 text-[11px] tracking-wide uppercase text-[#5fd4ff]/70">
            Demo · Real session · English
          </div>

          <a
            href="https://www.youtube.com/watch?v=8lZ8qsUsydg"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-sm font-medium text-[#1fb6ff] hover:text-white transition-colors duration-300"
          >
            <span class="text-lg">▶</span>
            Watch Identify demo
          </a>

          <a
            href={appHref('/pro/presentations/ID')}
            target="_blank"
            rel="noopener noreferrer"
            class="mt-2 inline-flex items-center gap-2 text-sm font-medium text-[#5fd4ff] hover:text-white transition-colors duration-300"
          >
            <span class="text-lg">🖥</span>
            View full Identify presentation
          </a>
        </div>
      </div>

      <!-- DIAGNOSTICS -->
      <div class="relative overflow-hidden rounded-3xl p-8 bg-black/40 border border-white/15 backdrop-blur-xl hover:shadow-[0_0_34px_rgba(95,212,255,0.12)] transition-all duration-500">
        <div class="absolute top-5 right-6 text-6xl font-bold text-[#5fd4ff]/40 pointer-events-none select-none">2</div>
        <h3 class="text-xl font-light text-[#5fd4ff] mb-3">Diagnostics</h3>
        <p class="text-[#F4E8C2]/80 text-[15px] leading-relaxed">
          Chromatic sweep analysis. Inharmonicity mapping.
          Visual deviation charts and shareable reports for clients.
        </p>
      </div>

      <!-- TUNER -->
      <div class="relative overflow-hidden rounded-3xl p-8 bg-black/40 border border-white/15 backdrop-blur-xl hover:shadow-[0_0_34px_rgba(45,195,74,0.12)] transition-all duration-500">
        <div class="absolute top-5 right-6 text-6xl font-bold text-[#2dc34a]/45 pointer-events-none select-none">3</div>
        <h3 class="text-xl font-light text-[#2dc34a] mb-3">Tuner</h3>
        <p class="text-[#F4E8C2]/80 text-[15px] leading-relaxed">
          High-precision tuning curves, guided adjustments,
          and session continuity across interventions.
        </p>
      </div>

      <!-- AI -->
      <div class="relative overflow-hidden rounded-3xl p-8 bg-black/40 border border-white/15 backdrop-blur-xl hover:shadow-[0_0_34px_rgba(163,255,184,0.10)] transition-all duration-500">
        <div class="absolute top-5 right-6 text-6xl font-bold text-[#a3ffb8]/45 pointer-events-none select-none">4</div>
        <h3 class="text-xl font-light text-[#a3ffb8] mb-3">AI</h3>
        <p class="text-[#F4E8C2]/80 text-[15px] leading-relaxed">
          AI-assisted analysis, structured session memory and instrument knowledge graph.
          Designed to connect diagnostics, reports and long-term acoustic profiles
          into a continuous technical intelligence layer.
        </p>
      </div>
    </div>
  </section>

  <!-- CTA BOTTOM -->
  <section class="relative max-w-[1100px] mx-auto px-6 pb-16 pt-6">
    <div class="relative">
      <div class="absolute -inset-x-24 -inset-y-20 bg-[radial-gradient(ellipse_at_top_left,rgba(0,0,0,0.65),transparent_70%)] opacity-40 blur-2xl pointer-events-none"></div>

      <div class="relative z-10 text-left">
        <h2 class="text-2xl md:text-3xl font-light text-[#F4E8C2] mb-4">
          See the full platform in action.
        </h2>

        <p class="text-white/80 max-w-[860px] leading-relaxed text-[15px]">
          The complete “How it works” page shows the full PyTune ecosystem:
          presentations, demos, architecture, workflows and concrete usage examples
          for technicians, workshops and piano owners.
        </p>

        <div class="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href={appHref('/get-started')}
            target="_blank"
            rel="noopener noreferrer"
            class="px-8 py-3 rounded-md
                   bg-[#2dc34a]/15 border border-[#2dc34a]
                   text-[#a3ffb8] font-semibold
                   hover:bg-[#2dc34a]/25 transition"
          >
            Create your professional account
          </a>

          <a
            href="/how-it-works"
            class="px-8 py-3 rounded-md
                   border border-[#1fb6ff] text-[#1fb6ff]
                   hover:bg-[#1fb6ff]/15 transition font-semibold"
          >
            See how it works
          </a>
        </div>
      </div>
    </div>
  </section>
</div>
