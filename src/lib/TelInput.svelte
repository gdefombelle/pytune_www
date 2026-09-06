<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { lang } from '$lib/i18n/langStore';
  import { get } from "svelte/store";

  // --- PROPS ---
  export let countryFromAddress: string = '';
  export let required: boolean = false;
  export let value: string = '';
  
  export let onPhoneDetails: ((details: any) => void) | undefined = undefined;

  const currentLang = get(lang) || 'en';

  let inputElement: HTMLInputElement;
  let iti: any;
  const CDN_VERSION = "25.2.1";

  // Chargement script principal uniquement
  const loadScript = () => {
    return new Promise((resolve, reject) => {
      if ((window as any).intlTelInput) return resolve(true);
      const script = document.createElement("script");
      script.src = `https://cdn.jsdelivr.net/npm/intl-tel-input@${CDN_VERSION}/build/js/intlTelInput.min.js`;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  };

  const initializeTelInput = async () => {
    try {
      await loadScript();
      
      const intlTelInput = (window as any).intlTelInput;
      if (!intlTelInput) return;

      iti = intlTelInput(inputElement, {
        initialCountry: "auto",
        separateDialCode: true,
        strictMode: false,
        // On pointe vers le fichier local /static/utils.js (si présent), sinon fallback manuel
        utilsScript: "/utils.js", 
        geoIpLookup: (callback: any) => {
             fetch("https://ipapi.co/json")
            .then((res) => res.json())
            .then((data) => callback(data.country_code))
            .catch(() => callback(currentLang));
        }
      });

      if (value) iti.setNumber(value);

      const handleChange = () => {
        if(!iti) return;

        // 1. Récupération des données pays (ex: 33 pour France)
        const countryData = iti.getSelectedCountryData();
        const dialCode = countryData.dialCode;

        // 2. Nettoyage manuel de l'input (on ne garde que les chiffres)
        let rawInput = inputElement.value;
        let digitsOnly = rawInput.replace(/\D/g, ''); // Enlève espaces, +, -, etc.

        // 3. GESTION DU ZERO INITIAL (Le point crucial)
        // Si ça commence par 0, on l'enlève (ex: 0782... devient 782...)
        if (digitsOnly.startsWith('0')) {
            digitsOnly = digitsOnly.substring(1);
        }

        // 4. CONSTRUCTION DU FORMAT (+33 782...)
        // On ajoute un espace après le +33 comme demandé
        let formattedNumber = `+${dialCode} ${digitsOnly}`;

        // Mise à jour de la variable liée
        if (value !== formattedNumber) {
            value = formattedNumber;
        }

        // 5. Validation "maison" (Pragmatique : > 5 chiffres après le code pays)
        const isValid = !!digitsOnly && digitsOnly.length > 5;

        // Remontée au parent
        if (onPhoneDetails) {
          onPhoneDetails({
            formattedValue: formattedNumber, // Résultat: "+33 782388725"
            country: countryData,
            isValid: isValid, 
          });
        }
      };

      inputElement.addEventListener("blur", handleChange);         
      inputElement.addEventListener("countrychange", handleChange); 
      inputElement.addEventListener("input", handleChange);         

    } catch (error) {
      console.error("Error loading scripts:", error);
    }
  };

  // Synchro Adresse -> Pays
  $: if (iti && countryFromAddress) {
    if (countryFromAddress.length === 2) {
       iti.setCountry(countryFromAddress.toLowerCase());
    }
  }

  // Synchro Parent -> Input
  $: if (iti && value !== iti.getNumber()) {
    if (document.activeElement !== inputElement) {
        iti.setNumber(value);
    }
  }

  onMount(() => {
    initializeTelInput();
  });

  onDestroy(() => {
    if (iti) iti.destroy();
  });
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/intl-tel-input@25.2.1/build/css/intlTelInput.css">
</svelte:head>

<div class="tel-input-wrapper" style="
  --iti-path-flags-1x: url('https://cdn.jsdelivr.net/npm/intl-tel-input@25.2.1/build/img/flags.png');
  --iti-path-flags-2x: url('https://cdn.jsdelivr.net/npm/intl-tel-input@25.2.1/build/img/flags@2x.png');
  --iti-path-globe-1x: url('https://cdn.jsdelivr.net/npm/intl-tel-input@25.2.1/build/img/globe.png');
  --iti-path-globe-2x: url('https://cdn.jsdelivr.net/npm/intl-tel-input@25.2.1/build/img/globe@2x.png');
">
  <input
    bind:this={inputElement}
    type="tel"
    placeholder="Numéro de téléphone"
    {required}
  />
</div>

<style>
  .tel-input-wrapper { width: 100%; }
  :global(.iti) { width: 100%; display: block; }
  :global(.iti__tel-input) {
    width: 100%;
    height: 52px;
    padding-left: 95px !important; 
    padding-right: 15px;
    background: #121212 !important;
    border: 1px solid #444 !important;
    border-radius: 8px !important;
    font-size: 1rem !important;
    color: #eee !important;
  }
  :global(.iti__selected-dial-code) { color: #a1a1aa !important; }
  :global(.iti__country-list) {
    background-color: #1a1f24 !important;
    border: 1px solid #334155 !important;
    color: white !important;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5) !important;
    z-index: 9999 !important;
  }
  :global(.iti__country-name), :global(.iti__dial-code) { color: #e2e8f0 !important; }
  :global(.iti__country:hover), :global(.iti__country.iti__highlight) { background-color: #2d343b !important; }
  :global(.iti__divider) { border-bottom-color: #444 !important; }
  :global(.iti__search-input) {
    background-color: #11181c !important;
    border: 1px solid #334155 !important;
    color: white !important;
    outline: none !important;
  }
  :global(.iti__search-input::placeholder) { color: #64748b !important; }
</style>