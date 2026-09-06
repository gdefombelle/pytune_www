<div
  class="min-h-screen w-full bg-cover bg-center bg-no-repeat text-[#F1E8C7]"
  style="background-image: url('/assets/fond-5.webp');"
>
  <div class="backdrop-blur-[2px] bg-black/60 min-h-screen">

    <!-- ================= HERO ================= -->
    <section class="max-w-[1400px] mx-auto px-6 pt-20 pb-16 text-center">

      <div class="text-[11px] tracking-[0.35em] uppercase text-[#F4E8C2]/60 mb-4">
        PYTUNE ™ · FAMILY DRIVEN
      </div>

      <h1 class="text-4xl md:text-6xl font-light text-[#F4E8C2] mb-6">
        A Family Vision
      </h1>

      <p class="text-lg md:text-xl text-[#F4E8C2]/80 max-w-[800px] mx-auto leading-relaxed">
        PyTune is an independent initiative driven by deep technical expertise, scientific rigor, and a long-standing passion for the piano — designed to build a lasting platform for acoustic intelligence.
      </p>

      <div class="h-px w-24 bg-[#a3ffb8]/50 mx-auto mt-8"></div>

    </section>

    <!-- ================= TEAM ================= -->
    <section class="max-w-[1200px] mx-auto px-6 pb-24">

      <h2 class="text-3xl md:text-4xl font-light text-center mb-16 text-[#F4E8C2]">
        The Team
      </h2>

      <!-- Gabriel -->
      <div class="mb-20">
        <div class="group flex flex-col md:flex-row gap-8 items-start
                    p-6 rounded-2xl
                    hover:bg-white/5 transition-all duration-500 max-w-[980px] mx-auto">

          <!-- RECTANGULAR PORTRAIT -->
          <div class="relative w-full md:w-[300px] h-[420px] flex-shrink-0 overflow-hidden rounded-xl
                      border border-[#a3ffb8]/30 bg-[#020509]">

            <img
              src="/assets/team/gabriel.webp"
              alt="Gabriel de Fombelle"
              loading="lazy"
              decoding="async"
              width="1024"
              height="1536"
              class="w-full h-full object-cover object-[center_22%] [image-rendering:auto]"
            />

          </div>

          <!-- TEXT -->
          <div class="pt-4 md:pt-8">
            <h3 class="text-3xl md:text-4xl font-medium text-[#F4E8C2]">
              Gabriel de Fombelle
            </h3>

            <p class="text-[#a3ffb8] text-sm mb-3 tracking-wide">
              Founder
            </p>

            <p class="text-[#F4E8C2]/75 leading-relaxed max-w-[560px] text-[16px]">
              Gabriel is the creator and sole builder of PyTune, leading the vision, architecture, and execution across the entire platform — from AI and acoustic science to software engineering and product design. His work builds on decades of hands-on experience in artificial intelligence, signal analysis, and complex systems. Deeply passionate about music, he plays several instruments including guitar, Hammond organ, and bass, has composed music, and has a strong grounding in theory and harmony, with a particular affinity for jazz.
            </p>
          </div>

        </div>
      </div>

      <!-- Children / team -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[980px] mx-auto">

        {#each [
          {
            name: "Dr Gregory Jevardat de Fombelle",
            role: "Scientific Advisor",
            text: "Gregory holds a PhD in computer science and brings strong experience in scientific software, large-scale data processing, and research-grade engineering. His background is especially valuable for PyTune’s scientific direction, helping strengthen the analytical framework, software rigor, and research perspective behind the platform.",
            image: "/assets/team/gregory.webp"
          },
          {
            name: "Marie de Fombelle",
            role: "Communication, Strategic Positioning & Media",
            text: "Marie is co-founder of <a href='https://www.opnlab.ca/' target='_blank' rel='noopener noreferrer' class='text-[#a3ffb8] hover:text-white underline underline-offset-4'>OpnLab</a> and contributes to PyTune’s communication, positioning, and media strategy. Her perspective helps shape how the platform is presented with clarity, consistency, and impact across audiences.",
            image: "/assets/team/marie.webp"
          },
          {
            name: "Charlotte de Fombelle",
            role: "Data, Analytics & Product Insight",
            text: "Charlotte contributes perspective on data, analytics, and product insight, helping inform how PyTune can evolve with clarity, measurable signals, and real-world usage in mind.",
            image: "/assets/team/charlotte.webp"
          },
          {
            name: "Nicolas de Fombelle",
            role: "Systems & Network Engineering",
            text: "Supports infrastructure and system administration on selected aspects of the platform, while also bringing strong experience in user support and customer service.",
            image: "/assets/team/nicolas.webp"
          }
        ] as person}

          <div class="group flex flex-col gap-5
                      p-5 rounded-2xl
                      hover:bg-white/5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-500 max-w-[420px]">

            <!-- RECTANGULAR PORTRAIT -->
            <div class="relative w-full max-w-[300px] aspect-[3/4] overflow-hidden rounded-xl
                        border border-[#a3ffb8]/25 bg-[#020509] mx-auto md:mx-0">

              {#if person.image}
                <img
                  src={person.image}
                  alt={person.name}
                  loading="lazy"
                  decoding="async"
                  width="1024"
                  height="1536"
                  class="w-full h-full object-cover object-[center_18%]"
                />
              {:else}
                <div class="w-full h-full bg-[#020509] flex items-center justify-center text-[#a3ffb8]/30 text-5xl">
                  👤
                </div>
              {/if}

              <div class="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent"></div>
            </div>

            <!-- TEXT -->
            <div>
              <h3 class="text-xl md:text-2xl font-medium text-[#F4E8C2] leading-tight">
                {person.name}
              </h3>

              <p class="text-[#a3ffb8] text-sm mb-3 tracking-wide">
                {person.role}
              </p>

              <p class="text-[#F4E8C2]/75 leading-relaxed max-w-[520px]">
                {@html person.text}
              </p>
            </div>

          </div>

        {/each}

      </div>
    </section>

    <!-- ================= CLOSING ================= -->
    <section class="max-w-[900px] mx-auto px-6 pb-24 text-center">

      <div class="rounded-3xl p-10
                  bg-[#020509]
                  border border-[#0f1d15]
                  shadow-[0_0_40px_rgba(0,0,0,0.8)]">

        <p class="text-lg md:text-xl text-[#F4E8C2]/85 leading-relaxed">
          PyTune is not a short-term project — it is a long-term, deeply engineered platform at the intersection of AI, acoustic science, and real-world instrumentation. Built with rigor, precision, and persistence, it aims to define a new standard for how acoustic instruments are understood, analyzed, and serviced.
        </p>

        <p class="mt-6 text-[#a3ffb8] font-medium">
          A long-term vision — built to last.
        </p>

      </div>

    </section>

    <!-- ================= VISION ================= -->
    <section class="max-w-[1000px] mx-auto px-6 pb-28 text-center">

      <h2 class="text-3xl md:text-4xl font-light text-[#F4E8C2] mb-10">
        Vision & Direction
      </h2>

      <div class="grid md:grid-cols-3 gap-6 text-left">

        <div class="p-6 rounded-2xl bg-[#020509] border border-[#0f1d15]">
          <h3 class="text-[#a3ffb8] font-medium mb-2">Identify</h3>
          <p class="text-[#F4E8C2]/75 text-sm leading-relaxed">
            Build the most advanced AI-assisted system to identify, understand, and document acoustic pianos from minimal input — images, sound, or partial data.
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-[#020509] border border-[#0f1d15]">
          <h3 class="text-[#a3ffb8] font-medium mb-2">Diagnose</h3>
          <p class="text-[#F4E8C2]/75 text-sm leading-relaxed">
            Develop a scientific and accessible diagnostic layer capable of analyzing tuning, inharmonicity, and acoustic behavior — bridging professional expertise and AI.
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-[#020509] border border-[#0f1d15]">
          <h3 class="text-[#a3ffb8] font-medium mb-2">Tune</h3>
          <p class="text-[#F4E8C2]/75 text-sm leading-relaxed">
            Deliver a new generation of intelligent tuning assistance, combining real-time signal processing, adaptive models, and guided workflows for both professionals and individuals.
          </p>
        </div>

      </div>

      <p class="mt-12 text-[#F4E8C2]/70 text-sm max-w-[700px] mx-auto leading-relaxed">
        PyTune is designed as a unified system where identification, diagnosis, and tuning continuously reinforce each other — creating a data-driven understanding of acoustic instruments at scale.
      </p>

    </section>

  </div>
</div>
