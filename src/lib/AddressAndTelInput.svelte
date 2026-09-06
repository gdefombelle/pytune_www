<script lang="ts">
  import AddressInput from '$lib/AddressInput.svelte';
  import TelInput from '$lib/TelInput.svelte';

  // --- PROPS ENTRANTES ---
  export let address: string = "";
  export let phone: string = "";
  
  // Options d'affichage
  export let showPhone: boolean = true;      
  export let phoneRequired: boolean = false; 
  
  export let addressPlaceholder: string = "Enter full address";

  // --- PROPS SORTANTES (Bind) ---
  export let addressDetails: any = {};
  export let isPhoneValid: boolean = true; 
  export let formattedPhone: string = "";

  // Variable pont interne
  let selectedCountryCode = ""; 

  // Gestion de l'adresse
  function handleAddressChange(data: any) {
    address = data.address;
    addressDetails = data.details;
    
    // On met à jour le code pays pour le téléphone
    if (data.countryCode) {
      selectedCountryCode = data.countryCode;
    }
  }

  // Gestion du téléphone
  function handlePhoneDetails(details: any) {
    isPhoneValid = details.isValid;
    formattedPhone = details.formattedValue;
  }
</script>

<div class="combined-input-group">
  
  <div class="address-container">
    <AddressInput
      bind:value={address}
      placeholder={addressPlaceholder}
      onChange={handleAddressChange}
    />
  </div>

  {#if showPhone}
    <div class="tel-container">
      <TelInput
        bind:value={phone}
        countryFromAddress={selectedCountryCode}
        required={phoneRequired}
        onPhoneDetails={handlePhoneDetails}
      />
      
      {#if phone && !isPhoneValid}
        <div class="validation-error">
          Invalid number for this country
        </div>
      {/if}
    </div>
  {/if}

</div>

<style>
  .combined-input-group {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    position: relative;
  }

  /* C'est ici qu'on règle le bug d'affichage de la capture */
  .address-container {
    position: relative;
    z-index: 20; /* Priorité haute pour le menu déroulant */
  }

  .tel-container {
    position: relative;
    z-index: 10; /* Priorité basse */
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .validation-error {
    color: #ff7777;
    font-size: 0.8rem;
    margin-left: 0.5rem;
  }

  /* --- BONUS : DARK MODE POUR GOOGLE MAPS --- */
  /* Ce style force le menu Google (qui est blanc par défaut) à être sombre */
  :global(.pac-container) {
    background-color: #1a1f24 !important;
    border: 1px solid #334155 !important;
    font-family: inherit !important;
    border-radius: 0 0 8px 8px !important;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5) !important;
    margin-top: 5px !important;
  }

  :global(.pac-item) {
    border-top: 1px solid #334155 !important;
    color: #cbd5e1 !important;
    cursor: pointer;
    padding: 10px !important;
  }

  :global(.pac-item:hover) {
    background-color: #2d343b !important;
  }

  :global(.pac-item-query) {
    color: white !important;
  }
</style>