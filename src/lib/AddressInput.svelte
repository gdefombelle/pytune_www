<script lang="ts">
 
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  export let placeholder = 'Enter full address';
  export let value: string = '';
  export let required: boolean = false;

  export let onChange: (data: {
    address: string;
    country: string;
    countryCode: string;
    details: any;
  }) => void;

  let inputElement: HTMLInputElement;
  let autocomplete: any;

  // Assurez-vous que cette variable est bien définie dans votre .env
  const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_KEY;

  function initAutocomplete() {
    if (!(window as any).google) return;

    const maps = (window as any).google as any;
    autocomplete = new maps.maps.places.Autocomplete(inputElement, {
      types: ['geocode']
    });

    // --- CORRECTION DE SYNTAXE ICI ---
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (!place.formatted_address) return;

      value = place.formatted_address;
      
      // Sécurisation : on vérifie que address_components existe
      const components = place.address_components || [];
      const countryComponent = components.find((c: any) => c.types.includes('country'));

      const details = {
        street: components.find((c: any) => c.types.includes('route'))?.long_name,
        city: components.find((c: any) => c.types.includes('locality'))?.long_name,
        state: components.find((c: any) => c.types.includes('administrative_area_level_1'))?.long_name,
        postalCode: components.find((c: any) => c.types.includes('postal_code'))?.long_name,
        country: countryComponent?.long_name,
        countryCode: countryComponent?.short_name, // Ex: "FR"
        lat: place.geometry?.location?.lat?.(),
        lng: place.geometry?.location?.lng?.()
      };

      if (onChange) {
        onChange({
          address: value,
          country: details.country || '',
          countryCode: details.countryCode || '', 
          details
        });
      }
    }); // <--- C'est cette parenthèse qui manquait probablement
  }

  function loadScript(): Promise<void> {
    return new Promise((resolve) => {
      if ((window as any).google) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places`;
      script.async = true;
      script.onload = () => resolve();
      document.head.appendChild(script);
    });
  }

  onMount(async () => {
    if (!browser) return;
    await loadScript();
    initAutocomplete();
  });
</script>

<input
  bind:this={inputElement}
  bind:value
  placeholder={placeholder}
  class="pytune-input"
  {required}
/>

<style>
  .pytune-input {
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 10px;
    background: var(--pytune-bg-elevated);
    border: 1px solid var(--pytune-border-soft);
    color: var(--pytune-text-primary);
    font-size: 0.9rem;
    transition: all .2s ease;
  }

  .pytune-input:focus {
    border-color: var(--pytune-green);
    box-shadow: 0 0 8px rgba(110,231,183,.4);
    outline: none;
  }
</style>
