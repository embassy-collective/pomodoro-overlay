<script>
  import { page } from '$app/stores'
  import { signIn, signOut } from '@auth/sveltekit/client'
  import TwitchIcon from '../atoms/twitch-icon.svelte'
  import Button from '../ui/button/button.svelte'
</script>

<div class="flex justify-between items-center my-auto relative">
  <img src="/mockup.png" alt="Pomodoro overlary on OBS" class="w-2/5 z-10" />

  <div class="flex w-3/5 z-10">
    <div class="flex flex-col mx-auto z-20 -pl-24">
      <h1 class="text-[70px] mb-8 leading-[84px]">Pomodoro Overlay</h1>
      <p class="text-muted-foreground text-lg">Keep your stream in the zone with Pomodoro.</p>

      <div class="flex flex-col my-16">
        {#if $page.data.session}
          <span class="signedInText">
            <small>Signed in as</small><br />
            <strong>{$page.data.session.user?.name ?? 'User'}</strong>
          </span>
          <button on:click={() => signOut()} class="button">Sign out</button>
        {:else}
          <Button variant={'twitch'} on:click={() => signIn('twitch')}>
            <TwitchIcon class="mr-2" /> Sign In with Twitch
          </Button>
        {/if}
      </div>
    </div>
  </div>
</div>
