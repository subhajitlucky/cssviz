import { useState } from 'react'
import { Copy, RefreshCw } from 'lucide-react'
import GlassCard from '@/components/common/GlassCard'
import { Button } from '@/components/ui/Button'

type VisualizerPanelProps = {
  title: string
  description: string
  controls: React.ReactNode
  preview: React.ReactNode
  cssOutput?: string
  onReset?: () => void
  badge?: string
}

const VisualizerPanel = ({
  title,
  description,
  controls,
  preview,
  cssOutput,
  onReset,
  badge,
}: VisualizerPanelProps) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (!cssOutput) return
    await navigator.clipboard.writeText(cssOutput)
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }

  return (
    <GlassCard className="overflow-hidden">
      <div className="flex flex-col gap-4 border-b border-white/5 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary">
            {badge ?? 'Interactive Lab'}
          </div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">{description}</p>
        </div>
        {onReset && (
          <Button variant="secondary" size="sm" onClick={onReset} className="self-start sm:self-center">
            <RefreshCw className="h-4 w-4" />
            Reset
          </Button>
        )}
      </div>

      <div className="grid gap-6 px-6 py-6 lg:grid-cols-[360px,1fr]">
        <div className="flex flex-col gap-3">{controls}</div>
        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-primary/5 p-4">
            <div className="pointer-events-none absolute inset-0 animate-gradient-move bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.15),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(34,211,238,0.15),transparent_30%)] opacity-70" />
            <div className="relative z-10">{preview}</div>
          </div>

          {cssOutput && (
            <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/40 p-4 font-mono text-xs text-primary/90">
              <div className="flex-1 whitespace-pre-wrap break-words">{cssOutput}</div>
              <Button variant="ghost" size="sm" onClick={handleCopy}>
                <Copy className="h-4 w-4" />
                {copied ? 'Copied' : 'Copy'}
              </Button>
            </div>
          )}
        </div>
      </div>
    </GlassCard>
  )
}

export default VisualizerPanel

