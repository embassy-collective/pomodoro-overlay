<script lang="ts">
  import * as Form from '$lib/components/ui/form'
  import type { Font } from '../../../types/font'
  import Spinner from '../atoms/spinner.svelte'

  async function getFonts() {
    const response = await fetch('/fonts')
    const fonts: Font[] = await response.json()
    return fonts
  }
</script>

<div {...$$restProps}>
  {#await getFonts()}
    <div class="flex gap-4 items-center">
      <Spinner class="w-4 h-4" />
      <span>Loading...</span>
    </div>
  {:then fonts}
    <Form.Select>
      <Form.SelectTrigger placeholder="Select a font.." class="w-64" />
      <Form.FontList {fonts} />
    </Form.Select>
  {:catch error}
    <div class="flex flex-col gap-2">
      <p class="text-red-500">Failed to load fonts, please try again later...</p>
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </div>
  {/await}
</div>
