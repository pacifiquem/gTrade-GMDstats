import React, { useEffect, useRef } from 'react'
import { useState } from 'react'

import {IoSettingsOutline} from 'react-icons/io5'
import {MdOutlinePowerSettingsNew} from 'react-icons/md'
import {FaGreaterThan} from 'react-icons/fa'
import gtrade_logo from "../assets/gtrade-logo.png";
import ColorTheme from '../components/colorTheme';

const Header = () => {

    const [theme, setTheme] = useState('Dark');
    const [preference, setPreference] = useState('Custom');

    const themeRef = useRef<HTMLDivElement>(null);
    const settingRef = useRef<HTMLDivElement>(null);

    const documentRef = useRef(document);

    return (
        <div className='relative'>
            <div className="w-[100%] h-[8.1vh] flex flex-row gap-6">
                <img src={gtrade_logo} alt="Gtrade Logo ." />
                <div className="flex flex-row justify-start items-center gap-8">
                    <p className="text-[rgb(138,138,150)] text-md font-sans font-semibold hover:cursor-pointer">Trade</p>
                    <p className="text-[rgb(138,138,150)] text-md font-sans font-semibold hover:cursor-pointer">Earn</p>
                    <p className="text-[rgb(138,138,150)] text-md font-sans font-semibold hover:cursor-pointer">Bridge</p>
                    <p className="text-[rgb(138,138,150)] text-md font-sans font-semibold hover:cursor-pointer">Statistics</p>
                    <p className="text-[rgb(138,138,150)] text-md font-sans font-semibold hover:cursor-pointer">Documentation</p>
                </div>
                <div className=' w-[60%] h-[100%] flex flex-row justify-end items-center relative'>
                    <div className='w-[90%] h-[100%] mr-[5%] gap-8 flex flex-row items-center justify-end'>
                        <button className='h-[5vh] w-[20%] flex flex-row justify-center items-center gap-3 border-[1px] border-solid border-zinc-500 rounded text-[rgb(138,138,150)] text-md font-sans font-semibold'>Connect Wallet <MdOutlinePowerSettingsNew fontSize={"1.4rem"} color="rgb(113, 113, 122) "/></button>
                        <IoSettingsOutline color='rgb(113, 113, 122)' fontSize={'1.5rem'} className="hover:cursor-pointer" onClick={() => {
                            settingRef.current?.classList.remove('hidden'); 
                        }} />
                    </div>
                </div>
            </div>
            <div ref={settingRef} className=' hidden absolute h-[23vh] w-[20%] bg-[rgb(28,28,34)] flex flex-col justify-center items-center gap-3 right-8 rounded-sm'>
                <p className='text-[rgb(138,138,150)] text-xl mb-2 mt-1'>Settings</p>
                <button className='h-[25%] bg-[rgb(57,57,63)] w-[80%] border-[1px] border-solid border-zinc-500 rounded text-[rgb(138,138,150)] text-md font-sans font-semibold' onClick={() => {
                    themeRef.current?.classList.remove('hidden');
                }}>Change Theme &nbsp;&nbsp;&nbsp;
                    <span>{theme} <FaGreaterThan fontSize={"1rem"} color="rgb(113, 113, 122)" className='inline mt-[-.2rem]'/></span>
                </button>
                <button className='h-[25%] w-[80%] bg-[rgb(57,57,63)] border-[1px] border-solid border-zinc-500 rounded text-[rgb(138,138,150)] text-md font-sans font-semibold'>Gas Perferences &nbsp;&nbsp;&nbsp;
                    <span>{preference} <FaGreaterThan fontSize={"1rem"} color="rgb(113, 113, 122)" className='inline mt-[-.2rem]'/></span>
                </button>
            </div>
            <div ref={themeRef} className="hidden w-[100%] h-[100%]">
                <ColorTheme />
            </div>
        </div>
    )
}

export default Header