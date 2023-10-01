import fs from 'fs'

const FONT_SOURCE_API = 'https://api.fontsource.org/v1/fonts'

export default function downloadFontList(command: string) {
  return {
    name: 'download-font-list',
    async buildStart() {
      switch (command) {
        case 'build': {
          console.info('Downloading font list...')
          const response = await fetch(FONT_SOURCE_API)
          const fontList = await response.json()
          fs.writeFileSync('./src/routes/fonts/fonts.json', JSON.stringify(fontList))
          console.info('Font list downloaded!')
          break
        }
        default:
          break
      }
    }
  }
}
