<template>
  <div>
    <NuxtLoadingIndicator />
    <ClientOnly>
      <NuxtLayout>
        <NuxtPage/>
      </NuxtLayout>
    </ClientOnly>
  </div>
</template>
