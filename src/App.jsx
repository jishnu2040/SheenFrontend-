import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Signup,Login, Profile, ForgetPassword,VerifyCode} from "./components"
import {ToastContainer} from "react-toastify"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Signup/>}></Route>
        <Route path="/verify" element={<VerifyCode />} />
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Profile/>}></Route>
        <Route path='/forgetpassword' element={<ForgetPassword/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
