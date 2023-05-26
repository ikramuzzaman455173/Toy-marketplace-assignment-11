import React, { useContext } from 'react'
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'
import { AuthContext } from '../AuthProvider/Authprovider';
const ImgTooltip = () => {
  const { user } = useContext(AuthContext)
  // console.log(user.photoURL);

  return (
    <div className='cursor-pointer'>
      <img id="my-anchor-element" className='w-[3.5rem] h-[3.5rem] border-2 border-slate-600 ml-4  p-2 rounded-full' alt='user image' src={user.photoURL} />
      <Tooltip className='tracking-wider'
        anchorSelect="#my-anchor-element"
        content={user.displayName}
      />
    </div>
  )
}

export default ImgTooltip
