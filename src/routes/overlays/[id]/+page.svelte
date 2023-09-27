<script lang="ts">
  import { page } from '$app/stores'
  import Pomodoro from '$lib/components/molecules/pomodoro.svelte'
  console.log($page.params)
</script>

<div class="container h-full py-6">
  <div class="grid h-full items-stretch gap-6 md:grid-cols-[1fr_200px]">
    <div class="hidden flex-col space-y-4 sm:flex md:order-2">Settings go here</div>
    <div class="md:order-1 flex h-full flex-col space-y-4">
      <Pomodoro class="w-1/2 h-full" variant={'timer-only'} />
    </div>
  </div>
</div>
