import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {Link } from 'react-router-dom';
import { SidebarData} from '../SidebarData';
import { IconContext } from 'react-icons';
import logo from '../../componentsi/Untitled_Artwork.png';


const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
        
        
        <IconContext.Provider value={{color: '#00aaf2'}}>
            
            <div className="navbar">
                
            
            <div className="row">
                
                <Link to="#" className="menu-bars">
                
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
                
            </div>
                <Link to ="/">
            <img 
            
            className="picture"
            src= {logo}
            />
            </Link>
                
                
            
            {/* <h1 className="text-center" style={{color: '#8739F9', fontWeight: 1000, fontFamily: "Bebas Neue", fontSize: '65px'}}>Crypto Dash</h1> */}
        
                
       
            
            </div>
           
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) =>{
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}

                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
