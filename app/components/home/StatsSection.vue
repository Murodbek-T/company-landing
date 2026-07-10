<!-- components/home/StatsSection.vue -->

<script setup lang="ts">
const { t } = useI18n();

const stats = [
  {
    value: "2",
    icon: "lucide:map-pin",
    label: "stats.branches",
    detail: "stats.branchesDetail",
  },
  {
    value: "1000+",
    icon: "lucide:heart-handshake",
    label: "stats.customers",
    detail: "stats.customersDetail",
  },
  {
    value: "1M+",
    icon: "lucide:files",
    label: "stats.documents",
    detail: "stats.documentsDetail",
  },
];
</script>

<template>
  <section
    class="relative overflow-hidden bg-[#0d0d0d] px-5 py-20 text-white md:px-8 md:py-28 lg:px-14"
  >
    <div
      class="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#f4d66f]/10 blur-[120px]"
    />

    <div class="relative mx-auto max-w-7xl">
      <UiSectionHeading
        :eyebrow="t('stats.label')"
        :title="t('stats.titleLineOne')"
        :description="t('stats.description')"
      />

      <h3
        class="mt-1 text-[clamp(2.4rem,5vw,5.5rem)] font-semibold leading-[0.94] tracking-[-0.075em] text-white/50"
      >
        {{ t("stats.titleLineTwo") }}
      </h3>

      <div class="stats-grid mt-12 grid gap-4 md:grid-cols-3">
        <article
          v-for="(stat, index) in stats"
          :key="stat.label"
          class="stat-card group relative overflow-hidden rounded-3xl border border-white/10 bg-white/4.5 p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-[#f4d66f]/40"
        >
          <div
            class="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#f4d66f]/0 blur-[60px] transition duration-500 group-hover:bg-[#f4d66f]/15"
          />

          <div class="relative flex items-start justify-between">
            <span
              class="grid h-10 w-10 place-items-center rounded-xl border border-[#f4d66f]/25 bg-[#f4d66f]/10 text-[#f4d66f]"
            >
              <Icon :name="stat.icon" size="18" />
            </span>
            <span class="font-mono text-[10px] tracking-[0.15em] text-white/30"
              >0{{ index + 1 }}</span
            >
          </div>

          <strong
            class="relative mt-12 block text-6xl font-semibold tracking-[-0.09em] text-[#f4d66f]"
          >
            {{ stat.value }}
          </strong>

          <h3 class="relative mt-4 text-base font-semibold">
            {{ t(stat.label) }}
          </h3>
          <p class="relative mt-2 text-xs leading-relaxed text-white/50">
            {{ t(stat.detail) }}
          </p>
        </article>
      </div>

      <div class="mt-8 flex items-center justify-center gap-3 text-center">
        <Icon name="lucide:sparkles" size="14" class="text-[#f4d66f]" />
        <p class="text-xs text-white/45">{{ t("stats.bottomNote") }}</p>
      </div>
    </div>
  </section>
</template>
