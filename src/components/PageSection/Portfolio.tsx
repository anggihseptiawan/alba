import { Content } from '../../types/content'
import { Button } from '../Button'
import { Container } from '../Container'
import { TitleSection } from '../TitleSection'

interface PortfolioProps {
  portfolio: Content['portfolio'] | undefined
}

export const Portfolio = ({ portfolio }: PortfolioProps) => (
  <Container>
    <TitleSection
      title={
        <div className="sm:w-1/2 mx-auto">
          <p>The software that we build takes our clients to the next level</p>
        </div>
      }
      subtitle="Portfolio"
    />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
      {portfolio?.map((item, idx) => (
        <a href="/" className="block" key={idx}>
          <div className="h-full border border-gray-400 hover:border-yellow-400 rounded-lg">
            <img src={item.thumbnailUrl} className="w-full" alt={item.title} />
            <div className="p-4">
              <small className="text-gray-500">{item.category}</small>
              <p className="font-semibold text-yellow-400 my-2">{item.title}</p>
              <p>{item.description}</p>
            </div>
          </div>
        </a>
      ))}
    </div>

    <div className="flex justify-center">
      <Button text="Learn more" />
    </div>
  </Container>
)
