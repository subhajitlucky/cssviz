import { useMemo, useState } from 'react'
import VisualizerPanel from './VisualizerPanel'
import SliderControl from '@/components/controls/SliderControl'
import ToggleGroup from '@/components/controls/ToggleGroup'
import SelectControl from '@/components/controls/SelectControl'

const sampleText =
  'CSS Universe gives you responsive controls, variable fonts, and instant visual feedback so you understand every property at a glance.'

const TypographyLab = () => {
  const [fontSize, setFontSize] = useState(22)
  const [lineHeight, setLineHeight] = useState(1.6)
  const [letterSpacing, setLetterSpacing] = useState(0.2)
  const [fontWeight, setFontWeight] = useState('600')
  const [fontFamily, setFontFamily] = useState('Space Grotesk, Inter, sans-serif')

  const cssOutput = useMemo(
    () => `
.text-lab {
  font-family: ${fontFamily};
  font-size: ${fontSize}px;
  line-height: ${lineHeight};
  letter-spacing: ${letterSpacing}ch;
  font-weight: ${fontWeight};
  font-variation-settings: "wght" ${fontWeight};
}
`,
    [fontFamily, fontSize, fontWeight, letterSpacing, lineHeight],
  )

  const reset = () => {
    setFontSize(22)
    setLineHeight(1.6)
    setLetterSpacing(0.2)
    setFontWeight('600')
    setFontFamily('Space Grotesk, Inter, sans-serif')
  }

  return (
    <VisualizerPanel
      title="Typography Lab"
      description="Balance readability and style with controlled rhythm. Variable font axes react in real time to weight changes."
      cssOutput={cssOutput.trim()}
      onReset={reset}
      controls={
        <>
          <SliderControl label="Font size" value={fontSize} min={14} max={48} onChange={setFontSize} suffix="px" />
          <SliderControl
            label="Line height"
            value={lineHeight}
            min={1}
            max={2.2}
            step={0.05}
            onChange={setLineHeight}
          />
          <SliderControl
            label="Letter spacing"
            value={letterSpacing}
            min={-0.1}
            max={0.6}
            step={0.05}
            onChange={setLetterSpacing}
            suffix="ch"
          />
          <ToggleGroup
            label="Font weight (variable axis)"
            value={fontWeight}
            options={['400', '500', '600', '700']}
            onChange={setFontWeight}
          />
          <SelectControl
            label="Font family"
            value={fontFamily}
            onChange={setFontFamily}
            options={[
              { label: 'Space Grotesk + Inter', value: 'Space Grotesk, Inter, sans-serif' },
              { label: 'Inter', value: 'Inter, system-ui, sans-serif' },
              { label: 'serif sample', value: 'Georgia, Times, serif' },
            ]}
          />
        </>
      }
      preview={
        <div className="space-y-3">
          <div
            className="rounded-xl border border-white/10 bg-white/5 p-4"
            style={{
              fontFamily,
              fontSize,
              lineHeight,
              letterSpacing: `${letterSpacing}ch`,
              fontWeight: Number(fontWeight),
              fontVariationSettings: `"wght" ${fontWeight}`,
            }}
          >
            <p className="text-primary/80 text-xs uppercase tracking-[0.2em]">Live preview</p>
            <h4 className="text-2xl font-semibold text-white">Rhythm & Readability</h4>
            <p className="mt-2 text-slate-200">{sampleText}</p>
          </div>
          <p className="text-xs text-slate-400">
            Line-height sets vertical rhythm; letter-spacing uses character units (ch) to remain proportional.
          </p>
        </div>
      }
    />
  )
}

export default TypographyLab

