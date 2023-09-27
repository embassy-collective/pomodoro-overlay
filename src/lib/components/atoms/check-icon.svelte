<script lang="ts">
  import { cn } from '$lib/utils'

  let className: string | undefined | null = undefined
  let checked: boolean = false

  export { className as class, checked }
</script>

<svg class={cn(className)} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M1 11C1 6.28595 1 3.92893 2.46447 2.46447C3.92893 1 6.28595 1 11 1C15.714 1 18.0711 1 19.5355 2.46447C21 3.92893 21 6.28595 21 11C21 15.714 21 18.0711 19.5355 19.5355C18.0711 21 15.714 21 11 21C6.28595 21 3.92893 21 2.46447 19.5355C1 18.0711 1 15.714 1 11Z"
    stroke="currentColor"
    stroke-width="1.5"
  />
  {#if checked}
    <path
      d="M7.5 11.5L9.5 13.5L14.5 8.5"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {/if}
</svg>
