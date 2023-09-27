<script lang="ts" context="module">
  export enum ChipType {
    Focus,
    ShortBreak,
    LongBreak
  }
</script>

<script lang="ts">
  import { cn } from '$lib/utils'
  import BreakIcon from './break-icon.svelte'
  import FocusIcon from './focus-icon.svelte'

  let type: ChipType = ChipType.Focus
  let color: string = '#95AB64'
  let className: string = ''

  export { className as class, type }
</script>

<div class={cn('flex gap-4 rounded-full px-4 py-1 items-center border-2', className)} style={`border-color: ${color};`}>
  {#if type === ChipType.Focus}
    <FocusIcon class="w-4 h-4" /> <span class="text-base font-semibold"> Focus</span>
  {:else if type === ChipType.ShortBreak}
    <BreakIcon class="w-4 h-4" /> <span class="text-base font-semibold"> Short Break</span>
  {:else if type === ChipType.LongBreak}
    <BreakIcon class="w-4 h-4" /> <span class="text-base font-semibold"> Long Break</span>
  {/if}
</div>
