import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";
import { removeFromBasket } from "./Features/Counter/CounterSlice";

export const CartItems = () => {
    const dispatch = useDispatch();
  const countingcart = useSelector((state) => state.counter.cartCount);
  const [qty, setQty] = useState("");

  const handleChange = (event) => {
    setQty(event.target.value);
  };
  const addBasket = useSelector((state) => state.counter.items);

  const subTotal = addBasket.reduce((total, items) => total + items.price, 0);

  const deleteItems=(id)=>{
    // console.log(items);
    dispatch(removeFromBasket({ id }))
  }

  // console.log(addBasket);
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="relative top-8 left-4 border border-black w-[85%] h-auto p-10 bg-white">
        <h1 className="text-4xl text-start font-bold">Shopping Cart</h1>
        <h3 className="text-end font-bold">Price</h3>
        <br />
        {addBasket.map((basketItems) => {
          return (
            <div key={basketItems.id} className="flex items-start p-6 border-b border-gray-300">
              {/* <div className="w-28 h-24"> */}
              <img
                src={basketItems.image}
                alt="basket"
                className="w-36 h-36 object-contain mr-10"
              />
              {/* </div> */}
              <div className="flex-1 text-start">
                <h1 className="font-bold text-lg">{basketItems.title}</h1>
                <h4 className="text-gray-600">{basketItems.category}</h4>
                <p className="text-gray-600">In stock</p>
                <p>Eligible for Free Shipping</p>
                <img
                  src="https://www.tradebyte.com/wp-content/uploads/2023/08/amazon-fba.png"
                  alt="fullfilled"
                  className="h-6 my-2"
                />
                <div className="relative flex items-center gap-5">
                  <FormControl sx={{ minWidth: 70 }}>
                    <InputLabel id="demo-simple-select-autowidth-label">
                      Qty
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      value={qty}
                      onChange={handleChange}
                      autoWidth
                      label="qty"
                    >
                      <MenuItem value="">
                        <em>0(Delete)</em>
                      </MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={21}>Twenty one</MenuItem>
                      <MenuItem value={22}>Twenty one and a half</MenuItem>
                    </Select>
                  </FormControl>
                  <Link className="text-[#427185] text-sm font-bold hover:underline" onClick={()=>deleteItems(basketItems.id)}>
                    Delete
                  </Link>
                  <Link className="text-[#427185] text-sm font-bold hover:underline">
                    Save for later
                  </Link>
                  <Link className="text-[#427185] text-sm font-bold hover:underline">
                    See more like this
                  </Link>
                  <Link className="text-[#427185] text-sm font-bold hover:underline">
                    Share
                  </Link>
                </div>
                {/* <hr className="relative top-9 w-[800px] border-t border-gray-300"/> */}
              </div>
              <div className="flex justify-end">
                <p className="text-xl font-bold">₹{basketItems.price}</p>
              </div>
            </div>
          );
        })}
        <div className="flex justify-end mt-6">
          <div className="text-right">
            <p className="text-lg space-x-4">
              Subtotal( {countingcart}items ):<span className="text-sm font-bold">₹</span>
              <span className="font-bold">{subTotal.toFixed(2)}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
