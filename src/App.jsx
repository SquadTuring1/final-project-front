import './App.css'
import Router from './Routes/Router'
import { GlobalStyle, MainApp } from './ui/index';
MainApp


function App() {

  return (
    <MainApp>
      <GlobalStyle />
      <Router />
    </MainApp>
  )
}

export default App
