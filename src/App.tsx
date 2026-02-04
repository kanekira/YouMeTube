import Header from './components/headerComponent/Header'
import Body from './components/body/Body'

function App() {

  return (
    <div className='p-5'>
      <Header />
      <Body />
      {
        /* 
        - Header
          - SearchBar
          - Hamburger
          - Youtube button
          - Sign In
          - 3 dots popup window
        - Body
          - VideoList
          - VideoWidget
        - CategoryList
        - SidePanel
        */
      }
    </div>
  )
}

export default App
