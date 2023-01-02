interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export const Container = ({ children, className }: ContainerProps) => (
  <div className={`max-w-7xl mx-auto px-4 py-16 ${className}`}>{children}</div>
)
