<script lang="ts">
  import { t } from '$lib/i18n/langStore';
</script>

<div
  class="min-h-screen w-full bg-cover bg-center bg-no-repeat text-[#F1E8C7]"
  style="background-image: url('/assets/fond-5.webp');"
>
  <!-- HERO -->
  <section
    class="max-w-[1300px] mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-20 md:pb-24
           text-center md:text-left"
  >
    <div class="max-w-[980px] mx-auto">
      <p class="text-xs md:text-sm tracking-[0.3em] uppercase text-[#F4E8C2]/70 mb-4">
        {$t('for.manufacturers.hero.badge')}
      </p>

      <h1
        class="text-3xl md:text-5xl lg:text-6xl font-light text-[#F4E8C2] leading-tight mb-4 md:mb-6"
        style="text-shadow:0 0 20px rgba(0,0,0,0.6)"
      >
      {$t('for.manufacturers.hero.title')}
      </h1>

      <p
        class="text-base md:text-xl text-[#F4E8C2]/80 leading-relaxed mb-6 md:mb-8 max-w-[820px] mx-auto md:mx-0"
      >
        {$t('for.manufacturers.hero.subtitle')}
      </p>

      <ul class="text-xs md:text-sm text-[#F4E8C2]/70 space-y-1 mb-8 md:mb-10 leading-relaxed">
        {#each $t('for.manufacturers.hero.bullets') as li}
          <li>• {li}</li>
        {/each}
      </ul>

      <div
        class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-stretch sm:items-center"
      >
        <a
          href="/contacts/enterprise"
          class="px-10 py-3.5 rounded-xl w-full sm:w-auto
                 bg-[#2dc34a]/15 border border-[#2dc34a]
                 text-[#2dc34a] font-medium text-center
                 backdrop-blur
                 hover:bg-[#2dc34a]/25 hover:shadow-[0_0_22px_#2dc34a66]
                 transition-all duration-500"
        >
        {$t('for.manufacturers.hero.cta_primary')}
        </a>

        <a
          href="/how-it-works"
          class="px-10 py-3.5 rounded-xl w-full sm:w-auto
                 border border-[#1fb6ff] text-[#1fb6ff] font-medium text-center
                 hover:bg-[#1fb6ff]/15 hover:shadow-[0_0_18px_#1fb6ff66]
                 transition-all duration-500"
        >
           {$t('for.manufacturers.hero.cta_secondary')}
        </a>
      </div>

      <p class="mt-4 text-[11px] md:text-xs text-[#F4E8C2]/65">
         {$t('for.manufacturers.hero.footnote')}
      </p>
    </div>
  </section>

  <!-- VALUE FOR YOUR BRAND -->
  <section class="max-w-[1200px] mx-auto px-4 md:px-6 pb-24">
    <h2
      class="text-3xl md:text-4xl font-light text-center mb-12 md:mb-14 text-[#F4E8C2]"
      style="text-shadow:0 0 12px rgba(0,0,0,0.45)"
    >
     {$t('for.manufacturers.value.title')}
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
      {#each $t('for.manufacturers.value.cards') as card}
        <div
          class="relative overflow-hidden p-7 md:p-9 rounded-3xl
                 border border-white/14 bg-black/45 backdrop-blur-xl
                 bg-[radial-gradient(circle_at_top_left,rgba(45,195,74,0.25),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(31,182,255,0.22),transparent_55%)]
                 shadow-[0_0_40px_rgba(0,0,0,0.65)]
                 hover:shadow-[0_0_60px_rgba(0,0,0,0.9)]
                 hover:-translate-y-0.5
                 transition-all duration-500 ease-out"
        >
          <h3 class="text-xl md:text-2xl font-light mb-3 text-[#F4E8C2]">
            {card.title}
          </h3>
          <p class="text-[#F4E8C2]/80 leading-relaxed text-[15px]">
            {card.text}
          </p>
        </div>
      {/each}
    </div>
  </section>

  <!-- WORKING WITH YOUR NETWORK -->
  <section class="max-w-[1200px] mx-auto px-4 md:px-6 pb-28">
    <h2
      class="text-3xl md:text-4xl font-light text-center mb-6 md:mb-8 text-[#F4E8C2]"
      style="text-shadow:0 0 12px rgba(0,0,0,0.45)"
    >
      {$t('for.manufacturers.workflow.title')}
    </h2>

    <p
      class="text-center text-[#F4E8C2]/75 max-w-[780px] mx-auto mb-12 leading-relaxed text-[15px]"
    >
      {$t('for.manufacturers.workflow.subtitle')}
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
      {#each $t('for.manufacturers.workflow.cards') as card}
        <div
          class="relative overflow-hidden p-7 md:p-8 rounded-3xl
                 border border-white/14 backdrop-blur-xl
                 bg-black/45
                 bg-[radial-gradient(circle_at_top_left,rgba(31,182,255,0.24),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(0,255,204,0.2),transparent_55%)]
                 shadow-[0_0_36px_rgba(0,0,0,0.6)]
                 hover:shadow-[0_0_52px_rgba(0,0,0,0.9)]
                 hover:-translate-y-0.5
                 transition-all duration-500 ease-out text-left"
        >
          <h3 class="text-xl font-light mb-2 text-[#F4E8C2]">
            {card.title}
          </h3>
          <p class="text-[#F4E8C2]/80 text-[15px] leading-relaxed">
            {card.text}
          </p>
        </div>
      {/each}
    </div>
  </section>

  <!-- BUSINESS & STRATEGY -->
  <section class="max-w-[1200px] mx-auto px-4 md:px-6 pb-28">
    <h2
      class="text-3xl md:text-4xl font-light text-center mb-6 md:mb-8 text-[#F4E8C2]"
      style="text-shadow:0 0 12px rgba(0,0,0,0.45)"
    >
    {$t('for.manufacturers.business.title')}

    </h2>

    <p
      class="text-center text-[#F4E8C2]/75 max-w-[760px] mx-auto mb-12 leading-relaxed text-[15px]"
    >
      {$t('for.manufacturers.business.subtitle')}
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
      {#each $t('for.manufacturers.business.cards') as card}
        <div
          class="relative overflow-hidden p-7 md:p-8 rounded-3xl
                 border border-white/14 backdrop-blur-xl
                 bg-black/45
                 bg-[radial-gradient(circle_at_top_left,rgba(255,215,130,0.28),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(31,182,255,0.18),transparent_55%)]
                 shadow-[0_0_36px_rgba(0,0,0,0.6)]
                 hover:shadow-[0_0_52px_rgba(0,0,0,0.9)]
                 hover:-translate-y-0.5
                 transition-all duration-500 ease-out text-left"
        >
          <h3 class="text-xl font-light mb-2 text-[#F4E8C2]">
            {card.title}
          </h3>
          <p class="text-[#F4E8C2]/80 text-[15px] leading-relaxed">
            {card.text}
          </p>
        </div>
      {/each}
    </div>
  </section>

  <!-- HOW IT WORKS AT SCALE -->
  <section class="max-w-[950px] mx-auto px-4 md:px-6 pb-32">
    <h2
      class="text-3xl md:text-4xl font-light text-center mb-14 text-[#F4E8C2]"
      style="text-shadow:0 0 12px rgba(0,0,0,0.45)"
    >
      {$t('for.manufacturers.steps.title')}
    </h2>

    <div class="space-y-12 md:space-y-14">
      {#each $t('for.manufacturers.steps.items') as s}
        <div class="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
          <div
            class="text-[#1fb6ff] text-4xl md:text-5xl font-light md:w-1/5
                   text-center md:text-left"
          >
            {s.number}
          </div>

          <div class="md:w-4/5">
            <h3 class="text-xl md:text-2xl text-[#F4E8C2] font-light mb-2">
              {s.title}
            </h3>
            <p class="text-[#F4E8C2]/75 leading-relaxed text-[15px]">
              {s.text}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- FINAL CTA -->
  <section class="text-center pb-32">
    <a
      href="/contacts/enterprise"
      class="px-12 py-4 rounded-xl bg-[#2dc34a]/15 border border-[#2dc34a]
             text-[#2dc34a] font-medium backdrop-blur
             hover:bg-[#2dc34a]/25 hover:shadow-[0_0_26px_#2dc34a66]
             transition-all duration-500"
    >
      {$t('for.manufacturers.final_cta.button')}
    </a>

    <p class="mt-4 text-[#F4E8C2]/70 text-sm">
      {$t('for.manufacturers.final_cta.note')}
    </p>
  </section>
</div>
