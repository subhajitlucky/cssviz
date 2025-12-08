import { type ComponentPropsWithoutRef, type ElementType } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/cn'

const buttonStyles = cva(
  'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-60 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary:
          'bg-gradient-to-r from-primary via-secondary to-accent text-white shadow-glow hover:scale-[1.02] hover:shadow-glow/70',
        secondary:
          'bg-surface text-body-text border border-glass hover:border-slate-300 dark:hover:border-white/30 hover:shadow-glow hover:-translate-y-[1px]',
        ghost: 'text-muted-text hover:text-body-text hover:bg-black/5 dark:hover:bg-white/5',
      },
      size: {
        sm: 'px-3 py-2 text-sm',
        md: 'px-4 py-2.5 text-sm',
        lg: 'px-6 py-3 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

type PolymorphicProps<E extends ElementType> = {
  as?: E
} & Omit<ComponentPropsWithoutRef<E>, 'as'> &
  VariantProps<typeof buttonStyles>

export const Button = <E extends ElementType = 'button'>({
  as,
  className,
  variant,
  size,
  ...props
}: PolymorphicProps<E>) => {
  const Component = (as ?? 'button') as ElementType
  return <Component className={cn(buttonStyles({ variant, size }), className)} {...props} />
}

