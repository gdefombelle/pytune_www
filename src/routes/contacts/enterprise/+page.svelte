<script lang="ts">
  import { lang } from '$lib/i18n/langStore';
  import { get } from 'svelte/store';
  import { joinEnterpriseRequest } from '../../../services/contactService';
  import AddressAndTelInput from '$lib/AddressAndTelInput.svelte';

  let name = '';
  let email = '';
  let organization = '';
  let orgType = '';
  let message = '';
  let orgWebsite = '';

  let numberOfLocations = '';
  let numberOfPianos = '';
  let teamSize = '';
  let apiInterest = '';

  // Address & phone
  let address = '';
  let phone = '';
  let addressDetails: any = {};
  let isPhoneValid = true;
  let formattedPhone = "";

  // honeypot
  let website = '';

  let submitted = false;
  let loading = false;
  let error: string | null = null;

  async function submit() {
    if (!email || !organization) return;
    if (website) return; // honeypot

    if (phone && !isPhoneValid) {
      error = "Invalid phone number.";
      return;
    }

    loading = true;
    error = null;

    try {
      await joinEnterpriseRequest({
        name,
        email,
        organization,
        lang: get(lang),

        phone: formattedPhone || phone,
        website: orgWebsite,

        org_type: orgType as any,

        number_of_locations: numberOfLocations
          ? Number(numberOfLocations)
          : undefined,

        number_of_pianos: numberOfPianos
          ? Number(numberOfPianos)
          : undefined,

        team_size: teamSize
          ? Number(teamSize)
          : undefined,

        api_interest: (apiInterest || undefined) as any,

        country: addressDetails?.country || '',

        address: address
          ? {
              street: addressDetails?.street,
              city: addressDetails?.city,
              state: addressDetails?.state,
              postalCode: addressDetails?.postalCode,
              country: addressDetails?.country,
              formatted: address
            }
          : undefined,

        message,

        source: "enterprise"
      });

      submitted = true;

    } catch (e) {
      error = 'Something went wrong.';
    } finally {
      loading = false;
    }
  }
</script>
<div class="contact-root">
  <div class="pytune-card contact-card">

    {#if !submitted}

      <!-- HERO -->
      <div class="hero">
        <h1>
          Enterprise Solutions for Manufacturers, Importers & Distributors
        </h1>

        <p class="hero-sub">
          Advanced diagnostic, acoustic profiling and fleet-level instrument
          management tools for manufacturers, importers, distributors
          and multi-site piano organizations.
        </p>
      </div>

      <div class="collab-note">
        <p>
          Built for organizations managing multiple instruments,
          locations, teams and technical workflows.
        </p>
        <p class="collab-soft">
          Designed for operational visibility. Built for scale.
        </p>
      </div>

      <p class="foundation-note">
        We help enterprise piano organizations structure operations, reporting and technical continuity.
      </p>

      <!-- FORM -->
      <div class="form">

        <!-- CONTACT -->
        <div class="grid">
          <input
            placeholder="Your name"
            bind:value={name}
            required
          />

          <input
            type="email"
            placeholder="Email address"
            bind:value={email}
            required
          />
        </div>

        <!-- ORGANIZATION -->
        <input
          placeholder="Organization name"
          bind:value={organization}
          required
        />

        <select bind:value={orgType}>
          <option value="">Select organization type</option>
          <option value="workshop">Piano Workshop / Atelier</option>
          <option value="restoration">Restoration Specialist</option>
          <option value="retailer">Retail Store</option>
          <option value="wholesaler">Distributor / Wholesaler</option>
          <option value="manufacturer">Manufacturer</option>
          <option value="other">Other</option>
        </select>

        <!-- BUSINESS INFO -->
        <div class="grid">
          <input
            placeholder="Official website (optional)"
            bind:value={orgWebsite}
          />

          <input
            type="number"
            min="1"
            placeholder="Number of locations"
            bind:value={numberOfLocations}
          />
        </div>

        <div class="grid">
          <input
            type="number"
            min="1"
            placeholder="Approximate number of pianos managed"
            bind:value={numberOfPianos}
          />

          <input
            type="number"
            min="1"
            placeholder="Team size"
            bind:value={teamSize}
          />
        </div>

        <!-- API ACCESS -->
        <select bind:value={apiInterest}>
          <option value="">Interested in API access?</option>
          <option value="yes">Yes – integration required</option>
          <option value="maybe">Possibly in the future</option>
          <option value="no">No</option>
        </select>

        <!-- ADDRESS + PHONE -->
        <AddressAndTelInput
          bind:address={address}
          bind:phone={phone}
          showPhone={true}
          phoneRequired={false}
          bind:addressDetails={addressDetails}
          bind:isPhoneValid={isPhoneValid}
          bind:formattedPhone={formattedPhone}
        />

        <!-- MESSAGE -->
        <textarea
          placeholder="Tell us about your operations: annual instrument volume, services offered (tuning, restoration, resale), diagnostic needs, workflow automation, etc."
          bind:value={message}
        ></textarea>

        <!-- HONEYPOT -->
        <input
          type="text"
          bind:value={website}
          autocomplete="off"
          class="hidden-field"
        />

        <p class="legal-note">
          Your information will only be used to review your request.
          We never sell or share contact data.
        </p>

        <button
          class="pytune-btn-foundation"
          on:click={submit}
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Request Enterprise Access'}
        </button>

        {#if error}
          <div class="error">{error}</div>
        {/if}

      </div>

    {:else}

      <!-- SUCCESS STATE -->

      <h2 class="pytune-card-title">
        Request received ✔
      </h2>

      <p class="pytune-muted">
        Our professional solutions team will review your enterprise request
        and contact you within the next business days.
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
.foundation-note {
  text-align: center;
  font-style: italic;
  opacity: 0.7;
  margin-bottom: 2rem;
  padding-top: 1rem;
}

.collab-note {
  margin-top: 2rem;
  padding-top: 1.2rem;
  border-top: 1px solid var(--pytune-border-soft);

  font-size: 0.9rem;
  color: var(--pytune-blue);   /* 🔵 Bleu PyTune */

  max-width: 720px;
  margin-left: auto;
  margin-right: auto;

  text-align: center;
  line-height: 1.6;
  letter-spacing: 0.02em;
}

.collab-soft {
  font-size: 0.78rem;
  color: var(--pytune-text-muted);
  margin-top: 0.4rem;
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
      url('/assets/background-importer-2.webp');

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

  input, textarea, select {
    border-radius: 10px;
    padding: 0.75rem 0.9rem;
    border: 1px solid var(--pytune-border-soft);
    background: var(--pytune-bg-elevated);
    color: var(--pytune-text-primary);
    font-size: 0.9rem;
    transition: all .2s ease;
  }
  

  input:focus, textarea:focus, select:focus {
    border-color: var(--pytune-green);
    box-shadow: 0 0 8px rgba(110,231,183,.4);
    outline: none;
  }

  textarea {
    min-height: 100px;
    resize: vertical;
  }

    select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  background-color: var(--pytune-bg-elevated) !important;
  background-image: none !important;

  color: var(--pytune-text-primary) !important;

  border: 1px solid var(--pytune-border-soft);

  padding-right: 2.2rem; /* place pour flèche custom */
}

/* IMPORTANT — Safari */
select::-webkit-scrollbar {
  display: none;
}

/* Supprime complètement le style système mac */
select:focus {
  outline: none;
}

  .hidden-field {
    display: none;
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

select {
  background-image: url("data:image/svg+xml,%3Csvg fill='%239af0cf' height='20' viewBox='0 0 24 24' width='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.9rem center;
  background-size: 16px;
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
