<script lang="ts">
  import { appHref } from '$lib/navigation/origins';
</script>

<div
  class="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-black text-[#F1E8C7]"
  style="
    background-image:
      linear-gradient(to bottom,
        rgba(0,0,0,0.70),
        rgba(0,0,0,0),
        rgba(0,0,0,0)
      ),
      url('/assets/back-indy.webp');
  "
>
  <!-- HERO -->
  <section
    class="max-w-[1200px] mx-auto pt-12 md:pt-20 pb-14 px-6
           flex flex-col md:flex-row items-center gap-12"
  >
    <!-- LOGO -->
    <div class="relative flex justify-center w-full md:w-1/2">
      <div class="absolute inset-0 blur-3xl opacity-40 
                  bg-[radial-gradient(circle,rgba(45,195,74,0.28),transparent_70%)]"></div>

      <picture>
        <source srcset="/assets/logo-dog-BEST-FRIEND-GOLD.avif" type="image/avif" />
        <img
          src="/assets/logo-dog-BEST-FRIEND-GOLD.webp"
          alt="PyTune Logo"
          width="841"
          height="858"
          fetchpriority="high"
          decoding="async"
          class="w-[340px] md:w-[420px] lg:w-[460px] drop-shadow-xl select-none"
        />
      </picture>
    </div>

    <!-- TEXT -->
<div
  class="w-full md:w-1/2 relative"
>
  <div
    class="rounded-3xl p-8 md:p-10
           border border-white/15
           bg-black/50 backdrop-blur-2xl
           shadow-[0_0_60px_rgba(0,0,0,0.75)]
           text-center md:text-left space-y-6"
  >

    <div class="text-xs tracking-[0.35em] uppercase text-white/60">
      PYTUNE ™ · FOR PIANO OWNERS
    </div>

    <h1 class="text-3xl md:text-5xl font-semibold leading-tight text-[#F4E8C2]">
      Take better care of your piano.
    </h1>

    <p class="text-lg text-white/85 font-light max-w-[640px]">
      Identify it. Measure its health. Tune it with guidance —
      <span class="text-[#a3ffb8] font-semibold">free</span>,
      and built for real acoustic pianos.
    </p>

    <div class="flex flex-col sm:flex-row gap-4 pt-2 justify-center md:justify-start">
      <!-- svelte-ignore a11y_invalid_attribute -->
      <a
        href={appHref('/get-started')}
        target="_blank"
        rel="noopener noreferrer"
        class="px-10 py-3 rounded-md
               bg-[#2dc34a]/20 border border-[#2dc34a]
               text-[#a3ffb8]
               hover:bg-[#2dc34a]/30
               hover:shadow-[0_0_30px_#2dc34aAA]
               transition font-semibold text-center"
      >
        Create my free account
      </a>

      <a
        href="/how-it-works"
        class="px-10 py-3 rounded-md
               border border-[#1fb6ff]
               text-[#1fb6ff]
               hover:bg-[#1fb6ff]/20
               transition font-semibold text-center"
      >
        See how it works
      </a>
    </div>

    <div class="text-[12px] text-[#5fd4ff]/90">
      Free · No credit card · First piano free forever · AI Guided Tuner included
    </div>

  </div>
</div>
  </section>

  <!-- 3 CORE CARDS -->
<section class="max-w-[1200px] mx-auto px-4 md:px-6 pb-20">

  <!-- TITLE -->
  <div class="relative text-center mb-14">
    <div class="absolute inset-0 blur-3xl opacity-20
                bg-[radial-gradient(circle,rgba(45,195,74,0.25),transparent_70%)]">
    </div>

    <h2 class="relative text-xl md:text-2xl font-light text-[#F4E8C2]">
      Three things you can do right now
    </h2>
  </div>


  <div class="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8">


    <!-- IDENTIFY -->
    <div
      class="relative overflow-hidden p-8 rounded-3xl
             border border-[#1fb6ff]/40
             bg-black/40 backdrop-blur-xl
             shadow-[0_0_40px_rgba(31,182,255,0.12)]
             hover:shadow-[0_0_54px_rgba(0,0,0,0.9)]
             transition-all duration-500 ease-out"
    >

      <!-- Number -->
      <div class="absolute top-5 right-6
                  text-7xl font-bold text-[#1fb6ff]/55
                  pointer-events-none select-none">
        1
      </div>

      <div class="relative z-10">

        <div class="text-sm tracking-[0.35em] uppercase text-[#1fb6ff] mb-3 font-semibold">
          Identify
        </div>

        <h3 class="text-2xl font-semibold mb-3 text-[#F4E8C2]">
          Know what it is.
        </h3>

        <p class="text-[#F4E8C2]/80 leading-relaxed text-[15px]">
          Take a few photos. Get brand/model hints, size,
          and a clean profile you can keep.
        </p>

        <div class="mt-6">
          <a class="text-[#1fb6ff] text-sm font-semibold hover:underline"
             href={appHref('/piano-identify')}
             target="_blank"
             rel="noopener noreferrer">
            Try Identify →
          </a>
        </div>

      </div>
    </div>

    <!-- DIAGNOSIS -->
    <div
      class="relative overflow-hidden p-8 rounded-3xl
             border border-[#5fd4ff]/40
             bg-black/40 backdrop-blur-xl
             shadow-[0_0_40px_rgba(95,212,255,0.12)]
             hover:shadow-[0_0_54px_rgba(0,0,0,0.9)]
             transition-all duration-500 ease-out"
    >

      <!-- Number -->
      <div class="absolute top-5 right-6
                  text-7xl font-bold text-[#5fd4ff]/55
                  pointer-events-none select-none">
        2
      </div>

      <div class="relative z-10">

        <div class="text-sm tracking-[0.35em] uppercase text-[#5fd4ff] mb-3 font-semibold">
          Diagnosis
        </div>

        <h3 class="text-2xl font-semibold mb-3 text-[#F4E8C2]">
          Measure its health.
        </h3>

        <p class="text-[#F4E8C2]/80 leading-relaxed text-[15px]">
          Real acoustic measurements: pitch deviation,
          stability, inharmonicity insights — readable.
        </p>

        <div class="mt-6">
          <a class="text-[#5fd4ff] text-sm font-semibold hover:underline"
             href={appHref('/diag')}
             target="_blank"
             rel="noopener noreferrer">
            Start a diagnosis →
          </a>
        </div>

      </div>
    </div>

    <!-- AI GUIDED TUNER -->
    <div
      class="relative overflow-hidden p-8 rounded-3xl
             border border-[#2dc34a]/40
             bg-black/45 backdrop-blur-xl
             shadow-[0_0_40px_rgba(45,195,74,0.15)]
             hover:shadow-[0_0_60px_rgba(45,195,74,0.25)]
             transition-all duration-500 ease-out"
    >

      <!-- Number -->
      <div class="absolute top-4 right-6
                  text-7xl font-bold text-[#2dc34a]/55
                  pointer-events-none select-none">
        3
      </div>

      <div class="relative z-10">

        <div class="text-sm tracking-[0.35em] uppercase text-[#2dc34a] mb-2 font-semibold">
          AI Guided Tuner
        </div>

        <div class="text-[11px] text-[#2dc34a]/80 mb-4 tracking-wide">
          Included for Indy users
        </div>

        <h3 class="text-2xl font-semibold mb-3 text-[#F4E8C2]">
          Tune with guidance —
          <span class="text-[#a3ffb8]">free</span>.
        </h3>

        <p class="text-white/80 leading-relaxed text-[15px]">
          Step-by-step targets, real-time pitch feedback,
          and progress tracking — no technical skills required.
        </p>

      </div>
    </div>


  </div>
</section>

  <!-- YOU’RE NOT ALONE -->
  <section class="relative max-w-[1100px] mx-auto px-6 pb-8 pt-10 md:pt-14">

    <div class="relative">

      <!-- Halo diffus centré sur le texte -->
      <div class="absolute -inset-x-24 -inset-y-20 
                  bg-[radial-gradient(ellipse_at_top_left,rgba(0,0,0,0.65),transparent_70%)]
                  opacity-40 blur-2xl pointer-events-none">
      </div>

      <div class="relative z-10 text-left">

        <h2 class="text-2xl md:text-3xl font-light text-[#F4E8C2] mb-4">
          You’re not alone with your piano.
        </h2>

        <p class="text-white/80 max-w-[800px] leading-relaxed text-[15px]">
          PyTune helps you understand what’s happening — and when you need a professional,
          you can share your piano’s data and history so they can act fast and accurately.
        </p>

        <div class="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href={appHref('/get-started')}
            target="_blank"
            rel="noopener noreferrer"
            class="px-8 py-3 rounded-md
                  bg-[#2dc34a]/15 border border-[#2dc34a]
                  text-[#a3ffb8] font-semibold
                  hover:bg-[#2dc34a]/25 transition">
            Create my free account
          </a>

          <a
            href="/plans"
            class="px-8 py-3 rounded-md
                  border border-white/15 text-white/75
                  hover:bg-white/5 transition">
            See plans →
          </a>
        </div>

      </div>
    </div>
  </section>
</div>
