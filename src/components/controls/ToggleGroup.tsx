import { cn } from '@/utils/cn'

type ToggleGroupProps = {
  label: string
  options: string[]
  value: string
  onChange: (value: string) => void
}

const ToggleGroup = ({ label, options, value, onChange }: ToggleGroupProps) => (
  <div className="flex flex-col gap-2 rounded-xl border border-white/10 bg-white/5 p-3">
    <span className="text-sm text-slate-300">{label}</span>
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          className={cn(
            'rounded-lg px-3 py-2 text-sm transition',
            value === option
              ? 'bg-gradient-to-r from-primary/80 via-secondary/70 to-accent/70 text-slate-900 font-semibold'
              : 'bg-surface text-slate-200 hover:bg-white/10',
          )}
        >
          {option}
        </button>
      ))}
    </div>
  </div>
)

export default ToggleGroup

