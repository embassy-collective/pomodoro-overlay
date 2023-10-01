<script>
  import { goto } from '$app/navigation'
  import { page } from '$app/stores'
  import { signIn, signOut } from '@auth/sveltekit/client'
  import TwitchIcon from '../atoms/twitch-icon.svelte'
  import Button from '../ui/button/button.svelte'
</script>

<svelte:head>
  <title>Pomodoro Overlay</title>
</svelte:head>

<div class="flex justify-between items-center my-auto relative">
  <img src="/mockup.png" alt="Pomodoro overlary on OBS" class="w-2/5 z-10" />

  <div class="flex w-3/5 z-10">
    <div class="flex flex-col z-20 pl-32">
      <h1 class="text-[70px] mb-8 leading-[84px]">Pomodoro Overlay</h1>
      <p class="text-muted-foreground text-lg">Keep your stream in the zone with Pomodoro.</p>

      <div class="flex flex-col my-16 w-full">
        {#if $page.data.session}
          <span class="text-small mb-4">
            Signed in as
            <strong>{$page.data.session.user?.name ?? 'User'}</strong>
          </span>
          <div class="flex flex-row gap-2 w-ful l">
            <Button on:click={() => goto('overlays')} class="w-full">Dashboard</Button>
            <Button on:click={() => signOut()} variant={'outline'} class="w-full">Sign out</Button>
          </div>
        {:else}
          <Button variant={'twitch'} on:click={() => signIn('twitch')} class="text-white">
            <TwitchIcon class="mr-2" /> Sign In with Twitch
          </Button>
        {/if}
      </div>
    </div>
  </div>
</div>
