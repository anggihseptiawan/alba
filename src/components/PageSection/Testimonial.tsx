import { Container } from '../Container'
import { TitleSection } from '../TitleSection'

export const Testimonial = () => (
  <Container className="relative">
    <TitleSection
      title={
        <div className="md:w-1/3 sm:w-1/2 mx-auto">
          <p>What clients love in working with Albatech Team</p>
        </div>
      }
      subtitle="Testimonial"
    />

    <div className="flex flex-col sm:flex-row gap-6 sm:gap-16 mb-6 sm:mb-12 mt-20">
      <div className="sm:w-1/2 relative">
        <h3 className="font-semibold text-lg md:text-3xl mb-2">
          Amazing people
        </h3>
        <p className="md:text-xl sm:w-3/4">
          "They are people who are not only following the tasks, but can work as
          team. Together."
        </p>
        <div className="flex gap-3 mt-5 items-center">
          <div className="w-10 h-10 bg-gray-300 rounded-full" />
          <div>
            <small className="text-xs block mb-1">Matthijs Piest</small>
            <small className="text-xs block text-gray-400">
              <span>COO</span> at <span>WiebetaaltWat</span>
            </small>
          </div>
        </div>

        <figure className="absolute top-28 right-6 sm:-right-6 md:right-10 sm:top-10 -z-10">
          <img src="/dots.svg" alt="dots-image" />
        </figure>
      </div>
      <div className="sm:w-1/2 sm:-mt-4">
        <h3 className="font-semibold text-lg mb-2">Amazing people</h3>
        <p className="sm:w-3/4">
          "They are people who are not only following the tasks, but can work as
          team. Together."
        </p>
        <div className="flex gap-3 mt-5 items-center">
          <div>
            <small className="text-xs block mb-1">Matthijs Piest</small>
            <small className="text-xs block text-gray-400">
              <span>COO</span> at <span>WiebetaaltWat</span>
            </small>
          </div>
        </div>
      </div>
    </div>

    <div className="flex flex-col sm:flex-row gap-6 sm:gap-16 mb-12">
      <div className="sm:w-1/2">
        <div className="sm:w-3/4 mb-4">
          <h3 className="font-semibold text-lg mb-2">Amazing people</h3>
          <p>
            "They are people who are not only following the tasks, but can work
            as team. Together."
          </p>
          <div className="flex gap-3 mt-5 items-center">
            <div>
              <small className="text-xs block mb-1">Matthijs Piest</small>
              <small className="text-xs block text-gray-400">
                <span>COO</span> at <span>WiebetaaltWat</span>
              </small>
            </div>
          </div>
        </div>
        <div className="sm:w-3/5 md:-mt-6 sm:ml-auto">
          <h3 className="font-semibold text-lg mb-2">Amazing people</h3>
          <p>
            "They are people who are not only following the tasks, but can work
            as team. Together."
          </p>
          <div className="flex gap-3 mt-5 items-center">
            <div>
              <small className="text-xs block mb-1">Matthijs Piest</small>
              <small className="text-xs block text-gray-400">
                <span>COO</span> at <span>WiebetaaltWat</span>
              </small>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:w-1/2 sm:-mt-10 relative">
        <h3 className="font-semibold text-lg md:text-3xl mb-2">
          Partnership approach
        </h3>
        <p className="md:text-xl">
          "We felt like we had a true partner throughout the process. They were
          clearly interested on our long-term success."
        </p>
        <div className="flex gap-3 mt-5 items-center">
          <div className="w-10 h-10 bg-gray-300 rounded-full" />
          <div>
            <small className="mb-1">Matthijs Piest</small>
            <small className="text-xs block text-gray-400">
              <span>COO</span> at <span>WiebetaaltWat</span>
            </small>
          </div>
        </div>
        <figure className="absolute right-2 bottom-2 sm:bottom-14 rotate-180">
          <img src="/quotes.svg" className="w-20 md:w-40" alt="qutoes-image" />
        </figure>
      </div>
    </div>

    <figure className="absolute -left-2 sm:-left-24 top-36 md:top-40 md:-left-20 sm:w-full">
      <img src="/quotes.svg" className="w-20 md:w-40" alt="qutoes-image" />
    </figure>
    <figure className="absolute -left-28 bottom-12">
      <img src="/dots.svg" className="grayscale" alt="dots-image" />
    </figure>
  </Container>
)
