<!-- components/works/WorkPreviewModal.vue -->

<script setup lang="ts">
import type { Work } from "./DocumentCard.vue";

const props = defineProps<{
  isOpen: boolean;
  work: Work | null;
}>();

const emit = defineEmits<{
  close: [];
}>();

const activeImage = ref(0);

watch(
  () => props.work,
  () => {
    activeImage.value = 0;
  },
);

const close = () => emit("close");

const next = () => {
  if (!props.work) return;
  activeImage.value = (activeImage.value + 1) % props.work.images.length;
};

const previous = () => {
  if (!props.work) return;
  activeImage.value =
    (activeImage.value - 1 + props.work.images.length) %
    props.work.images.length;
};

const onKeydown = (event: KeyboardEvent) => {
  if (!props.isOpen) return;
  if (event.key === "Escape") close();
  if (event.key === "ArrowRight") next();
  if (event.key === "ArrowLeft") previous();
};

onMounted(() => window.addEventListener("keydown", onKeydown));
onBeforeUnmount(() => window.removeEventListener("keydown", onKeydown));
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isOpen && work"
        class="fixed inset-0 z-100 grid place-items-center bg-black/80 p-4 backdrop-blur-md"
        @click.self="close"
      >
        <div
          class="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/15 bg-[#111] text-white shadow-2xl"
        >
          <button
            class="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-xl"
            @click="close"
          >
            <Icon name="lucide:x" size="17" />
          </button>

          <div class="grid md:grid-cols-[1.25fr_.75fr]">
            <div class="relative min-h-88 bg-black">
              <img
                :src="work.images[activeImage]"
                :alt="work.type"
                class="h-full w-full object-cover grayscale"
              />

              <div
                class="absolute inset-x-4 bottom-4 flex items-center justify-between"
              >
                <button
                  class="grid h-10 w-10 place-items-center rounded-xl border border-white/20 bg-black/45 backdrop-blur-xl"
                  @click="previous"
                >
                  <Icon name="lucide:arrow-left" size="17" />
                </button>

                <span
                  class="rounded-full bg-black/50 px-3 py-1 font-mono text-[10px] backdrop-blur-xl"
                >
                  0{{ activeImage + 1 }} / 0{{ work.images.length }}
                </span>

                <button
                  class="grid h-10 w-10 place-items-center rounded-xl border border-white/20 bg-black/45 backdrop-blur-xl"
                  @click="next"
                >
                  <Icon name="lucide:arrow-right" size="17" />
                </button>
              </div>
            </div>

            <div class="flex flex-col justify-between p-7">
              <div>
                <span
                  class="font-mono text-[10px] uppercase tracking-[0.16em] text-[#f4d66f]"
                  >AB Translation Center</span
                >
                <h2 class="mt-4 text-3xl font-semibold tracking-[-0.06em]">
                  {{ work.type }}
                </h2>
                <p class="mt-4 text-sm leading-relaxed text-white/55">
                  {{ work.description }}
                </p>

                <div class="mt-7 border-t border-white/10 pt-5">
                  <p
                    class="text-[10px] uppercase tracking-[0.12em] text-white/35"
                  >
                    Starting from
                  </p>
                  <p class="mt-1 text-xl font-semibold text-[#f4d66f]">
                    {{ work.price }}
                  </p>
                </div>
              </div>

              <NuxtLink
                to="/order"
                class="mt-10 inline-flex items-center justify-center gap-2 rounded-lg bg-[#f4d66f] px-4 py-2.5 text-xs font-bold text-black"
                @click="close"
              >
                Start an order
                <Icon name="lucide:arrow-up-right" size="15" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
