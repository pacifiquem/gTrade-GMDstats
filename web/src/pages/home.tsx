import React from "react";

import Footer from "../components/footer";
import Header from "../components/header";
import gtrade_phones from "../assets/gtrade-phones.png";
import gtrade_poweredby from "../assets/gtrade-poweredby.png";
import gtrade_certik from "../assets/gtrade-certik.png";
import { FaChargingStation } from 'react-icons/fa'
import { BsGraphUp } from 'react-icons/bs'
import { TfiTarget } from 'react-icons/tfi'
import { VscGraph } from 'react-icons/vsc'


const Gtrade = () => {
    return (
        <div id="gtrade-container" className="w-[100vw] bg-[#101014]">
            <Header />
            <div className="flex flex-row w-[100%] h-[75vh] justify-center items-center gap-12">
                <img src={gtrade_phones} width={'27%'} height={'48%'} alt="Gtrade Images" className="mt-3" />
                <div className="text-white flex flex-col gap-2 mt-[-3vh]">
                    <h1 className="text-8xl font-semibold mb-4">gTrade</h1>
                    <h2 className="text-3xl">Decentralized trading platform</h2>
                    <p className="text-lg font-thin">Leverage trade on crypto, stocks, and forex. No sign up required.</p>
                    <p className="text-[rgb(26,202,167)] font-semibold text-2xl mb-4">$23,471,969,568+ all-time volume</p>
                    <button className="bg-gradient-to-r from-[rgb(20,156,183)] to-[rgb(49,200,159)] font-semibold text-2xl rounded py-3 w-[50%]">Start Trading</button>
                </div>
            </div>
            <div className="flex flex-col items-center gap-6">
                <p className=" font-thin text-sm text-center text-[rgb(138,138,150)]">POWERED BY</p>
                <img src={gtrade_poweredby} alt="Powered By" height={'25%'} width={"45%"}/>
            </div>
            <div className="flex flex-row gap-72 justify-center items-center text-white mt-32">
                <div>
                    <h1 className="text-5xl font-semibold tracking-tighter">A superior trading <br /> experience.</h1>
                    <button className="bg-gradient-to-r from-[rgb(20,156,183)] to-[rgb(49,200,159)] font-semibold text-2xl rounded py-3 w-[50%] mt-8">Open Docs</button>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="flex flex-row gap-4">
                        <FaChargingStation fontSize={'2rem'} color={'rgb(29,231,217)'} />
                        <div className="mt-[-2vh]">
                            <h2 className="text-white text-lg">LAYER 2 INTEGRATION</h2>
                            <p className="text-[rgb(138,138,150)] text-md font-sans font-thin">Fast trading orders with minimal gas fees.</p>
                        </div>
                    </div>
                    <div  className="flex flex-row gap-4">
                        <BsGraphUp fontSize={'2rem'} color={'rgb(29,231,217)'} />
                        <div className="mt-[-2vh]">
                            <h2 className="text-white text-lg">MEDIAN SPOT PRICES</h2>
                            <p className="text-[rgb(138,138,150)] text-md font-sans font-thin">Lower risks of liquidation due to wicks.</p>
                        </div>
                    </div>
                    <div  className="flex flex-row gap-4">
                        <VscGraph fontSize={'2rem'} color={'rgb(29,231,217)'} />
                        <div className="mt-[-2vh]">
                            <h2 className="text-white text-lg">HIGHEST LEVERAGE AVAILABLE</h2>
                            <p className="text-[rgb(138,138,150)] text-md font-sans font-thin">Thanks to our synthetic trading architecture.</p>
                        </div>
                    </div>
                    <div  className="flex flex-row gap-4">
                        <TfiTarget fontSize={'2rem'} color={'rgb(29,231,217)'} />
                        <div className="mt-[-2vh]">
                            <h2 className="text-white text-lg">WIDEST PAIRS OFFERING</h2>
                            <p className="text-[rgb(138,138,150)] text-md font-sans font-thin">Powered by our decentralized oracle network.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row text-white justify-center items-center mt-32">
                <div>
                    <h1 className="text-5xl font-semibold tracking-tighter">Security & Audits</h1>
                    <p className="text-2xl font-thin">Our smart contracts have been unit tested and have undergone <br /> multiple independent audits from CertiK.</p>
                    <button className="bg-gradient-to-r from-[rgb(20,156,183)] to-[rgb(49,200,159)] font-semibold text-2xl rounded py-3 w-[50%] mt-8">Learn More</button>
                </div>
                <img src={gtrade_certik} alt="Gtrade Certik" width={"24%"} height={"29%"} />
            </div>
            <Footer />
        </div>
    )
}

export default Gtrade