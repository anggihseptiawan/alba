import { Button } from '../Button'
import { Container } from '../Container'

export const Header = () => (
  <Container className="flex flex-col lg:flex-row">
    <div className="flex flex-col justify-center mb-12">
      <h1 className="p-2 bg-white border border-black font-bold text-center text-2xl mb-2 sm:text-4xl lg:text-left lg:mt-36 lg:text-7xl">
        Build or scale up
      </h1>
      <h2 className="font-semibold text-center text-xl lg:text-left lg:text-4xl lg:mt-4 mb-6">
        your development team
      </h2>
      <div className="flex justify-center lg:justify-start mb-6">
        <span className="h-1 w-14 bg-yellow-400 rounded-lg mr-2 mt-3 inline-block"></span>
        <p className="drop-shadow-sm">in weeks, not months</p>
      </div>
      <div className="flex justify-center lg:justify-start w-full">
        <Button text="Book now" />
      </div>
    </div>
    <div className="static lg:absolute lg:right-0">
      <img
        src="/header.png"
        className="w-full relative -z-10"
        alt="img-header"
      />
    </div>
  </Container>
)
