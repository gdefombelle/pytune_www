<script lang="ts">
  import { t } from '$lib/i18n/langStore';
</script>

<div
  class="min-h-screen w-full bg-cover bg-center bg-no-repeat text-[#F1E8C7]"
  style="background-image: url('/assets/fond-5.webp');"
>
  <!-- ================= HERO ================= -->
  <section class="max-w-[1400px] mx-auto pt-24 md:pt-32 pb-14 px-6 text-center">
    <p class="text-xs tracking-[0.35em] uppercase text-[#ffd87a]/70 mb-6">
      PYTUNE ™ · EDUCATION
    </p>

    <h1 class="text-3xl md:text-5xl font-semibold text-[#F4E8C2] leading-tight mb-6">
      Keep every piano ready for students.
    </h1>

    <p class="text-lg md:text-xl text-[#F4E8C2]/80 font-light max-w-[900px] mx-auto">
      Fleet monitoring, scheduled reminders, consistent tuning standards and shareable reports —
      built for schools, conservatories and music departments.
    </p>

    <div class="mt-10 flex flex-wrap items-center justify-center gap-3">
      <a
        href="/plans?tab=pros"
        class="rounded-full px-5 py-2 bg-[#ffd87a] text-black font-semibold
               hover:opacity-90 transition"
      >
        See Pro plans
      </a>
      <button
        type="button"
        class="rounded-full px-5 py-2 border border-[#ffd87a]/40 text-[#F4E8C2]
               hover:border-[#ffd87a]/70 hover:bg-black/20 transition cursor-default"
      >
        School Dashboard
      </button>
    </div>
  </section>

  <!-- ================= VALUE PROPS ================= -->
  <section class="max-w-[1300px] mx-auto px-6 pb-24">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
      <div class="rounded-3xl p-10 bg-[#020509] border border-[#1a3040]
                  hover:border-[#ffd87a]/60 hover:shadow-[0_0_60px_rgba(255,216,122,0.22)]
                  transition-all duration-500">
        <h3 class="text-2xl text-[#ffd87a] mb-4 font-medium">Fleet view</h3>
        <p class="text-[#F4E8C2]/80 leading-relaxed">
          See all instruments at a glance: status, last service, priority, and room/location.
        </p>
      </div>

      <div class="rounded-3xl p-10 bg-[#020509] border border-[#1a3040]
                  hover:border-[#ffd87a]/60 hover:shadow-[0_0_60px_rgba(255,216,122,0.22)]
                  transition-all duration-500">
        <h3 class="text-2xl text-[#ffd87a] mb-4 font-medium">Scheduled reminders</h3>
        <p class="text-[#F4E8C2]/80 leading-relaxed">
          Automatic follow-ups for tuning & maintenance cycles — per piano, per room, per semester.
        </p>
      </div>

      <div class="rounded-3xl p-10 bg-[#020509] border border-[#1a3040]
                  hover:border-[#ffd87a]/60 hover:shadow-[0_0_60px_rgba(255,216,122,0.22)]
                  transition-all duration-500">
        <h3 class="text-2xl text-[#ffd87a] mb-4 font-medium">Reports & continuity</h3>
        <p class="text-[#F4E8C2]/80 leading-relaxed">
          Shareable service reports for administration and teachers, with measurable acoustic data.
        </p>
      </div>
    </div>
  </section>

  <!-- ================= HOW IT WORKS ================= -->
 <section class="max-w-[1100px] mx-auto px-6 pt-10 pb-20">
    <div class="rounded-3xl p-10 bg-black/30 border border-[#1a3040]">
      <div class="text-xs tracking-[0.25em] uppercase text-[#ffd87a]/70 mb-3">
        How it works
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div class="text-[#F4E8C2] font-semibold mb-2">1) Register instruments</div>
          <div class="text-[#F4E8C2]/75 leading-relaxed">
            Identify pianos (photos + data) and build a clean inventory.
          </div>
        </div>

        <div>
          <div class="text-[#F4E8C2] font-semibold mb-2">2) Track service history</div>
          <div class="text-[#F4E8C2]/75 leading-relaxed">
            Attach diagnostics and tuning sessions, keep everything consistent year to year.
          </div>
        </div>

        <div>
          <div class="text-[#F4E8C2] font-semibold mb-2">3) Keep quality stable</div>
          <div class="text-[#F4E8C2]/75 leading-relaxed">
            Reminders + prioritization so practice rooms stay reliable all semester.
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ================= LIVESYNC ================= -->
  <section class="max-w-[1100px] mx-auto px-6 pb-24">
    <div class="text-center mb-12">
      <h2 class="text-2xl md:text-3xl font-light text-[#F4E8C2] mb-4">
        {$t('schools.livesync.title')}
      </h2>
      <p class="text-[#F4E8C2]/80 text-[15px] leading-relaxed max-w-[760px] mx-auto mb-4">
        {$t('schools.livesync.subtitle')}
      </p>
      <p class="text-[#F4E8C2]/70 text-[15px] leading-relaxed max-w-[760px] mx-auto">
        {$t('schools.livesync.body')}
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-7">
      <div class="relative overflow-hidden rounded-3xl p-7 bg-black/40 border border-white/15 backdrop-blur-xl">
        <h3 class="text-lg font-medium text-[#ffd87a] mb-2">{$t('schools.livesync.case1.title')}</h3>
        <p class="text-[#F4E8C2]/80 text-[15px] leading-relaxed">{$t('schools.livesync.case1.body')}</p>
      </div>
      <div class="relative overflow-hidden rounded-3xl p-7 bg-black/40 border border-white/15 backdrop-blur-xl">
        <h3 class="text-lg font-medium text-[#ffd87a] mb-2">{$t('schools.livesync.case2.title')}</h3>
        <p class="text-[#F4E8C2]/80 text-[15px] leading-relaxed">{$t('schools.livesync.case2.body')}</p>
      </div>
    </div>
  </section>

  <!-- ================= CTA ================= -->
  <section class="max-w-[1100px] mx-auto px-6 pb-24">
    <div class="rounded-3xl p-10 bg-[#020509] border border-[#1a3040]
                hover:border-[#ffd87a]/60 hover:shadow-[0_0_60px_rgba(255,216,122,0.18)]
                transition-all duration-500 text-center">
      <h2 class="text-2xl md:text-3xl font-semibold text-[#F4E8C2] mb-4">
        Ready to manage a piano fleet the pro way?
      </h2>
      <p class="text-[#F4E8C2]/80 max-w-[850px] mx-auto leading-relaxed mb-8">
        Start with a few instruments, then scale to the whole school. We’ll add deeper features
        (multi-user roles, room plans, budgeting reports) as the platform grows.
      </p>

      <div class="flex flex-wrap items-center justify-center gap-3">
        <a
          href="/plans?tab=pros"
          class="rounded-full px-5 py-2 bg-[#ffd87a] text-black font-semibold hover:opacity-90 transition"
        >
          Contact / Pricing
        </a>
        <button
          type="button"
          class="rounded-full px-5 py-2 border border-[#ffd87a]/40 text-[#F4E8C2]
                 hover:border-[#ffd87a]/70 hover:bg-black/20 transition cursor-default"
        >
          Explore School Dashboard
        </button>
      </div>
    </div>
  </section>
</div>
