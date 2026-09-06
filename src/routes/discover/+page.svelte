<script lang="ts">
  import { t } from '$lib/i18n/langStore';
  import { appHref } from '$lib/navigation/origins';
</script>

<div
  class="min-h-screen w-full bg-cover bg-center bg-no-repeat text-[#F1E8C7]"
  style="background-image: url('/assets/fond-5.webp');"
>
  <!-- HERO -->
  <section
    class="max-w-[1500px] mx-auto pt-12 md:pt-20 pb-20 px-6
           flex flex-col md:flex-row items-center gap-12"
  >
    <div class="relative flex justify-center w-full md:w-1/2">
      <div
        class="absolute inset-0 blur-3xl opacity-40
               bg-[radial-gradient(circle,rgba(255,215,130,0.32),transparent_70%)]"
      ></div>

      <picture>
        <source srcset="/assets/logo-dog-BEST-FRIEND-GOLD.avif" type="image/avif" />
        <img
          src="/assets/logo-dog-BEST-FRIEND-GOLD.webp"
          width="841"
          height="858"
          fetchpriority="high"
          decoding="async"
          alt="PyTune"
          class="w-[380px] md:w-[440px] lg:w-[500px] drop-shadow-xl select-none"
        />
      </picture>
    </div>

    <div class="w-full md:w-1/2 text-center md:text-left space-y-6">
      <div class="text-xs tracking-[0.35em] uppercase text-[#F4E8C2]/70">
        PYTUNE ™ · {$t('discover.hero.baseline')}
      </div>

      <h1 class="text-3xl md:text-5xl font-semibold leading-tight text-[#F4E8C2]">
        {$t('discover.hero.title')}
      </h1>

      <p class="text-lg md:text-xl text-[#F4E8C2]/85 font-light max-w-[600px]">
        {$t('discover.hero.subtitle')}
      </p>
    </div>
  </section>

  <!-- AIGUILLAGE -->
  <section class="max-w-[1300px] mx-auto px-6 pb-20 text-center">
    <h2 class="text-3xl md:text-4xl font-light tracking-wide mb-4 text-[#F4E8C2]">
      {$t('discover.routing.title')}
    </h2>

    <p class="text-[#F4E8C2]/70 max-w-[700px] mx-auto mb-12 text-[15px] leading-relaxed">
      {$t('discover.routing.intro')}
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <a
        href="/for/piano-owners"
        class="group h-full flex flex-col rounded-3xl p-8 bg-[#020509]
               border border-[#0f1d15]
               hover:border-[#2dc34a]/70
               hover:shadow-[0_0_50px_rgba(45,195,74,0.25)]
               transition-all duration-500 text-left"
      >
        <h3 class="text-xl text-[#a3ffb8] mb-4 font-medium">
          {$t('discover.routing.card1.title')}
        </h3>

        <p class="text-[#F4E8C2]/80 mb-6 leading-relaxed text-[15px]">
          {#each $t('discover.routing.card1.lines') as line}
            {line}<br />
          {/each}
        </p>

        <div class="mt-auto uppercase text-[12px] tracking-[0.2em] text-[#2dc34a]">
          {$t('discover.routing.card1.cta')} →
        </div>
      </a>

      <a
        href="/for/technicians-workshops"
        class="group h-full flex flex-col rounded-3xl p-8 bg-[#020509]
               border border-[#1a3040]
               hover:border-[#1fb6ff]/70
               hover:shadow-[0_0_60px_rgba(31,182,255,0.3)]
               transition-all duration-500 text-left"
      >
        <h3 class="text-xl text-[#5fd4ff] mb-4 font-medium">
          {$t('discover.routing.card2.title')}
        </h3>

        <p class="text-[#F4E8C2]/80 mb-6 leading-relaxed text-[15px]">
          {#each $t('discover.routing.card2.lines') as line}
            {line}<br />
          {/each}
        </p>

        <div class="mt-auto uppercase text-[12px] tracking-[0.2em] text-[#1fb6ff]">
          {$t('discover.routing.card2.cta')} →
        </div>
      </a>

      <a
        href="/for/churches-community"
        class="group h-full flex flex-col rounded-3xl p-8 bg-[#020509]
               border border-[#0c141b]
               hover:border-[#aaf0c1]/60
               hover:shadow-[0_0_40px_rgba(170,240,193,0.2)]
               transition-all duration-500 text-left"
      >
        <h3 class="text-xl text-[#aaf0c1] mb-4 font-medium">
          {$t('discover.routing.card3.title')}
        </h3>

        <p class="text-[#F4E8C2]/80 mb-6 leading-relaxed text-[15px]">
          {#each $t('discover.routing.card3.lines') as line}
            {line}<br />
          {/each}
        </p>

        <div class="mt-auto uppercase text-[12px] tracking-[0.2em] text-[#aaf0c1]">
          {$t('discover.routing.card3.cta')} →
        </div>
      </a>
    </div>
  </section>

  <!-- PREUVE -->
  <section class="max-w-[1100px] mx-auto px-6 pb-20">
    <h2 class="text-2xl md:text-3xl font-light text-center text-[#F4E8C2] mb-10">
      {$t('discover.proof.title')}
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 class="text-[#a3ffb8] font-medium mb-2">{$t('discover.proof.point1.title')}</h3>
        <p class="text-[#F4E8C2]/75 text-[15px] leading-relaxed">{$t('discover.proof.point1.body')}</p>
      </div>
      <div>
        <h3 class="text-[#a3ffb8] font-medium mb-2">{$t('discover.proof.point2.title')}</h3>
        <p class="text-[#F4E8C2]/75 text-[15px] leading-relaxed">{$t('discover.proof.point2.body')}</p>
      </div>
      <div>
        <h3 class="text-[#a3ffb8] font-medium mb-2">{$t('discover.proof.point3.title')}</h3>
        <p class="text-[#F4E8C2]/75 text-[15px] leading-relaxed">{$t('discover.proof.point3.body')}</p>
      </div>
      <div>
        <h3 class="text-[#a3ffb8] font-medium mb-2">{$t('discover.proof.point4.title')}</h3>
        <p class="text-[#F4E8C2]/75 text-[15px] leading-relaxed">{$t('discover.proof.point4.body')}</p>
      </div>
    </div>
  </section>

  <!-- CTA FINAL -->
  <section class="max-w-[800px] mx-auto px-6 pb-24 text-center">
    <p class="text-lg text-[#F4E8C2]/85 mb-6">
      {$t('discover.final.text')}
    </p>

    <a
      href={appHref('/piano-identify')}
      target="_blank"
      rel="noopener noreferrer"
      class="inline-block px-10 py-4 rounded-full
             bg-[#2dc34a]/15 border border-[#2dc34a]
             text-[#a3ffb8] text-lg font-medium
             hover:bg-[#2dc34a]/25
             hover:shadow-[0_0_30px_#2dc34aAA]
             transition"
    >
      {$t('discover.final.cta')} →
    </a>
  </section>
</div>
