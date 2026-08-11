/* ロゴ加工スクリプト — C:/Users/youta/Downloads/LOGOS の素材を
   public/assets/logos/ に「白背景・余白トリム済みPNG」として書き出す。
   使い方: npm i -D sharp && node scripts/process-logos.mjs
   （実行後は npm rm sharp してよい。ロゴを追加したら SOURCES に追記して再実行） */
import sharp from 'sharp'
import { mkdirSync } from 'node:fs'
import { join } from 'node:path'

const SRC = 'C:/Users/youta/Downloads/LOGOS'
const OUT = 'public/assets/logos'
mkdirSync(OUT, { recursive: true })

// kind: 'white-on-black' = 白抜きロゴ(黒背景ラスタ) → 反転して黒ロゴ化
//       'raster'         = 白背景カラーラスタ → トリムのみ
//       'vector'         = SVG → 高解像度ラスタライズ
const SOURCES = [
  { file: '_preview/1.png', out: 'logo-restep.png', kind: 'white-on-black' },
  { file: '_preview/2.png', out: 'logo-viora.png', kind: 'raster' },
  { file: '_preview/3.png', out: 'logo-uwec.png', kind: 'white-on-black' },
  { file: '_preview/4.png', out: 'logo-oiler.png', kind: 'white-on-black' },
  { file: '_preview/5.png', out: 'logo-earth-energy.png', kind: 'white-on-black' },
  { file: '_preview/6.png', out: 'logo-jmhs.png', kind: 'raster' },
  { file: '7.svg', out: 'logo-synplanning.png', kind: 'vector' },
  { file: '8.svg', out: 'logo-enepal.png', kind: 'vector' },
]

for (const s of SOURCES) {
  const input = join(SRC, s.file)
  let img = s.kind === 'vector' ? sharp(input, { density: 150 }) : sharp(input)
  if (s.kind === 'white-on-black') img = img.negate()
  img = img.flatten({ background: '#ffffff' }).trim({ threshold: 25 })
  const out = join(OUT, s.out)
  await img.png().toFile(out)
  const meta = await sharp(out).metadata()
  console.log(`${s.out}: ${meta.width}x${meta.height}`)
}
