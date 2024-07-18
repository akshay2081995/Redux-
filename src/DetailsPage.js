import { CurrencyRupeeIcon, StarIcon } from "@heroicons/react/16/solid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addToBasket, cartcounting } from "./Features/Counter/CounterSlice";

const MAX_RATING = 5;
const MIN_RATING = 1;

export const DetailsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const UserActive = useSelector((state) => state.counter.activeUser);
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const [prime] = useState(Math.random() < 0.5);

  const { id } = useParams();
  const [product, setProduct] = useState([]);
  console.log(product);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((detail) => setProduct(detail));
    console.log(setProduct);
  }, [id]);

  const AddinCard = (item) => {
    if (UserActive) {
      dispatch(cartcounting(1));
      dispatch(addToBasket(item));
    } else {
      navigate("/Login");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-4">
      <div className="max-w-5xl w-full bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row">
        <div className="flex-1 flex justify-center items-center bg-white p-4 rounded-lg">
          <img
            src={product.image}
            alt="product"
            className="object-contain h-96"
          />
        </div>
        <div className="flex-1 p-6">
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <div className="flex items-center mb-4">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <StarIcon key={i} className="h-5 text-yellow-500" />
              ))}
          </div>
          <h2 className="text-lg text-gray-700 mb-4 text-start">
            {product.description}
          </h2>
          <div className="flex items-center text-2xl font-bold mb-4">
            <CurrencyRupeeIcon className="h-5 mr-1" />
            {product.price}
          </div>
          {prime && (
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/052018/untitled-1_282.png?zBgfG0XEfdsPUq33GRuhu6udfY3Yu_rs&itok=39OQ7JCF"
                alt="amzon"
                className="h-11"
              />
              <p className="text-green-600 font-medium">
                Free Next Day Delivery
              </p>
            </div>
          )}
          <button
            className="bg-yellow-500 border border-yellow-500 rounded-sm w-full py-2 font-bold text-white hover:bg-yellow-400 transition duration-200"
            onClick={() => AddinCard(product)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
