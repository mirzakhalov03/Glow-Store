import { BsFillBagCheckFill } from "react-icons/bs";
import { BsBox2HeartFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { Badge } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Link } from "react-router-dom";

const Nav = () => {
  const likedItems = useSelector((state: RootState) => state.liked.liked);
  const cartItems = useSelector((state: RootState) => state.cart.cart);

  const count = likedItems.length;
  const cartCount = cartItems.length;

  return (
    <div className="sticky top-0 z-10">
      <div className="w-full bg-[#FBAEB4] ">
        <div className="w-full container py-2 flex items-center justify-between">
          <h1 className="text-4xl font-bold text-[white]">GlowStore</h1>
          <form className="flex items-center justify-center gap-[3px]">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-[300px] px-4 py-1 rounded-l-full bg-[#ffffffda] text-[pink]"
            />
            <button className="">
              <AiOutlineSearch className="bg-[#ffffffda] text-[31px] rounded-r-full px-1 py-1" />
            </button>
          </form>
          <div className="flex gap-5 text-white">
            <Badge count={count}>
              <Link to="/liked"><BsBox2HeartFill className="text-3xl text-white" /></Link>
            </Badge>
            <Badge count={cartCount}>
              <Link to="/cart"><BsFillBagCheckFill className="text-3xl text-white" /></Link>
            </Badge>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#fbaeb49b]">
        <div className="w-full container p-3">
          <ul className="flex items-center justify-center gap-10 text-[#ba5e5e]">
            <li className="flex flex-col items-center justify-center gap-0">
              <span className="w-[40px] h-[40px] block rounded-full bg-[white]"></span>
              <small>Lipsticks</small>
            </li>
            <li className="flex flex-col items-center justify-center gap-0">
              <span className="w-[40px] h-[40px] block rounded-full bg-[white]"></span>
              <small>Powder</small>
            </li>
            <li className="flex flex-col items-center justify-center gap-0">
              <span className="w-[40px] h-[40px] block rounded-full bg-[white]"></span>
              <small>Candles</small>
            </li>
            <li className="flex flex-col items-center justify-center gap-0">
              <span className="w-[40px] h-[40px] block rounded-full bg-[white]"></span>
              <small>Cream</small>
            </li>
            <li className="flex flex-col items-center justify-center gap-0">
              <span className="w-[40px] h-[40px] block rounded-full bg-[white]"></span>
              <small>Lipsticks</small>
            </li>
            <li className="flex flex-col items-center justify-center gap-0">
              <span className="w-[40px] h-[40px] block rounded-full bg-[white]"></span>
              <small>Powder</small>
            </li>
            <li className="flex flex-col items-center justify-center gap-0">
              <span className="w-[40px] h-[40px] block rounded-full bg-[white]"></span>
              <small>Stick</small>
            </li>
            <li className="flex flex-col items-center justify-center gap-0">
              <span className="w-[40px] h-[40px] block rounded-full bg-[white]"></span>
              <small>Parfumes</small>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
