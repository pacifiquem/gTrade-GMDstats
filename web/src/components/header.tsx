import React from 'react'
import gtrade_logo from "../assets/gtrade-logo.png";


const Header = () => {
    return (
        <div className="w-[100%] h-[8.1vh] flex flex-row gap-6">
            <img src={gtrade_logo} alt="Gtrade Logo ." />
            <div className="flex flex-row justify-start items-center gap-8">
                <p className="text-[rgb(138,138,150)] text-md font-sans font-semibold">Trade</p>
                <p className="text-[rgb(138,138,150)] text-md font-sans font-semibold">Earn</p>
                <p className="text-[rgb(138,138,150)] text-md font-sans font-semibold">Bridge</p>
                <p className="text-[rgb(138,138,150)] text-md font-sans font-semibold">Statistics</p>
                <p className="text-[rgb(138,138,150)] text-md font-sans font-semibold">Documentation</p>
            </div>
        </div>
    )
}

export default Header