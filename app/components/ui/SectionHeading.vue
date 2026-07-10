<!-- components/ui/SectionHeading.vue -->

<script setup lang="ts">
defineProps<{
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
}>();
</script>

<template>
  <div :class="light ? 'text-black' : 'text-white'">
    <p
      v-if="eyebrow"
      class="font-mono text-[10px] uppercase tracking-[0.16em]"
      :class="light ? 'text-[#aa8620]' : 'text-[#f4d66f]'"
    >
      {{ eyebrow }}
    </p>

    <h2
      class="mt-4 text-[clamp(2.4rem,5vw,5.5rem)] font-semibold leading-[0.94] tracking-[-0.075em]"
    >
      {{ title }}
    </h2>

    <p
      v-if="description"
      class="mt-5 max-w-2xl text-sm leading-relaxed"
      :class="light ? 'text-black/60' : 'text-white/55'"
    >
      {{ description }}
    </p>
  </div>
</template>
