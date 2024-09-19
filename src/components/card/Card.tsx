import { BsBagPlusFill } from "react-icons/bs"; 
import { BsBagCheckFill } from "react-icons/bs"; 
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import placeholder from '../../images/placeholder-brush.png';
import { useDispatch, useSelector } from 'react-redux';
import { like, unlike } from '../../redux/slices/like-slice';
import { RootState } from '../../redux/store';
import { addToCart } from '../../redux/slices/cart-slice';
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import './card.scss';

interface CardProps {
    data: any;
}

const Card = ({ data }: CardProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const likedItems = useSelector((state: RootState) => state.liked.liked);
  const isLiked = likedItems.some((item) => item.id === data.id);
  const cartItems = useSelector((state: RootState) => state.cart.cart);
  const isInCart = cartItems.some((item) => item.id === data.id);

  const handleLike = () => {
    if (isLiked) {
      dispatch(unlike(data.id));
    } else {
      const product = {
        id: data.id,
        name: data.name,
        price: data.price,
        image: data.image_link,
        brand: data?.brand?.charAt(0).toUpperCase() + data?.brand?.slice(1),
      };
      dispatch(like(product));
    }
  };

  const handleAddToCart = () => {
    const product = {
      id: data.id,
      name: data.name,
      price: data.price,
      image: data.image_link,
      quantity: 1,
    };
    dispatch(addToCart(product));
    console.log('Added to cart');
  };

  const handleSinglePage = () => {
    navigate(`/product/${data.id}`);
  };

  return (
    <div className="relative cardMob flex flex-col max-w-[300px] w-[100%] shadow-xl rounded-lg overflow-hidden bg-[#fcafbc1d]">
      <div 
        className="img w-full h-[300px] relativ  bg-cover bg-center"
        style={{ backgroundImage: `url(${placeholder})`, backgroundSize: '150px', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}  
      >
        {data.image_link && (
          <Link to={`/product/${data.id}`}> <img className="w-full h-full object-cover" src={data.image_link} alt='' /></Link>
        )}
        <button
          className={`absolute top-2 right-2 text-xl bg-[#e57e7e37] backdrop-blur-sm rounded-full p-2 ${isLiked ? 'text-red-500' : 'text-[#e96060]'}`}
          onClick={handleLike}
        >
          {isLiked ? <AiFillHeart className="text-2xl" /> : <AiOutlineHeart className="text-2xl" />}
        </button>
      </div>
      <div className="text px-2 pt-1">
        <h1 className="text-[#ba5e5e] card-title text-3xl">{data.name}</h1>
        <p className="text-[#333] text-lg">Price: ${data.price}</p>
        <p className="text-[#333] text-lg">Brand: {data?.brand?.charAt(0).toUpperCase() + data?.brand?.slice(1)}</p>
      </div>
      <div className="colors px-2 flex flex-wrap gap-1">
        {data.product_colors?.slice(0, 6).map((color: any, index: number) => (
          <span
            key={index}
            className="w-6 h-6 rounded-full block"
            style={{ backgroundColor: color.hex_value }}
            title={color.colour_name}
          ></span>
        ))}
        {data.product_colors?.length > 6 && (
          <span
            className="rounded-full text-[10px] flex items-center justify-center bg-gray-400 opacity-50"
            title="More colors"
          >...</span>
        )}
      </div>
      <div className="actions flex justify-center p-3 gap-1">
        <button onClick={() => handleSinglePage()} className="bg-[#000000bd] text-white px-4 py-2 rounded-l-full">View</button>
        {
          isInCart ? (<button
            className="bg-[#000000bd] text-[#ba5e5e] px-4 py-2 rounded-r-full"
            onClick={handleAddToCart}
            style={{ border: '1px solid #000000bd', backgroundColor: 'white' }}
          ><BsBagCheckFill className="sm:text-lg lg:text-2xl text-[#000000bd]"/>
          </button>) : (<button
            className="bg-[#000000bd] text-white px-4 py-2 rounded-r-full"
            onClick={handleAddToCart}
          >
            <BsBagPlusFill className="sm:text-lg  lg:text-2xl"/>
          </button>)
        }
      </div>
    </div>
  );
};

export default Card;

