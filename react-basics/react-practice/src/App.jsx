import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Api from './Api'
import Database from './Database'
import SimpleFormPost from './SimplePostForm'

const App = () => {
  const bruh = "im a prop"
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Api props={bruh}/>}/>
        </Routes>
        <Database/>
        <SimpleFormPost/>
      </Router>
    </div>
  )
}

export default App