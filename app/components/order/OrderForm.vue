<!-- components/order/OrderForm.vue -->

<script setup lang="ts">
const { t } = useI18n();

const form = reactive({
  fullName: "",
  phone: "",
  documentType: "",
  fromLanguage: "",
  toLanguage: "",
  message: "",
});

const isSubmitted = ref(false);

const documentTypes = computed(() => [
  t("form.documentTypes.passport"),
  t("form.documentTypes.diploma"),
  t("form.documentTypes.certificate"),
  t("form.documentTypes.other"),
]);

const languages = [
  "Uzbek",
  "Russian",
  "English",
  "Turkish",
  "Korean",
  "German",
  "Arabic",
];

const submitForm = () => {
  isSubmitted.value = true;
};
</script>

<template>
  <section class="px-5 pb-24 md:px-8 lg:px-14">
    <div class="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.7fr_1.3fr]">
      <aside
        class="rounded-3xl border border-black/10 bg-white/55 p-7 backdrop-blur-xl"
      >
        <Icon name="lucide:file-text" size="24" class="text-[#aa8620]" />

        <h2 class="mt-10 text-2xl font-semibold tracking-tighter">
          {{ t("form.helpTitle") }}
        </h2>
        <p class="mt-4 text-sm leading-relaxed text-black/60">
          {{ t("form.helpText") }}
        </p>

        <div class="mt-10 space-y-4 border-t border-black/10 pt-5">
          <div class="flex gap-3">
            <Icon
              name="lucide:map-pin"
              size="17"
              class="shrink-0 text-[#aa8620]"
            />
            <p class="text-xs leading-relaxed text-black/60">
              Qarshi Davlat xizmatlari markazi<br />Qarshi Notarius 1
            </p>
          </div>

          <div class="flex gap-3">
            <Icon
              name="lucide:shield-check"
              size="17"
              class="shrink-0 text-[#aa8620]"
            />
            <p class="text-xs leading-relaxed text-black/60">
              {{ t("form.notaryNote") }}
            </p>
          </div>
        </div>
      </aside>

      <form
        class="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-xl shadow-black/5 backdrop-blur-xl md:p-8"
        @submit.prevent="submitForm"
      >
        <div class="grid gap-5 md:grid-cols-2">
          <label class="block">
            <span class="text-xs font-semibold">{{ t("form.fullName") }}</span>
            <input
              v-model="form.fullName"
              required
              type="text"
              class="mt-2 w-full rounded-xl border border-black/10 bg-black/3 px-4 py-3 text-sm outline-none transition focus:border-[#aa8620]"
            />
          </label>

          <label class="block">
            <span class="text-xs font-semibold">{{ t("form.phone") }}</span>
            <input
              v-model="form.phone"
              required
              type="tel"
              placeholder="+998"
              class="mt-2 w-full rounded-xl border border-black/10 bg-black/3 px-4 py-3 text-sm outline-none transition focus:border-[#aa8620]"
            />
          </label>

          <label class="block md:col-span-2">
            <span class="text-xs font-semibold">{{
              t("form.documentType")
            }}</span>
            <select
              v-model="form.documentType"
              required
              class="mt-2 w-full rounded-xl border border-black/10 bg-black/3 px-4 py-3 text-sm outline-none transition focus:border-[#aa8620]"
            >
              <option value="" disabled>{{ t("form.selectDocument") }}</option>
              <option v-for="type in documentTypes" :key="type" :value="type">
                {{ type }}
              </option>
            </select>
          </label>

          <label class="block">
            <span class="text-xs font-semibold">{{
              t("form.fromLanguage")
            }}</span>
            <select
              v-model="form.fromLanguage"
              required
              class="mt-2 w-full rounded-xl border border-black/10 bg-black/3 px-4 py-3 text-sm outline-none transition focus:border-[#aa8620]"
            >
              <option value="" disabled>{{ t("form.selectLanguage") }}</option>
              <option
                v-for="language in languages"
                :key="language"
                :value="language"
              >
                {{ language }}
              </option>
            </select>
          </label>

          <label class="block">
            <span class="text-xs font-semibold">{{
              t("form.toLanguage")
            }}</span>
            <select
              v-model="form.toLanguage"
              required
              class="mt-2 w-full rounded-xl border border-black/10 bg-black/3 px-4 py-3 text-sm outline-none transition focus:border-[#aa8620]"
            >
              <option value="" disabled>{{ t("form.selectLanguage") }}</option>
              <option
                v-for="language in languages"
                :key="language"
                :value="language"
              >
                {{ language }}
              </option>
            </select>
          </label>

          <label class="block md:col-span-2">
            <span class="text-xs font-semibold">{{ t("form.message") }}</span>
            <textarea
              v-model="form.message"
              rows="5"
              class="mt-2 w-full resize-none rounded-xl border border-black/10 bg-black/3 px-4 py-3 text-sm outline-none transition focus:border-[#aa8620]"
            />
          </label>
        </div>

        <div class="mt-7 flex flex-wrap items-center justify-between gap-4">
          <p
            v-if="isSubmitted"
            class="flex items-center gap-2 text-xs text-[#6f5816]"
          >
            <Icon name="lucide:circle-check" size="16" />
            {{ t("form.success") }}
          </p>
          <span v-else class="text-xs text-black/45">{{
            t("form.responseNote")
          }}</span>

          <button
            type="submit"
            class="inline-flex items-center gap-2 rounded-lg bg-black px-4 py-2.5 text-xs font-bold text-[#f4d66f] transition hover:-translate-y-0.5"
          >
            {{ t("form.submit") }}
            <Icon name="lucide:send" size="15" />
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
