<script lang="ts">
  import { appHref } from '$lib/navigation/origins';
  import { browser } from '$app/environment';

  type GalleryItem = {
    id: string;
    title: string;
    type: 'slide' | 'video';
    url: string;
    lang: string;
    tabs: string[];
  };

  let isModalOpen = false;
  let activeMedia: GalleryItem | null = null;
  let activeTab = 'overview';

  function openMedia(item: GalleryItem) {
    activeMedia = item;
    isModalOpen = true;
    if (browser) document.body.style.overflow = 'hidden';
  }

  function youtubeId(url: string) {
    return url.split('youtu.be/')[1]?.split(/[?&]/)[0] ?? '';
  }

  function closeModal() {
    isModalOpen = false;
    activeMedia = null;
    if (browser) document.body.style.overflow = '';
  }

  function onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape' && isModalOpen) closeModal();
  }

  const steps = [
    {
      number: "01",
      title: "Identify Your Piano",
      text: "Speak naturally, type freely, or upload photos. PyTune identifies your piano — brand, model, era, visual condition — giving you a verified starting point for expert-grade analysis."
    },
    {
      number: "02",
      title: "AI Diagnosis & Precision Metrics",
      text: "Receive insights about tuning stability, acoustic behavior, serial number hints, value range, and structural condition."
    },
    {
      number: "03",
      title: "Follow Expert-Grade Guidance",
      text: "Your AI assistant helps interpret the data and explains what matters for sound, tuning stability, and instrument health."
    },
    {
      number: "04",
      title: "Create Your Piano Profile",
      text: "Store photos, tuning deviations, acoustic fingerprints, and service history — building a living digital identity for your piano."
    }
  ];
  
  const galleryItems: GalleryItem[] = [
  {
    id: "slide-1",
    title: "PyTune Experience",
    type: "slide",
    url: "/slides/pdf/PyTune_Piano_Intelligence_2.pdf",
    lang: "EN",
    tabs: ["tech"]
  },
  {
    id: "slide-2",
    title: "PyTune - L'Expérience",
    type: "slide",
    url: "/slides/pdf/PyTune_Piano_Intelligence_1.pdf",
    lang: "EN",
    tabs: ["overview"]
  },
  {
    id: "slide-3",
    title: "The OS of Piano Intelligence-1",
    type: "slide",
    url: "/slides/pdf/PyTune_Piano_Intelligence_3.pdf",
    lang: "EN",
    tabs: ["overview"]
  },
  {
    id: "slide-4",
    title: "The OS of Piano Intelligence-2",
    type: "slide",
    url: "/slides/pdf/PyTune_Piano_Intelligence_5.pdf",
    lang: "EN",
    tabs: ["overview"]
  },
   {
    id: "slide-4.1",
    title: "The OS of Piano Intelligence-2",
    type: "slide",
    url: "/slides/pdf/PyTune_Technical_Architecture.pdf",
    lang: "FR",
    tabs: ["overview"]
  },
   {
    id: "slide-4.2",
    title: "Connecting Piano Owners & Professionals",
    type: "slide",
    url: "/slides/pdf/The_PyTune_Technical_Ecosystem.pdf",
    lang: "EN",
    tabs: ["overview"]
  },
  {
    id: "slide-5",
    title: "The Operating System of Piano Intelligence",
    type: "slide",
    url: "/slides/pdf/Piano_Intelligence_OS_(2).pdf",
    lang: "EN",
    tabs: ["features"]
  },
  {
    id: "slide-6",
    title: "The Architecture of Intonation",
    type: "slide",
    url: "/slides/pdf/Piano_Tuning_Architecture.pdf",
    lang: "EN",
    tabs: ["tech"]
  },
  {
    id: "slide-7",
    title: "Maîtrise de l'accordage - 1",
    type: "slide",
    url: "/slides/pdf/Maîtrise_de_l_Accordage_1.pdf",
    lang: "FR",
    tabs: ["tech"]
  },
  {
    id: "slide-13",
    title: "L'art de l'accordage - 1",
    type: "video",
    url: "https://youtu.be/cnV3zAqj4X4",
    lang: "FR",
    tabs: ["tech"]
  },

  {
    id: "video-1",
    title: "L'Expérience PyTune - 1",
    type: "video",
    url: "https://youtu.be/Ehc7HLX7U5I",
    lang: "EN",
    tabs: ["overview"]
  },
  {
    id: "video-2",
    title: "L'Expérience PyTune - 2",
    type: "video",
    url: "https://youtu.be/bonF9w3KHVc",
    lang: "FR",
    tabs: ["overview",]
  },
  {
    id: "video-2.1",
    title: "PyTune Shared Platform Model",
    type: "video",
    url: "https://youtu.be/DyPx1IZqSCE",
    lang: "EN",
    tabs: ["overview",]
  },
  {
    id: "video-2.2",
    title: "PyTune: Plateforme Partagée",
    type: "video",
    url: "https://youtu.be/qOOS3aCpTtg",
    lang: "FR",
    tabs: ["overview",]
  },
    {
    id: "video-5",
    title: "PyTune ID",
    type: "video",
    url: "https://youtu.be/8lZ8qsUsydg",
    lang: "EN",
    tabs: ["features"]
  },
   {
    id: "video-5.1",
    title: "PyTune ID-Pro",
    type: "video",
    url: "https://youtu.be/m_zckiJWZVY",
    lang: "EN",
    tabs: ["features"]
  },
  {
    id: "video-3",
    title: "PyTune Tuner",
    type: "video",
    url: "https://youtu.be/mEOgLIMPfr4",
    lang: "EN",
    tabs: ["features"]
  },
  {
    id: "video-4",
    title: "La science cachée du piano",
    type: "video",
    url: "https://youtu.be/1Ys0bgE7zq8",
    lang: "FR",
    tabs: ["features"]
  },
  {
    id: "video-6",
    title: "Complexité d'une note",
    type: "video",
    url: "https://youtu.be/v4p3iNtuzEs",
    lang: "FR",
    tabs: ["features"]
  },
   {
    id: "video-7",
    title: "L'Art de l'accord du piano",
    type: "video",
    url: "https://youtu.be/LkgOlQ6snlw",
    lang: "FR",
    tabs: ["features"]
  },
     {
    id: "video-8",
    title: "The Unstable Art of Piano Tuning",
    type: "video",
    url: "https://youtu.be/MylaWB1-mTI",
    lang: "FR",
    tabs: ["features"]
  },
];

  function getItemsForTab(tab: string) {
    return galleryItems.filter(item => item.tabs?.includes(tab));
  }

</script>

<section class="max-w-[1400px] mx-auto px-6 pt-28 pb-20 text-center">

  <h1 class="text-4xl md:text-6xl font-light text-[#F4E8C2] mb-6"
      style="text-shadow: 0 0 18px rgba(0,0,0,0.6);">
    How PyTune Works
  </h1>

  <p class="text-lg md:text-2xl text-[#F4E8C2]/80 max-w-[900px] mx-auto leading-relaxed">
    A next-generation platform combining  
    <span class="text-[#1fb6ff]">AI acoustics</span>,  
    <span class="text-[#2dc34a]">precision tuning analysis</span>,  
    <span class="text-[#1fb6ff]">expert guidance</span>,  
    and real-world piano science.
  </p>

</section>

<!-- TABS -->
<div class="max-w-[1200px] mx-auto px-6 mb-6">
  <div class="tabs">
    <button
      class="tab {activeTab === 'overview' ? 'is-active' : ''}"
      on:click={() => activeTab = 'overview'}
    >
      Overview
    </button>

    <button
      class="tab {activeTab === 'features' ? 'is-active' : ''}"
      on:click={() => activeTab = 'features'}
    >
      Features & Demos
    </button>

    <button
      class="tab {activeTab === 'tech' ? 'is-active' : ''}"
      on:click={() => activeTab = 'tech'}
    >
      Technology
    </button>
    <button
      class="tab {activeTab === 'engineering' ? 'is-active' : ''}"
      on:click={() => activeTab = 'engineering'}
    >
      Platform & Engineering
    </button>
  </div>
</div>

<section class="max-w-[1200px] mx-auto px-6 pb-28">

  <h2 class="text-3xl md:text-4xl font-light text-center mb-12 text-[#F4E8C2]">
    {activeTab === 'overview' ? 'Overview' :
     activeTab === 'features' ? 'Presentations & Demos' :
     activeTab === 'tech' ? 'Technical Insights' :
     'Platform & Engineering'}
  </h2>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

    {#each getItemsForTab(activeTab) as item (item.id)}

      <button
        type="button"
        class="media-card rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 hover:border-[#1fb6ff] transition cursor-pointer text-left"
        on:click={() => openMedia(item)}
        aria-label={`Open ${item.title}`}
      >

        <div class="aspect-video rounded-lg bg-black/50 flex items-center justify-center overflow-hidden">
          {#if item.type === 'video'}
            <div class="media-preview">
              <img
                src={`https://i.ytimg.com/vi/${youtubeId(item.url)}/hqdefault.jpg`}
                alt=""
                loading="lazy"
                decoding="async"
                width="480"
                height="360"
              />
              <span class="play-badge" aria-hidden="true">▶</span>
            </div>
          {:else}
            <div class="pdf-preview" aria-hidden="true">
              <span class="pdf-icon">PDF</span>
              <span>View presentation</span>
            </div>
          {/if}
        </div>

        <div class="mt-4 flex items-center justify-between">
          <h3 class="text-[#F4E8C2] text-sm font-medium">
            {item.title}
          </h3>

          <span class="text-xs px-2 py-1 rounded bg-white/10 text-[#F4E8C2]/70">
            {item.lang}
          </span>
        </div>

      </button>

    {/each}

  </div>

</section>

<!-- STEP BY STEP -->
<section class="max-w-[900px] mx-auto px-6 pb-28">

  <h2 class="text-3xl md:text-4xl font-light text-center mb-16 text-[#F4E8C2]">
    Step by Step
  </h2>

  <div class="space-y-16">
    {#each steps as s}

      <div class="flex flex-col md:flex-row md:items-start gap-6">

        <div class="text-[#1fb6ff] text-5xl font-light md:w-1/5 text-center md:text-left">
          {s.number}
        </div>

        <div class="md:w-4/5">
          <h3 class="text-2xl text-[#F4E8C2] font-light mb-2">
            {s.title}
          </h3>

          <p class="text-[#F4E8C2]/75 leading-relaxed">
            {s.text}
          </p>
        </div>

      </div>

    {/each}
  </div>

</section>



<!-- TECH CREDIBILITY -->
<section class="max-w-[1100px] mx-auto px-6 pb-24 text-center">

  <h2 class="text-3xl md:text-4xl font-light text-[#F4E8C2] mb-6">
    Built with Real Acoustics & AI Research
  </h2>

  <p class="text-[#F4E8C2]/70 max-w-[800px] mx-auto leading-relaxed">
    PyTune combines advanced signal processing, harmonic analysis,
    acoustic modeling, and modern AI systems — bringing scientific
    rigor to everyday piano care.
  </p>

</section>



<!-- CTA -->
<section class="text-center pb-32">


  <!-- svelte-ignore a11y_invalid_attribute -->
  <a href={appHref('/get-started')}
    target="_blank"
    rel="noopener noreferrer"
     class="px-12 py-4 rounded-xl bg-[#2dc34a]/15 border border-[#2dc34a]
            text-[#2dc34a] font-medium backdrop-blur
            hover:bg-[#2dc34a]/25 hover:border-[#2dc34a]
            hover:shadow-[0_0_22px_#2dc34a55]
            transition-all duration-500">

    Create Your Account

  </a>

  <p class="mt-5 text-[#F4E8C2]/70 text-sm">
    Your first piano is free — forever.
  </p>

</section>

{#if isModalOpen && activeMedia}
  <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
    on:click={closeModal}
    on:keydown={onKeydown}
    tabindex="0"
  >

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <div
      class="relative w-full max-w-[1200px] h-[85vh] bg-black rounded-xl border border-white/10 overflow-hidden"
      on:click|stopPropagation
    >
      <!-- Header -->
      <div class="absolute top-0 left-0 right-0 h-12 bg-black/60 backdrop-blur flex items-center justify-between px-4 z-10">
        <div class="text-[#F4E8C2] text-sm truncate">{activeMedia.title}</div>
        <button
          class="text-[#F4E8C2]/80 hover:text-white text-sm px-3 py-1 rounded bg-white/10"
          on:click={closeModal}
        >
          Close ✕
        </button>
      </div>

      <!-- Viewer -->
      <div class="w-full h-full pt-12 overflow-hidden">
        {#if activeMedia.type === 'video'}
          <iframe
            class="w-full h-full"
            src={`https://www.youtube-nocookie.com/embed/${youtubeId(activeMedia.url)}?autoplay=1`}
            title={activeMedia.title}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        {:else}
          <iframe
            class="w-full h-full bg-white"
            src={`${activeMedia.url}#view=FitH`}
            title={activeMedia.title}
          ></iframe>
        {/if}
      </div>
    </div>
  </div>
{/if}

<style>
  .media-card {
    width: 100%;
    color: inherit;
  }

  .media-preview,
  .pdf-preview {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .media-preview img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .play-badge {
    position: absolute;
    inset: 50% auto auto 50%;
    transform: translate(-50%, -50%);
    display: grid;
    place-items: center;
    width: 3rem;
    height: 3rem;
    padding-left: 0.2rem;
    border-radius: 999px;
    color: white;
    background: rgba(0, 0, 0, 0.78);
    border: 1px solid rgba(255, 255, 255, 0.55);
  }

  .pdf-preview {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    color: rgba(244, 232, 194, 0.72);
    background: linear-gradient(145deg, rgba(31, 182, 255, 0.08), rgba(45, 195, 74, 0.06));
  }

  .pdf-icon {
    padding: 0.45rem 0.65rem;
    border: 1px solid rgba(31, 182, 255, 0.7);
    border-radius: 0.45rem;
    color: #9ad8ff;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.08em;
  }
</style>
