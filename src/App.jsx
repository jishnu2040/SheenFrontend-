import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Signup,Login,ForgetPassword,VerifyCode,ResetPassword, Profile} from "./components"
import {ToastContainer } from "react-toastify"
import Home from './Pages/Home/Home'
import PartnerDetails from './components/PartnerDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path="/verify" element={<VerifyCode />} />
        <Route path='/login' element={<Login/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path='/dashboard' element={<Home />}></Route>
        <Route path='/forgotpassword' element={<ForgetPassword/>}></Route>
        <Route path='password-reset-confirm/:uid/:token' element={<ResetPassword />}></Route>
        <Route path='/partner-details' element={<PartnerDetails/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
