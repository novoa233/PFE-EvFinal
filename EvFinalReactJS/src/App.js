import React, {useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/login.component'
import SignUp from './components/signup.component'
import Landing from './components/landing.component'
import Dashboard from './components/dashboard.component'
import Navbar from './components/Navbar'

function App() {
const [user, setUser] = useState(null)

const handleUser=(email, password)=>{
  if(user || !email || !password){
    setUser(null)
  }else{

    if(email=='oscar.novoa@gmail.com' && password=='123456'){

      setUser({
        id: 1,
        nombre: 'Oscar',
        apellido: 'Novoa',
        email:'oscar.novoa@test.com',
        password: '123456'
      })
    }else{
      return alert('usuario o password invalidos')
    }
  }
}


  return (
    <Router>
      <div className="App">
        <header className="App-header">
      
        </header>
        <Navbar />
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exactindex path="/" element={<Landing />} />
              <Route path="/landing" element={<Landing />} />
              <Route path="/ingreso" element={<Login user={user} manejador={handleUser}/>} />
              <Route path="/registro" element={<SignUp />} />
              <Route path="/dashboard" element={<Dashboard user={user}/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}
export default App