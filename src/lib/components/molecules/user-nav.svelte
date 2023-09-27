<script lang="ts">
  import { goto } from '$app/navigation'
  import { page } from '$app/stores'
  import { signOut } from '@auth/sveltekit/client'
  import * as Avatar from '../ui/avatar'
  import { Button } from '../ui/button'
  import * as DropdownMenu from '../ui/dropdown-menu'
  import DropdownMenuItem from '../ui/dropdown-menu/dropdown-menu-item.svelte'
</script>

{#if $page.data.session}
  <DropdownMenu.Root positioning={{ placement: 'bottom-end' }}>
    <DropdownMenu.Trigger asChild let:builder>
      <Button variant="ghost" builders={[builder]} class="relative h-8 w-8 rounded-full">
        <Avatar.Root class="h-8 w-8">
          {#if $page.data.session.user?.image}
            <Avatar.Image src={$page.data.session.user.image} alt="@shadcn" />
          {/if}
          {#if $page.data.session.user?.name}
            <Avatar.Fallback>
              {$page.data.session.user.name[0]}
            </Avatar.Fallback>
          {/if}
        </Avatar.Root>
      </Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content class="w-56">
      <DropdownMenu.Label class="font-normal">
        <div class="flex flex-col space-y-1">
          <p class="text-sm font-medium leading-none">{$page.data.session.user?.name ?? 'User'}</p>
          <p class="text-xs leading-none text-muted-foreground">{$page.data.session.user?.email ?? 'user@test.com'}</p>
        </div>
      </DropdownMenu.Label>
      <DropdownMenu.Separator />
      <DropdownMenu.Item on:click={() => goto('overlays')}>Dashboard</DropdownMenu.Item>
      <DropdownMenuItem on:click={() => goto('overlays')}>Create new overlay</DropdownMenuItem>

      <DropdownMenu.Separator />
      <DropdownMenu.Item on:click={() => signOut()}>Log out</DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
{/if}
