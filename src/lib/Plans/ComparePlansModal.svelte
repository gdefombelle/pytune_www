<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { t } from '$lib/i18n/langStore';
  const dispatch = createEventDispatcher();
</script>

<style>
  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
  }

  .modal {
    background: #111;
    color: white;
    border-radius: 1rem;
    max-width: 900px;
    width: 95%;
    padding: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 0 0 25px rgba(51, 204, 102, 0.3);
  }

  h2 {
    color: #33cc66;
    text-align: center;
    margin-bottom: 1rem;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
    font-size: 0.9rem;
  }

  th,
  td {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 0.6rem 0.8rem;
    text-align: center;
  }

  th {
    color: #ffd700;
    font-weight: 600;
  }

  .close-btn {
    display: block;
    margin: 1.5rem auto 0;
    background: #33cc66;
    color: black;
    border: none;
    padding: 0.6rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
  }

  .close-btn:hover {
    background: #29a856;
  }
</style>

<div class="overlay">
  <div class="modal">
    <h2>{$t('plans.compare.cta')}</h2>

    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>Indy Solo</th>
          <th>Indy Multi</th>
          <th>Pro</th>
          <th>Pro++</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Pianos included</td>
          <td>1</td>
          <td>3</td>
          <td>Unlimited</td>
          <td>Unlimited</td>
        </tr>
        <tr>
          <td>AI Diagnostics</td>
          <td>✅</td>
          <td>✅</td>
          <td>✅</td>
          <td>✅</td>
        </tr>
        <tr>
          <td>PDF Reports</td>
          <td>❌</td>
          <td>✅</td>
          <td>✅</td>
          <td>✅</td>
        </tr>
        <tr>
          <td>Pro Dashboard</td>
          <td>❌</td>
          <td>❌</td>
          <td>✅</td>
          <td>✅</td>
        </tr>
        <tr>
          <td>White Label / API</td>
          <td>❌</td>
          <td>❌</td>
          <td>❌</td>
          <td>✅</td>
        </tr>
      </tbody>
    </table>

    <button class="close-btn" on:click={() => dispatch('close')}>Close</button>
  </div>
</div>
