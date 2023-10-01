import { json } from '@sveltejs/kit'
import fonts from './fonts.json'

export const GET = () => {
  return json(fonts)
}
