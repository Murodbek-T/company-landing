<!-- pages/index.vue -->

<script setup lang="ts">
useHead({
  title: "AB Translation Center — Document Translation in Karshi",
});
</script>

<template>
  <main class="min-h-screen overflow-hidden bg-[#090909] text-white">
    <LayoutAppNavbar />

    <HomeHeroSection />
    <HomeStatsSection />

    <section
      class="bg-[#f3f0e9] px-5 py-20 text-black md:px-8 md:py-28 lg:px-14"
    >
      <div
        class="mx-auto grid max-w-7xl gap-10 rounded-3xl border border-black/10 bg-white/55 p-6 backdrop-blur-xl md:grid-cols-[1fr_auto] md:items-end md:p-10"
      >
        <div>
          <p
            class="font-mono text-[10px] uppercase tracking-[0.16em] text-[#aa8620]"
          >
            {{ $t("home.aboutPreviewLabel") }}
          </p>

          <h2
            class="mt-4 max-w-3xl text-[clamp(2.5rem,5vw,5.5rem)] font-semibold leading-[.95] tracking-[-0.07em]"
          >
            {{ $t("home.aboutPreviewTitle") }}
          </h2>

          <p class="mt-6 max-w-xl text-sm leading-relaxed text-black/60">
            {{ $t("home.aboutPreviewDescription") }}
          </p>
        </div>

        <NuxtLink
          to="/about"
          class="inline-flex items-center gap-2 rounded-lg bg-black px-4 py-2.5 text-xs font-semibold text-[#f4d66f] transition hover:-translate-y-0.5"
        >
          {{ $t("home.learnMore") }}
          <Icon name="lucide:arrow-up-right" size="15" />
        </NuxtLink>
      </div>
    </section>

    <section class="bg-[#090909] px-5 py-20 md:px-8 md:py-28 lg:px-14">
      <div
        class="mx-auto flex max-w-7xl flex-col justify-between gap-7 md:flex-row md:items-end"
      >
        <div>
          <p
            class="font-mono text-[10px] uppercase tracking-[0.16em] text-[#f4d66f]"
          >
            {{ $t("home.worksPreviewLabel") }}
          </p>

          <h2
            class="mt-4 text-[clamp(2.5rem,5vw,5.5rem)] font-semibold leading-[.95] tracking-[-0.07em]"
          >
            {{ $t("home.worksPreviewTitle") }}
          </h2>
        </div>

        <NuxtLink
          to="/works"
          class="inline-flex items-center gap-2 text-xs font-semibold text-[#f4d66f]"
        >
          {{ $t("home.viewAllWorks") }}
          <Icon name="lucide:arrow-right" size="15" />
        </NuxtLink>
      </div>
    </section>

    <LayoutAppFooter />
  </main>
</template>
