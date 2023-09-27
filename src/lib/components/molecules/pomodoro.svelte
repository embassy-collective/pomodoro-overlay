<script lang="ts">
  import { cn } from '$lib/utils'
  import CheckIcon from '../atoms/check-icon.svelte'
  import Chip, { ChipType } from '../atoms/chip.svelte'
  import PomodoroIcon from '../atoms/pomodoro-icon.svelte'

  let className: string = ''
  let variant: 'timer-only' | 'default' = 'default'
  let type: ChipType = ChipType.Focus
  let time: string = '25:00'
  let color: string = '#95AB64'
  let active: boolean = true
  let fontSize: number = 200
  let pomodoroCount: number = 5 // TODO: check how this actually works

  export { className as class, variant, type, time, color, active, fontSize }
</script>

<div
  class={cn('flex flex-col justify-center items-center', className)}
  style="--pomodoro-color: {color}; --pomodor-font-size: {fontSize}px;"
>
  <Chip {type} class="mb-4" />
  <div class="flex-grow flex flex-col my-auto justify-center items-center">
    {#if variant === 'timer-only'}
      {#each time.split(':') as part, i}
        <div
          class={cn('counter', {
            active: active
          })}
        >
          {part}
        </div>
      {/each}
    {:else}
      <div
        class={cn('counter', {
          active: active
        })}
      >
        25:00
      </div>
    {/if}
    <div class="flex gap-4 mt-4">
      {#each Array(pomodoroCount) as _, i}
        <PomodoroIcon class="w-5 h-5" />
      {/each}
    </div>

    {#if variant !== 'timer-only'}
      <div class="mt-4 flex flex-col gap-4 justify-start">
        {#each Array(4) as _, i}
          <div class="flex gap-2 items-center text-4xl justify-start w-full">
            <CheckIcon class="w-6 h-6" checked />
            <div class="todo">
              <span class="max-w-md todo-text">
                Todo {i} Lorem ipsum dolor sit amet.
              </span>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  .counter {
    -webkit-text-stroke: 1px var(--pomodoro-color);
    -webkit-text-fill-color: transparent;
    font-size: var(--pomodor-font-size);
    font-weight: 400;
    line-height: var(--pomodor-font-size);

    .active {
      -webkit-text-fill-color: var(--pomodoro-color);
    }
  }

  .todo {
    width: 100%;
    overflow: hidden;
    display: flex;
    white-space: nowrap;
    position: relative;

    &-text {
      // animation: marquee 30s linear infinite;
    }
  }

  /* Transition */
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
</style>
