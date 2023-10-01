<script lang="ts">
  import FontSelect from '$lib/components/molecules/font-select.svelte'
  import FontWeights from '$lib/components/molecules/font-weights.svelte'
  import * as Form from '$lib/components/ui/form'
  import type { SuperValidated } from 'sveltekit-superforms'
  import { formSchema, type FormSchema } from './schema'
  export let form: SuperValidated<FormSchema>
</script>

<Form.Root method="POST" {form} schema={formSchema} let:config class="flex flex-col w-full max-h-[500px]">
  <div class="overflow-y-auto px-4">
    <Form.Field {config} name="focusDuration">
      <Form.Item class="flex justify-between items-center py-2">
        <Form.Label class="flex-grow text-start">Focus Length</Form.Label>
        <Form.Input type="number" class="w-24" />
        <Form.Validation />
      </Form.Item>
    </Form.Field>

    <Form.Field {config} name="pomodorosCount">
      <Form.Item class="flex justify-between items-center py-2">
        <Form.Label class="flex-grow text-start">Pomodoros until long break</Form.Label>
        <Form.Input type="number" class="w-24" />
        <Form.Validation />
      </Form.Item>
    </Form.Field>

    <Form.Field {config} name="longBreakDuration">
      <Form.Item class="flex justify-between items-center py-2">
        <Form.Label class="flex-grow text-start">Long break length</Form.Label>
        <Form.Input type="number" class="w-24" />
        <Form.Validation />
      </Form.Item>
    </Form.Field>

    <Form.Field {config} name="shortBreakDuration">
      <Form.Item class="flex justify-between items-center py-2">
        <Form.Label class="flex-grow text-start">Short break length</Form.Label>
        <Form.Input type="number" class="w-24" />
        <Form.Validation />
      </Form.Item>
    </Form.Field>

    <Form.Field {config} name="autoResume">
      <Form.Item class="flex justify-between items-center py-2">
        <Form.Label class="flex-grow text-start">Auto resume timer</Form.Label>
        <Form.Switch />
        <Form.Validation />
      </Form.Item>
    </Form.Field>

    <Form.Field {config} name="sound">
      <Form.Item class="flex justify-between items-center py-2">
        <Form.Label class="flex-grow text-start">Sound</Form.Label>
        <Form.Switch />
        <Form.Validation />
      </Form.Item>
    </Form.Field>

    <Form.Field {config} name="notifications">
      <Form.Item class="flex justify-between items-center py-2">
        <Form.Label class="flex-grow text-start">Notifications</Form.Label>
        <Form.Switch />
        <Form.Validation />
      </Form.Item>
    </Form.Field>

    <Form.Field {config} name="timerFont">
      <Form.Item class="flex justify-between items-center py-2">
        <Form.Label class="flex-grow text-start">Timer font</Form.Label>
        <FontSelect />
        <Form.Validation />
      </Form.Item>
    </Form.Field>

    <Form.Field {config} name="timerFontSize">
      <Form.Item class="flex justify-between items-center py-2">
        <Form.Label class="flex-grow text-start">Timer font size</Form.Label>
        <Form.Input type="number" class="w-24" />
        <Form.Validation />
      </Form.Item>
    </Form.Field>

    <Form.Field {config} name="timerFontColor">
      <Form.Item class="flex justify-between items-center py-2">
        <Form.Label class="flex-grow text-start">Timer font color</Form.Label>
        <Form.Input type="color" class="w-16" />
        <Form.Validation />
      </Form.Item>
    </Form.Field>

    <Form.Field {config} name="timerFontWeight">
      <Form.Item class="flex justify-between items-center py-2">
        <Form.Label class="flex-grow text-start">Timer font weight</Form.Label>
        <FontWeights />
        <Form.Validation />
      </Form.Item>
    </Form.Field>

    <Form.Field {config} name="todoFont">
      <Form.Item class="flex justify-between items-center py-2">
        <Form.Label class="flex-grow text-start">Todo font</Form.Label>
        <FontSelect />
        <Form.Validation />
      </Form.Item>
    </Form.Field>

    <Form.Field {config} name="todoFontSize">
      <Form.Item class="flex justify-between items-center py-2">
        <Form.Label class="flex-grow text-start">Todo font size</Form.Label>
        <Form.Input type="number" class="w-24" />
        <Form.Validation />
      </Form.Item>
    </Form.Field>

    <Form.Field {config} name="todoFontColor">
      <Form.Item class="flex justify-between items-center py-2">
        <Form.Label class="flex-grow text-start">Todo font color</Form.Label>
        <Form.Input type="color" class="w-16" />
        <Form.Validation />
      </Form.Item>
    </Form.Field>

    <Form.Field {config} name="todoFontWeight">
      <Form.Item class="flex justify-between items-center py-2">
        <Form.Label class="flex-grow text-start">Todo font weight</Form.Label>
        <FontWeights />
        <Form.Validation />
      </Form.Item>
    </Form.Field>

    <Form.Field {config} name="iconPrimaryColor">
      <Form.Item class="flex justify-between items-center py-2">
        <Form.Label class="flex-grow text-start">Icon primary color</Form.Label>
        <Form.Input type="color" class="w-16" />
        <Form.Validation />
      </Form.Item>
    </Form.Field>

    <Form.Field {config} name="iconSecondaryColor">
      <Form.Item class="flex justify-between items-center py-2">
        <Form.Label class="flex-grow text-start">Icon secondary color</Form.Label>
        <Form.Input type="color" class="w-16" />
        <Form.Validation />
      </Form.Item>
    </Form.Field>
  </div>
  <Form.Button class="mt-4">Create Overlay</Form.Button>
</Form.Root>
