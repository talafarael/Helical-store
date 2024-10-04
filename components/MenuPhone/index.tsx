import React from 'react'
import './menuPhone.css'
import { useResize } from '@/utils/screenSize';
export default function MenuPhone() {
    const { width } = useResize();
  return (<>
    {(width && width < 800) ?
    <div className='phoneMenuContainer'>
        <h3>+380984884824</h3>
    </div>:null}</>
  )
}
