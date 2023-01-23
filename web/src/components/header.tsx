import React from 'react'
import {GrPowerShutdown} from 'react-icons/gr'
import {IoSettingsOutline} from 'react-icons/io5'

import gtrade_logo from "../assets/gtrade-logo.png";


const Header = () => {
    return (
        <div className="w-[100%] h-[8.1vh] flex flex-row gap-6">
            <img src={gtrade_logo} alt="Gtrade Logo ." />
            <div className="flex flex-row justify-start items-center gap-8">
                <p className="text-[rgb(138,138,150)] text-md font-sans font-semibold hover:cursor-pointer">Trade</p>
                <p className="text-[rgb(138,138,150)] text-md font-sans font-semibold hover:cursor-pointer">Earn</p>
                <p className="text-[rgb(138,138,150)] text-md font-sans font-semibold hover:cursor-pointer">Bridge</p>
                <p className="text-[rgb(138,138,150)] text-md font-sans font-semibold hover:cursor-pointer">Statistics</p>
                <p className="text-[rgb(138,138,150)] text-md font-sans font-semibold hover:cursor-pointer">Documentation</p>
            </div>
            <div className=' w-[60%] h-[100%] flex flex-row justify-end items-center'>
                <div className='w-[90%] h-[100%] mr-[5%] gap-8 flex flex-row items-center justify-end'>
                    <button className='h-[5vh] w-[20%] flex flex-row justify-center items-center gap-3 border-[1px] border-solid border-zinc-500 rounded text-[rgb(138,138,150)] text-md font-sans font-semibold'>Connect Wallet <GrPowerShutdown color='rgb(113, 113, 122)' fontSize={'1.3rem'} /></button>
                    <IoSettingsOutline color='rgb(113, 113, 122)' fontSize={'1.5rem'} />
                </div>
            </div>
        </div>
    )
}

export default Header