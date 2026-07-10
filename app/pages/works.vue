<!-- pages/works.vue -->

<script setup lang="ts">
const { t } = useI18n();

const selectedWork = ref<number | null>(null);

const works = computed(() => [
  {
    type: t("works.passport.title"),
    description: t("works.passport.description"),
    price: t("works.passport.price"),
    features: [
      t("works.features.notary"),
      t("works.features.formatting"),
      t("works.features.fast"),
    ],
    icon: "lucide:contact",
    images: [
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    type: t("works.diploma.title"),
    description: t("works.diploma.description"),
    price: t("works.diploma.price"),
    features: [
      t("works.features.notary"),
      t("works.features.academic"),
      t("works.features.formatting"),
    ],
    icon: "lucide:graduation-cap",
    images: [
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    type: t("works.marriageCertificate.title"),
    description: t("works.marriageCertificate.description"),
    price: t("works.marriageCertificate.price"),
    features: [
      t("works.features.notary"),
      t("works.features.official"),
      t("works.features.fast"),
    ],
    icon: "lucide:gem",
    images: [
      "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    type: t("works.birthCertificate.title"),
    description: t("works.birthCertificate.description"),
    price: t("works.birthCertificate.price"),
    features: [
      t("works.features.notary"),
      t("works.features.official"),
      t("works.features.fast"),
    ],
    icon: "lucide:badge-check",
    images: [
      "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    type: t("works.schoolCertificate.title"),
    description: t("works.schoolCertificate.description"),
    price: t("works.schoolCertificate.price"),
    features: [
      t("works.features.notary"),
      t("works.features.official"),
      t("works.features.fast"),
    ],
    icon: "lucide:book-open",
    images: [
      "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    type: t("works.drivingLicense.title"),
    description: t("works.drivingLicense.description"),
    price: t("works.drivingLicense.price"),
    features: [
      t("works.features.notary"),
      t("works.features.official"),
      t("works.features.fast"),
    ],
    icon: "lucide:car",
    images: [
      "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    type: t("works.medicalCertificate.title"),
    description: t("works.medicalCertificate.description"),
    price: t("works.medicalCertificate.price"),
    features: [
      t("works.features.notary"),
      t("works.features.official"),
      t("works.features.fast"),
    ],
    icon: "lucide:tablets",
    images: [
      "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    type: t("works.powerOfAttorney.title"),
    description: t("works.powerOfAttorney.description"),
    price: t("works.powerOfAttorney.price"),
    features: [
      t("works.features.notary"),
      t("works.features.official"),
      t("works.features.fast"),
    ],
    icon: "lucide:landmark",
    images: [
      "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85",
    ],
  },
]);

const activeWork = computed(() => {
  if (selectedWork.value === null) return null;
  return works.value[selectedWork.value] ?? null;
});

useHead({
  title: "Services & Prices — AB Translation Center",
});
</script>

<template>
  <main class="min-h-screen bg-[#090909] text-white">
    <LayoutAppNavbar />

    <section
      class="relative overflow-hidden px-5 pb-20 pt-36 md:px-8 md:pt-44 lg:px-14"
    >
      <div
        class="absolute right-0 top-20 h-96 w-96 rounded-full bg-[#f4d66f]/10 blur-[140px]"
      />

      <div class="relative mx-auto max-w-7xl">
        <p
          class="font-mono text-[10px] uppercase tracking-[0.16em] text-[#f4d66f]"
        >
          {{ t("works.pageLabel") }}
        </p>

        <div class="mt-5 grid gap-8 md:grid-cols-[1fr_.55fr] md:items-end">
          <h1
            class="text-[clamp(3.2rem,7vw,7.5rem)] font-semibold leading-[.9] tracking-[-0.08em]"
          >
            {{ t("works.pageTitleLineOne") }}<br />
            <span class="text-[#f4d66f]">{{
              t("works.pageTitleLineTwo")
            }}</span>
          </h1>

          <p class="max-w-md text-sm leading-relaxed text-white/55">
            {{ t("works.pageDescription") }}
          </p>
        </div>

        <div class="mt-16 grid gap-4 lg:grid-cols-3">
          <article
            v-for="(work, index) in works"
            :key="work.type"
            class="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/4.5 p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-[#f4d66f]/40"
          >
            <div
              class="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#f4d66f]/0 blur-[70px] transition group-hover:bg-[#f4d66f]/15"
            />

            <div class="relative">
              <div class="flex items-start justify-between">
                <span
                  class="grid h-11 w-11 place-items-center rounded-xl border border-[#f4d66f]/25 bg-[#f4d66f]/10 text-[#f4d66f]"
                >
                  <Icon :name="work.icon" size="20" />
                </span>

                <span class="font-mono text-[10px] text-white/35"
                  >0{{ index + 1 }}</span
                >
              </div>

              <h2 class="mt-12 text-2xl font-semibold tracking-tighter">
                {{ work.type }}
              </h2>
              <p class="mt-3 min-h-16 text-sm leading-relaxed text-white/55">
                {{ work.description }}
              </p>

              <ul class="mt-7 space-y-2 border-t border-white/10 pt-5">
                <li
                  v-for="feature in work.features"
                  :key="feature"
                  class="flex items-center gap-2 text-xs text-white/60"
                >
                  <Icon name="lucide:check" size="14" class="text-[#f4d66f]" />
                  {{ feature }}
                </li>
              </ul>

              <div class="mt-8 flex items-center justify-between">
                <div>
                  <p
                    class="text-[10px] uppercase tracking-[0.12em] text-white/35"
                  >
                    {{ t("works.startingFrom") }}
                  </p>
                  <p class="mt-1 text-lg font-semibold text-[#f4d66f]">
                    {{ work.price }}
                  </p>
                </div>

                <button
                  class="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-white/5 text-white transition hover:border-[#f4d66f]/50 hover:text-[#f4d66f]"
                  @click="selectedWork = index"
                >
                  <Icon name="lucide:eye" size="17" />
                </button>
              </div>
            </div>
          </article>
          <NuxtLink
            to="/order"
            class="group relative flex min-h-90 flex-col justify-between overflow-hidden rounded-2xl border border-[#f4d66f]/30 bg-[#f4d66f]/[0.07] p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-[#f4d66f]/60 hover:bg-[#f4d66f]/12"
          >
            <div
              class="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#f4d66f]/15 blur-[70px] transition duration-500 group-hover:scale-125"
            />

            <div class="relative">
              <div
                class="grid h-10 w-10 place-items-center rounded-xl border border-[#f4d66f]/30 bg-[#f4d66f]/10 text-[#f4d66f]"
              >
                <Icon name="lucide:file-plus-2" size="18" />
              </div>

              <p
                class="mt-7 font-mono text-[10px] uppercase tracking-[0.16em] text-[#f4d66f]"
              >
                {{ t("works.other.badge") }}
              </p>

              <h3
                class="mt-3 text-2xl font-semibold tracking-[-0.06em] text-white"
              >
                {{ t("works.other.title") }}
              </h3>

              <p class="mt-3 max-w-sm text-sm leading-relaxed text-white/55">
                {{ t("works.other.description") }}
              </p>
            </div>

            <div
              class="relative mt-8 flex items-center justify-between border-t border-white/10 pt-5"
            >
              <span class="text-sm font-medium text-white/75">
                {{ t("works.other.price") }}
              </span>

              <span
                class="inline-flex items-center gap-2 text-xs font-semibold text-[#f4d66f]"
              >
                {{ t("works.other.view") }}
                <Icon
                  name="lucide:arrow-up-right"
                  size="15"
                  class="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </div>
          </NuxtLink>
        </div>

        <div
          class="mt-12 rounded-3xl border border-[#f4d66f]/20 bg-[#f4d66f]/[0.07] p-6 md:flex md:items-center md:justify-between"
        >
          <div class="flex gap-4">
            <Icon
              name="lucide:circle-help"
              size="22"
              class="shrink-0 text-[#f4d66f]"
            />
            <div>
              <h3 class="text-sm font-semibold">{{ t("works.noteTitle") }}</h3>
              <p class="mt-2 max-w-2xl text-xs leading-relaxed text-white/55">
                {{ t("works.noteText") }}
              </p>
            </div>
          </div>

          <NuxtLink
            to="/order"
            class="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#f4d66f] px-4 py-2.5 text-xs font-bold text-black transition hover:bg-[#ffe68e] md:mt-0"
          >
            {{ t("works.orderNow") }}
            <Icon name="lucide:arrow-up-right" size="15" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <WorksWorkPreviewModal
      :is-open="activeWork !== null"
      :work="activeWork"
      @close="selectedWork = null"
    />

    <LayoutAppFooter />
  </main>
</template>
