
<script lang="ts">
  import { t } from '$lib/i18n/langStore';
  import { appHref } from '$lib/navigation/origins';
</script>

<div
  class="min-h-screen w-full bg-cover bg-center bg-no-repeat text-[#F4E8C2]
         flex items-center justify-center"
  style="background-image: url('/assets/fond-5.webp');"
>
  <section
    class="max-w-[1200px] w-full px-6
           flex flex-col items-center text-center space-y-11 md:space-y-12"
  >

    <!-- Eyebrow -->
    <p class="text-[11px] tracking-[0.45em] uppercase text-[#5fd4ff]/80">
      {$t('landing.hero.eyebrow')}
    </p>

    <!-- Logo / Dog -->
    <div class="relative">
      <div
        class="absolute inset-0 blur-3xl opacity-40
               bg-[radial-gradient(circle,rgba(255,215,130,0.25),transparent_70%)]">
      </div>

      <picture>
        <source srcset="/assets/logo-dog-BEST-FRIEND-GOLD.avif" type="image/avif" />
        <img
          src="/assets/logo-dog-BEST-FRIEND-GOLD.webp"
          width="841"
          height="858"
          fetchpriority="high"
          decoding="async"
          alt="PyTune"
          class="w-[300px] md:w-[360px] lg:w-[420px]
                 drop-shadow-xl select-none"
        />
      </picture>
    </div>

    <!-- Title -->
    <h1 class="text-4xl md:text-6xl font-light leading-tight tracking-tight">
      {@html $t('landing.hero.title').replace('\n', '<br />')}
    </h1>

    <!-- Subtitle -->
    <p class="text-lg md:text-xl text-[#F4E8C2]/80 max-w-[760px]">
      {$t('landing.hero.subtitle')}
    </p>

    <!-- CTA -->
    <div class="flex flex-col items-center space-y-4 pt-6">

      <!-- Primary -->
      <a
        href={appHref('/piano-identify')}
        target="_blank"
        rel="noopener noreferrer"
        class="px-14 py-4 rounded-full
               bg-[#2dc34a]/15 border border-[#2dc34a]
               text-[#a3ffb8] text-lg font-medium
               hover:bg-[#2dc34a]/25
               hover:shadow-[0_0_30px_#2dc34aAA]
               transition"
      >
        {$t('landing.hero.cta_primary')}
      </a>

      <!-- Secondary -->
      <a
        href="/discover"
        class="px-10 py-2.5 rounded-full
               border border-[#5fd4ff]/40
               text-[#7ee6ff] text-sm font-medium
               hover:bg-[#5fd4ff]/10
               hover:shadow-[0_0_20px_rgba(95,212,255,0.35)]
               transition"
      >
        {$t('landing.hero.cta_secondary')}
      </a>

      <p class="text-xs text-[#8fe3ff]/70 tracking-wide pt-1">
        {$t('landing.hero.reassurance')}
      </p>
    </div>

    <!-- Bottom line -->
    <p
      class="pt-12 text-[12px] tracking-[0.35em]
             uppercase text-[#F4E8C2]/50"
    >
      {$t('landing.hero.baseline')}
    </p>

  </section>
</div>
