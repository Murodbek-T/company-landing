<!-- pages/order.vue -->
<template>
  <LayoutAppNavbar />
  <main class="min-h-screen bg-[#f3f0e9] text-black">
    <UiPageHero
      
      :eyebrow="$t('form.label')"
      :title="$t('form.pageTitleLineOne')"
      :accent-title="$t('form.pageTitleLineTwo')"
      :description="$t('form.pageDescription')"
      class="mb-20"
    />
    <OrderForm />
    <LayoutAppFooter />
  </main>
</template>
