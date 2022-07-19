import React from 'react'
import { Routes, Route } from 'react-router-dom';

// import { Users, UserDetail } from '@/views';

import Users from "../views/Users";
import UserDetail from "../views/UserDetail";

export const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Users />} />
        <Route path='user-detail' element={<UserDetail />} />
    </Routes>
  )
}
