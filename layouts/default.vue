<template>
  <div>
    <AppHeader />
    <div class="flex flex-row" style="min-height: 94vh;">
      <div class="basis-1/5 flex-1"></div>
      <div class="basis-1/2 flex-1">
        <slot />
      </div>
      <div class="basis-1/5 flex-1"></div>
    </div>
    <AppFooter />
  </div>
</template>