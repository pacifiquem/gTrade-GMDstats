import React from "react";
import gtrade_logo from "../assets/gtrade-logo.png";
import { BsGithub } from "react-icons/bs";
import { TbLetterM } from "react-icons/tb";
import {BsTwitter} from "react-icons/bs";
import {SiMinutemailer, SiDiscord} from "react-icons/si";

const Footer = () => {
    return (
        <div className="w-[100%] flex flex-col gap-6 mt-32">
            <div className="flex justify-center items-center">
                <img src={gtrade_logo} alt="Gtrade Logo" className="hover:cursor-pointer"/>
            </div>
            <div className="flex justify-center items-center flex-row gap-12">
                <BsTwitter fontSize={"2rem"} color="gray" className=" hover:text-white hover:cursor-pointer"/>
                <BsGithub fontSize={"2rem"} color="gray" className=" hover:text-white hover:cursor-pointer"/>
                <TbLetterM fontSize={"2rem"} color="gray" className=" hover:text-white hover:cursor-pointer"/>
                <SiMinutemailer fontSize={"2rem"} color="gray" className=" hover:text-white hover:cursor-pointer"/>
                <SiDiscord  fontSize={"2rem"} color="gray" className=" hover:text-white hover:cursor-pointer"/>
            </div>
            <div className="mb-4">
                <p className="text-lg font-thin font-sans text-gray-400 text-center">© 2023 Gtrade. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer