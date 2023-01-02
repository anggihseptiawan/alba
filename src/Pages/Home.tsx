import { useEffect, useState } from 'react'
import { FloatingButton } from '../components/FloatingButton'
import { Footer } from '../components/Footer'
import { Header } from '../components/PageSection/Header'
import { Navbar } from '../components/Navbar'
import { OurProgress } from '../components/PageSection/OurProgress'
import { Portfolio } from '../components/PageSection/Portfolio'
import { Service } from '../components/PageSection/Service'
import { Testimonial } from '../components/PageSection/Testimonial'
import { Content } from '../types/content'

import { Consultation } from '../components/PageSection/Consultation'
import { Clients } from '../components/PageSection/Clients'

function Home() {
  const [content, setContent] = useState<Content | null>(null)

  useEffect(() => {
    const fetcher = async () => {
      const response = await fetch('/data/content.json').then((res) =>
        res.json()
      )
      setContent(response.data)
    }

    fetcher()
  }, [])

  return (
    <div>
      <Navbar />
      <Header />
      <Service content={content} />
      <OurProgress />
      <Portfolio portfolio={content?.portfolio} />
      <Testimonial />
      <Clients />
      <Consultation />
      <FloatingButton />
      <Footer />
    </div>
  )
}

export default Home
