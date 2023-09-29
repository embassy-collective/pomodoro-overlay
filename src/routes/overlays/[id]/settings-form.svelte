<script lang="ts">
  import * as Form from '$lib/components/ui/form'
  import type { SuperValidated } from 'sveltekit-superforms'
  import { formSchema, type FormSchema } from './schema'
  export let form: SuperValidated<FormSchema>
</script>

<Form.Root method="POST" {form} schema={formSchema} let:config class="flex flex-col w-full">
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
      <Form.Select>
        <Form.SelectTrigger placeholder="Select a verified email to display" class="w-64" />
        <Form.SelectContent>
          <Form.SelectItem value="m@example.com">m@example.com</Form.SelectItem>
          <Form.SelectItem value="m@google.com">m@google.com</Form.SelectItem>
          <Form.SelectItem value="m@support.com">m@support.com</Form.SelectItem>
        </Form.SelectContent>
      </Form.Select>
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
      <Form.Input type="text" class="w-24" />
      <Form.Validation />
    </Form.Item>
  </Form.Field>

  <Form.Field {config} name="timerFontWeight">
    <Form.Item class="flex justify-between items-center py-2">
      <Form.Label class="flex-grow text-start">Timer font weight</Form.Label>
      <Form.Input type="text" class="w-24" />
      <Form.Validation />
    </Form.Item>
  </Form.Field>

  <Form.Field {config} name="todoFont">
    <Form.Item class="flex justify-between items-center py-2">
      <Form.Label class="flex-grow text-start">Todo font</Form.Label>
      <Form.Select>
        <Form.SelectTrigger placeholder="Select a verified email to display" class="w-64" />
        <Form.SelectContent>
          <Form.SelectItem value="m@example.com">m@example.com</Form.SelectItem>
          <Form.SelectItem value="m@google.com">m@google.com</Form.SelectItem>
          <Form.SelectItem value="m@support.com">m@support.com</Form.SelectItem>
        </Form.SelectContent>
      </Form.Select>
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
      <Form.Input type="text" class="w-24" />
      <Form.Validation />
    </Form.Item>
  </Form.Field>

  <Form.Field {config} name="todoFontWeight">
    <Form.Item class="flex justify-between items-center py-2">
      <Form.Label class="flex-grow text-start">Todo font weight</Form.Label>
      <Form.Input type="text" class="w-24" />
      <Form.Validation />
    </Form.Item>
  </Form.Field>

  <Form.Field {config} name="iconPrimaryColor">
    <Form.Item class="flex justify-between items-center py-2">
      <Form.Label class="flex-grow text-start">Icon primary color</Form.Label>
      <Form.Input type="text" class="w-24" />
      <Form.Validation />
    </Form.Item>
  </Form.Field>

  <Form.Field {config} name="iconSecondaryColor">
    <Form.Item class="flex justify-between items-center py-2">
      <Form.Label class="flex-grow text-start">Icon secondary color</Form.Label>
      <Form.Input type="text" class="w-24" />
      <Form.Validation />
    </Form.Item>
  </Form.Field>

  <Form.Button>Submit</Form.Button>
</Form.Root>
