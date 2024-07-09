import { CurrencyRupeeIcon, StarIcon } from "@heroicons/react/16/solid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, cartcounting } from "../Features/Counter/CounterSlice";
import { useNavigate } from "react-router-dom";

const MAX_RATING = 5;
const MIN_RATING = 1;

export const Shop = () => {
  const UserActive = useSelector((state) => state.counter.activeUser);

    const navigate = useNavigate();

  const dispatch = useDispatch();
  const [shop, setShop] = useState([]);
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [prime] = useState(Math.random() < 0.5);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((shopdata) => setShop(shopdata));
  }, []);

  const AddCard = (item) => {
    if (UserActive) {
      dispatch(cartcounting(1));
      dispatch(addToBasket(item));
    }
    else{
       navigate("/Login")
    }
  };

  const productDetail=(id)=>{
    navigate(`/product/${id}`)
  }

  return (
    <div>
      <div className=" grid grid-flow-row-dense xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 bg-gray-100">
        {shop.map((shopdata) => {
          return (
            <div
              key={shopdata.id}
              className=" relative w-80 h-auto text-start flex flex-col m-5 bg-white-100 z-30 p-5 bg-white shadow-2xl gap-2"
            >
              <div className="flex justify-center items-center cursor-pointer" onClick={()=>productDetail(shopdata.id)}>
                <img
                  src={shopdata.image}
                  alt="shop"
                  className="h-48 w-48 bg-gray-100"
                />
              </div>
              <h4 className="line-clamp-1 cursor-pointer" onClick={()=>productDetail(shopdata.id)}>{shopdata.title}</h4>
              <div className="flex">
                {Array(rating)
                  .fill()
                  .map((_, i) => (
                    <StarIcon key={i} className="h-5" />
                  ))}
              </div>
              <p className="line-clamp-2">{shopdata.description}</p>
              <div className="flex items-center">
                <CurrencyRupeeIcon className="h-5" />
                {shopdata.price}
              </div>
              {prime && (
                <div className="flex items-center gap-2">
                  <img
                    src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/052018/untitled-1_282.png?zBgfG0XEfdsPUq33GRuhu6udfY3Yu_rs&itok=39OQ7JCF"
                    alt="amzon"
                    className="h-11"
                  />
                  <p>Free Next Day Delivery</p>
                </div>
              )}
              <button
                className="bg-[#FFD814] border border-[#FFD814] rounded-sm"
                onClick={() => AddCard(shopdata)}
              >
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
