import { Card } from './components/Card.jsx'
import { Section } from './components/Section.jsx'
import UserCard from './components/UserCard.jsx'
const App = () => {
  return (
  <>
    <UserCard />
    <Card name="Rajvirsinh" role="React developer" age={21}/>
   <Card name="Elon Musk" role="CEO" age={53} />
    <Card name="Ketan" age={19}/>
    <Section>
      <h1>Rajavirsinh</h1>
      <p>I am developing new things daily</p>
    </Section>
  </>
    
  )
}

export default App