import { useLocation } from 'react-router-dom'
import { Container } from '../components/Container'

const Profile = () => {
  const location = useLocation()

  return (
    <Container className="pt-2">
      <h1>Profile page</h1>
      <p>Token : {location.state}</p>
    </Container>
  )
}

export default Profile
