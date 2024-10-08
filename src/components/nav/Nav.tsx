import { AiOutlineHeart } from "react-icons/ai"; 
import { BsFillBagCheckFill } from "react-icons/bs";
// import { AiOutlineSearch } from "react-icons/ai";
import { Badge } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import NavStory from "../navStory/NavStory";
import { navStoryData } from "../../db/headerDB";
import './nav.scss'
import { useEffect, useState } from "react";

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://eetqcfpyziptmrzwftem.supabase.co'; 
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVldHFjZnB5emlwdG1yendmdGVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4ODc4NTMsImV4cCI6MjA0MzQ2Mzg1M30.yL4A8waZ1JIXmBohwn17Uy7jH24UwVQKjOsAkvXmPag'; 

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

const Nav = () => {
  const likedItems = useSelector((state: RootState) => state.liked.liked);
  const cartItems = useSelector((state: RootState) => state.cart.cart);
  const count = likedItems.length;
  const cartCount = cartItems.length;
  const [user, setUser] = useState<any>({});
  const navigate = useNavigate();

  useEffect (() => {
    async function getUser() {
      await supabase.auth.getUser().then((value) => {
        if (value.data?.user) {
          console.log(value.data.user);
          setUser(value.data.user);
          localStorage.setItem("user", JSON.stringify(value.data.user));
        }
      })
    }

    getUser();
  }, []);


  



  return (
    <div className="sticky top-0 z-10">
      <div className="w-full bg-[#FBAEB4] ">
        <div className="w-ful container py-2 flex items-center justify-between">
          <NavLink to="/" className="logoMob text-center px-5 py-1 bg-white rounded-3xl"><h1 className="text-3xl font-bold tracking-wide text-[#FBAEB4]">GlowStore</h1></NavLink>
          {
            user
            ? 
            <p className="text-white">Hello, <NavLink to="/account">{user?.user_metadata?.full_name}</NavLink></p>
            // If user is not logged in
            : 
            <div className="flex items-center justify-center gap-5 text-white">
              <NavLink className="px-3 py-1 bg-[#ffffff44] border-2 border-white text-[#] rounded-xl" to="auth">Log in</NavLink>
              <NavLink to="auth/register">Sign up</NavLink>
            </div>

          }
          <div className="flex gap-6 mr-2 items-center justify-center text-white">
            <Badge  count={count}>
              <Link to="/liked"><AiOutlineHeart className="text-3xl iconMob hover:cursor-pointer text-white" /></Link>
            </Badge>
            <Badge count={cartCount}>
              <Link to="/cart"><BsFillBagCheckFill className="text-3xl iconMob text-white" /></Link>
            </Badge>
          </div>
        </div>
      </div>
      <div className="w-full backdrop-blur-md bg-[#fbaeb49b]">
        <div className="w-full container p-2">
          <ul className="navStoryList flex items-center justify-center gap-10 text-[#ba5e5e]">
            {
              navStoryData.map((item: any) => <NavStory key={item.id} {...item} />)
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;

