import React from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={()=>{navigate('/login/doctor')}}>Doctor</button>
      <button onClick={()=>{navigate('/login/patient')}}>Patient</button>
    </div>
  )
}
