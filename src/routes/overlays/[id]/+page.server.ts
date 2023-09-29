import { fail } from '@sveltejs/kit'
import { superValidate } from 'sveltekit-superforms/server'
import type { Actions, PageServerLoad } from './$types'
import { formSchema } from './schema'

export const load: PageServerLoad = () => {
  return {
    form: superValidate(formSchema)
  }
}

export const actions: Actions = {
  default: async (event) => {
    const form = await superValidate(event, formSchema)
    if (!form.valid) {
      return fail(400, {
        form
      })
    }
    return {
      form
    }
  }
}
