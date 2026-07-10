<!-- components/about/AboutStory.vue -->

<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <section class="px-5 py-20 md:px-8 md:py-28 lg:px-14">
    <div class="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1.2fr_.8fr]">
      <div
        class="relative min-h-136 overflow-hidden rounded-3xl border border-white/10"
      >
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=85"
          alt="AB Translation Center"
          class="h-full w-full object-cover grayscale"
        />
        <div
          class="absolute inset-0 bg-linear-to-t from-black/90 via-black/10 to-transparent"
        />

        <div
          class="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/15 bg-black/35 p-5 backdrop-blur-xl"
        >
          <Icon name="lucide:quote" size="20" class="text-[#f4d66f]" />
          <p class="mt-3 max-w-xl text-lg leading-relaxed text-white/85">
            {{ t("about.quote") }}
          </p>
        </div>
      </div>

      <div
        class="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/4.5 p-7 backdrop-blur-xl"
      >
        <div>
          <span
            class="grid h-11 w-11 place-items-center rounded-xl border border-[#f4d66f]/25 bg-[#f4d66f]/10 text-[#f4d66f]"
          >
            <Icon name="lucide:languages" size="21" />
          </span>

          <p class="mt-10 text-lg leading-relaxed text-white/70">
            {{ t("about.pageDescription") }}
          </p>
        </div>

        <div class="mt-12 border-t border-white/10 pt-5">
          <p
            class="font-mono text-[10px] uppercase tracking-[0.14em] text-white/35"
          >
            {{ t("about.locationLabel") }}
          </p>
          <p class="mt-2 text-sm text-[#f4d66f]">Karshi, Uzbekistan</p>
        </div>
      </div>
    </div>
  </section>
</template>
