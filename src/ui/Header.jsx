import React from 'react'
import useUser from '../feature/authentication/useUser'
import HeaderMenu from './HeaderMenu';
import UserAvatar from '../feature/authentication/UserAvatar';

function Header() {
  const {user,isLoading} = useUser();
  return (
    <div className="bg-secondary-0 py-4 px-8 border-secondary-200">
      <div className={`container max-w-screen-lg flex items-center justify-end gap-x-8
      ${isLoading ? "blur-sm opacity-50" :""}
      `}>
        <HeaderMenu />
        <UserAvatar />
      </div>
    </div>
  )
}

export default Header
