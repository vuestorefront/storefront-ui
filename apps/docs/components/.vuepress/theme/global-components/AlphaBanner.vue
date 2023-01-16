<template>
  <div class="w-full mt-4 mb-4 lg:p-0 custom-block">
    <div
      class="block p-4 px-6 mx-auto text-left bg-purple-500 rounded bg-opacity-30 dark:bg-purple-400 dark:bg-opacity-60 text-zinc-900 dark:text-white"
    >
      <div class="flex items-center">
        <iconify-icon icon="ph:warning-circle-fill" class="mr-4 shrink-0" width="30px" />
        <div>
          <p class="text-sm font-medium">
            This integration is currently in an early alpha and not ready for production usage
          </p>
          <p class="text-sm mt-2">
            You shouldn't rely on current APIs as they are subject to change. Any release before first release candidate
            <strong>can contain breaking changes</strong>. Please use this code with caution.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
