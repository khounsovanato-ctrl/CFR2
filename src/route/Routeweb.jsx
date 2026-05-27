import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../page/Home'
import Aboute from '../page/Aboute'
import Sevice from '../page/Sevice'
import Travel from '../page/Travel'
import Market from '../page/Market'
import Userslogin from '../components/Userslogin'

export default function Routeweb() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<Aboute/>}></Route>
            <Route path='/service' element={<Sevice/>}></Route>
            <Route path='/travel' element={<Travel/>}></Route>
            <Route path='/market' element={<Market/>}></Route>
            <Route path='/login' element={<Userslogin/>}></Route>
        </Routes>
    </div>
  )
}
