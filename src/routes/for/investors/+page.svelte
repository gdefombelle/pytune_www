<script lang="ts">
  import { t } from '$lib/i18n/langStore';
</script>

<div
  class="min-h-screen w-full bg-cover bg-center bg-no-repeat text-[#F1E8C7]"
  style="background-image: url('/assets/fond-5.webp');"
>
  <!-- HERO – more "investor deck" style -->
  <section
    class="max-w-[1300px] mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-20 md:pb-24
           grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 items-center"
  >
    <div class="max-w-[780px]">
      <p class="text-xs md:text-sm tracking-[0.35em] uppercase text-[#F4E8C2]/70 mb-4">
        {$t('for.investors.hero.badge')}
      </p>

      <h1
        class="text-3xl md:text-5xl lg:text-6xl font-light text-[#F4E8C2] leading-tight mb-4 md:mb-6"
        style="text-shadow:0 0 22px rgba(0,0,0,0.65)"
      >
        {$t('for.investors.hero.title')}
      </h1>

      <p
        class="text-base md:text-xl text-[#F4E8C2]/80 leading-relaxed mb-6 md:mb-8"
      >
         {$t('for.investors.hero.subtitle')}
      </p>

      <ul class="text-xs md:text-sm text-[#F4E8C2]/70 space-y-1.5 mb-8 leading-relaxed">
        {#each $t('for.investors.hero.bullets') as li}
        <li>• {li}</li>
        {/each}
      </ul>

      <div class="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
        <a
          href="/contacts/investor"
          class="px-10 py-3.5 rounded-xl w-full sm:w-auto
                 bg-[#1fb6ff]/18 border border-[#1fb6ff]
                 text-[#1fb6ff] font-medium text-center
                 backdrop-blur
                 hover:bg-[#1fb6ff]/26 hover:shadow-[0_0_24px_#1fb6ff66]
                 transition-all duration-500"
        >
        {$t('for.investors.hero.cta_primary')}
        </a>

        <a
          href="/how-it-works"
          class="px-10 py-3.5 rounded-xl w-full sm:w-auto
                 border border-white/40 text-[#F4E8C2] font-medium text-center
                 hover:bg-white/10 hover:shadow-[0_0_18px_rgba(0,0,0,0.55)]
                 transition-all duration-500"
        >
          {$t('for.investors.hero.cta_secondary')}
        </a>
      </div>

      <p class="mt-4 text-[11px] md:text-xs text-[#F4E8C2]/65">
        {$t('for.investors.hero.footnote')}
      </p>
    </div>

    <!-- Side highlight card -->
    <div
      class="hidden lg:block rounded-3xl bg-black/35 backdrop-blur-xl border border-white/15
             p-7 space-y-4 shadow-[0_0_40px_rgba(0,0,0,0.55)]"
    >
      <h2 class="text-xl font-light text-[#F4E8C2] mb-1">
        {$t('for.investors.side_card.title')}
      </h2>
      <p class="text-sm text-[#F4E8C2]/75 leading-relaxed">
        {$t('for.investors.side_card.p1')}
      </p>
      <p class="text-sm text-[#F4E8C2]/75 leading-relaxed">
         {$t('for.investors.side_card.p2')}
      </p>
      <p class="text-xs text-[#F4E8C2]/60">
        {$t('for.investors.side_card.p3')}
      </p>
    </div>
  </section>

  <!-- PILLARS -->
  <section class="max-w-[1200px] mx-auto px-4 md:px-6 pb-24">
    <h2
      class="text-2xl md:text-3xl font-light text-center mb-10 md:mb-12 text-[#F4E8C2]"
      style="text-shadow:0 0 10px rgba(0,0,0,0.5)"
    >
    {$t('for.investors.pillars.title')}
      <!-- The PyTune thesis -->
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
      {#each $t('for.investors.pillars.cards') as p}
        <div
          class="relative p-[1px] rounded-3xl
                 bg-[radial-gradient(circle_at_top,#1fb6ff99,#2dc34a33,transparent)]"
        >
          <div
            class="h-full w-full rounded-3xl bg-black/55 backdrop-blur-xl
                   border border-white/10 p-7 md:p-8
                   hover:bg-black/65 hover:border-white/20
                   transition-all duration-500"
          >
            <h3 class="text-xl md:text-2xl font-light text-[#F4E8C2] mb-3">
              {p.title}
            </h3>
            <p class="text-[#F4E8C2]/75 text-[15px] leading-relaxed">
              {p.text}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- GROWTH MODEL -->
  <section class="max-w-[1200px] mx-auto px-4 md:px-6 pb-28">
    <h2
      class="text-2xl md:text-3xl font-light text-center mb-6 md:mb-8 text-[#F4E8C2]"
      style="text-shadow:0 0 10px rgba(0,0,0,0.5)"
    >
      {$t('for.investors.growth.title')}

    </h2>

    <p
      class="text-center text-[#F4E8C2]/75 max-w-[780px] mx-auto mb-12 leading-relaxed text-[15px]"
    >
      {$t('for.investors.growth.subtitle')}
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
      {#each $t('for.investors.growth.cards') as g}
        <div
          class="p-7 md:p-8 rounded-3xl bg-white/6 backdrop-blur-xl border border-white/12
                 hover:bg-white/10 hover:border-white/24
                 hover:shadow-[0_0_32px_rgba(0,0,0,0.35)]
                 transition-all duration-500"
        >
          <p class="text-xs uppercase tracking-[0.18em] text-[#1fb6ff] mb-2">
            {g.label}
          </p>
          <h3 class="text-xl font-light text-[#F4E8C2] mb-2">
            {g.title}
          </h3>
          <p class="text-[#F4E8C2]/78 text-[15px] leading-relaxed">
            {g.text}
          </p>
        </div>
      {/each}
    </div>
  </section>

  <!-- ROADMAP / EARLY-STAGE -->
  <section class="max-w-[1100px] mx-auto px-4 md:px-6 pb-32">
    <h2
      class="text-2xl md:text-3xl font-light text-center mb-8 text-[#F4E8C2]"
      style="text-shadow:0 0 10px rgba(0,0,0,0.5)"
    >
       {$t('for.investors.roadmap.title')}
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-7">
      {#each $t('for.investors.roadmap.cards') as r}
        <div
          class="p-6 rounded-3xl bg-black/55 backdrop-blur-xl border border-white/12
                 hover:border-[#1fb6ff88] hover:shadow-[0_0_30px_rgba(0,0,0,0.4)]
                 transition-all duration-500"
        >
          <p class="text-xs uppercase tracking-[0.22em] text-[#1fb6ff] mb-1">
            {r.phase}
          </p>
          <h3 class="text-lg font-light text-[#F4E8C2] mb-2">
            {r.title}
          </h3>
          <p class="text-[#F4E8C2]/78 text-[14px] leading-relaxed">
            {r.text}
          </p>
        </div>
      {/each}
    </div>

    <p class="mt-10 text-center text-[#F4E8C2]/75 text-sm max-w-[780px] mx-auto leading-relaxed">
      {$t('for.investors.roadmap.footnote')}
    </p>
  </section>

  <!-- FINAL CTA – different layout -->
  <section
    class="pb-32 px-4 md:px-6"
  >
    <div
      class="max-w-[1100px] mx-auto rounded-3xl bg-black/60 backdrop-blur-xl border border-white/14
             px-6 md:px-10 py-8 md:py-10 flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center"
    >
      <div class="md:w-3/4">
        <h2 class="text-2xl md:text-3xl font-light text-[#F4E8C2] mb-2">
          {$t('for.investors.final_cta.title')}
        </h2>
        <p class="text-[#F4E8C2]/78 text-sm md:text-[15px] leading-relaxed">
           {$t('for.investors.final_cta.text')}
        </p>
      </div>

      <div class="md:w-1/4 flex md:justify-end w-full">
        <a
          href="/contacts/investor"
          class="px-8 py-3.5 rounded-xl bg-[#1fb6ff]/20 border border-[#1fb6ff]
                 text-[#1fb6ff] font-medium text-center w-full
                 hover:bg-[#1fb6ff]/30 hover:shadow-[0_0_26px_#1fb6ff66]
                 transition-all duration-500"
        >
         {$t('for.investors.final_cta.button')}
        </a>
      </div>
    </div>
  </section>
</div>
