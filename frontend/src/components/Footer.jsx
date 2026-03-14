import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-gray-200 py-10'>
      <div className='max-w-7xl mx-auto px-4 md:flex md:justify-between'>
      
        <div className='mb-6 md:mb-0'>
            <Link to='/' className='flex gap-3 items-center'>
              {/* <img src={Logo} alt="" className='w-32'/> */}
              <img src={Logo} alt="" className='invert w-12 h-12'/>
              <h1 className=' text-3xl font-bold'>Blogs Hub</h1>
            </Link>
            <p className='mt-2'>Sharing insights, tutorials, and ideas on web development and tech.</p>
            <p className='mt-2 text-sm'>St 5, House 5, Jahangir Garden BWN</p>
            <p className='text-sm'>Email: Gerebazz@gmail.com</p>
            <p className='text-sm'>Phone:+923227859276</p>
        </div>
      
        <div className='mb-6 md:mb-0'>
            <h3 className='text-xl font-semibold'>Quick Links</h3>
            <ul className='mt-2 text-sm space-y-2'>
                <li>Home</li>
                <li>Blogs</li>
                <li>About Us</li>
                {/* <li>Contact Us</li> */}
                <li>FAQs</li>
            </ul>
        </div>
        {/* social media links */}
        <div className='mb-6 md:mb-0'>
            <h3 className='text-xl font-semibold'>Follow Us</h3>
            <div className='flex space-x-4 mt-2'>
                <FaFacebook/>
                <FaInstagram/>
                <FaTwitterSquare/>
                <FaPinterest/>
            </div>
        </div>
        {/* newsletter subscription */}
      </div>
      {/* bottom section */}
      <div className='mt-8 border-t border-gray-700 pt-6 text-center text-sm'>
        <p>&copy; {new Date().getFullYear()} <span className='text-red-500'>Blogs Hub</span>. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer