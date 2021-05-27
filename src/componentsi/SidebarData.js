import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from 'react-icons/bs';
import * as FcIcons from 'react-icons/fc';
import * as BiIcons from 'react-icons/bi';
import * as MdIcons from 'react-icons/md';



export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',
    },
    {
        
        title: 'News',
        path: '/news',
        icon: <BiIcons.BiNews />,
        cName: 'nav-text',
    },
    {
        title: 'Coins',
        path: '/list',
        icon: <BsIcons.BsCardChecklist />,
        cName: 'nav-text',
    },
    {
        title: 'About',
        path: '/About',
        
        
        icon: <FcIcons.FcAbout />,
        cName: 'nav-text',
    },
    {
        title: 'Updates',
        path: '/updates',
        icon: <MdIcons.MdSystemUpdateAlt />,
        cName: 'nav-text',
    },
]