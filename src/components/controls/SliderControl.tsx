type SliderControlProps = {
  label: string
  value: number
  min: number
  max: number
  step?: number
  onChange: (value: number) => void
  suffix?: string
}

const SliderControl = ({ label, value, min, max, step = 1, onChange, suffix }: SliderControlProps) => (
  <label className="flex flex-col gap-2 rounded-xl border border-white/10 bg-white/5 p-3">
    <div className="flex items-center justify-between text-sm text-slate-300">
      <span>{label}</span>
      <span className="font-semibold text-white">
        {value}
        {suffix}
      </span>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="accent-primary"
    />
  </label>
)

export default SliderControl

