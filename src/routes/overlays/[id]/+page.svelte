<script lang="ts">
  import ThemeToggle from '$lib/components/molecules/theme-toggle.svelte'
  import Input from '$lib/components/ui/input/input.svelte'
  import Separator from '$lib/components/ui/separator/separator.svelte'

  import { page } from '$app/stores'
  import Pomodoro from '$lib/components/molecules/pomodoro.svelte'
  import Button from '$lib/components/ui/button/button.svelte'
  console.log($page.params)
</script>

<div class="hidden h-full flex-col md:flex">
  <div
    class="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16"
  >
    <h2 class="text-lg font-semibold">Pomodoro Overlay</h2>
    <div class="flex gap-4">
      <Input placeholder="url" />
      <Button>Save</Button>
      <ThemeToggle />
    </div>
  </div>
  <Separator />
  <div class="container h-full py-6">
    <div class="grid h-full items-stretch gap-6 md:grid-cols-[1fr_200px]">
      <div class="hidden flex-col space-y-4 sm:flex md:order-2">Settings go here</div>
      <div class="md:order-1">
        <div class="flex h-full flex-col space-y-4">
          <Pomodoro class="w-1/2 h-full" />
        </div>
      </div>
    </div>
  </div>
</div>
