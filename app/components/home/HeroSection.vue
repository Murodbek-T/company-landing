<!-- components/home/HeroSection.vue -->

<script setup lang="ts">
import { gsap } from "gsap";

const { t } = useI18n();

const slides = [
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2200&q=90",
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2200&q=90",
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2200&q=90",
];

const activeSlide = ref(0);
let interval: ReturnType<typeof setInterval> | undefined;

const nextSlide = () => {
  activeSlide.value = (activeSlide.value + 1) % slides.length;
};

onMounted(() => {
  interval = setInterval(nextSlide, 6000);

  gsap.from(".hero-reveal", {
    opacity: 0,
    y: 35,
    duration: 1.1,
    stagger: 0.12,
    ease: "power3.out",
  });

  gsap.to(".hero-orb", {
    y: -28,
    x: 18,
    duration: 5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
});

onBeforeUnmount(() => {
  if (interval) clearInterval(interval);
});
</script>

<template>
  <section
    class="relative flex min-h-screen items-end overflow-hidden bg-black px-5 pb-10 pt-32 text-white md:px-8 md:pb-14 lg:px-14"
  >
    <div class="absolute inset-0">
      <TransitionGroup name="hero-fade">
        <img
          v-for="(slide, index) in slides"
          v-show="index === activeSlide"
          :key="slide"
          :src="slide"
          alt=""
          class="absolute inset-0 h-full w-full object-cover grayscale"
        />
      </TransitionGroup>

      <div class="absolute inset-0 bg-black/65" />
      <div
        class="absolute inset-0 bg-linear-to-t from-black via-black/45 to-black/20"
      />
    </div>

    <div
      class="hero-orb absolute right-[10%] top-[22%] h-64 w-64 rounded-full bg-[#f4d66f]/10 blur-[100px]"
    />

    <div class="relative mx-auto w-full max-w-7xl">
      <div class="max-w-4xl">
        <p
          class="hero-reveal font-mono text-[10px] uppercase tracking-[0.18em] text-[#f4d66f]"
        >
          {{ t("home.label") }}
        </p>

        <h1
          class="hero-reveal mt-5 text-[clamp(3.4rem,8vw,8.5rem)] font-semibold leading-[0.88] tracking-[-0.09em]"
        >
          {{ t("home.titleLineOne") }}<br />
          <span class="text-white/65">{{ t("home.titleLineTwo") }}</span>
        </h1>

        <p
          class="hero-reveal mt-7 max-w-xl text-sm leading-relaxed text-white/65 md:text-base"
        >
          {{ t("home.description") }}
        </p>

        <div class="hero-reveal mt-8 flex flex-wrap gap-3">
          <NuxtLink
            to="/order"
            class="inline-flex items-center gap-2 rounded-lg bg-[#f4d66f] px-4 py-2.5 text-xs font-bold text-black transition hover:-translate-y-0.5 hover:bg-[#ffe68e]"
          >
            {{ t("home.primaryAction") }}
            <Icon name="lucide:arrow-up-right" size="15" />
          </NuxtLink>

          <NuxtLink
            to="/works"
            class="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-xs font-semibold text-white backdrop-blur-xl transition hover:bg-white/15"
          >
            {{ t("home.secondaryAction") }}
            <Icon name="lucide:arrow-right" size="15" />
          </NuxtLink>
        </div>
      </div>

      <div
        class="hero-reveal mt-14 flex items-center justify-between border-t border-white/15 pt-5"
      >
        <div class="flex gap-2">
          <button
            v-for="(_, index) in slides"
            :key="index"
            class="h-1 rounded-full transition-all duration-300"
            :class="
              activeSlide === index ? 'w-8 bg-[#f4d66f]' : 'w-3 bg-white/35'
            "
            :aria-label="`Show slide ${index + 1}`"
            @click="activeSlide = index"
          />
        </div>

        <p class="font-mono text-[10px] text-white/45">
          0{{ activeSlide + 1 }} / 0{{ slides.length }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-fade-enter-active,
.hero-fade-leave-active {
  transition: opacity 1.2s ease;
}

.hero-fade-enter-from,
.hero-fade-leave-to {
  opacity: 0;
}
</style>
