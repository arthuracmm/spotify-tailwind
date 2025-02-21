import './App.css'
import { Header} from './components/header'
import { ASideLeft } from './components/asideleft'
import { Main } from './components/main'
import { ASideRight } from './components/aSideRight'
import { Footer } from './components/footer'

function App() {

  return (
    <>
      <div className="bg-zinc-950 h-screen flex flex-col p-2">
        <Header />
        <div className="flex flex-1 gap-2 overflow-hidden">
          <ASideLeft />
          <Main />
          <ASideRight />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
