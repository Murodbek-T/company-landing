<!-- components/about/AboutTimeline.vue -->

<script setup lang="ts">
const { t } = useI18n();

const steps = [
  {
    number: "01",
    title: "about.journeyOneTitle",
    text: "about.journeyOneText",
  },
  {
    number: "02",
    title: "about.journeyTwoTitle",
    text: "about.journeyTwoText",
  },
  {
    number: "03",
    title: "about.journeyThreeTitle",
    text: "about.journeyThreeText",
  },
];
</script>

<template>
  <section class="px-5 pb-24 md:px-8 lg:px-14">
    <div
      class="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-white/4.5 p-6 text-white backdrop-blur-xl md:p-10"
    >
      <div class="grid gap-10 md:grid-cols-[0.65fr_1.35fr]">
        <p
          class="font-mono text-[10px] uppercase tracking-[0.16em] text-[#f4d66f]"
        >
          {{ t("about.journeyLabel") }}
        </p>

        <div class="space-y-8">
          <article
            v-for="(step, index) in steps"
            :key="step.number"
            class="border-l pl-5"
            :class="index === 0 ? 'border-[#f4d66f]/60' : 'border-white/15'"
          >
            <span
              class="font-mono text-xs"
              :class="index === 0 ? 'text-[#f4d66f]' : 'text-white/40'"
            >
              {{ step.number }}
            </span>

            <h3 class="mt-2 text-lg font-semibold">{{ t(step.title) }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-white/55">
              {{ t(step.text) }}
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
