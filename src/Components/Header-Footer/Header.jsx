import React from 'react'
import logo from '../../assets/home/logo.png'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Header = () => {
  return (
    <div className='p-4 flex'>

        <div className='container mx-auto'>
            <img className='w-[200px] h-[50px] ml-[250px]' src={logo} alt="" />
        </div>
        <div className='flex items-center text-[30px] gap-2 mr-[210px]' >
        <div ><FaFacebook /></div>
        <div><FaTwitter /></div>
        <div><FaInstagram /></div>
        <div><FaYoutube /></div>
        </div>
        <div className='flex items-center mr-[250px] '>
            <div className='bg-red-500 flex text-white items-center h-[50px] '>
                <a href='#' className='font-bold p-2.5'>Homes</a>
            </div>
            <div>
                <a href='#' className='font-bold p-2.5'>Abouts</a>
            </div>
        </div>
    </div>
  )
}

export default Header
