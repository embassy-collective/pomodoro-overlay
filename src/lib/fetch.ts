import { writable } from 'svelte/store'

export default function <T>(url: string) {
  const loading = writable(false)
  const error = writable<boolean | unknown>(false)
  const data = writable<T>()

  async function get() {
    loading.set(true)
    error.set(false)
    try {
      const response = await fetch(url)
      data.set((await response.json()) as T)
    } catch (e) {
      error.set(e)
    }
    loading.set(false)
  }

  get()

  return [data, loading, error, get]
}
