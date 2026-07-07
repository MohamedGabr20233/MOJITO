import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import NavBar from './components/NavBar'
// 
gsap.registerPlugin(ScrollTrigger, SplitText)
const App = () => {
  return (
    <main className=''>
      <NavBar />
      <div className=" bg-red-400 h-400 block w-full">s</div>
    </main>
  )
}

export default App