<script lang="ts">
  import { t } from '$lib/i18n/langStore';

  // 👇 permet d’avoir 2 types de footer
  export let compact: boolean = false;
</script>

<footer class="footer-cta" class:compact>
  {#if !compact}
    <p>💛 {$t('footer.support_message')}</p>
    <a href="https://buymeacoffee.com/pytune" class="btn donate">
      {$t('footer.donate_button')}
    </a>
  {/if}

  <!-- 🔗 liens importants -->
  <div class="links">
    <a href="/about">About</a>
    <a href="/legal">Legal</a>
    <a href="/privacy">Privacy</a>
    <a href="/terms">Terms</a>
    <a href="/for/investors">{$t('footer.investors_link')}</a>
  </div>

  <!-- 🔗 segments professionnels secondaires -->
  <div class="links-section">
    <p class="links-title">{$t('footer.professionals.title')}</p>
    <div class="links">
      <a href="/for/schools">{$t('footer.professionals.schools')}</a>
      <a href="/for/manufacturers">{$t('footer.professionals.manufacturers')}</a>
      <a href="/for/restorer-sellers">{$t('footer.professionals.restorers')}</a>
    </div>
  </div>

  <p class="copyright">
    &copy; 2025 PyTune. {$t('footer.rights')}
  </p>
</footer>

<style>
  .footer-cta {
    background: #222;
    padding: 1.5rem 1rem 1rem;
    text-align: center;
    color: #eee;
  }

  /* 👇 version compacte */
  .footer-cta.compact {
    padding: 0.6rem 1rem;
  }

  .footer-cta p {
    margin: 0.3rem 0;
    font-size: 1rem;
  }

  .btn.donate {
    display: inline-block;
    background-color: gold;
    color: black;
    padding: 0.6rem 1.1rem;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 6px;
    text-decoration: none;
    margin: 0.8rem 0;
    transition: background-color 0.3s;
  }

  .btn.donate:hover {
    background-color: #e6c200;
  }

  /* 👇 liens */
  .links {
    margin-top: 0.6rem;
    display: flex;
    justify-content: center;
    gap: 1.2rem;
    flex-wrap: wrap;
    font-size: 0.9rem;
  }

  .links a {
    color: #bbb;
    text-decoration: none;
  }

  .links a:hover {
    color: #fff;
  }

  /* 👇 section segments professionnels */
  .links-section {
    margin-top: 0.8rem;
  }

  .links-title {
    margin: 0 0 0.3rem;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #888;
  }

  .copyright {
    margin-top: 0.4rem;
    font-size: 0.8rem;
    color: #888;
  }
</style>