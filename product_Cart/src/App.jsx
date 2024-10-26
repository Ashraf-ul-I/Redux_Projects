
import { Provider } from 'react-redux'
import './App.css'
import Navbar from './Components/Navbar'
import store from './redux/store'

function App() {


  return (
    <Provider store={store}>
    <div >

   <Navbar/>
   
    </div >
    </Provider>
  )
}

export default App
