import React, { useState } from 'react'
// import { Redirect } from 'react-router-dom';
import {useSignOut} from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';
export default function Home() {
  const signOut = useSignOut();
  const navigate = useNavigate();

  const logout = () => {
    signOut();
    navigate('/login');
  }


  return (
    <>
    <h1>home page</h1>
    <button onClick={logout}>logout</button>
    </>
  )
}
