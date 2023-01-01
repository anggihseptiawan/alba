export interface Content {
  portfolio: Portfolio[]
  service: Service[]
  techStack: string[]
}

interface Portfolio {
  title: string
  description: string
  category: string
  thumbnailUrl: string
}

interface Service {
  iconUrl: string
  title: string
  description: string
}
