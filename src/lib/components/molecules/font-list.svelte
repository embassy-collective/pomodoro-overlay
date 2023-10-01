<script lang="ts">
  import * as Form from '$lib/components/ui/form'
  import { createVirtualizer, type VirtualItem } from '@tanstack/svelte-virtual'
  import type { Font } from '../../../types/font'

  let container: HTMLDivElement
  let fonts: Font[] = []

  $: rowVirtualizer = createVirtualizer({
    count: fonts.length,
    getScrollElement: () => container,
    estimateSize: () => 10,
    overscan: 5
  })

  let virtualRows: VirtualItem[] = []
  let totalSize = 0

  $: {
    virtualRows = $rowVirtualizer.getVirtualItems()
    totalSize = $rowVirtualizer.getTotalSize()
  }

  export { fonts }
</script>

<Form.SelectContent>
  <div bind:this={container} class="overflow-y-auto h-52">
    <div style={`height: ${totalSize}px`} class="relative w-full">
      {#each virtualRows as row}
        <Form.SelectItem
          value={fonts[row.index].id}
          style={`height: ${row.size}px; transform: translateY(${row.start}px)`}
          class="cursor-pointer py-4"
        >
          {fonts[row.index].family}
        </Form.SelectItem>
      {/each}
    </div>
  </div>
</Form.SelectContent>
