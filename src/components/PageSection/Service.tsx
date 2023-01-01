import { Content } from '../../types/content'
import { TitleSection } from '../TitleSection'

interface ServiceProps {
  content: Content | null
}

export const Service = ({ content }: ServiceProps) => (
  <section className="max-w-7xl mx-auto px-4 py-12 md:pt-44">
    <TitleSection
      title="From product design to software continuous delivery"
      subtitle="Complete Package"
    />

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
      {content?.service.map((item, idx) => (
        <a href="/" key={idx} className="block group">
          <div className="h-full p-4 border border-gray-400 group-hover:border-yellow-400 rounded-lg">
            <img
              src={item.iconUrl}
              className="w-6 object-contain sm:w-10 sm:h-10"
              alt={item.title}
            />
            <p className="font-semibold text-lg mt-4 mb-1 text-yellow-400">
              {item.title}
              <img
                src="/arrow.svg"
                className="hidden ml-2 group-hover:inline-block"
                alt="arrow-icon"
              />
            </p>
            <p>{item.description}</p>
          </div>
        </a>
      ))}
    </div>

    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 place-items-center gap-6">
      {content?.techStack.map((url, idx) => (
        <img key={idx} src={url} className="w-16 sm:w-24" alt="icon" />
      ))}
    </div>
  </section>
)
