interface ButtonProps {
  text: string
  type?: 'solid' | 'outline'
}

export const Button = ({ text, type }: ButtonProps) => (
  <a
    href="/"
    className={`inline-block px-8 py-3 sm:px-12 sm:py-4 rounded-full font-bold whitespace-nowrap ${
      type === 'outline'
        ? 'border border-black'
        : ' bg-yellow-400 hover:shadow-lg hover:shadow-yellow-500'
    }`}
  >
    {text}
  </a>
)
