import { Input, Select } from 'antd'
import React from 'react'
import { AiOutlineBell, AiOutlineMessage } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { Avatar } from 'antd';
import man from "../assets/For-Men.jpg"

import { LiaSearchSolid } from 'react-icons/lia';

const Navbar = () => {
    return (
        <div className="flex items-center md:flex justify-start md:justify-between text-light bg-main  md:px-32 py-2">
            <Link to="/"
                className="w-28 flex items-center justify-center rounded-full text-2xl font-bold ">
                <img src="https://img.innoloft.com/logo.svg" alt="something"
                    className="w-48 h-7 bg-white" />
            </Link>

            <div className="relative w-80 hidden md:block">
                <Input placeholder="Enter interest, keyword, company name, etc." />
                <span className="absolute right-2 top-1.5 text-black/75 text-xl"><LiaSearchSolid /></span>
            </div>

            <div className="md:flex md:items-center md:justify-center gap-3 hidden md:block">
                <AiOutlineMessage />
                <Select
                    defaultValue="EN"
                    
                    // style={{ backgroundColor: 'transparent', color: 'white' }}
                    style={{ border: 'none', backgroundColor: 'transparent' }}
                    className='custom-select bg-yellow-800'
                    options={[
                        {
                            value: 'EN',
                            label: 'EN',
                        },
                    ]}
                />
                <AiOutlineBell className='hidden md:block'/>
                {/* <IoIosNotificationsOutline/> */}
                <Avatar src={man} size={32} className='hidden md:block'/>

                <Select
                    // defaultValue="EN"
                    
                    style={{ backgroundColor: 'transparent', color: 'white' }}
                    className='custom-select bg-yellow-800 -ml-6 hidden md:block'
                    options={[
                        {
                            value: 'John Doe',
                            label: 'John Doe',
                        },
                    ]}
                />

            </div>
        </div>
    )
}

export default Navbar