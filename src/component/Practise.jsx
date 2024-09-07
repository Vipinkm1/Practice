import React, { useContext } from 'react'
import { Context } from './Context'
const Practise = () => {
    const { theme, toggleMenu } = useContext(Context)
    return (
        <div>
            <p>{theme}</p>
            <button onClick={toggleMenu} className='btn'>
               Toggle to{'light' ?"dark": 'light'}
            </button>
        </div>
    )
}
export default Practise