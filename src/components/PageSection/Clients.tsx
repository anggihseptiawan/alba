import Slider from 'react-slick'
import { Container } from '../Container'

export const Clients = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  }

  return (
    <Container className="pt-12 pb-28">
      <Slider {...settings}>
        <figure>
          <img src="/hippo.png" alt="hippo" />
        </figure>
        <figure>
          <img src="/home-living.png" alt="home-living" />
        </figure>
        <figure>
          <img src="/ilios.png" alt="ilios" />
        </figure>
        <figure>
          <img src="/dio.png" alt="dio" />
        </figure>
        <figure>
          <img src="/melandas.png" alt="melandas" />
        </figure>
      </Slider>
    </Container>
  )
}
