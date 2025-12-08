import { useMemo, useState } from 'react'
import VisualizerPanel from './VisualizerPanel'
import SliderControl from '@/components/controls/SliderControl'
import SwitchControl from '@/components/controls/SwitchControl'

const BoxModelLab = () => {
  const [padding, setPadding] = useState(18)
  const [border, setBorder] = useState(4)
  const [margin, setMargin] = useState(20)
  const [radius, setRadius] = useState(16)
  const [borderBox, setBorderBox] = useState(true)

  const cssOutput = useMemo(
    () => `
.box {
  margin: ${margin}px;
  padding: ${padding}px;
  border: ${border}px solid rgba(99, 102, 241, 0.8);
  border-radius: ${radius}px;
  box-sizing: ${borderBox ? 'border-box' : 'content-box'};
}
`,
    [border, borderBox, margin, padding, radius],
  )

  const reset = () => {
    setPadding(18)
    setBorder(4)
    setMargin(20)
    setRadius(16)
    setBorderBox(true)
  }

  return (
    <VisualizerPanel
      title="Box Model Visualizer"
      description="Adjust padding, border, and margin to see how total box size changes. Toggle box-sizing to compare content-box vs border-box."
      cssOutput={cssOutput.trim()}
      onReset={reset}
      controls={
        <>
          <SliderControl label="Padding" value={padding} min={0} max={48} onChange={setPadding} suffix="px" />
          <SliderControl label="Border" value={border} min={0} max={18} onChange={setBorder} suffix="px" />
          <SliderControl label="Margin" value={margin} min={0} max={48} onChange={setMargin} suffix="px" />
          <SliderControl label="Radius" value={radius} min={0} max={30} onChange={setRadius} suffix="px" />
          <SwitchControl label="Use border-box" checked={borderBox} onChange={setBorderBox} />
        </>
      }
      preview={
        <div className="space-y-3">
          <div className="rounded-xl border border-dashed border-white/20 bg-black/30 p-6">
            <div className="rounded-xl bg-amber-500/10 p-4 text-xs text-amber-200">
              margin ({margin}px)
              <div
                className="my-3 rounded-xl bg-primary/10 p-3 text-slate-100"
                style={{ padding, border: `${border}px solid rgba(99,102,241,0.7)`, borderRadius: radius }}
              >
                padding ({padding}px)
                <div className="mt-3 rounded-xl bg-emerald-500/20 p-4 text-slate-900 shadow-inner">
                  <div className="rounded-lg bg-white/90 p-3 text-sm font-semibold text-slate-800 shadow">
                    content area
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-xs text-slate-400">
            Border-box keeps width/height stable by subtracting padding and border from the declared size.
          </p>
        </div>
      }
    />
  )
}

export default BoxModelLab

