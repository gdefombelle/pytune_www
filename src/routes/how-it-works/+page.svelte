<script lang="ts">
  import { appHref } from '$lib/navigation/origins';
  import { browser } from '$app/environment';
  import { t } from '$lib/i18n/langStore';

  /*
   * Lot 6 — retiré de cette page, à reporter sur /for/investors (lot séparé).
   * Fichiers non déplacés dans static/ : seules les références de cette page ont changé.
   *
   * PDF institutionnels (9) :
   *   slide-1   PyTune Experience                            PyTune_Piano_Intelligence_2.pdf
   *   slide-2   PyTune - L'Expérience                         PyTune_Piano_Intelligence_1.pdf
   *   slide-3   The OS of Piano Intelligence-1                PyTune_Piano_Intelligence_3.pdf
   *   slide-4   The OS of Piano Intelligence-2                PyTune_Piano_Intelligence_5.pdf
   *   slide-4.1 The OS of Piano Intelligence-2                PyTune_Technical_Architecture.pdf
   *             ⚠ même titre que slide-4, fichier différent — anomalie non résolue, à trancher au report
   *   slide-4.2 Connecting Piano Owners & Professionals       The_PyTune_Technical_Ecosystem.pdf
   *   slide-5   The Operating System of Piano Intelligence    Piano_Intelligence_OS_(2).pdf
   *   slide-6   The Architecture of Intonation                Piano_Tuning_Architecture.pdf
   *   slide-7   Maîtrise de l'accordage - 1                   Maîtrise_de_l_Accordage_1.pdf
   *
   * Vidéos institutionnelles (4) :
   *   video-1   L'Expérience PyTune - 1        https://youtu.be/Ehc7HLX7U5I
   *   video-2   L'Expérience PyTune - 2        https://youtu.be/bonF9w3KHVc
   *   video-2.1 PyTune Shared Platform Model   https://youtu.be/DyPx1IZqSCE
   *   video-2.2 PyTune: Plateforme Partagée    https://youtu.be/qOOS3aCpTtg
   */

  type MediaItem = {
    id: string;
    title: string;
    type: 'slide' | 'video';
    url: string;
    lang: string;
  };

  let isModalOpen = false;
  let activeMedia: MediaItem | null = null;

  function openMedia(item: MediaItem) {
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

  // Vidéo de démonstration par étape (étape 4 : pas de média, texte seul)
  const step1Media: MediaItem = {
    id: 'video-5',
    title: 'PyTune ID',
    type: 'video',
    url: 'https://youtu.be/8lZ8qsUsydg',
    lang: 'EN'
  };
  const step2Media: MediaItem = {
    id: 'video-3',
    title: 'PyTune Tuner',
    type: 'video',
    url: 'https://youtu.be/mEOgLIMPfr4',
    lang: 'EN'
  };
  const step3Media: MediaItem = {
    id: 'video-5.1',
    title: 'PyTune ID-Pro',
    type: 'video',
    url: 'https://youtu.be/m_zckiJWZVY',
    lang: 'EN'
  };

  // Section pédagogique — contenus en français uniquement (pas de version anglaise vide)
  const learnItems: MediaItem[] = [
    {
      id: 'video-7',
      title: 'L’art de l’accord du piano',
      type: 'video',
      url: 'https://youtu.be/LkgOlQ6snlw',
      lang: 'FR'
    },
    {
      id: 'video-8',
      title: 'La stabilité de l’accord',
      type: 'video',
      url: 'https://youtu.be/MylaWB1-mTI',
      lang: 'FR'
    },
    {
      id: 'video-6',
      title: 'Ce que contient une seule note',
      type: 'video',
      url: 'https://youtu.be/v4p3iNtuzEs',
      lang: 'FR'
    },
    {
      id: 'video-4',
      title: 'La science cachée du piano',
      type: 'video',
      url: 'https://youtu.be/1Ys0bgE7zq8',
      lang: 'FR'
    },
    {
      id: 'video-13',
      title: 'L’art de l’accordage',
      type: 'video',
      url: 'https://youtu.be/cnV3zAqj4X4',
      lang: 'FR'
    }
  ];
</script>

<!-- HEADER -->
<section class="max-w-[1000px] mx-auto px-6 pt-28 pb-16 text-center">
  <h1
    class="text-4xl md:text-6xl font-light text-[#F4E8C2] mb-6"
    style="text-shadow: 0 0 18px rgba(0,0,0,0.6);"
  >
    {$t('how.header.title')}
  </h1>

  <p class="text-lg md:text-2xl text-[#F4E8C2]/80 max-w-[820px] mx-auto leading-relaxed">
    {$t('how.header.subtitle')}
  </p>
</section>

<!-- FOUR STEPS -->
<section class="max-w-[1100px] mx-auto px-6 pb-28 space-y-20">

  <!-- Step 1 -->
  <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
    <div class="md:w-1/2 text-center md:text-left">
      <div class="text-[#1fb6ff] text-4xl font-light mb-3">01</div>
      <h2 class="text-2xl md:text-3xl text-[#F4E8C2] font-light mb-3">
        {$t('how.step1.title')}
      </h2>
      <p class="text-[#F4E8C2]/75 leading-relaxed">
        {$t('how.step1.body')}
      </p>
    </div>
    <div class="md:w-1/2 w-full">
      <button
        type="button"
        class="media-card w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-2 hover:border-[#1fb6ff] transition cursor-pointer text-left"
        on:click={() => openMedia(step1Media)}
        aria-label={`Open ${step1Media.title}`}
      >
        <div class="aspect-video rounded-lg bg-black/50 overflow-hidden">
          <div class="media-preview">
            <img
              src={`https://i.ytimg.com/vi/${youtubeId(step1Media.url)}/hqdefault.jpg`}
              alt=""
              loading="lazy"
              decoding="async"
              width="480"
              height="360"
            />
            <span class="play-badge" aria-hidden="true">▶</span>
          </div>
        </div>
      </button>
    </div>
  </div>

  <!-- Step 2 -->
  <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
    <div class="md:w-1/2 text-center md:text-left">
      <div class="text-[#1fb6ff] text-4xl font-light mb-3">02</div>
      <h2 class="text-2xl md:text-3xl text-[#F4E8C2] font-light mb-3">
        {$t('how.step2.title')}
      </h2>
      <p class="text-[#F4E8C2]/75 leading-relaxed">
        {$t('how.step2.body')}
      </p>
    </div>
    <div class="md:w-1/2 w-full">
      <button
        type="button"
        class="media-card w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-2 hover:border-[#1fb6ff] transition cursor-pointer text-left"
        on:click={() => openMedia(step2Media)}
        aria-label={`Open ${step2Media.title}`}
      >
        <div class="aspect-video rounded-lg bg-black/50 overflow-hidden">
          <div class="media-preview">
            <img
              src={`https://i.ytimg.com/vi/${youtubeId(step2Media.url)}/hqdefault.jpg`}
              alt=""
              loading="lazy"
              decoding="async"
              width="480"
              height="360"
            />
            <span class="play-badge" aria-hidden="true">▶</span>
          </div>
        </div>
      </button>
    </div>
  </div>

  <!-- Step 3 -->
  <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
    <div class="md:w-1/2 text-center md:text-left">
      <div class="text-[#1fb6ff] text-4xl font-light mb-3">03</div>
      <h2 class="text-2xl md:text-3xl text-[#F4E8C2] font-light mb-3">
        {$t('how.step3.title')}
      </h2>
      <p class="text-[#F4E8C2]/75 leading-relaxed">
        {$t('how.step3.body')}
      </p>
    </div>
    <div class="md:w-1/2 w-full">
      <button
        type="button"
        class="media-card w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-2 hover:border-[#1fb6ff] transition cursor-pointer text-left"
        on:click={() => openMedia(step3Media)}
        aria-label={`Open ${step3Media.title}`}
      >
        <div class="aspect-video rounded-lg bg-black/50 overflow-hidden">
          <div class="media-preview">
            <img
              src={`https://i.ytimg.com/vi/${youtubeId(step3Media.url)}/hqdefault.jpg`}
              alt=""
              loading="lazy"
              decoding="async"
              width="480"
              height="360"
            />
            <span class="play-badge" aria-hidden="true">▶</span>
          </div>
        </div>
      </button>
    </div>
  </div>

  <!-- Step 4 — texte seul, pas de média -->
  <div class="max-w-[700px] mx-auto text-center">
    <div class="text-[#1fb6ff] text-4xl font-light mb-3">04</div>
    <h2 class="text-2xl md:text-3xl text-[#F4E8C2] font-light mb-3">
      {$t('how.step4.title')}
    </h2>
    <p class="text-[#F4E8C2]/75 leading-relaxed">
      {$t('how.step4.body')}
    </p>
  </div>

</section>

<!-- LEARN (SECTION PÉDAGOGIQUE) -->
<section class="max-w-[1200px] mx-auto px-6 pb-28">

  <h2 class="text-3xl md:text-4xl font-light text-center mb-4 text-[#F4E8C2]">
    {$t('how.learn.title')}
  </h2>

  <p class="text-[#F4E8C2]/70 max-w-[700px] mx-auto mb-12 text-[15px] leading-relaxed text-center">
    {$t('how.learn.subtitle')}
  </p>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {#each learnItems as item (item.id)}

      <button
        type="button"
        class="media-card rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 hover:border-[#1fb6ff] transition cursor-pointer text-left"
        on:click={() => openMedia(item)}
        aria-label={`Open ${item.title}`}
      >

        <div class="aspect-video rounded-lg bg-black/50 flex items-center justify-center overflow-hidden">
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
        </div>

        <div class="mt-4">
          <h3 class="text-[#F4E8C2] text-sm font-medium">
            {item.title}
          </h3>
        </div>

      </button>

    {/each}
  </div>

</section>

<!-- CTA -->
<section class="text-center pb-32">

  <h2 class="text-2xl md:text-3xl font-light text-[#F4E8C2] mb-6">
    {$t('how.final.title')}
  </h2>

  <!-- svelte-ignore a11y_invalid_attribute -->
  <a
    href={appHref('/piano-identify')}
    target="_blank"
    rel="noopener noreferrer"
    class="px-12 py-4 rounded-xl bg-[#2dc34a]/15 border border-[#2dc34a]
           text-[#2dc34a] font-medium backdrop-blur
           hover:bg-[#2dc34a]/25 hover:border-[#2dc34a]
           hover:shadow-[0_0_22px_#2dc34a55]
           transition-all duration-500"
  >
    {$t('how.final.cta')}
  </a>

  <p class="mt-5 text-[#F4E8C2]/70 text-sm">
    {$t('how.final.reassurance')}
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
          {$t('common.close')} ✕
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

  .media-preview {
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

</style>
