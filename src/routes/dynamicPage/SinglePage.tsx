import { BsBagCheckFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import Nav from "../../components/nav/Nav";
import { useParams } from "react-router-dom";
import placeholder from "../../images/placeholder-brush.png";
import { useGetSingleProductQuery } from "../../redux/api/product-api";
import Loading from "../../utils/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { like, unlike } from "../../redux/slices/like-slice";
import { RootState } from "../../redux/store";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { addToCart } from "../../redux/slices/cart-slice";
import { useState, useEffect } from "react";

const SinglePage = () => {
  const [currency, setCurrency] = useState("usd");
  const { id } = useParams();
  const dispatch = useDispatch();
  const likedItems = useSelector((state: RootState) => state.liked.liked);
  const { data, error, isLoading } = useGetSingleProductQuery(id);

  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const cartItem = localStorage.getItem(data?.id);
    if (cartItem) {
      setIsInCart(true);
    }
  }, [data?.id]);

  const isLiked = likedItems.includes(data?.id);

  if (isLoading) {
    return (
      <div className="container">
        <Loading />
      </div>
    );
  }

  if (error) {
    return <div className="container mt-16 py-16">Error fetching products</div>;
  }

  const handleLike = () => {
    if (isLiked) {
      dispatch(unlike(data.id));
    } else {
      dispatch(like(data.id));
    }
  };

  const handleCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCurrency(event.target.value);
  };

  const convertPrice = (priceInUsd: number) => {
    const conversionRate = 12645;
    return currency === "usd"
      ? priceInUsd
      : (priceInUsd * conversionRate).toFixed(2);
  };

  const handleAddToCart = () => {
    if (!isInCart) {
      const product = {
        id: data.id,
        name: data.name,
        price: data.price,
        image: data.image_link,
        quantity: 1,
      };
      dispatch(addToCart(product));
      localStorage.setItem(data.id, JSON.stringify(product));
      setIsInCart(true);
      console.log("Added to cart");
    }
  };

  return (
    <div className="w-full h-screen bg-[#f1f1f1]">
      <Nav />
      <div className="container ">
        <div className="w-full p-5">
          <h1 className="text-center text-[#d26b6b] tracking-wider singlePage-title text-4xl">
            {data?.name || "SinglePage"}
          </h1>
        </div>
        <div className="w-full flex min-h-[500px] bg-white rounded-xl overflow-hidden shadow-xl justify-between">
          <div
            style={{
              backgroundImage: `url(${placeholder})`,
              backgroundSize: "200px",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="w-[600px]  h-[440px] relative"
          >
            <img
              className="object-contain w-full h-full"
              src={data?.image_link}
              alt=""
            />
            <button
              className={`absolute top-5 right-[50px] text-xl bg-[#e57e7e37] backdrop-blur-sm rounded-full p-2 ${
                isLiked ? "text-red-500" : "text-[#e96060]"
              }`}
              onClick={handleLike}
            >
              {isLiked ? (
                <AiFillHeart className="text-2xl" />
              ) : (
                <AiOutlineHeart className="text-2xl" />
              )}
            </button>
            <div className="w-full px-4 py-2 flex items-center justify-center gap-5">
              <select
                className="px-4 py-2 border-2 border-[dodgerblue] rounded-full outline-none"
                value={currency}
                onChange={handleCurrencyChange}
              >
                <option value="usd">USD</option>
                <option value="sum">SUM</option>
              </select>
              <h2 className="text-[#666666] text-2xl">
                Price:{" "}
                <span className="text-[gold]">
                  {currency === "usd"
                    ? `$${data?.price}`
                    : `${convertPrice(data?.price)} sum`}
                </span>
              </h2>
              <button
                onClick={handleAddToCart}
                className={`px-6 py-2 font-bold rounded-full flex items-center gap-2 ${
                  isInCart
                    ? "bg-white text-[dodgerblue] border-2 border-[dodgerblue]"
                    : "bg-[dodgerblue] text-white border-2 border-[dodgerblue] hover:bg-white hover:text-[dodgerblue]"
                }`}
              >
                <BsBagCheckFill className="text-2xl" />
                <span>{isInCart ? "Added" : "Add to cart"}</span>
              </button>
            </div>
          </div>
          <div className="w-[50%] py-5 pr-5">
            <div className="w-full flex justify-between">
              <div className="flex flex-col gap-4">
                <h2 className="text-[#ba5e5e] text-2xl">
                  <span className="text-[#666666]">Brand:</span>{" "}
                  {data?.brand.toUpperCase()}
                </h2>
                <h2 className="text-[#ba5e5e]  text-2xl">
                  <span className="text-[#666666]">Category:</span>{" "}
                  {data?.product_type.charAt(0).toUpperCase() +
                    data?.product_type.slice(1)}
                </h2>
              </div>
              <div className="w-[50%]  flex-col gap-">
                <a
                  href={data?.product_link}
                  className="px-4 inline-block py-2 border-2 border-[#ba5e5e] rounded-full"
                >
                  View on{" "}
                  <span className="text-[#ba5e5e]">
                    {data?.brand.toUpperCase()}
                  </span>{" "}
                  's site
                </a>
                <h3 className="flex gap-1 items-center mt-1  text-2xl text-[gold]">
                  <span className="text-[#666666]">Rating:</span>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </h3>
              </div>
            </div>
            <br />
            <hr />
            <br />
            <div className="w-full min-h-[120px] overflow-y-auto">
              <p className="text-[#666666] text-2xl">About the product:</p>
              <p className="text-[#666666] text-xl">{data?.description}</p>
            </div>
            <br />
            <hr />
            <br />
            <h2 className="text-[#666666] text-2xl">
              {data?.product_colors?.length > 0
                ? data.product_colors.length === 1
                  ? "Available Color:"
                  : "Available Colors:"
                : "No colors available"}
            </h2>
            <div className="flex gap-4 flex-wrap">
              {data?.product_colors?.length > 0 ? (
                data.product_colors.map((color: any, index: number) => (
                  <div
                    className="flex items-center justify-center gap-1"
                    key={index}
                  >
                    <span
                      className="w-8 h-8 rounded-full block"
                      style={{ backgroundColor: color.hex_value }}
                      title={color.colour_name}
                    ></span>
                    <small
                      style={{
                        color: color.hex_value,
                        fontWeight: "bold",
                        fontSize: "16px",
                      }}
                    >
                      {color.colour_name}
                    </small>
                  </div>
                ))
              ) : (
                <p className="text-[#666666] text-xl">Not available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
