<!-- components/ui/PageHero.vue -->

<script setup lang="ts">
defineProps<{
  eyebrow: string;
  title: string;
  accentTitle?: string;
  description?: string;
  light?: boolean;
}>();
</script>

<template>
  <section
    class="relative overflow-hidden px-5 pb-20 pt-36 md:px-8 md:pb-24 md:pt-44 lg:px-14"
    :class="light ? 'bg-[#f3f0e9] text-black' : 'bg-[#090909] text-white'"
  >
    <div
      class="absolute -right-40 top-12 h-112 w-md rounded-full blur-[140px]"
      :class="light ? 'bg-[#d4af37]/20' : 'bg-[#f4d66f]/10'"
    />

    <div class="relative mx-auto max-w-7xl">
      <p
        class="font-mono text-[10px] uppercase tracking-[0.16em]"
        :class="light ? 'text-[#aa8620]' : 'text-[#f4d66f]'"
      >
        {{ eyebrow }}
      </p>

      <div class="mt-5 grid gap-8 md:grid-cols-[1fr_.55fr] md:items-end">
        <h1
          class="text-[clamp(3.2rem,7vw,7.5rem)] font-semibold leading-[0.9] tracking-[-0.08em]"
        >
          {{ title }}<br v-if="accentTitle" />
          <span
            v-if="accentTitle"
            :class="light ? 'text-[#aa8620]' : 'text-[#f4d66f]'"
          >
            {{ accentTitle }}
          </span>
        </h1>

        <p
          v-if="description"
          class="max-w-md text-sm leading-relaxed"
          :class="light ? 'text-black/60' : 'text-white/55'"
        >
          {{ description }}
        </p>
      </div>
    </div>
  </section>
</template>
