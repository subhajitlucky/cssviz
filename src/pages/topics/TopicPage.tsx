import { type ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import PageTransition from '@/components/common/PageTransition'
import GlassCard from '@/components/common/GlassCard'
import SectionHeader from '@/components/common/SectionHeader'
import { Button } from '@/components/ui/Button'
import AnimationLab from '@/components/visualizers/AnimationLab'
import BoxModelLab from '@/components/visualizers/BoxModelLab'
import ColorLab from '@/components/visualizers/ColorLab'
import FlexboxLab from '@/components/visualizers/FlexboxLab'
import GridLab from '@/components/visualizers/GridLab'
import TypographyLab from '@/components/visualizers/TypographyLab'
import VariablesLab from '@/components/visualizers/VariablesLab'
import { topics, type Topic, type VisualizerKey } from '@/data/topics'

const visualizers: Partial<Record<VisualizerKey, ReactElement>> = {
  flexbox: <FlexboxLab />,
  grid: <GridLab />,
  boxModel: <BoxModelLab />,
  typography: <TypographyLab />,
  colors: <ColorLab />,
  animations: <AnimationLab />,
  variables: <VariablesLab />,
}

const TopicPage = ({ topic }: { topic: Topic }) => {
  const related = topics
    .filter((item) => item.path !== topic.path && item.tags.some((tag) => topic.tags.includes(tag)))
    .slice(0, 3)

  const visualizer = topic.visualizer ? visualizers[topic.visualizer] : null

  return (
    <PageTransition>
      <div className="space-y-10">
        <div className="flex flex-col gap-4">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back home
          </Link>
          <GlassCard>
            <div className="grid gap-6 p-6 lg:grid-cols-[2fr,1fr]">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.2em] text-primary">{topic.difficulty}</p>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">{topic.name}</h1>
                <p className="text-slate-600 dark:text-slate-200">{topic.summary}</p>
                <div className="flex flex-wrap gap-2 text-xs text-slate-500 dark:text-slate-300">
                  {topic.tags.slice(0, 5).map((tag) => (
                    <span key={tag} className="rounded-full bg-slate-100 dark:bg-white/10 px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button as={Link} to="/flexbox" variant="secondary">
                    Explore visualizers
                  </Button>
                  <Button as={Link} to="/debugging" variant="ghost">
                    Debugging tools
                  </Button>
                </div>
              </div>
              <div className="space-y-3 rounded-2xl border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/5 p-4 text-sm text-slate-600 dark:text-slate-200">
                <p className="text-xs uppercase tracking-[0.18em] text-primary">Learning checklist</p>
                <ul className="space-y-2">
                  {topic.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-[6px] h-2 w-2 rounded-full bg-primary" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </GlassCard>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.6fr,1fr]">
          <GlassCard>
            <div className="space-y-4 p-5">
              <SectionHeader
                eyebrow="Deep dive"
                title="Why this matters"
                subtitle="Principles, mental models, and debugging clues tailored to the topic."
              />
              <div className="grid gap-3 text-sm text-slate-600 dark:text-slate-300 md:grid-cols-2">
                <div className="rounded-xl border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/5 p-4">
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Visual intuition</h4>
                  <p className="mt-2">
                    Each property is paired with motion or color feedback so you build muscle memory, not just recall
                    syntax.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/5 p-4">
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Copy-ready CSS</h4>
                  <p className="mt-2">
                    Controls emit exact CSS you can copy. Use it as a starter token or paste into DevTools for instant
                    validation.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/5 p-4">
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Performance notes</h4>
                  <p className="mt-2">
                    Learn where reflow, repaint, or compositing occurs so you avoid jank and choose GPU-friendly paths.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/5 p-4">
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Accessibility first</h4>
                  <p className="mt-2">
                    Focus-visible, reduced-motion, and contrast tips are woven into every lab to keep experiences
                    inclusive.
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <div className="space-y-3 p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-primary">Practice</p>
              <div className="space-y-2 text-sm text-slate-600 dark:text-slate-200">
                <p>
                  Try recreating a UI card using this topic. Toggle between dark and light modes to validate token
                  contrast and responsiveness.
                </p>
                <p className="text-slate-500 dark:text-slate-400">Tip: use DevTools overlays (grid/flex) plus the copy CSS button.</p>
              </div>
              <Link className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-slate-900 dark:hover:text-white" to="/debugging">
                Open debugging playbook
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </GlassCard>
        </div>

        {visualizer && (
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            {visualizer}
          </motion.div>
        )}

        {related.length > 0 && (
          <section className="space-y-4">
            <SectionHeader title="Related topics" subtitle="Keep exploring adjacent concepts." />
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <GlassCard key={item.path}>
                  <div className="space-y-2 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-primary">{item.difficulty}</p>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{item.name}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{item.summary}</p>
                    <Link className="text-sm font-semibold text-primary hover:text-slate-900 dark:hover:text-white" to={item.path}>
                      View page
                    </Link>
                  </div>
                </GlassCard>
              ))}
            </div>
          </section>
        )}
      </div>
    </PageTransition>
  )
}

export default TopicPage

