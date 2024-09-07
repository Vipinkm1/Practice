
import './App.css'
import { ThemeProvider } from './component/Context'
import Practise from './component/Practise'

function App() {
  return (

    <>
    <ThemeProvider>
    <Practise/>
    </ThemeProvider>
    </>
  )
}

export default App
