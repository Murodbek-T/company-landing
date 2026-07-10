<!-- components/layout/AppNavbar.vue -->

<script setup lang="ts">
const { t, locale, setLocale } = useI18n();

const isScrolled = ref(false);
const isMenuOpen = ref(false);

const links = computed(() => [
  { label: t("nav.home"), to: "/" },
  { label: t("nav.works"), to: "/works" },
  { label: t("nav.about"), to: "/about" },
  { label: t("nav.order"), to: "/order" },
]);

const onScroll = () => {
  isScrolled.value = window.scrollY > 24;
};

const switchLocale = async (value: "en" | "ru" | "uz") => {
  await setLocale(value);
  isMenuOpen.value = false;
};

onMounted(() => window.addEventListener("scroll", onScroll, { passive: true }));
onBeforeUnmount(() => window.removeEventListener("scroll", onScroll));
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8 lg:px-14">
    <nav
      class="mx-auto flex min-h-16 max-w-7xl items-center justify-between rounded-2xl border px-3 pl-4 transition-all duration-300 md:px-4 md:pl-5"
      :class="
        isScrolled
          ? 'border-white/10 bg-black/60 shadow-2xl shadow-black/30 backdrop-blur-2xl'
          : 'border-transparent bg-transparent'
      "
    >
      <NuxtLink to="/" class="flex items-center font-semibold">
        <img src="../../assets/images/logo.png" alt="logo" width="100">
        <h1>AB Translation Center</h1>
      </NuxtLink>

      <div class="hidden items-center gap-7 lg:flex">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="text-xs font-medium text-white/60 transition hover:text-[#f4d66f]"
          active-class="text-[#f4d66f]"
        >
          {{ link.label }}
        </NuxtLink>
      </div>

      <div class="flex items-center gap-2">
        <div class="hidden rounded-lg bg-white/10 p-1 sm:flex">
          <button
            v-for="language in ['en', 'ru', 'uz']"
            :key="language"
            class="rounded-md px-2 py-1 font-mono text-[10px] uppercase transition"
            :class="
              locale === language
                ? 'bg-[#f4d66f] text-black'
                : 'text-white/55 hover:text-white'
            "
            @click="switchLocale(language as 'en' | 'ru' | 'uz')"
          >
            {{ language }}
          </button>
        </div>

        <NuxtLink
          to="/order"
          class="hidden items-center gap-2 rounded-lg border border-[#f4d66f]/50 bg-[#f4d66f]/10 px-3 py-2 text-xs font-semibold text-[#f4d66f] transition hover:bg-[#f4d66f] hover:text-black sm:inline-flex"
        >
          {{ t("nav.order") }}
          <Icon name="lucide:arrow-up-right" size="14" />
        </NuxtLink>

        <button
          class="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-white lg:hidden"
          @click="isMenuOpen = !isMenuOpen"
        >
          <Icon :name="isMenuOpen ? 'lucide:x' : 'lucide:menu'" size="18" />
        </button>
      </div>
    </nav>

    <div
      v-if="isMenuOpen"
      class="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 bg-black/80 p-4 backdrop-blur-2xl lg:hidden"
    >
      <NuxtLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="block rounded-lg px-3 py-3 text-sm text-white/75 transition hover:bg-white/10 hover:text-[#f4d66f]"
        @click="isMenuOpen = false"
      >
        {{ link.label }}
      </NuxtLink>

      <div class="mt-4 flex rounded-lg bg-white/10 p-1 sm:hidden">
        <button
          v-for="language in ['en', 'ru', 'uz']"
          :key="language"
          class="flex-1 rounded-md py-2 font-mono text-xs uppercase"
          :class="
            locale === language ? 'bg-[#f4d66f] text-black' : 'text-white/55'
          "
          @click="switchLocale(language as 'en' | 'ru' | 'uz')"
        >
          {{ language }}
        </button>
      </div>
    </div>
  </header>
</template>
