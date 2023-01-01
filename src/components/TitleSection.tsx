import { ReactElement } from 'react'

interface TitleSectionProps {
  title: string | ReactElement
  subtitle: string
}

export const TitleSection = ({ title, subtitle }: TitleSectionProps) => (
  <div>
    <p className="text-center text-gray-500 mb-2 text-sm">{subtitle}</p>
    <h2 className="text-center font-semibold text-xl mb-6 sm:mb-10 md:text-3xl">
      {title}
    </h2>
  </div>
)
