import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import downloadFontList from './src/plugins/fonts.plugin'

export default defineConfig(({ command }) => ({
  plugins: [sveltekit(), downloadFontList(command)]
}))
