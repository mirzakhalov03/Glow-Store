import { AiOutlineInstagram } from "react-icons/ai"; 
import { BsPinterest } from "react-icons/bs"; 
import { TbLayersLinked } from "react-icons/tb"; 
import { AiFillLinkedin } from "react-icons/ai"; 

const Footer = () => {
  return (
    <div className="w-full bg-[#FBAEB4]">
        <div className="container py-5">
            <div className="flex w-full justify-between">
                <div className="text-center flex flex-col items-start gap-3 h-11 px-5 py-1 bg-white rounded-3xl">
                    <h1 className="text-3xl font-bold tracking-wide  text-[#FBAEB4]">GlowStore</h1>
                    <address>28V, Chilanzar 15, Tashkent</address>
                    <a href="tel:+998909999999">+998 94 158 31 58</a>
                    <a href="mailto:javohirmirzakhalov@gmail.com">javohirmirzakhalov@gmail.com</a>
                </div>
                <div>
                    <ul>
                        <li className="text-2xl text-white">Home</li>
                        <li className="text-[white]">About</li>
                        <li className="text-white">Order</li>
                        <li className="text-white">Blog</li>
                        <li className="text-white">Contact Us</li>
                    </ul>
                </div>
                <div>
                    <ul className="text-white">
                        <li className="text-2xl">Socials</li>
                        <li className="flex gap-3"><AiOutlineInstagram className="text-3xl text-[red]" /><AiFillLinkedin className="text-3xl text-[dodgerblue]" /><TbLayersLinked className="text-3xl text-[#1e8fffdb]" /><BsPinterest className="text-3xl text-[crimson]" /></li>
                    </ul>
                </div>
            </div>
        </div>
        <br />
        <hr className="border-[#4b46463c]"/>
        <br />
        <p className="text-center text-[#ba5e5e]">Copyright 2024 GlowStore. All rights reserved.</p>
        <br />
    </div>
  )
}

export default Footer