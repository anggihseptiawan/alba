import { Button } from '../Button'
import { Container } from '../Container'

export const Consultation = () => (
  <Container className="bg-yellow-400 rounded-lg">
    <p className="text-center mb-2 text-sm">
      Is software important to your business?
    </p>
    <h2 className="text-center font-semibold text-xl mb-6">
      Build it with Albatech
    </h2>
    <div className="flex justify-center">
      <Button text="Consultation Now" type="outline" />
    </div>
  </Container>
)
