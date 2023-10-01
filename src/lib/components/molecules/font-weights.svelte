<script lang="ts">
  import * as Form from '$lib/components/ui/form'
</script>

<div {...$$restProps}>
  <Form.Select>
    <Form.SelectTrigger placeholder="Select a font weight..." class="w-64" />
    <Form.SelectContent>
      {#each ['100', '200', '300', '400', '500', '600', '700', '800', '900'] as weight}
        <Form.SelectItem value={weight}>{weight}</Form.SelectItem>
      {/each}
    </Form.SelectContent>
  </Form.Select>
</div>
