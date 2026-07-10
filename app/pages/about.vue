<!-- pages/about.vue -->
<template>
  <main class="min-h-screen bg-[#090909] text-white">
    <LayoutAppNavbar />
    <UiPageHero
      :eyebrow="$t('about.pageLabel')"
      :title="$t('about.pageTitleLineOne')"
      :accent-title="$t('about.pageTitleLineTwo')"
    />
    <AboutStory />
    <AboutTimeline />
    <LayoutAppFooter />
  </main>
</template>
