import { Link, NavLink } from 'react-router-dom'
import { Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import ThemeToggle from '@/components/ui/ThemeToggle'
import { cn } from '@/utils/cn'

const links = [
  { to: '/', label: 'Home' },
  { to: '/visualizers', label: 'Visualizers' },
  { to: '/concepts', label: 'Concepts' },
]

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-glass bg-surface/85 backdrop-blur-xl transition-colors duration-300">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-3 text-body-text transition-colors">
          <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl bg-amber-500 shadow-sm">
            <Sparkles className="h-5 w-5 text-slate-900" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted-text">CSS Universe</p>
            <p className="text-lg font-semibold leading-tight">Visual Learning</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-glass bg-surface/60 px-2 py-1 text-sm text-body-text backdrop-blur-lg transition-colors lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  'rounded-full px-4 py-2 transition hover:text-primary',
                  isActive && 'bg-surface text-body-text shadow-glow',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button
            as={Link}
            to="/flexbox"
            size="sm"
            variant="secondary"
            className="hidden sm:inline-flex"
          >
            Start learning
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Navbar

