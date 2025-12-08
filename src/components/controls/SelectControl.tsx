type SelectControlProps = {
  label: string
  value: string
  options: { label: string; value: string }[]
  onChange: (value: string) => void
}

const SelectControl = ({ label, value, options, onChange }: SelectControlProps) => (
  <label className="flex flex-col gap-2 rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-slate-300">
    <span>{label}</span>
    <select
      className="rounded-lg border border-white/10 bg-surface px-3 py-2 text-slate-100 outline-none focus:border-primary focus:ring-1 focus:ring-primary/60"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </label>
)

export default SelectControl

