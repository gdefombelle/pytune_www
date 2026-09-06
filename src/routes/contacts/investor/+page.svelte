<script lang="ts">
  import { lang } from '$lib/i18n/langStore';
  import { get } from 'svelte/store';
  import { joinEnterpriseRequest, sendInvestorContact } from '../../../services/contactService';
  import AddressAndTelInput from '$lib/AddressAndTelInput.svelte';

  let name = '';
let email = '';
let organization = '';
let role = '';
let focus = '';
let stage = '';
let message = '';

let submitted = false;
let loading = false;
let error: string | null = null;

async function submit() {
  if (!name || !email) return;

  loading = true;
  error = null;

  try {
    await sendInvestorContact({
      name,
      email,
      organization,
      role,
      focus,
      stage,
      message
    });

    submitted = true;

  } catch {
    error = "Something went wrong.";
  } finally {
    loading = false;
  }
}
</script>

<div class="contact-root">
  <div class="pytune-card contact-card">

    {#if !submitted}

      <div class="hero">
        <h1>Investor Contact</h1>
        <p class="hero-sub">
          If you're interested in PyTune’s vision, roadmap, or strategic alignment,
          we’d be happy to connect and share our current materials.
        </p>
      </div>

      <div class="form">

        <!-- CONTACT -->
        <div class="grid">
          <input
            placeholder="Full name"
            bind:value={name}
            required
          />

          <input
            type="email"
            placeholder="Professional email"
            bind:value={email}
            required
          />
        </div>

        <!-- ORGANIZATION -->
        <div class="grid">
          <input
            placeholder="Company / Fund name"
            bind:value={organization}
          />

          <input
            placeholder="Role / Title"
            bind:value={role}
          />
        </div>

        <!-- INVESTMENT PROFILE -->
        <div class="grid">
          <input
            placeholder="Investment focus (AI, Music, SaaS, DeepTech…)"
            bind:value={focus}
          />

          <input
            placeholder="Stage (Pre-seed, Seed, Series A...)"
            bind:value={stage}
          />
        </div>

        <textarea
          placeholder="Tell us about your investment thesis and what you're looking for."
          bind:value={message}
        ></textarea>

        <p class="legal-note">
          Your message is sent directly to the PyTune founders.
          We do not store investor contact details.
        </p>

        <button
          class="pytune-btn-foundation"
          on:click={submit}
          disabled={loading}
        >
          {loading ? "Sending..." : "Request investor overview"}
        </button>

        {#if error}
          <div class="error">{error}</div>
        {/if}

      </div>

    {:else}

      <h2 class="pytune-card-title">
        Thank you ✨
      </h2>

      <p class="pytune-muted">
        We appreciate your interest.  
        We'll review your message and get back to you shortly.
      </p>

    {/if}

  </div>
</div>

<style>

.hero {
  text-align: center;
  margin-bottom: 2rem;
}

.hero h1 {
  font-weight: 500;
  letter-spacing: 0.04em;
  font-size: 2rem;

  background: linear-gradient(
    to right,
    var(--pytune-gold),
    var(--pytune-gold-strong)
  );

  background-clip: text;              /* version standard */
  -webkit-background-clip: text;      /* compat Safari */

  color: transparent;                 /* standard */
  -webkit-text-fill-color: transparent;
  line-height: 1.25;
  padding-bottom: 0.1em;
}
.hero-sub {
  color: var(--pytune-text-muted);
  font-size: 1rem;
  line-height: 1.6;
  margin-top: 0.8rem;
  max-width: 680px;
  margin-left: auto;
  margin-right: auto;
}
  .contact-card {
    max-width: 920px;
    width: 100%;
    padding: 2.5rem;

    background: rgba(10, 25, 20, 0.55);
    backdrop-filter: blur(12px);

    border: 1px solid rgba(110, 231, 183, 0.25);
    border-radius: 18px;

    box-shadow:
      0 30px 80px rgba(0,0,0,0.6);
  }

  .contact-root {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items:  center;

    /* Image + overlay sombre */
    background:
      linear-gradient(
        rgba(5, 12, 18, 0.18),
        rgba(2, 6, 10, 0.28)
      ),
      url('/assets/background-investor-2.webp');

    background-size: cover;
    background-position: center;
    background-attachment: fixed; /* effet premium desktop */

    padding: 3rem 1.5rem;
    padding-top: 6rem;
  }

 

  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  @media (max-width: 768px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }

  input, textarea {
    border-radius: 10px;
    padding: 0.75rem 0.9rem;
    border: 1px solid var(--pytune-border-soft);
    background: var(--pytune-bg-elevated);
    color: var(--pytune-text-primary);
    font-size: 0.9rem;
    transition: all .2s ease;
  }
  

  input:focus, textarea:focus {
    border-color: var(--pytune-green);
    box-shadow: 0 0 8px rgba(110,231,183,.4);
    outline: none;
  }

  textarea {
    min-height: 100px;
    resize: vertical;
  }

  .error {
    color: #ff7777;
    font-size: 0.85rem;
  }

  .legal-note {
  font-size: 0.75rem;
  opacity: 0.6;
  text-align: center;
}

.pytune-btn-foundation {
  background: rgba(12, 20, 16, 0.9);
  color: var(--pytune-gold);

  border: 1px solid rgba(231,217,163,0.5);
  border-radius: 999px;

  padding: 0.7rem 1.6rem;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.04em;

  transition: all 0.2s ease;
}

.pytune-btn-foundation:hover {
  background: rgba(20, 40, 30, 0.9);
  border-color: var(--pytune-gold);
  box-shadow: 0 0 14px rgba(231,217,163,0.35);
  transform: translateY(-1px);
}

  @media (max-width: 640px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
</style>
