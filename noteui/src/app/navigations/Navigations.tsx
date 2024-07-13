import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import { MainLayout, EmptyLayout } from '../layouts/index'
import { Account, Login, Register } from '../pages'
import { PasswordUpdate, ProfileUpdate } from '../components'


function Navigations() {

  return (
    <Routes>
      <Route path='/' element={
        <MainLayout>
          <Home></Home>
        </MainLayout>} />
      <Route path='/Note' element={<MainLayout></MainLayout>} />
      <Route
        path='/Account'
        element={<MainLayout><Account /></MainLayout>}>
        <Route path='ProfileUpdate' element={<ProfileUpdate></ProfileUpdate>} />
        <Route path='PasswordUpdate' element={<PasswordUpdate></PasswordUpdate>} />
      </Route>


      <Route path='/Login' element={<EmptyLayout><Login /></EmptyLayout>} />
      <Route path='/Register' element={<EmptyLayout><Register /></EmptyLayout>} />

    </Routes>
  )
}
export default Navigations