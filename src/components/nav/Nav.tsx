import { BsFillBagCheckFill } from "react-icons/bs";
import { BsBox2HeartFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { Badge } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import NavStory from "../navStory/NavStory";
import { navStoryData } from "../../db/headerDB";
import { useState } from "react";
// import { useGetProductsByBrandQuery } from "../../redux/api/product-api";

const Nav = () => {
  const likedItems = useSelector((state: RootState) => state.liked.liked);
  const cartItems = useSelector((state: RootState) => state.cart.cart);
  const [search, setSearch] = useState("");

  const count = likedItems.length;
  const cartCount = cartItems.length;

  const handleSearchChange = (e: any) => {
    e.preventDefault();
    console.log(e.target.value);
    setSearch(e.target.value);
  }

  const handleSearchSubmit = (e: any) => {
    e.preventDefault();
    console.log(search);
  }

  return (
    <div className="sticky top-0 z-10">
      <div className="w-full bg-[#FBAEB4] ">
        <div className="w-full container py-2 flex items-center justify-between">
          <NavLink to="/" className="text-center px-5 py-1 bg-white rounded-3xl"><h1 className="text-3xl font-bold tracking-wide text-[#FBAEB4]">GlowStore</h1></NavLink>
          <form className="flex items-center justify-center gap-[3px]">
            <input
            onChange={(e) => handleSearchChange(e)}
              type="text"
              placeholder="Search for products..."
              className="w-[300px] px-4 py-1 outline-none rounded-l-full bg-[#ffffffda] text-[black]"
            />
            <button onSubmit={(e) => handleSearchSubmit(e)} className="">
              <AiOutlineSearch className="bg-[#ffffffda] text-[31px] rounded-r-full px-1 py-1" />
            </button>
          </form>
          <div className="flex gap-5 text-white">
            <Badge  count={count}>
              <Link to="/liked"><BsBox2HeartFill className="text-3xl hover:cursor-pointer text-white" /></Link>
            </Badge>
            <Badge count={cartCount}>
              <Link to="/cart"><BsFillBagCheckFill className="text-3xl text-white" /></Link>
            </Badge>
          </div>
        </div>
      </div>
      <div className="w-full backdrop-blur-md bg-[#fbaeb49b]">
        <div className="w-full container p-2">
          <ul className="flex items-center justify-center gap-10 text-[#ba5e5e]">
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
