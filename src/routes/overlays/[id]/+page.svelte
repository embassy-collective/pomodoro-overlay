<script lang="ts">
  import Pomodoro from '$lib/components/molecules/pomodoro.svelte'
  import type { PageData } from './$types'
  import SettingsForm from './settings-form.svelte'
  export let data: PageData
</script>

<div class="container h-full py-6">
  <div class="flex gap-4 w-full flex-col md:flex-row">
    <div class="w-full md:w-1/2 flex-col h-full justify-center text-center gap-2">
      <h1 class="text-xl font-bold py-4">Settings</h1>
      <SettingsForm form={data.form} />
    </div>

    <div class="w-full md:w-1/2 flex h-full flex-col">
      <Pomodoro class="w-1/2 m-auto" variant={'timer-only'} />
    </div>
  </div>
</div>
