import React from 'react'
import { useCookies } from 'react-cookie'
import UserProfile from '../myPage/userProfile';

export default function Index() {
  const cookies = useCookies();

  return (
    <div>
      홈화면
      <UserProfile />
    </div>
  )
}