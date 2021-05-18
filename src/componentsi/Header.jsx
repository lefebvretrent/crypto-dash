import { Block } from '@material-ui/icons';
import { AutoScaleAxis } from 'chartist';
import React from 'react';
import logo from './Untitled_Artwork.png';
const Header = () => {
    return (
        <div>
            <center>
            <img 
            
            className="picture"
            src= {logo}
            />
            </center>
            {/* <h1 className="text-center" style={{color: '#8739F9', fontWeight: 1000, fontFamily: "Bebas Neue", fontSize: '65px'}}>Crypto Dash</h1> */}
        </div>
    )
}

export default Header
