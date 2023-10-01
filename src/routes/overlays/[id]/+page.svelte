<script lang="ts">
  import Pomodoro from '$lib/components/molecules/pomodoro.svelte'
  import * as Tabs from '$lib/components/ui/tabs'
  import type { PageData } from './$types'
  import SettingsForm from './settings-form.svelte'
  export let data: PageData
</script>

<div class="container h-full py-6 flex">
  <div class="flex gap-4 w-full flex-col md:flex-row my-auto">
    <div
      class="w-full md:w-1/2 flex-col h-full justify-center text-center gap-2 bg-background rounded px-4 py-4 shadow-xl"
    >
      <h1 class="text-xl font-bold py-4 mb-4">Settings</h1>
      <SettingsForm form={data.form} />
    </div>

    <div class="w-full md:w-1/2 flex flex-col bg-background rounded px-4 py-4 shadow-xl h-full pb-12">
      <Tabs.Root value="default" class="flex flex-col gap-4 flex-grow">
        <Tabs.List class="mx-auto">
          <Tabs.Trigger value="default">With to do</Tabs.Trigger>
          <Tabs.Trigger value="timer-only">Timer only</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="default">
          <Pomodoro variant={'default'} />
        </Tabs.Content>
        <Tabs.Content value="timer-only">
          <Pomodoro variant={'timer-only'} />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  </div>
</div>
