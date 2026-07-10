<!-- components/layout/AppFooter.vue -->

<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <footer
    id="contacts"
    class="border-t border-white/10 bg-[#090909] px-5 py-10 md:px-8 lg:px-14"
  >
    <div
      class="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end"
    >
      <div>
        <div class="flex items-center font-semibold">
          <img src="../../assets/images/logo.png" alt="footer-logo" width="100">
          <h1>AB Translation Center</h1>
        </div>

        <p class="mt-4 max-w-sm text-xs leading-relaxed text-white/45">
          {{ t("footer.description") }}
        </p>
      </div>

      <div class="text-left md:text-right">
        <p class="text-sm font-medium text-white/80">
          {{ t("footer.contact") }}
        </p>
        <a
          href="tel:+998916320028"
          class="mt-2 block text-sm text-[#f4d66f] transition hover:text-white"
        >
          +998 91 632 00 28
        </a>
        <p
          class="mt-5 font-mono text-[10px] uppercase tracking-[0.12em] text-white/35"
        >
          © 2025 — 2026 AB Translation Center
        </p>
      </div>
    </div>
  </footer>
</template>
