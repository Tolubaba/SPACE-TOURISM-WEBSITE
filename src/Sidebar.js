import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from './Context'
const Sidebar = () => {
    const {issideopen,closesidebar}=useGlobalContext();


    return (
        <div className={`${issideopen?'sidebar add':'sidebar'}`}>

            <img className='close' src='starter-code\assets\shared\icon-close.svg' onClick={closesidebar}/>

            <ul className='sidelink'>

                <li>
                    <Link to='/'> <span> 00</span> HOME</Link>

                </li>

                <li>
                    <Link to='/destination'> <span> 01</span> DESTINATION </Link>

                </li>
                <li> <Link to='/crew'> <span> 02</span> CREW</Link></li>
                <li> <Link to='/technology'> <span> 03</span> TECHNOLOGY</Link></li>
            </ul>

        </div>
    )
}

export default Sidebar